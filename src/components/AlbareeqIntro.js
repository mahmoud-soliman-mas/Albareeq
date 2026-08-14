/* AlbareeqIntro - plain JS module that injects a premium cinematic intro into the page.
   This file does not require React or Framer Motion and is safe to import from main.js.
   It creates #intro-overlay and related elements before the rest of the app initialises so
   existing initIntroOverlay() in script.js will also detect it (harmless). */

(function () {
  // Only run in browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // Do not inject twice
  if (document.getElementById('intro-overlay')) return;

  // Configuration
  const AUTO_HIDE_MS = 4200; // close after ~4.2s
  const OPEN_DELAY = 600; // open animation delay

  // CSS for the intro. GPU-friendly transforms, blur, opacity, and will-change hints.
  const css = `
  /* Albareeq cinematic intro */
  :root{--alb-bg:#fbfaf8;--alb-ink:#1f1f1f;--alb-muted:#6e6b67;--alb-glass:rgba(255,255,255,0.45);--alb-accent:rgba(255,255,255,0.8)}
  #intro-overlay{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:var(--alb-bg);z-index:99999;backdrop-filter:blur(0px);}
  #intro-overlay.hidden{opacity:0;visibility:hidden;pointer-events:none;transition:opacity .45s ease, visibility .45s}
  #intro-stage{position:relative;width:min(980px,86vw);height:min(420px,46vh);display:flex;align-items:center;justify-content:center;overflow:visible}
  /* Glass plate */
  .alb-glass{position:absolute;inset:0;margin:auto;width:92%;height:86%;border-radius:18px;background:linear-gradient(180deg, rgba(255,255,255,0.6), rgba(250,250,250,0.4));box-shadow: 0 12px 40px rgba(30,30,30,0.08);backdrop-filter: blur(6px) saturate(1.05);border:1px solid rgba(255,255,255,0.55);transform:scale(0.985);opacity:0;will-change:transform,opacity}
  /* Subtle architectural lines */
  .alb-lines{position:absolute;inset:0;margin:auto;pointer-events:none}
  .alb-line{position:absolute;border-radius:2px;opacity:0;transform:scale(0.98);will-change:transform,opacity}
  .alb-line.l1{top:12%;left:8%;width:30%;height:1px;background:linear-gradient(90deg, rgba(0,0,0,0.06), rgba(0,0,0,0.02));}
  .alb-line.l2{bottom:18%;right:10%;width:24%;height:1px;background:linear-gradient(90deg, rgba(0,0,0,0.05), rgba(0,0,0,0.02));}
  .alb-line.l3{left:10%;bottom:22%;width:1px;height:18%;background:linear-gradient(180deg, rgba(0,0,0,0.03), rgba(0,0,0,0.01));}

  /* Logo area */
  .alb-logo{position:relative;z-index:3;display:flex;flex-direction:column;align-items:center;gap:8px;transform:translateY(8px) scale(.98);filter:blur(2px);opacity:0}
  .alb-logo .arabic{font-family: 'Cairo', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; font-weight:700; font-size:clamp(36px,6.6vw,64px);color:var(--alb-ink);letter-spacing:0.4px}
  .alb-logo .sub{font-family: 'Cairo', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:var(--alb-muted);font-size:clamp(14px,2.2vw,18px);opacity:0.95}

  /* Light sweep */
  .light-reflect{position:absolute;inset:0;pointer-events:none;z-index:4;}
  .light-reflect::before{content:'';position:absolute;left:-40%;top:-50%;width:40%;height:220%;transform:rotate(14deg) translateX(0);background:linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.6) 48%, rgba(255,255,255,0.0) 100%);filter:blur(10px);opacity:0.0;will-change:transform,opacity}

  /* Skip button (glass style) */
  .alb-skip{position:fixed;right:22px;bottom:18px;padding:8px 12px;border-radius:10px;background:rgba(255,255,255,0.55);border:1px solid rgba(0,0,0,0.06);backdrop-filter:blur(6px);color:var(--alb-ink);font-family:'Cairo',sans-serif;font-weight:600;cursor:pointer;z-index:100000;transition:transform .18s ease,box-shadow .18s}
  .alb-skip:hover{transform:scale(1.04);box-shadow:0 6px 20px rgba(30,30,30,0.06)}
  .alb-skip.small{right:12px;bottom:12px;padding:6px 10px;font-size:13px;border-radius:8px}

  /* Animation keyframes */
  @keyframes glassIn {from{opacity:0;transform:scale(.995)}to{opacity:1;transform:scale(1)}}
  @keyframes logoIn {from{opacity:0;transform:translateY(14px) scale(.985);filter:blur(6px)}to{opacity:1;transform:translateY(0) scale(1);filter:blur(0px)}}
  @keyframes subIn {from{opacity:0;transform:translateY(10px)}to{opacity:0.95;transform:translateY(0)}}
  @keyframes reflectMove{0%{transform:translateX(-120%);opacity:0}45%{opacity:0.95}55%{opacity:0.95}100%{transform:translateX(120%);opacity:0}}
  @keyframes linesIn{from{opacity:0;transform:scale(.98)}to{opacity:1;transform:scale(1)}}

  /* Motion application timeline */
  .alb-glass.show{animation:glassIn .8s cubic-bezier(.2,.9,.25,1) forwards}
  .alb-logo.show{animation:logoIn .9s cubic-bezier(.15,.85,.25,1) forwards;animation-delay:.6s}
  .alb-logo .sub.show{animation:subIn .6s cubic-bezier(.2,.9,.25,1) forwards;animation-delay:1.8s}
  .alb-line.show{animation:linesIn .9s ease forwards;animation-delay:2.4s}
  .light-reflect::before.show{animation:reflectMove 1s ease forwards;animation-delay:1.2s}

  /* Camera subtle scale across the whole stage */
  #intro-overlay.opened #intro-stage{transform-origin:center center;transition:transform 1.1s cubic-bezier(.2,.9,.2,1);transform:scale(1.02)}

  /* Exiting transition */
  #intro-overlay.leave{transition:opacity .6s ease,transform .6s ease,filter .6s ease}
  #intro-overlay.leave #intro-stage{transform:scale(1.03) translateY(-6px);filter:blur(2px);opacity:0}
  #intro-overlay.leave{opacity:0;visibility:hidden}

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce){
    .alb-glass,.alb-logo,.alb-logo .sub,.alb-line,.light-reflect::before{animation:none !important;transition:none !important;}
    #intro-overlay{transition:none}
  }

  /* Responsive tweaks */
  @media (max-width:640px){
    #intro-stage{height:280px}
    .alb-logo .arabic{font-size:clamp(26px,8.4vw,44px)}
    .alb-skip{right:12px;bottom:12px}
    .alb-skip.small{display:inline-block}
  }
  `;

  const styleEl = document.createElement('style');
  styleEl.setAttribute('data-alb-intro', '');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // Build DOM structure
  const overlay = document.createElement('div');
  overlay.id = 'intro-overlay';
  overlay.setAttribute('aria-hidden', 'false');

  const stage = document.createElement('div');
  stage.id = 'intro-stage';

  const glass = document.createElement('div');
  glass.className = 'alb-glass';

  const lines = document.createElement('div');
  lines.className = 'alb-lines';
  const l1 = document.createElement('div'); l1.className = 'alb-line l1';
  const l2 = document.createElement('div'); l2.className = 'alb-line l2';
  const l3 = document.createElement('div'); l3.className = 'alb-line l3';
  lines.appendChild(l1); lines.appendChild(l2); lines.appendChild(l3);

  const logoWrap = document.createElement('div');
  logoWrap.className = 'alb-logo';

  const arabic = document.createElement('div');
  arabic.className = 'arabic';
  arabic.textContent = 'البريق';

  const sub = document.createElement('div');
  sub.className = 'sub';
  sub.textContent = 'للزجاج والمرايا';

  const light = document.createElement('div');
  light.className = 'light-reflect';

  logoWrap.appendChild(arabic);
  logoWrap.appendChild(sub);
  logoWrap.appendChild(light);

  stage.appendChild(glass);
  stage.appendChild(lines);
  stage.appendChild(logoWrap);

  // Skip button
  const skipBtn = document.createElement('button');
  skipBtn.id = 'intro-skip';
  skipBtn.className = 'alb-skip';
  skipBtn.textContent = 'تخطي المقدمة';

  // Small variation for mobile (class only)
  function adjustSkip() {
    if (window.innerWidth <= 640) skipBtn.classList.add('small'); else skipBtn.classList.remove('small');
  }
  adjustSkip();
  window.addEventListener('resize', adjustSkip);

  overlay.appendChild(stage);
  document.body.appendChild(overlay);
  document.body.appendChild(skipBtn);

  // Prevent scroll while intro visible
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  // Helpers to show elements with timeline
  function showIntro() {
    // glass
    requestAnimationFrame(() => {
      glass.classList.add('show');
      logoWrap.classList.add('show');
      // light reflection
      setTimeout(() => light.querySelector('::before');, 0); // no-op to hint
      // add class to pseudo-element via stylesheet: toggle a class on element
      light.classList.add('show');
      // lines
      setTimeout(() => { l1.classList.add('show'); l2.classList.add('show'); l3.classList.add('show'); }, 2400);
      // apply opened camera effect
      setTimeout(() => overlay.classList.add('opened'), OPEN_DELAY);
    });
  }

  // Because we can't add pseudo-element classes directly, we toggle the style by adding a class to the element
  // and rely on the CSS rule .light-reflect::before.show which doesn't work; instead, we dynamically insert
  // an animated pseudo by adding an inline child that animates.
  // Create a real element that will perform the reflect animation
  const reflectEl = document.createElement('div');
  reflectEl.style.position = 'absolute';
  reflectEl.style.left = '-40%';
  reflectEl.style.top = '-50%';
  reflectEl.style.width = '40%';
  reflectEl.style.height = '220%';
  reflectEl.style.transform = 'rotate(14deg) translateX(0)';
  reflectEl.style.background = 'linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.7) 48%, rgba(255,255,255,0.0) 100%)';
  reflectEl.style.filter = 'blur(10px)';
  reflectEl.style.opacity = '0';
  reflectEl.style.willChange = 'transform,opacity';
  light.appendChild(reflectEl);

  function animateReflect() {
    reflectEl.animate([
      { transform: 'translateX(-120%) rotate(14deg)', opacity: 0 },
      { transform: 'translateX(-10%) rotate(14deg)', opacity: 0.95, offset: 0.45 },
      { transform: 'translateX(110%) rotate(14deg)', opacity: 0 }
    ], { duration: 1000, easing: 'ease' });
  }

  // Show timeline precisely
  setTimeout(() => {
    // show glass and logo
    glass.classList.add('show');
    logoWrap.classList.add('show');
  }, 0);

  setTimeout(() => {
    // start reflect
    animateReflect();
  }, 1200);

  setTimeout(() => {
    // reveal subtext (we use class to control animation)
    sub.classList.add('show');
  }, 1800);

  setTimeout(() => {
    // show lines
    l1.classList.add('show'); l2.classList.add('show'); l3.classList.add('show');
  }, 2400);

  // Auto hide
  const autoHideTimer = setTimeout(() => hideIntro('auto'), AUTO_HIDE_MS);

  // Hide function
  function hideIntro(reason) {
    clearTimeout(autoHideTimer);
    // Add leave class for transition
    overlay.classList.add('leave');
    skipBtn.classList.add('hidden');
    // restore overflow after transition
    setTimeout(() => {
      try { overlay.remove(); } catch (e) {}
      try { skipBtn.remove(); } catch (e) {}
      // remove style element
      try { styleEl.remove(); } catch (e) {}
      document.body.style.overflow = prevOverflow || '';
    }, 700);
  }

  // Skip button handler
  skipBtn.addEventListener('click', () => hideIntro('skip'));

  // Accessibility: respects reduced motion
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    // If reduced motion, shorten and hide quickly
    setTimeout(() => hideIntro('reduced'), 300);
  }

  // Start timeline
  // small initial open delay for camera
  setTimeout(() => { overlay.classList.add('opened'); showIntro(); }, OPEN_DELAY);

  // Expose a global hook for debugging (non-enumerable)
  Object.defineProperty(window, '__AlbareeqIntro', { value: { hide: hideIntro }, configurable: true });
})();
