// intro.js — Three.js real-time intro (UMD loader friendly)
// This version avoids top-level ES imports so bundlers (Rollup on Vercel) won't try to resolve CDNs during build.
// It dynamically loads UMD builds of Three.js and example helpers at runtime in the browser.

const canvas = document.getElementById('intro-canvas');
const overlay = document.getElementById('intro-overlay');
const appRoot = document.getElementById('app');

let THREElib = null; // will hold global THREE
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

function loadScript(src) {
  return new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) return res();
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = () => res();
    s.onerror = (e) => rej(new Error('Failed to load ' + src));
    document.head.appendChild(s);
  });
}

async function loadThreeUMD() {
  // Order matters: three first, then examples (they attach to THREE)
  await loadScript('https://unpkg.com/three@0.152.0/build/three.min.js');
  // examples/js attach to THREE (non-module UMD style)
  await loadScript('https://unpkg.com/three@0.152.0/examples/js/loaders/GLTFLoader.js');
  await loadScript('https://unpkg.com/three@0.152.0/examples/js/loaders/RGBELoader.js');
  await loadScript('https://unpkg.com/three@0.152.0/examples/js/postprocessing/EffectComposer.js');
  await loadScript('https://unpkg.com/three@0.152.0/examples/js/postprocessing/RenderPass.js');
  await loadScript('https://unpkg.com/three@0.152.0/examples/js/postprocessing/UnrealBloomPass.js');
  // Expose THREElib
  THREElib = window.THREE;
  if (!THREElib) throw new Error('THREE not found after loading scripts');
}

function initRenderer() {
  renderer = new THREElib.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  resize();
  renderer.outputEncoding = THREElib.sRGBEncoding;
}

function initScene() {
  scene = new THREElib.Scene();
  scene.background = new THREElib.Color(0x000000);
  camera = new THREElib.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
  camera.position.set(0, 0.65, 3.9);
  clock = new THREElib.Clock();

  const dir = new THREElib.DirectionalLight(0xfff7e8, 0.9);
  dir.position.set(5, 10, 7);
  scene.add(dir);
  scene.add(new THREElib.AmbientLight(0xffffff, 0.25));
  const rim = new THREElib.PointLight(0xffd78a, 0.35, 20);
  rim.position.set(-4, 3, 6);
  scene.add(rim);

  composer = new THREElib.EffectComposer(renderer);
  composer.addPass(new THREElib.RenderPass(scene, camera));
  const bloom = new THREElib.UnrealBloomPass(new THREElib.Vector2(canvas.clientWidth, canvas.clientHeight), 0.9, 0.5, 0.1);
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
  // Attempt to fetch the GLB first via HEAD; if 404, return false
  try {
    const resp = await fetch('/assets/slab_fractured.glb', { method: 'HEAD' });
    if (resp.ok) return true;
  } catch (e) {
    return false;
  }
  return false;
}

function createProceduralSlab(cols = 12, rows = 6, gap = 0.002) {
  const slab = new THREElib.Group();
  const width = 2.0; const height = 1.0; const thickness = 0.04;
  const cellW = width / cols; const cellH = height / rows;
  const baseMat = new THREElib.MeshPhysicalMaterial({
    metalness: 0.0, roughness: 0.02, transmission: 0.96, thickness: 0.8, ior: 1.52,
    envMapIntensity: 0.9, clearcoat: 0.12, clearcoatRoughness: 0.06, color: new THREElib.Color(0x0b0b0b)
  });
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const w = cellW * (0.7 + Math.random() * 0.6);
      const h = cellH * (0.7 + Math.random() * 0.6);
      const geo = new THREElib.BoxGeometry(w - gap, h - gap, thickness * (0.9 + Math.random() * 0.4));
      const posAttr = geo.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        posAttr.setX(i, posAttr.getX(i) + (Math.random() - 0.5) * 0.002);
        posAttr.setY(i, posAttr.getY(i) + (Math.random() - 0.5) * 0.002);
        posAttr.setZ(i, posAttr.getZ(i) + (Math.random() - 0.5) * 0.002);
      }
      geo.computeVertexNormals();
      const m = baseMat.clone();
      const mesh = new THREElib.Mesh(geo, m);
      const px = (x + 0.5 - cols / 2) * cellW;
      const py = (y + 0.5 - rows / 2) * cellH;
      mesh.position.set(px + (Math.random() - 0.5) * 0.01, py + (Math.random() - 0.5) * 0.01, 0);
      mesh.rotation.set((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.06);
      mesh.userData.orig = mesh.position.clone();
      mesh.userData.target = mesh.position.clone();
      slab.add(mesh);
      shards.push({ mesh, orig: mesh.position.clone(), vel: new THREElib.Vector3(), target: mesh.position.clone() });
    }
  }
  const baseGeo = new THREElib.PlaneGeometry(width * 1.2, height * 1.2);
  const baseMat = new THREElib.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.05 });
  const base = new THREElib.Mesh(baseGeo, baseMat);
  base.rotation.x = -Math.PI / 2;
  base.position.set(0, -0.5, -thickness);
  slab.add(base);
  slab.scale.setScalar(0.9);
  return slab;
}

