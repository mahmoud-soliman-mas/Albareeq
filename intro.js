// intro.js — Three.js real-time intro (ES module)
// Place required assets in /assets/: slab_fractured.glb, env.jpg (optional), logo.png (optional).
// Autoplay: starts automatically. No user click required.

import * as THREE from 'https://unpkg.com/three@0.152.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.152.0/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'https://unpkg.com/three@0.152.0/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://unpkg.com/three@0.152.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://unpkg.com/three@0.152.0/examples/jsm/postprocessing/UnrealBloomPass.js';

const canvas = document.getElementById('intro-canvas');
const overlay = document.getElementById('intro-overlay');
const skipBtn = document.getElementById('intro-skip');
const appRoot = document.getElementById('app');

let renderer, scene, camera, composer, clock;
let shards = [];
let slabRoot = null;
let logoMesh = null;
let running = true;
let state = 'idle';
let startTime = null;

const TIMINGS = { explode: 0.9, slow: 0.8, gather: 1.2, reveal: 0.8 };
const THRUST = 6.5;
const FRICTION = 0.92;
const MAGNET = 6.5;

function isLowEnd() {
  const ua = navigator.userAgent || '';
  if (/Mobi|Android/i.test(ua)) return true;
  const cores = navigator.hardwareConcurrency || 2;
  if (cores <= 2) return true;
  return false;
}

function initRenderer() {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  resize();
  renderer.outputEncoding = THREE.sRGBEncoding;
}

function initScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
  camera.position.set(0, 0.6, 3.7);
  clock = new THREE.Clock();

  const dir = new THREE.DirectionalLight(0xffffff, 0.6);
  dir.position.set(5, 10, 7);
  scene.add(dir);
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));

  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(canvas.clientWidth, canvas.clientHeight), 0.9, 0.5, 0.1);
  bloom.threshold = 0.15; bloom.strength = 0.65; bloom.radius = 0.8;
  composer.addPass(bloom);
}

function resize() {
  const w = canvas.clientWidth || window.innerWidth;
  const h = canvas.clientHeight || window.innerHeight;
  if (renderer) renderer.setSize(w, h, false);
  if (camera) { camera.aspect = w / h; camera.updateProjectionMatrix(); }
  if (composer) composer.setSize(w, h);
}

async function loadAssets() {
  // try env
  try {
    await new Promise((res) => {
      new THREE.TextureLoader().load('/assets/env.jpg', (t) => {
        t.mapping = THREE.EquirectangularReflectionMapping;
        t.encoding = THREE.sRGBEncoding;
        scene.environment = t;
        res(true);
      }, undefined, () => res(false));
    });
  } catch (e) { /* ignore */ }

  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync('/assets/slab_fractured.glb');
  slabRoot = gltf.scene;
  slabRoot.traverse((c) => {
    if (c.isMesh) {
      c.material = new THREE.MeshPhysicalMaterial({
        metalness: 0.0, roughness: 0.02, transmission: 0.98, thickness: 0.9, ior: 1.52,
        envMapIntensity: 1.0, clearcoat: 0.15, clearcoatRoughness: 0.05, color: new THREE.Color(0x111111)
      });
    }
  });

  // scale & center
  const box = new THREE.Box3().setFromObject(slabRoot);
  const size = box.getSize(new THREE.Vector3());
  const scale = 1.4 / Math.max(size.x, size.y, size.z);
  slabRoot.scale.setScalar(scale);
  scene.add(slabRoot);

  // register shards
  slabRoot.traverse((c) => {
    if (c.isMesh) {
      shards.push({
        mesh: c,
        orig: c.position.clone(),
        vel: new THREE.Vector3(),
        target: c.position.clone()
      });
    }
  });
}

function spawnLogo() {
  const txLoader = new THREE.TextureLoader();
  txLoader.load('/assets/logo.png', (tx) => {
    tx.encoding = THREE.sRGBEncoding;
    const mat = new THREE.MeshBasicMaterial({ map: tx, transparent: true, opacity: 0 });
    const aspect = tx.image ? tx.image.width / tx.image.height : 2.5;
    const h = 0.5, w = h * aspect;
    const geo = new THREE.PlaneGeometry(w, h);
    logoMesh = new THREE.Mesh(geo, mat);
    logoMesh.position.set(0, 0.02, 0.02);
    scene.add(logoMesh);
  }, undefined, () => { /* no logo, skip */ });
}

