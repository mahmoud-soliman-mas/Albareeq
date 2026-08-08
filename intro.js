// intro.js — Three.js real-time intro (ES module)
// Autoplay realtime intro. If a fractured GLB exists at /assets/slab_fractured.glb it will be used.
// Otherwise the script falls back to a procedural slab made of many small shard meshes (no external model needed).
// The logo is embedded as an inline SVG data URL, so no external image is required.

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

const TIMINGS = { explode: 0.9, slow: 0.9, gather: 1.2, reveal: 0.8 };
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
  camera.position.set(0, 0.65, 3.9);
  clock = new THREE.Clock();

  // Lights
  const dir = new THREE.DirectionalLight(0xfff7e8, 0.9);
  dir.position.set(5, 10, 7);
  scene.add(dir);
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));

  // subtle rim fill
  const rim = new THREE.PointLight(0xffd78a, 0.35, 20);
  rim.position.set(-4, 3, 6);
  scene.add(rim);

  // composer + bloom
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(canvas.clientWidth, canvas.clientHeight), 0.9, 0.5, 0.1);
  bloom.threshold = 0.13; bloom.strength = 0.7; bloom.radius = 0.9;
  composer.addPass(bloom);
}

function resize() {
  const w = canvas.clientWidth || window.innerWidth;
  const h = canvas.clientHeight || window.innerHeight;
  if (renderer) renderer.setSize(w, h, false);
  if (camera) { camera.aspect = w / h; camera.updateProjectionMatrix(); }
  if (composer) composer.setSize(w, h);
}

async function tryLoadGLB() {
  try {
    const loader = new GLTFLoader();
    const gltf = await loader.loadAsync('/assets/slab_fractured.glb');
    return gltf.scene;
  } catch (e) {
    console.warn('GLB load failed, falling back to procedural slab', e);
    return null;
  }
}

function createProceduralSlab(cols = 12, rows = 6, gap = 0.002) {
  // Create many small thin boxes arranged to look like a fractured slab.
  const slab = new THREE.Group();
  const width = 2.0; // world units for slab
  const height = 1.0;
  const thickness = 0.04;

  const cellW = width / cols;
  const cellH = height / rows;
  const baseMat = new THREE.MeshPhysicalMaterial({
    metalness: 0.0,
    roughness: 0.02,
    transmission: 0.96,
    thickness: 0.8,
    ior: 1.52,
    envMapIntensity: 0.9,
    clearcoat: 0.12,
    clearcoatRoughness: 0.06,
    color: new THREE.Color(0x0b0b0b)
  });

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const w = cellW * (0.7 + Math.random() * 0.6);
      const h = cellH * (0.7 + Math.random() * 0.6);
      const geo = new THREE.BoxGeometry(w - gap, h - gap, thickness * (0.9 + Math.random() * 0.4));
      // small vertex displacement for variety
      const posAttr = geo.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        posAttr.setX(i, posAttr.getX(i) + (Math.random() - 0.5) * 0.002);
        posAttr.setY(i, posAttr.getY(i) + (Math.random() - 0.5) * 0.002);
        posAttr.setZ(i, posAttr.getZ(i) + (Math.random() - 0.5) * 0.002);
      }
      geo.computeVertexNormals();
      const m = baseMat.clone();
      const mesh = new THREE.Mesh(geo, m);
      const px = (x + 0.5 - cols / 2) * cellW;
      const py = (y + 0.5 - rows / 2) * cellH;
      mesh.position.set(px + (Math.random() - 0.5) * 0.01, py + (Math.random() - 0.5) * 0.01, 0);
      mesh.rotation.set((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.06);
      mesh.userData.orig = mesh.position.clone();
      mesh.userData.target = mesh.position.clone();
      slab.add(mesh);
      shards.push({ mesh, orig: mesh.position.clone(), vel: new THREE.Vector3(), target: mesh.position.clone() });
    }
  }
  // add subtle base plane reflection under slab for realism
  const baseGeo = new THREE.PlaneGeometry(width * 1.2, height * 1.2);
  const baseMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.05 });
  const base = new THREE.Mesh(baseGeo, baseMat);
  base.rotation.x = -Math.PI / 2;
  base.position.set(0, -0.5, -thickness);
  slab.add(base);

  // Slightly scale slab so it fits camera view
  slab.scale.setScalar(0.9);
  return slab;
}

function spawnLogoInline() {
  // Inline SVG (gold logo). We create a data URL and load it as a texture.
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'>
    <defs>
      <linearGradient id='g' x1='0' x2='1'><stop offset='0' stop-color='#f7d78a'/><stop offset='1' stop-color='#c99a3a'/></linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='none'/>
    <g transform='translate(120,60)'>
      <rect x='0' y='0' width='160' height='240' rx='20' fill='none' stroke='url(#g)' stroke-width='22' opacity='0.95'/>
      <text x='200' y='140' font-family='Cairo, Arial' font-size='110' fill='url(#g)'>البريق</text>
      <text x='200' y='200' font-family='Cairo, Arial' font-size='34' fill='#b78e44'>للزجاج والمرايا</text>
    </g>
  </svg>`;
  const encoded = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  const loader = new THREE.TextureLoader();
  loader.load(encoded, (tx) => {
    tx.encoding = THREE.sRGBEncoding;
    const mat = new THREE.MeshBasicMaterial({ map: tx, transparent: true, opacity: 0 });
    const aspect = tx.image ? tx.image.width / tx.image.height : 2.2;
    const h = 0.45; const w = h * aspect;
    const geo = new THREE.PlaneGeometry(w, h);
    logoMesh = new THREE.Mesh(geo, mat);
    logoMesh.position.set(0, 0.02, 0.06);
    scene.add(logoMesh);
  }, undefined, () => { console.warn('logo load failed'); });
}

function explode() {
  shards.forEach(s => {
    const dir = new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.2) * 1.6, (Math.random() - 0.5) * 2).normalize();
    const p = 0.5 + Math.random() * 1.1;
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

  // Try to load GLB; fallback to procedural slab if none
  const glb = await tryLoadGLB();
  if (glb) {
    slabRoot = glb;
    // apply glass material to meshes
    slabRoot.traverse((c) => {
      if (c.isMesh) {
        c.material = new THREE.MeshPhysicalMaterial({ metalness:0.0, roughness:0.02, transmission:0.98, thickness:0.9, ior:1.52, envMapIntensity:1.0, clearcoat:0.15, clearcoatRoughness:0.05, color:new THREE.Color(0x0b0b0b) });
        c.userData.orig = c.position.clone();
        shards.push({ mesh: c, orig: c.position.clone(), vel: new THREE.Vector3(), target: c.position.clone() });
      }
    });
    scene.add(slabRoot);
  } else {
    // build procedural slab
    const slab = createProceduralSlab(12, 6);
    slabRoot = slab;
    scene.add(slabRoot);
  }

  spawnLogoInline();
  clock.start();
  requestAnimationFrame(function loop(){ animate(); });
}

skipBtn.addEventListener('click', endIntro);
main();