function spawnLogoInline() {
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
  const img = new Image();
  img.onload = () => {
    const tx = new THREElib.Texture(img);
    tx.encoding = THREElib.sRGBEncoding;
    const mat = new THREElib.MeshBasicMaterial({ map: tx, transparent: true, opacity: 0 });
    const aspect = img.width / img.height || 2.2;
    const h = 0.45; const w = h * aspect;
    const geo = new THREElib.PlaneGeometry(w, h);
    logoMesh = new THREElib.Mesh(geo, mat);
    logoMesh.position.set(0, 0.02, 0.06);
    scene.add(logoMesh);
  };
  img.src = encoded;
}

function explode() {
  shards.forEach(s => {
    const dir = new THREElib.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.2) * 1.6, (Math.random() - 0.5) * 2).normalize();
    const p = 0.5 + Math.random() * 1.1;
    s.vel.copy(dir.multiplyScalar(p * THRUST));
    s.mesh.userData.spin = new THREElib.Vector3(Math.random()*2, Math.random()*2, Math.random()*2);
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
      const to = new THREElib.Vector3().subVectors(s.target, s.mesh.position);
      const swirl = new THREElib.Vector3(-to.z, 0, to.x).multiplyScalar(0.08);
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
  if (isLowEnd()) {
    overlay.style.display = 'none';
    appRoot?.classList.add('visible');
    return;
  }

  await loadThreeUMD();
  initRenderer();
  initScene();
  window.addEventListener('resize', resize);

  const hasGlb = await tryLoadGLB();
  if (hasGlb && window.THREE && window.THREE.GLTFLoader) {
    // load glb using THREE.GLTFLoader
    const loader = new THREElib.GLTFLoader();
    loader.load('/assets/slab_fractured.glb', (gltf) => {
      slabRoot = gltf.scene;
      slabRoot.traverse((c) => {
        if (c.isMesh) {
          c.material = new THREElib.MeshPhysicalMaterial({ metalness:0.0, roughness:0.02, transmission:0.98, thickness:0.9, ior:1.52, envMapIntensity:1.0, clearcoat:0.15, clearcoatRoughness:0.05, color:new THREElib.Color(0x0b0b0b) });
          c.userData.orig = c.position.clone();
          shards.push({ mesh: c, orig: c.position.clone(), vel: new THREElib.Vector3(), target: c.position.clone() });
        }
      });
      scene.add(slabRoot);
      spawnLogoInline();
      clock.start();
      requestAnimationFrame(function loop(){ animate(); });
    }, undefined, (e) => {
      console.warn('GLB load error, falling back', e);
      const slab = createProceduralSlab(12,6);
      scene.add(slab);
      spawnLogoInline();
      clock.start();
      requestAnimationFrame(function loop(){ animate(); });
    });
  } else {
    const slab = createProceduralSlab(12,6);
    scene.add(slab);
    spawnLogoInline();
    clock.start();
    requestAnimationFrame(function loop(){ animate(); });
  }
}

// Start autoplay
main().catch(err => { console.error('Intro failed', err); overlay.style.display = 'none'; appRoot?.classList.add('visible'); });