function explode() {
  shards.forEach(s => {
    const dir = new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.2) * 1.6, (Math.random() - 0.5) * 2).normalize();
    const p = 0.6 + Math.random() * 1.3;
    s.vel.copy(dir.multiplyScalar(p * THRUST));
    s.mesh.userData.spin = new THREE.Vector3(Math.random()*2, Math.random()*2, Math.random()*2);
  });
}

function updateShards(dt) {
  shards.forEach(s => {
    if (state === 'explode' || state === 'slow') {
      s.mesh.position.addScaledVector(s.vel, dt);
      s.mesh.rotation.x += (s.mesh.userData.spin?.x || 0) * dt;
      s.mesh.rotation.y += (s.mesh.userData.spin?.y || 0) * dt;
      s.mesh.rotation.z += (s.mesh.userData.spin?.z || 0) * dt;
      s.vel.multiplyScalar(Math.pow(FRICTION, dt*60));
    } else if (state === 'gather' || state === 'reveal') {
      const to = new THREE.Vector3().subVectors(s.target, s.mesh.position);
      const swirl = new THREE.Vector3(-to.z, 0, to.x).multiplyScalar(0.08);
      const force = to.multiplyScalar(MAGNET * dt).add(swirl.multiplyScalar(dt*10));
      s.vel.add(force);
      s.vel.multiplyScalar(Math.pow(FRICTION, dt*20));
      s.mesh.position.addScaledVector(s.vel, dt);
      s.mesh.rotation.x *= 0.88;
      s.mesh.rotation.y *= 0.88;
      s.mesh.rotation.z *= 0.88;
    }
  });
}

function reveal(dt) {
  if (!logoMesh) return;
  logoMesh.material.opacity = Math.min(1, logoMesh.material.opacity + dt * 0.9);
  const pulse = 1 + Math.sin(dt * 6) * 0.01;
  logoMesh.scale.setScalar(pulse);
}

function animate() {
  if (!running) return;
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;
  if (!startTime) startTime = t;
  const elapsed = t - startTime;

  if (state === 'idle' && elapsed > 0.25) { state = 'explode'; explode(); }
  if (state === 'explode' && elapsed > TIMINGS.explode) { state = 'slow'; shards.forEach(s=>s.vel.multiplyScalar(0.18)); }
  if (state === 'slow' && elapsed > (TIMINGS.explode + TIMINGS.slow)) { state = 'gather'; shards.forEach(s=>s.target.copy(s.orig)); }
  if (state === 'gather' && elapsed > (TIMINGS.explode + TIMINGS.slow + TIMINGS.gather)) { state = 'reveal'; }
  if (state === 'reveal' && elapsed > (TIMINGS.explode + TIMINGS.slow + TIMINGS.gather + TIMINGS.reveal)) { state = 'done'; endIntro(); }

  updateShards(dt);
  if (state === 'reveal') reveal(dt);

  composer.render(dt);
  requestAnimationFrame(animate);
}

function endIntro() {
  overlay.classList.add('hidden');
  running = false;
  try {
    scene.traverse(o => {
      if (o.isMesh) { o.geometry?.dispose(); if (o.material) { Array.isArray(o.material) ? o.material.forEach(m=>m.dispose()) : o.material.dispose(); } }
    });
    renderer.dispose();
  } catch (e) { console.warn(e); }
  appRoot?.classList.add('visible');
}

async function main() {
  // Autoplay without user click. If device is low-end, skip automatically.
  if (isLowEnd()) {
    overlay.style.display = 'none';
    appRoot?.classList.add('visible');
    return;
  }
  initRenderer();
  initScene();
  window.addEventListener('resize', resize);
  try {
    await loadAssets();
    spawnLogo();
    clock.start();
    requestAnimationFrame(function loop() { animate(); });
  } catch (err) {
    console.error('Intro failed, skipping', err);
    overlay.style.display = 'none';
    appRoot?.classList.add('visible');
  }
}

skipBtn.addEventListener('click', endIntro);
// Start immediately (autoplay)
main();
