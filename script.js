/* ===================================================
   AL-BARIQ GLASS & MIRRORS — Full SPA Router + Pages
   =================================================== */
'use strict';

/* ============================================================
   DATA
============================================================ */
const PHONE = '+201118049615';
const WA = `https://wa.me/201118049615?text=${encodeURIComponent('مرحباً، أريد الاستفسار عن خدمات البريق للزجاج والمرايا')}`;

const IMG = {
  facade1: 'https://images.pexels.com/photos/9784184/pexels-photo-9784184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  facade2: 'https://images.pexels.com/photos/14925511/pexels-photo-14925511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  facade3: 'https://images.pexels.com/photos/109553/pexels-photo-109553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  shower1: 'https://images.pexels.com/photos/7227629/pexels-photo-7227629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  shower2: 'https://images.pexels.com/photos/17840522/pexels-photo-17840522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  shower3: 'https://images.pexels.com/photos/15273734/pexels-photo-15273734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mirror1: 'https://images.pexels.com/photos/36173241/pexels-photo-36173241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mirror2: 'https://images.pexels.com/photos/37793333/pexels-photo-37793333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mirror3: 'https://images.pexels.com/photos/20559490/pexels-photo-20559490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  door1: 'https://images.pexels.com/photos/32560938/pexels-photo-32560938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  door2: 'https://images.pexels.com/photos/23916842/pexels-photo-23916842.png?auto=compress&cs=tinysrgb&h=650&w=940',
  partition1: 'https://images.pexels.com/photos/5483051/pexels-photo-5483051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  partition2: 'https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  partition3: 'https://images.pexels.com/photos/7534209/pexels-photo-7534209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  handrail1: 'https://images.pexels.com/photos/7078471/pexels-photo-7078471.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  handrail2: 'https://images.pexels.com/photos/29678826/pexels-photo-29678826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  handrail3: 'https://images.pexels.com/photos/11469545/pexels-photo-11469545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  table1: 'https://images.pexels.com/photos/6980724/pexels-photo-6980724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  table2: 'https://images.pexels.com/photos/5998056/pexels-photo-5998056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  table3: 'https://images.pexels.com/photos/6980718/pexels-photo-6980718.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  kitchen1: 'https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  kitchen2: 'https://images.pexels.com/photos/7173661/pexels-photo-7173661.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  kitchen3: 'https://images.pexels.com/photos/6970055/pexels-photo-6970055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  shop1: 'https://images.pexels.com/photos/9784184/pexels-photo-9784184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  shop2: 'https://images.pexels.com/photos/7996793/pexels-photo-7996793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  shop3: 'https://images.pexels.com/photos/14925511/pexels-photo-14925511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  stainless1: 'https://images.pexels.com/photos/23940459/pexels-photo-23940459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  stainless2: 'https://images.pexels.com/photos/36272819/pexels-photo-36272819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  stainless3: 'https://images.pexels.com/photos/13272374/pexels-photo-13272374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  arch1: 'https://images.pexels.com/photos/19707470/pexels-photo-19707470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  arch2: 'https://images.pexels.com/photos/33650448/pexels-photo-33650448.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  arch3: 'https://images.pexels.com/photos/941456/pexels-photo-941456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  arch4: 'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  arch5: 'https://images.pexels.com/photos/17173969/pexels-photo-17173969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  arch6: 'https://images.pexels.com/photos/3709404/pexels-photo-3709404.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const SERVICES = [
  { slug:'glass-facades', name:'واجهات الزجاج السيكوريت', short:'تصميم وتركيب واجهات زجاجية للمحلات والشركات بتصميمات عصرية', img:IMG.facade1, icon:'M3 3h18v18H3z M3 9h18 M9 3v18' },
  { slug:'shower-cabins', name:'كبائن الشاور', short:'تصميمات متنوعة من كبائن الشاور الزجاجية بمقاسات مخصصة', img:IMG.shower1, icon:'M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3 M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3' },
  { slug:'mirrors', name:'مرايات الديكور', short:'مرايات بأشكال ومقاسات مختلفة مع إمكانية إضاءة LED', img:IMG.mirror1, icon:'M12 2a10 10 0 1 0 10 10 M2 12h20 M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10' },
  { slug:'glass-doors', name:'أبواب الزجاج', short:'أبواب زجاجية للمكاتب والمنازل بتصميمات أنيقة وآمنة', img:IMG.door1, icon:'M3 21h18 M12 3v18 M5 3h14v18H5z' },
  { slug:'glass-partitions', name:'قواطيع الزجاج', short:'قواطيع زجاجية لتقسيم المساحات دون التأثير على الإضاءة', img:IMG.partition1, icon:'M2 3h20v18H2z M12 3v18' },
  { slug:'glass-handrails', name:'الدرابزين الزجاجي', short:'حلول درابزين زجاجي للسلالم والبلكونات بأمان وأناقة', img:IMG.handrail1, icon:'M3 17l6-6 4 4 8-8 M3 21h18' },
  { slug:'glass-tables', name:'ترابيزات الزجاج', short:'ترابيزات زجاجية حسب المقاسات بتصميمات عصرية', img:IMG.table1, icon:'M3 9h18 M5 9v12 M19 9v12 M3 5h18v4H3z' },
  { slug:'kitchen-glass', name:'زجاج المطابخ', short:'حلول زجاجية للمطابخ تجمع بين الجمال وسهولة التنظيف', img:IMG.kitchen1, icon:'M18 8h1a4 4 0 0 1 0 8h-1 M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z' },
  { slug:'shop-fronts', name:'واجهات المحلات', short:'واجهات زجاجية تساعد في إبراز هوية النشاط التجاري', img:IMG.shop1, icon:'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
  { slug:'stainless-steel', name:'أعمال الستانلس ستيل', short:'درابزين، هاندريل، أبواب، واجهات ستانلس ستيل متينة وعصرية', img:IMG.stainless1, icon:'M12 2L3 7v6c0 5 9 9 9 9s9-4 9-9V7l-9-5z' },
];

const AREAS = [
  { slug:'cairo', name:'القاهرة', desc:'نخدم جميع أحياء القاهرة الكبرى' },
  { slug:'giza', name:'الجيزة', desc:'خدمة شاملة لمحافظة الجيزة' },
  { slug:'6-october', name:'مدينة 6 أكتوبر', desc:'منازل وشركات ومحلات 6 أكتوبر' },
  { slug:'sheikh-zayed', name:'الشيخ زايد', desc:'خدمات متكاملة في الشيخ زايد' },
  { slug:'5th-settlement', name:'التجمع الخامس', desc:'نخدم كافة مناطق التجمع الخامس' },
  { slug:'nasr-city', name:'مدينة نصر', desc:'تغطية شاملة لمدينة نصر' },
  { slug:'heliopolis', name:'مصر الجديدة', desc:'خدماتنا متاحة في مصر الجديدة' },
  { slug:'maadi', name:'المعادي', desc:'نخدم المعادي وما حولها' },
  { slug:'shorouk', name:'الشروق', desc:'خدمات الزجاج والمرايا في الشروق' },
  { slug:'obour', name:'العبور', desc:'نغطي مدينة العبور بالكامل' },
  { slug:'rehab', name:'الرحاب', desc:'خدمة متكاملة في مدينة الرحاب' },
  { slug:'new-capital', name:'العاصمة الإدارية', desc:'حضور قوي في العاصمة الإدارية الجديدة' },
];

const PROJECTS = [
  { slug:'facade-nasr-city', title:'واجهة محل تجاري', loc:'مدينة نصر', type:'واجهة زجاج سيكوريت', cat:'facades', img:IMG.facade1, desc:'تنفيذ واجهة زجاجية بتصميم عصري مع باب زجاج وإكسسوارات مناسبة لطبيعة النشاط التجاري.', services:['واجهات الزجاج السيكوريت','أبواب الزجاج'], gallery:[IMG.facade1,IMG.facade2,IMG.shop3] },
  { slug:'shower-zayed', title:'كابينة شاور مخصصة', loc:'الشيخ زايد', type:'كابينة شاور', cat:'showers', img:IMG.shower1, desc:'تنفيذ كابينة شاور حسب المقاس مع باب مفصلي وتشطيب احترافي.', services:['كبائن الشاور'], gallery:[IMG.shower1,IMG.shower2,IMG.shower3] },
  { slug:'facade-tagamoa', title:'واجهة زجاجية عصرية', loc:'التجمع الخامس', type:'واجهات زجاج', cat:'facades', img:IMG.facade2, desc:'تصميم وتركيب واجهة زجاجية كاملة لمحل متخصص تعكس هوية العلامة التجارية.', services:['واجهات الزجاج السيكوريت','واجهات المحلات'], gallery:[IMG.facade2,IMG.shop2,IMG.facade3] },
  { slug:'mirror-heliopolis', title:'مرايات ديكور فاخرة', loc:'مصر الجديدة', type:'مرايات ديكور', cat:'mirrors', img:IMG.mirror1, desc:'تصميم وتركيب مرايات ديكور حسب الطلب لمساحة معيشة فاخرة.', services:['مرايات الديكور'], gallery:[IMG.mirror1,IMG.mirror2,IMG.mirror3] },
  { slug:'handrail-october', title:'درابزين زجاجي للسلالم', loc:'مدينة 6 أكتوبر', type:'درابزين زجاج', cat:'handrails', img:IMG.handrail1, desc:'تركيب درابزين زجاجي يجمع بين الأمان والجماليات الحديثة لسلم فيلا سكنية.', services:['الدرابزين الزجاجي'], gallery:[IMG.handrail1,IMG.handrail2,IMG.handrail3] },
  { slug:'partition-maadi', title:'قواطيع زجاجية لمكاتب', loc:'المعادي', type:'قواطيع زجاج', cat:'partitions', img:IMG.partition1, desc:'تصميم وتركيب قواطيع زجاجية لشركة متخصصة لتقسيم المساحات مع الحفاظ على التدفق البصري.', services:['قواطيع الزجاج','أبواب الزجاج'], gallery:[IMG.partition1,IMG.partition2,IMG.partition3] },
];

/* ============================================================
   UTILITY
============================================================ */
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

function svgIcon(d, w=24, h=24) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="${d}"/></svg>`;
}

/* ============================================================
   SEO UPDATE
============================================================ */
function updateSEO(title, desc, path) {
  document.getElementById('page-title').textContent = title;
  document.getElementById('meta-desc').setAttribute('content', desc);
  document.getElementById('meta-canonical').setAttribute('href', `https://albariqglass.com${path}`);
  document.getElementById('og-title').setAttribute('content', title);
  document.getElementById('og-desc').setAttribute('content', desc);
  document.getElementById('og-url').setAttribute('href', `https://albariqglass.com${path}`);
  document.getElementById('tw-title').setAttribute('content', title);
  document.getElementById('tw-desc').setAttribute('content', desc);
}

/* ============================================================
   FOOTER (shared)
============================================================ */
function renderFooter() {
  $('#footer-root').innerHTML = `
    <div class="footer-glow"></div>
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-col footer-brand">
          <div class="nav-logo" data-link style="cursor:pointer" data-href="/">
            <img src="/logo.png" alt="البريق للزجاج والمرايا" class="nav-logo-img" style="height:42px" />
            <div class="nav-logo-text">
              <span class="nav-logo-ar">البريق</span>
              <span class="nav-logo-en">AL-BARIQ GLASS</span>
            </div>
          </div>
          <p class="footer-brand-desc">حلول متكاملة في تصميم وتصنيع وتركيب الزجاج والمرايات وأعمال الستانلس ستيل للمنازل والشركات والمحلات التجارية في مصر</p>
          <p class="footer-tagline-txt gold">الجودة التي ترى أثرها في كل تفصيلة</p>
        </div>
        <div class="footer-col">
          <h3>روابط سريعة</h3>
          <ul>
            <li><a data-link data-href="/">الرئيسية</a></li>
            <li><a data-link data-href="/services">خدماتنا</a></li>
            <li><a data-link data-href="/projects">مشاريعنا</a></li>
            <li><a data-link data-href="/gallery">معرض الأعمال</a></li>
            <li><a data-link data-href="/about">عن الشركة</a></li>
            <li><a href="http://localhost:3000/admin/login" target="_blank" rel="noopener">لوحة التحكم</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>خدماتنا</h3>
          <ul>
            <li><a data-link data-href="/services/glass-facades">واجهات الزجاج السيكوريت</a></li>
            <li><a data-link data-href="/services/shower-cabins">كبائن الشاور</a></li>
            <li><a data-link data-href="/services/mirrors">مرايات الديكور</a></li>
            <li><a data-link data-href="/services/glass-handrails">الدرابزين الزجاجي</a></li>
            <li><a data-link data-href="/services/stainless-steel">أعمال الستانلس ستيل</a></li>
            <li><a data-link data-href="/maintenance">الصيانة والاستبدال</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>تواصل معنا</h3>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:${PHONE}">${PHONE}</a>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor" style="fill:#25D366;stroke:none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
            <a href="${WA}" target="_blank" rel="noopener">واتساب: ${PHONE}</a>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>السبت - الخميس: 9ص - 8م</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>القاهرة الكبرى والجيزة</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 البريق للزجاج والمرايا. جميع الحقوق محفوظة.</p>
        <a data-link data-href="/contact">سياسة الخصوصية</a>
      </div>
    </div>
  `;
}

/* ============================================================
   SHARED COMPONENTS
============================================================ */
function breadcrumb(items) {
  return `<nav class="breadcrumb">${items.map((it, i) => {
    const sep = i < items.length - 1 ? '<span class="breadcrumb-sep">/</span>' : '';
    return `<a data-link data-href="${it.href}">${it.label}</a>${sep}`;
  }).join('')}</nav>`;
}

function ctaBanner(title, desc) {
  return `
    <div class="pad-sm">
      <div class="wrap">
        <div class="cta-banner gc rv rv-up">
          <div class="cta-banner-bg"></div>
          <div style="position:relative;z-index:1">
            <h2>${title}</h2>
            <p>${desc}</p>
            <div class="cta-btns">
              <a href="tel:${PHONE}" class="btn btn-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>اتصل الآن</span>
              </a>
              <a href="${WA}" target="_blank" rel="noopener" class="btn btn-wa">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function serviceCard(svc) {
  return `
    <div class="svc-card gc rv rv-up" data-link data-href="/services/${svc.slug}">
      <div class="svc-card-img">
        <img src="${svc.img}" alt="${esc(svc.name)}" loading="lazy" />
        <div class="svc-card-overlay"></div>
      </div>
      <div class="svc-card-body">
        <div class="svc-card-icon">${svgIcon(svc.icon)}</div>
        <h3>${svc.name}</h3>
        <p>${svc.short}</p>
        <div class="svc-card-arrow">
          <span>اعرف المزيد</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  `;
}

function projectCard(p) {
  return `
    <div class="proj-card gc rv rv-up" data-link data-href="/projects/${p.slug}">
      <div class="proj-card-img">
        <img src="${p.img}" alt="${esc(p.title)}" loading="lazy" />
        <div class="proj-hover">
          <div class="proj-hover-inner">
            <span class="proj-tag">${esc(p.type)}</span>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.loc)}</p>
          </div>
        </div>
      </div>
      <div class="proj-card-info">
        <div class="proj-meta">
          <span class="proj-loc">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${esc(p.loc)}
          </span>
          <span class="proj-type-badge">${esc(p.type)}</span>
        </div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
      </div>
    </div>
  `;
}

function relatedServices(currentSlug, count=4) {
  const related = SERVICES.filter(s => s.slug !== currentSlug).slice(0, count);
  return `
    <div class="pad-sm">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <div class="s-label">خدمات ذات صلة</div>
          <h2 class="s-title">خدمات <span class="gold">أخرى</span></h2>
        </div>
        <div class="svcs-grid">
          ${related.map(s => serviceCard(s)).join('')}
        </div>
      </div>
    </div>
  `;
}

function relatedProjects(currentSlug, count=3) {
  const related = PROJECTS.filter(p => p.slug !== currentSlug).slice(0, count);
  return `
    <div class="pad-sm">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <div class="s-label">مشاريع ذات صلة</div>
          <h2 class="s-title">مشاريع <span class="gold">أخرى</span></h2>
        </div>
        <div class="related-projs">
          ${related.map(p => projectCard(p)).join('')}
        </div>
      </div>
    </div>
  `;
}

function faqItem(q, a) {
  return `
    <div class="faq-item gc rv rv-up">
      <button class="faq-q" aria-expanded="false">
        <span>${esc(q)}</span>
        <div class="faq-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
      </button>
      <div class="faq-answer"><p>${esc(a)}</p></div>
    </div>
  `;
}

/* ============================================================
   PAGE RENDERERS
============================================================ */

/* ---- HOME ---- */
function pageHome() {
  updateSEO('البريق للزجاج والمرايا | حلول زجاج متكاملة في مصر', 'البريق للزجاج والمرايا تقدم خدمات تصميم وتصنيع وتركيب الزجاج السيكوريت والمرايات وواجهات المحلات وأعمال الستانلس ستيل بجودة عالية في مصر.', '/');
  return `
    <section class="hero-home">
      <div class="hero-home-bg">
        <div class="hero-home-img" style="background-image:url('${IMG.arch6}')"></div>
        <div class="hero-home-overlay"></div>
      </div>
      <div class="hero-home-shapes">
        <div class="hs hs-1"></div><div class="hs hs-2"></div><div class="hs hs-3"></div><div class="hs hs-4"></div>
      </div>
      <div class="hero-home-particles" id="heroParticles"></div>
      <div class="hero-home-content">
        <div class="h-badge rv rv-up"><span class="h-dot"></span><span>زجاج ومرايا فاخرة • مصر</span></div>
        <h1 class="h-title-big rv rv-up">البريق</h1>
        <p class="h-title-sub rv rv-up">للزجاج والمرايا</p>
        <p class="h-tagline rv rv-up">الجودة التي ترى أثرها في كل تفصيلة</p>
        <p class="h-desc rv rv-up">نؤمن أن الزجاج ليس مجرد مادة بناء، بل عنصر يمنح المساحات اتساعاً ويعكس الضوء ويضيف لمسة من الأناقة العصرية</p>
        <div class="h-btns rv rv-up">
          <a data-link data-href="/contact" class="btn btn-gold">
            <span>احصل على عرض سعر</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a data-link data-href="/services" class="btn btn-ghost"><span>استكشف خدماتنا</span></a>
        </div>
      </div>
      <div class="hero-stats rv rv-up">
        <div class="hero-stat gc"><span class="sn counter" data-target="500">0</span><span class="sx">+</span><span class="sl">مشروع منجز</span></div>
        <div class="hero-stat gc"><span class="sn counter" data-target="10">0</span><span class="sx">+</span><span class="sl">خدمات متخصصة</span></div>
        <div class="hero-stat gc"><span class="sn counter" data-target="12">0</span><span class="sx">+</span><span class="sl">منطقة نخدمها</span></div>
        <div class="hero-stat gc"><span class="sn counter" data-target="100">0</span><span class="sx">%</span><span class="sl">رضا العملاء</span></div>
      </div>
      <div class="scroll-ind"><div class="scroll-mouse"><div class="scroll-wheel"></div></div><span>اكتشف المزيد</span></div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="about-grid">
          <div class="rv rv-right">
            <div class="s-label">من نحن</div>
            <h2 class="s-title">نحول الزجاج إلى <span class="gold">تحفة فنية</span></h2>
            <p style="color:var(--text-2);line-height:1.8;margin-bottom:14px">في البريق للزجاج والمرايا نؤمن أن الزجاج ليس مجرد مادة تُستخدم في البناء أو الديكور، بل عنصر أساسي يمنح المساحات اتساعاً، ويعكس الضوء، ويضيف لمسة من الأناقة العصرية. لذلك نحرص على تقديم حلول متكاملة في تصميم وتصنيع وتركيب الزجاج والمرايات بما يلبي احتياجات المنازل، والشركات، والمكاتب، والمحلات التجارية، والمشروعات المختلفة.</p>
            <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px">نعتمد على فريق عمل يمتلك الخبرة والمهارة، ونستخدم خامات عالية الجودة مع تنفيذ دقيق يضمن الحصول على نتائج تجمع بين الجمال والعملية.</p>
            <a data-link data-href="/services" class="btn btn-outline">اكتشف خدماتنا</a>
          </div>
          <div class="about-imgs rv rv-left">
            <div class="ai-main gc-static"><img src="${IMG.arch3}" alt="معمار زجاجي فاخر" loading="lazy" /></div>
            <div class="ai-second gc-static"><img src="${IMG.partition1}" alt="قواطيع زجاجية للمكاتب" loading="lazy" /></div>
          </div>
        </div>
      </div>
    </section>

    <section class="pad" style="background:linear-gradient(180deg,var(--bg-1),var(--bg-2),var(--bg-1))">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <div class="s-label">خدماتنا</div>
          <h2 class="s-title">حلول متكاملة في أعمال <span class="gold">الزجاج والمرايات</span></h2>
          <p class="s-sub">نوفر مجموعة واسعة من خدمات الزجاج والمرايات وأعمال الستانلس ستيل تناسب المنازل والشركات والمحلات التجارية</p>
        </div>
        <div class="svcs-grid">
          ${SERVICES.map((s,i) => serviceCard(s)).join('')}
        </div>
        <div style="text-align:center;margin-top:48px" class="rv rv-up">
          <a data-link data-href="/services" class="btn btn-gold">
            <span>عرض جميع الخدمات</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <div class="s-label">كيف نعمل</div>
          <h2 class="s-title">خطوات <span class="gold">واضحة ومنظمة</span></h2>
        </div>
        <div class="process-steps">
          <div class="ps-item rv rv-up"><div class="ps-num">١</div><div class="ps-body gc"><h3>التواصل معنا</h3><p>يمكنك الاتصال بنا أو إرسال رسالة عبر واتساب لشرح احتياجاتك</p></div></div>
          <div class="ps-item rv rv-up"><div class="ps-num">٢</div><div class="ps-body gc"><h3>المعاينة</h3><p>يقوم فريقنا بمعاينة الموقع وأخذ القياسات اللازمة</p></div></div>
          <div class="ps-item rv rv-up"><div class="ps-num">٣</div><div class="ps-body gc"><h3>تقديم الحل المناسب</h3><p>نساعدك في اختيار نوع الزجاج أو المرايات والتصميم المناسب</p></div></div>
          <div class="ps-item rv rv-up"><div class="ps-num">٤</div><div class="ps-body gc"><h3>التصنيع</h3><p>يتم تجهيز الأعمال وفق المقاسات والمواصفات المتفق عليها</p></div></div>
          <div class="ps-item rv rv-up"><div class="ps-num">٥</div><div class="ps-body gc"><h3>التركيب</h3><p>ينفذ فريقنا أعمال التركيب بعناية مع التشطيب النهائي</p></div></div>
          <div class="ps-item rv rv-up"><div class="ps-num">٦</div><div class="ps-body gc"><h3>التسليم</h3><p>نراجع جميع التفاصيل للتأكد من مطابقة التنفيذ للمواصفات</p></div></div>
        </div>
      </div>
    </section>

    ${ctaBanner('ابدأ مشروعك مع البريق للزجاج والمرايا', 'إذا كنت تبحث عن شريك موثوق لتنفيذ أعمال الزجاج والمرايات بجودة عالية وتصميمات عصرية وتنفيذ احترافي، فإن البريق للزجاج والمرايا جاهزة لتقديم الحل المناسب لمشروعك.')}
  `;
}

/* ---- SERVICES LIST ---- */
function pageServices() {
  updateSEO('خدماتنا | البريق للزجاج والمرايا', 'تصفح جميع خدمات البريق للزجاج والمرايا: واجهات زجاج سيكوريت، كبائن شاور، مرايات ديكور، أبواب زجاج، قواطيع، درابزين، ستانلس ستيل والمزيد.', '/services');
  return `
    <section class="hero-services">
      <div class="hs-left">
        <div class="rv rv-right">
          ${breadcrumb([{label:'الرئيسية',href:'/'},{label:'خدماتنا',href:'/services'}])}
          <div class="s-label">خدماتنا</div>
          <h1 class="s-title" style="font-size:clamp(2rem,4vw,3rem)">حلول متكاملة في <span class="gold">الزجاج والمرايات</span></h1>
          <p class="s-sub" style="max-width:480px">نقدم مجموعة متكاملة من الخدمات التي تناسب المنازل والشركات والمكاتب والمحلات التجارية. اختر الخدمة التي تهمك لمعرفة المزيد.</p>
          <div style="margin-top:24px" class="rv rv-up">
            <a data-link data-href="/contact" class="btn btn-gold">
              <span>اطلب عرض سعر</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="hs-right">
        <img src="${IMG.arch2}" alt="خدمات البريق للزجاج والمرايا" />
        <div class="hs-right-overlay"></div>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="svcs-grid">
          ${SERVICES.map(s => serviceCard(s)).join('')}
        </div>
      </div>
    </section>

    ${ctaBanner('هل تحتاج إلى استشارة؟', 'فريقنا جاهز لمساعدتك في اختيار الحل المناسب لمشروعك. تواصل معنا اليوم للحصول على عرض سعر مجاني.')}
  `;
}

/* ---- SERVICE DETAIL ---- */
function pageServiceDetail(slug) {
  const svc = SERVICES.find(s => s.slug === slug);
  if (!svc) return pageNotFound();

  const content = {
    'glass-facades': {
      desc: 'ننفذ واجهات زجاج سيكوريت للمحلات التجارية، والشركات، والمعارض، والمطاعم، والكافيهات، بتصميمات عصرية تساعد على إبراز المكان والاستفادة من الإضاءة الطبيعية، مع تركيب احترافي يضمن جودة التشطيب وسهولة الاستخدام.',
      benefits: ['تصميم عصري يبرز هوية النشاط التجاري','استفادة قصوى من الإضاءة الطبيعية','زجاج سيكوريت آمن ومتين','تركيب احترافي يضمن جودة التشطيب','سهولة في الصيانة والتنظيف'],
      apps: ['المحلات التجارية','الشركات','المعارض','المطاعم والكافيهات','المولات','صالات العرض'],
      faqs: [
        ['هل يمكن تنفيذ الواجهة حسب تصميم مخصص؟','نعم، يمكن تنفيذ الواجهات بتصميمات مخصصة تتناسب مع هوية النشاط التجاري والمساحة المتاحة.'],
        ['ما هو الزجاج السيكوريت؟','الزجاج السيكوريت هو زجاج معالج حرارياً ليكون أكثر قوة وأمان، فإذا انكسر يتحول إلى حبيبات صغيرة بدلاً من شظايا حادة.'],
        ['هل توفرون استبدال الواجهات القديمة؟','نعم، نقوم باستبدال الواجهات الزجاجية القديمة بأخرى جديدة مع ضمان جودة التركيب.'],
      ],
    },
    'shower-cabins': {
      desc: 'نوفر تصميمات متنوعة من كبائن الشاور الزجاجية تناسب مختلف مساحات الحمامات، مع تنفيذ حسب المقاسات المطلوبة واستخدام زجاج سيكوريت وإكسسوارات عالية الجودة.',
      benefits: ['تصميمات تناسب جميع المساحات','زجاج سيكوريت آمن','إكسسوارات عالية الجودة','تشطيب احترافي','سهولة التنظيف والصيانة'],
      apps: ['المنازل والشقق','الفلل','الفنادق','الشقق الفندقية','المستشفيات والعيادات'],
      faqs: [
        ['ما هي أنواع كبائن الشاور المتاحة؟','نوفر كبائن مستقيمة، كبائن ركنية، أبواب سحب، أبواب مفصلية، وتصميمات مخصصة حسب الطلب.'],
        ['هل يمكن تنفيذ كابينة حسب مقاس مخصص؟','نعم، جميع كبائن الشاور تُنفذ حسب المقاسات الفعلية للحمام.'],
        ['هل الزجاج المستخدم آمن؟','نعم، نستخدم زجاج سيكوريت المعالج حرارياً للأمان.'],
      ],
    },
    'mirrors': {
      desc: 'نصمم ونركب مرايات تناسب مختلف الاستخدامات، سواء للمنازل أو المكاتب أو المحلات التجارية، مع إمكانية تنفيذها بأشكال ومقاسات مختلفة.',
      benefits: ['أشكال ومقاسات مخصصة','إمكانية إضافة إضاءة LED','مرايات عالية الجودة بانعكاس واضح','تركيب احترافي وآمن','تصميمات تناسب جميع الديكورات'],
      apps: ['مداخل المنازل','الحمامات','غرف المعيشة','غرف النوم','المحلات التجارية','صالونات التجميل'],
      faqs: [
        ['هل يمكن تنفيذ مرايات بإضاءة LED؟','نعم، نوفر مرايات بإضاءة LED مدمجة بتصميمات عصرية.'],
        ['هل يمكن قص المرايا بأشكال مخصصة؟','نعم، يمكن تنفيذ المرايات بأي شكل أو مقاس مطلوب.'],
        ['هل المرايات آمنة في التركيب؟','نعم، نستخدم مرايات بتصميم آمن ونركبها بطريقة محكمة وآمنة.'],
      ],
    },
    'glass-doors': {
      desc: 'نوفر أبواب زجاجية للمكاتب والمنازل والشركات بتصميمات أنيقة وآمنة، باستخدام زجاج سيكوريت وإكسسوارات عالية الجودة.',
      benefits: ['تصميمات أنيقة وعصرية','زجاج سيكوريت آمن','إكسسوارات عالية الجودة','تركيب احترافي','تناسب جميع الاستخدامات'],
      apps: ['المكاتب','المنازل','الشركات','المحلات التجارية','الفنادق'],
      faqs: [
        ['هل الأبواب الزجاجية آمنة؟','نعم، نستخدم زجاج سيكوريت المعالج حرارياً الذي يتحمل الاستخدام المكثف.'],
        ['هل يمكن تركيب أقفال خاصة؟','نعم، نركب مختلف أنواع الأقفال والإكسسوارات حسب الطلب.'],
        ['هل توفرون أبواب سحب ومفصلية؟','نعم، نوفر جميع أنواع الأبواب الزجاجية: سحب، مفصلية، وكسوة.'],
      ],
    },
    'glass-partitions': {
      desc: 'إذا كنت ترغب في تقسيم المساحات داخل المكتب دون التأثير على الإضاءة أو الإحساس بالاتساع، فإن القواطيع الزجاجية تعد خياراً عملياً وعصرياً.',
      benefits: ['تقسيم المساحات دون التأثير على الإضاءة','إحساس بالاتساع والانسيابية','تصميم عصري وأنيق','سهولة الصيانة','خيار عملي واقتصادي'],
      apps: ['المكاتب الإدارية','الشركات','العيادات','المطاعم','الفنادق','المدارس'],
      faqs: [
        ['هل القواطيع الزجاجية عازلة للصوت؟','الزجاج يوفر عزلاً جزئياً للصوت، ويمكن تحسين العزل باستخدام زجاج مزدوج.'],
        ['هل يمكن فك القواطيع ونقلها؟','نعم، القواطيع الزجاجية يمكن فكها وإعادة تركيبها في موقع آخر.'],
        ['هل يمكن تركيب أبواب داخل القواطيع؟','نعم، يمكن دمج أبواب زجاجية ضمن القواطيع.'],
      ],
    },
    'glass-handrails': {
      desc: 'نوفر حلولاً لتركيب الدرابزين الزجاجي للسلالم والبلكونات، بما يحقق التوازن بين الأمان والمظهر الحديث، مع تنفيذ يتناسب مع طبيعة كل مشروع.',
      benefits: ['توازن بين الأمان والمظهر الحديث','تصميمات عصرية','زجاج سيكوريت متين','تركيب احترافي وآمن','تناسب السلالم والبلكونات'],
      apps: ['سلالم المنازل','بلكونات الشقق','الفلل','المكاتب','الفنادق','المولات'],
      faqs: [
        ['هل الدرابزين الزجاجي آمن؟','نعم، نستخدم زجاج سيكوريت متين وآمن مع تركيب محكم.'],
        ['هل يمكن تركيبه على البلكونات؟','نعم، نركب الدرابزين الزجاجي للسلالم والبلكونات.'],
        ['ما هي سماكة الزجاج المستخدم؟','تختلف السماكة حسب الارتفاع والمتطلبات، ونختار السماكة المناسبة لكل مشروع.'],
      ],
    },
    'glass-tables': {
      desc: 'نصنع ترابيزات زجاجية حسب المقاسات المطلوبة بتصميمات عصرية تناسب مختلف الاستخدامات، من ترابيزات الطعام إلى ترابيزات القهاوي والمكاتب.',
      benefits: ['تصنيع حسب المقاس','تصميمات عصرية','زجاج سيكوريت متين','تشطيب احترافي','تناسب جميع الاستخدامات'],
      apps: ['ترابيزات طعام','ترابيزات القهاوي','مكاتب زجاجية','ترابيزات صالونات','ترابيزات خارجية'],
      faqs: [
        ['هل يمكن تنفيذ الترابيزات بأشكال مخصصة؟','نعم، نصنع الترابيزات بأي شكل أو مقاس مطلوب.'],
        ['هل الزجاج متين بما يكفي للاستخدام اليومي؟','نعم، نستخدم زجاج سيكوريت متين يتحمل الاستخدام المكثف.'],
        ['هل توفرون قواعد معدنية للترابيزات؟','نعم، نوفر قواعد من الستانلس ستيل أو الحديد حسب الطلب.'],
      ],
    },
    'kitchen-glass': {
      desc: 'نوفر حلولاً لتركيب الزجاج في المطابخ بما يضيف لمسة جمالية ويسهل عملية التنظيف، مع إمكانية اختيار الألوان والتشطيبات المناسبة.',
      benefits: ['لمسة جمالية للمطبخ','سهولة التنظيف','حماية الجدران من الزيوت والبخار','ألوان وتشطيبات متعددة','خامات عالية الجودة'],
      apps: ['المطابخ المنزلية','مطابخ المطاعم','مطابخ الفنادق','مطابخ الكافيهات'],
      faqs: [
        ['هل زجاج المطابخ آمن بالقرب من النار؟','نعم، نستخدم زجاج مقاوم للحرارة آمن للاستخدام في المطابخ.'],
        ['هل يمكن تركيبه فوق البلاط الموجود؟','نعم، يمكن تركيب زجاج المطابخ فوق معظم الأسطح الموجودة.'],
        ['هل يتوفر بألوان مختلفة؟','نعم، يتوفر بألوان وتشطيبات متعددة لتناسب جميع الأذواق.'],
      ],
    },
    'shop-fronts': {
      desc: 'نعمل على تصميم وتركيب واجهات زجاجية تساعد في إبراز هوية النشاط التجاري وتمنح العملاء رؤية واضحة للمنتجات أو الخدمات المعروضة.',
      benefits: ['إبراز هوية النشاط التجاري','رؤية واضحة للمنتجات','استفادة من الإضاءة الطبيعية','تصميم عصري وجذاب','تركيب احترافي'],
      apps: ['المحلات التجارية','البوتيكات','المجوهرات','الصيدليات','المطاعم','الكافيهات'],
      faqs: [
        ['هل يمكن تركيب واجهات منحنية؟','نعم، يمكن تنفيذ واجهات زجاجية منحنية حسب التصميم المطلوب.'],
        ['هل توفرون واجهات بأبواب أوتوماتيك؟','نعم، يمكن تركيب أبواب أوتوماتيكية ضمن الواجهة.'],
        ['هل يمكن إضافة شعار المحل على الزجاج؟','نعم، يمكن إضافة طباعة أو توزيعات على الزجاج حسب الطلب.'],
      ],
    },
    'stainless-steel': {
      desc: 'إلى جانب أعمال الزجاج والمرايات، تقدم البريق للزجاج والمرايا خدمات تنفيذ وتركيب أعمال الستانلس ستيل التي تجمع بين المتانة والمظهر العصري، وتناسب الاستخدام في المنازل، والشركات، والمحلات التجارية، والمباني الإدارية. نحرص على تنفيذ الأعمال بدقة مع اختيار الخامات المناسبة، للحصول على تشطيب أنيق وعمر افتراضي طويل.',
      benefits: ['متانة عالية وعمر افتراضي طويل','مظهر عصري وأنيق','مقاومة للصدأ والتآكل','تناسب الاستخدام الداخلي والخارجي','صيانة سهلة','خامات عالية الجودة'],
      apps: ['المنازل والفلل','الشركات والمكاتب','المحلات التجارية','المباني الإدارية','الفنادق','المطاعم'],
      faqs: [
        ['هل يمكن تنفيذ أعمال ستانلس حسب تصميم مخصص؟','نعم، يمكن تنفيذ جميع أعمال الستانلس ستيل حسب التصميم والمقاسات المطلوبة.'],
        ['هل الستانلس ستيل مقاوم للصدأ؟','نعم، نستخدم أنواع عالية الجودة مقاومة للصدأ والتآكل.'],
        ['هل توفرون صيانة لأعمال الستانلس ستيل؟','نعم، نقدم خدمات صيانة وتلميع أعمال الستانلس ستيل القائمة.'],
      ],
      extraList: ['درابزين ستانلس','هاندريل للسلالم','أبواب ستانلس','واجهات ستانلس','إكسسوارات الستانلس','قواطيع الستانلس والزجاج','تنفيذ أعمال حسب الطلب'],
    },
  };

  const c = content[slug] || { desc: svc.short, benefits: [], apps: [], faqs: [] };

  updateSEO(`${svc.name} | البريق للزجاج والمرايا`, `${svc.name} - ${svc.short}. نقدم خدمات احترافية في ${svc.name} بجودة عالية وتنفيذ دقيق في مصر.`, `/services/${slug}`);

  return `
    <section class="hero-centered">
      <div class="hc-bg" style="background-image:url('${svc.img}')"></div>
      <div class="hc-overlay"></div>
      <div class="hc-content">
        <div class="rv rv-up">${breadcrumb([{label:'الرئيسية',href:'/'},{label:'خدماتنا',href:'/services'},{label:svc.name,href:`/services/${slug}`}])}</div>
        <div class="s-label rv rv-up">${svc.name}</div>
        <h1 class="s-title rv rv-up" style="font-size:clamp(2.2rem,5vw,3.5rem);color:#fff">${svc.name}</h1>
        <p class="rv rv-up" style="color:rgba(255,255,255,.7);font-size:1.05rem;max-width:600px;margin:0 auto">${svc.short}</p>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="svc-grid">
          <div class="svc-desc rv rv-right">
            <h2>عن الخدمة</h2>
            <p>${c.desc}</p>
            ${c.extraList ? `
              <h2 style="margin-top:28px">تشمل خدماتنا</h2>
              <div class="ss-list">
                ${c.extraList.map(item => `<div class="ss-item"><span class="ss-dot"></span>${esc(item)}</div>`).join('')}
              </div>
            ` : ''}
            ${c.benefits.length ? `
              <h2 style="margin-top:28px">المميزات</h2>
              <div class="svc-benefits">
                ${c.benefits.map(b => `<div class="svc-benefit"><div class="svc-benefit-icon">✓</div><div><h4>${esc(b)}</h4></div></div>`).join('')}
              </div>
            ` : ''}
            ${c.apps.length ? `
              <h2 style="margin-top:28px">مجالات التطبيق</h2>
              <div class="svc-applications">
                ${c.apps.map(a => `<span class="svc-app-tag">${esc(a)}</span>`).join('')}
              </div>
            ` : ''}
            <h2 style="margin-top:28px">معرض الأعمال</h2>
            <div class="svc-gallery-mini">
              <div class="svc-gm-img" data-lightbox="${svc.img}"><img src="${svc.img}" alt="${esc(svc.name)}" loading="lazy" /></div>
              <div class="svc-gm-img" data-lightbox="${svc.img === IMG.facade1 ? IMG.facade2 : IMG.arch1}"><img src="${svc.img === IMG.facade1 ? IMG.facade2 : IMG.arch1}" alt="${esc(svc.name)}" loading="lazy" /></div>
              <div class="svc-gm-img" data-lightbox="${svc.img === IMG.facade1 ? IMG.facade3 : IMG.arch4}"><img src="${svc.img === IMG.facade1 ? IMG.facade3 : IMG.arch4}" alt="${esc(svc.name)}" loading="lazy" /></div>
            </div>
          </div>
          <div class="svc-sidebar rv rv-left">
            <div class="svc-cta-card gc">
              <h3>اطلب عرض سعر</h3>
              <p>تواصل معنا اليوم للحصول على عرض سعر مجاني لمشروعك</p>
              <div class="svc-cta-btns">
                <a href="${WA}" target="_blank" rel="noopener" class="btn btn-wa" style="justify-content:center">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                  <span>واتساب</span>
                </a>
                <a href="tel:${PHONE}" class="btn btn-gold" style="justify-content:center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>اتصل بنا</span>
                </a>
                <a data-link data-href="/contact" class="btn btn-ghost" style="justify-content:center"><span>نموذج التواصل</span></a>
              </div>
            </div>
            <div class="svc-related gc">
              <h4>خدمات ذات صلة</h4>
              ${SERVICES.filter(s => s.slug !== slug).slice(0,4).map(s => `
                <div class="svc-rel-item" data-link data-href="/services/${s.slug}">
                  <img src="${s.img}" alt="${esc(s.name)}" loading="lazy" />
                  <span>${s.name}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    ${c.faqs.length ? `
      <section class="pad-sm">
        <div class="wrap">
          <div class="s-head rv rv-up">
            <div class="s-label">الأسئلة الشائعة</div>
            <h2 class="s-title">أسئلة عن <span class="gold">${esc(svc.name)}</span></h2>
          </div>
          <div class="faq-wrap">
            ${c.faqs.map(f => faqItem(f[0], f[1])).join('')}
          </div>
        </div>
      </section>
    ` : ''}

    <section class="pad-sm">
      <div class="wrap" style="text-align:center">
        <a data-link data-href="/services" class="btn btn-outline rv rv-up">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transform:rotate(180deg)"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <span>العودة للخدمات</span>
        </a>
      </div>
    </section>

    ${relatedServices(slug)}
    ${ctaBanner(`هل أنت جاهز لبدء مشروع ${svc.name}؟`, 'تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر مخصص لمشروعك.')}
  `;
}

/* ---- PROJECTS LIST ---- */
function pageProjects() {
  updateSEO('مشاريعنا | البريق للزجاج والمرايا', 'تصفح مجموعة من المشاريع المنفذة بواسطة البريق للزجاج والمرايا - واجهات، كبائن شاور، مرايات، درابزين، قواطيع والمزيد.', '/projects');
  const cats = [
    { id:'all', name:'الكل' },
    { id:'facades', name:'واجهات' },
    { id:'showers', name:'كبائن شاور' },
    { id:'mirrors', name:'مرايات' },
    { id:'handrails', name:'درابزين' },
    { id:'partitions', name:'قواطيع' },
  ];
  return `
    <section class="hero-magazine">
      <div class="hm-left">
        <img src="${IMG.arch1}" alt="مشاريع البريق للزجاج والمرايا" />
        <div class="hm-diag"></div>
      </div>
      <div class="hm-right">
        <div class="rv rv-right">
          ${breadcrumb([{label:'الرئيسية',href:'/'},{label:'مشاريعنا',href:'/projects'}])}
          <div class="s-label">مشاريعنا</div>
          <h1 class="s-title" style="font-size:clamp(2rem,4vw,3rem)">مشاريع <span class="gold">نفتخر بتنفيذها</span></h1>
          <p class="s-sub" style="max-width:440px">في هذه الصفحة نستعرض مجموعة من الأعمال المنفذة مع نبذة مختصرة عن كل مشروع. اضغط على أي مشروع لمعرفة التفاصيل.</p>
        </div>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="filter-row rv rv-up">
          ${cats.map((c,i) => `<button class="f-btn ${i===0?'active':''}" data-filter="${c.id}">${c.name}</button>`).join('')}
        </div>
        <div class="proj-grid" id="projGrid">
          ${PROJECTS.map(p => projectCard(p)).join('')}
        </div>
      </div>
    </section>

    ${ctaBanner('ابدأ مشروعك القادم معنا', 'هل لديك مشروع يحتاج إلى خبرة في الزجاج والمرايات؟ تواصل معنا اليوم واحصل على عرض سعر مخصص.')}
  `;
}

/* ---- PROJECT DETAIL ---- */
function pageProjectDetail(slug) {
  const p = PROJECTS.find(pr => pr.slug === slug);
  if (!p) return pageNotFound();
  updateSEO(`${p.title} | مشاريع البريق للزجاج والمرايا`, `${p.title} في ${p.loc} - ${p.desc}. تعرف على تفاصيل المشروع والخدمات المستخدمة والمعرض.`, `/projects/${slug}`);
  return `
    <section class="hero-typo">
      <div class="hty-bg" style="background-image:url('${p.img}')"></div>
      <div class="hty-overlay"></div>
      <div class="hty-content">
        <div class="rv rv-up">${breadcrumb([{label:'الرئيسية',href:'/'},{label:'مشاريعنا',href:'/projects'},{label:p.title,href:`/projects/${slug}`}])}</div>
        <h1 class="hty-title rv rv-up">${esc(p.title)}<span class="gold">${esc(p.loc)}</span></h1>
        <p class="rv rv-up" style="color:var(--text-2);font-size:1.05rem;max-width:600px;margin-top:14px">${esc(p.desc)}</p>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="proj-detail-grid">
          <div class="rv rv-right">
            <h2 class="s-title" style="font-size:1.5rem;margin-bottom:16px">نظرة عامة</h2>
            <p style="color:var(--text-2);line-height:1.8;margin-bottom:24px">${esc(p.desc)} تم تنفيذ هذا المشروع باحترافية عالية مع الالتزام بمعايير الجودة والدقة في كل التفاصيل.</p>
            <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:14px">الخدمات المستخدمة</h3>
            <div style="display:flex;flex-wrap:wrap;gap:9px;margin-bottom:28px">
              ${p.services.map(s => `<span class="svc-app-tag">${esc(s)}</span>`).join('')}
            </div>
            <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:14px">صور المشروع</h3>
            <div class="proj-gallery">
              ${p.gallery.map(g => `<div class="proj-gal-img" data-lightbox="${g}"><img src="${g}" alt="${esc(p.title)}" loading="lazy" /></div>`).join('')}
            </div>
          </div>
          <div class="proj-detail-sidebar rv rv-left">
            <div class="proj-info-card gc">
              <div class="proj-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <div><h4>الموقع</h4><p>${esc(p.loc)}</p></div>
              </div>
              <div class="proj-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
                <div><h4>نوع المشروع</h4><p>${esc(p.type)}</p></div>
              </div>
              <div class="proj-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                <div><h4>الخدمات</h4><p>${p.services.join('، ')}</p></div>
              </div>
            </div>
            <div class="svc-cta-card gc">
              <h3>مشروع مماثل؟</h3>
              <p>تواصل معنا لتنفيذ مشروع مشابه بجودة عالية</p>
              <div class="svc-cta-btns">
                <a href="${WA}" target="_blank" rel="noopener" class="btn btn-wa" style="justify-content:center">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                  <span>واتساب</span>
                </a>
                <a data-link data-href="/contact" class="btn btn-ghost" style="justify-content:center"><span>نموذج التواصل</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${relatedProjects(slug)}
    ${ctaBanner('هل أعجبك هذا المشروع؟', 'تواصل معنا اليوم لتنفيذ مشروع مماثل يلبي احتياجاتك ويحقق رؤيتك.')}
  `;
}

/* ---- GALLERY ---- */
function pageGallery() {
  updateSEO('معرض الأعمال | البريق للزجاج والمرايا', 'تصفح معرض أعمال البريق للزجاج والمرايا - صور لواجهات المحلات، كبائن الشاور، المرايات، الدرابزين وأكثر.', '/gallery');
  const items = [
    { img: IMG.facade1, cat:'facades', cap:'واجهة محل فاخرة' },
    { img: IMG.shower1, cat:'showers', cap:'كابينة شاور زجاجية' },
    { img: IMG.mirror1, cat:'mirrors', cap:'مرايات ديكور فاخرة' },
    { img: IMG.handrail1, cat:'handrails', cap:'درابزين زجاجي عصري' },
    { img: IMG.facade2, cat:'facades', cap:'واجهة زجاجية عصرية' },
    { img: IMG.partition1, cat:'partitions', cap:'قواطيع زجاجية' },
    { img: IMG.mirror2, cat:'mirrors', cap:'مرايات كلاسيكية' },
    { img: IMG.shower2, cat:'showers', cap:'دش زجاجي حديث' },
    { img: IMG.handrail2, cat:'handrails', cap:'سلم زجاجي فاخر' },
    { img: IMG.door1, cat:'doors', cap:'أبواب زجاجية' },
    { img: IMG.stainless1, cat:'stainless', cap:'درابزين ستانلس' },
    { img: IMG.kitchen1, cat:'kitchens', cap:'زجاج مطابخ' },
  ];
  const cats = [
    { id:'all', name:'الكل' },
    { id:'facades', name:'واجهات' },
    { id:'showers', name:'كبائن شاور' },
    { id:'mirrors', name:'مرايات' },
    { id:'handrails', name:'درابزين' },
    { id:'partitions', name:'قواطيع' },
    { id:'doors', name:'أبواب' },
    { id:'stainless', name:'ستانلس ستيل' },
    { id:'kitchens', name:'مطابخ' },
  ];
  return `
    <section class="hero-parallax">
      <div class="hp-bg" style="background-image:url('${IMG.arch2}')"></div>
      <div class="hp-overlay"></div>
      <div class="hp-content">
        <div class="rv rv-up">${breadcrumb([{label:'الرئيسية',href:'/'},{label:'معرض الأعمال',href:'/gallery'}])}</div>
        <div class="s-label rv rv-up">معرض الأعمال</div>
        <h1 class="s-title rv rv-up" style="color:#fff;font-size:clamp(2rem,4vw,3.2rem)">أعمالنا تتحدث <span class="gold">عن نفسها</span></h1>
        <p class="rv rv-up" style="color:rgba(255,255,255,.7);max-width:600px;margin:0 auto">نفخر بالمشروعات التي قمنا بتنفيذها، حيث نحرص في كل مشروع على الجمع بين جودة التنفيذ ودقة التفاصيل</p>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="filter-row rv rv-up">
          ${cats.map((c,i) => `<button class="f-btn ${i===0?'active':''}" data-gfilter="${c.id}">${c.name}</button>`).join('')}
        </div>
        <div class="gal-grid" id="galGrid">
          ${items.map(it => `
            <div class="gal-item rv rv-up" data-gcat="${it.cat}" data-lightbox="${it.img}" data-caption="${esc(it.cap)}">
              <img src="${it.img}" alt="${esc(it.cap)}" loading="lazy" />
              <div class="gal-overlay">
                <button class="gal-zoom" aria-label="تكبير"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></button>
                <span>${esc(it.cap)}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    ${ctaBanner('هل أعجبك معرض أعمالنا؟', 'تواصل معنا اليوم لتنفيذ مشروع يجمع بين الجودة والأناقة. فريقنا جاهز لتحقيق رؤيتك.')}
  `;
}

/* ---- ABOUT THE COMPANY ---- */
function pageAboutCompany() {
  updateSEO('عن الشركة | البريق للزجاج والمرايا', 'تعرف على البريق للزجاج والمرايا: حلول متكاملة في الزجاج والمرايا مع التزام كامل بالجودة والخدمة الاحترافية.', '/about');
  const faqs = [
    ['هل توفرون المعاينة؟','نعم، نوفر خدمة المعاينة للمشروعات التي تتطلب ذلك، بهدف أخذ القياسات وتحديد أفضل الحلول المناسبة. يتم تحديد موعد للمعاينة عند الحاجة.'],
    ['هل يمكن تنفيذ الأعمال حسب المقاسات المطلوبة؟','بالتأكيد، يتم تنفيذ جميع الأعمال وفق القياسات الفعلية للموقع. جميع أعمالنا تُنفذ حسب القياسات الفعلية لضمان الملاءمة التامة.'],
    ['هل تقدمون خدمات للمنازل والشركات؟','نعم، نقدم خدماتنا للعملاء الأفراد، والشركات، والمكاتب، والمحلات التجارية، والمنشآت المختلفة. نخدم قطاعات متعددة تشمل المنازل والفلل والشركات والمطاعم والفنادق والمستشفيات وغيرها.'],
    ['هل يمكن تنفيذ تصميمات خاصة؟','نعم، يمكن تنفيذ تصميمات مخصصة بما يتناسب مع احتياجات العميل وطبيعة المشروع. نوفر حلولاً مختلفة تناسب أنماط الديكور المتعددة.'],
    ['هل تقدمون خدمات الصيانة؟','نعم، نقدم خدمات الصيانة لبعض أعمال الزجاج والمرايات، بما في ذلك استبدال الزجاج التالف، تغيير الإكسسوارات، وضبط الأبواب.'],
    ['كيف يمكن طلب عرض سعر؟','يمكن التواصل معنا عبر الهاتف أو واتساب وإرسال تفاصيل المشروع أو الصور إن وجدت. سيقوم فريقنا بمراجعة الطلب والتواصل معك في أقرب وقت.'],
    ['ما هي المناطق التي تغطونها؟','نخدم القاهرة، الجيزة، مدينة 6 أكتوبر، الشيخ زايد، التجمع الخامس، مدينة نصر، مصر الجديدة، المعادي، الشروق، العبور، الرحاب، والعاصمة الإدارية الجديدة.'],
  ];

  return `
    <section class="hero-glass">
      <div class="hg-bg" style="background-image:url('${IMG.arch5}')"></div>
      <div class="hg-shapes">
        <div class="hg-shape" style="width:300px;height:300px;top:10%;right:5%;animation-duration:22s"></div>
        <div class="hg-shape" style="width:220px;height:220px;bottom:10%;left:8%;animation-duration:18s;animation-direction:reverse"></div>
      </div>
      <div class="hg-content">
        <div class="rv rv-right">
          ${breadcrumb([{label:'الرئيسية',href:'/'},{label:'عن الشركة',href:'/about'}])}
          <div class="s-label">عن الشركة</div>
          <h1 class="s-title" style="font-size:clamp(2rem,4vw,3rem)">البريق للزجاج والمرايا<br><span class="gold">خبرة وجودة في كل مشروع</span></h1>
          <p class="s-sub">نقدم حلولاً متكاملة في تصميم وتصنيع وتركيب الزجاج والمرايات مع تركيز كامل على الجودة، الدقة، والتواصل الواضح مع العميل.</p>
          <div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap">
            <a href="${WA}" target="_blank" rel="noopener" class="btn btn-wa">واتساب</a>
            <a data-link data-href="/contact" class="btn btn-gold">تواصل معنا</a>
          </div>
        </div>
        <div class="rv rv-left" style="display:flex;justify-content:center;align-items:center">
          <img src="${IMG.arch6}" alt="عن الشركة" style="border-radius:28px;box-shadow:var(--sh-lg);max-width:100%;height:auto;" />
        </div>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <div class="s-label">الجودة</div>
          <h2 class="s-title">جودة العمل <span class="gold">من البداية حتى النهاية</span></h2>
        </div>
        <div class="qual-pillars">
          <div class="qual-pillar gc rv rv-up">
            <div class="qp-icon">${svgIcon('M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z')}</div>
            <h3>اختيار الخامات</h3>
            <p>نستخدم خامات زجاج وإكسسوارات عالية الجودة لتدوم وتظهر بأفضل شكل.</p>
          </div>
          <div class="qual-pillar gc rv rv-up">
            <div class="qp-icon">${svgIcon('M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z')}</div>
            <h3>القياسات الدقيقة</h3>
            <p>نعتمد قياسات دقيقة لضمان تشغيل وتركيب مثالي دون فروقات.</p>
          </div>
          <div class="qual-pillar gc rv rv-up">
            <div class="qp-icon">${svgIcon('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4')}</div>
            <h3>تنفيذ متقن</h3>
            <p>فريقنا المتخصص يطبق أفضل أساليب التركيب لضمان نتائج احترافية.</p>
          </div>
          <div class="qual-pillar gc rv rv-up">
            <div class="qp-icon">${svgIcon('M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01')}</div>
            <h3>مراجعة نهائية</h3>
            <p>نراجع العمل قبل التسليم للتأكد من مطابقة أعلى معايير الجودة.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="pad-sm">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <div class="s-label">لماذا تختارنا</div>
          <h2 class="s-title">نحن نضع <span class="gold">رضا العميل</span> أولاً</h2>
        </div>
        <div class="why-grid">
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z')}</div><h3>الخبرة</h3><p>خبرتنا الواسعة تضمن نتائج عالية الجودة.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M20 6 9 17 4 12')}</div><h3>الجودة</h3><p>نحرص على استخدام مواد دقيقة التشطيب ومتانة عالية.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M12 22a10 10 0 1 0 10 10 M12 8v4l3 3')}</div><h3>الالتزام</h3><p>نلتزم بالمواعيد ونسلم المشروع بالجودة المتفق عليها.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z')}</div><h3>خدمة عملاء</h3><p>نرافقك بخدمة محترفة وتواصل فعّال طوال المشروع.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z')}</div><h3>حلول مخصصة</h3><p>نصمم حلولاً تتناسب مع احتياجات مكانك وطبيعة مشروعك.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01')}</div><h3>الاعتمادية</h3><p>نعمل لكي تكون مشاريعك مطمئنة وجاهزة للاستخدام طويل الأمد.</p></div>
        </div>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <div class="s-label">الأسئلة الشائعة</div>
          <h2 class="s-title">إجابات واضحة على <span class="gold">أهم الأسئلة</span></h2>
        </div>
        <div class="faq-wrap">
          ${faqs.map(f => faqItem(f[0], f[1])).join('')}
        </div>
      </div>
    </section>

    ${ctaBanner('البريق شريكك الموثوق', 'اعرف المزيد عن خبرتنا في تنفيذ أعمال الزجاج والمرايا، وجودتنا في كل خطوة من المشروع.')}
  `;
}

/* ---- QUALITY ---- */
function pageQuality() {
  updateSEO('الجودة | البريق للزجاج والمرايا', 'تعرف على معايير الجودة في البريق للزجاج والمرايا - من اختيار الخامات إلى دقة القياسات والتنفيذ الاحترافي والمراجعة قبل التسليم.', '/quality');
  return `
    <section class="hero-glass">
      <div class="hg-bg" style="background-image:url('${IMG.arch4}')"></div>
      <div class="hg-shapes">
        <div class="hg-shape" style="width:300px;height:300px;top:10%;right:5%;animation-duration:22s"></div>
        <div class="hg-shape" style="width:200px;height:200px;bottom:15%;left:10%;animation-duration:18s;animation-direction:reverse"></div>
      </div>
      <div class="hg-content">
        <div class="rv rv-right">
          ${breadcrumb([{label:'الرئيسية',href:'/'},{label:'الجودة',href:'/quality'}])}
          <div class="s-label">الجودة والالتزام</div>
          <h1 class="s-title" style="font-size:clamp(2rem,4vw,3rem)">الجودة هي أساس <span class="gold">كل مشروع</span></h1>
          <p class="s-sub">في البريق للزجاج والمرايا نؤمن أن جودة العمل لا تعتمد على المنتج فقط، بل تشمل جميع مراحل التنفيذ. لهذا نحرص على اتباع خطوات عمل واضحة تساعدنا على تقديم نتائج تلبي توقعات عملائنا.</p>
        </div>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="qual-pillars">
          <div class="qual-pillar gc rv rv-up">
            <div class="qp-icon">${svgIcon('M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z')}</div>
            <h3>اختيار الخامات</h3>
            <p>نستخدم خامات زجاج وإكسسوارات مناسبة لطبيعة الاستخدام، مع مراعاة الجودة والمتانة والشكل النهائي، حتى نحصل على نتيجة تجمع بين الأداء والمظهر الأنيق.</p>
            <div class="pbar-label"><span>جودة الخامات</span><span class="gold">95%</span></div>
            <div class="pbar"><div class="pbar-fill" data-width="95"></div></div>
          </div>
          <div class="qual-pillar gc rv rv-up">
            <div class="qp-icon">${svgIcon('M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z')}</div>
            <h3>دقة القياسات</h3>
            <p>القياسات الدقيقة من أهم عوامل نجاح أي مشروع زجاج. لذلك نهتم بمراجعة المقاسات قبل بدء التصنيع لتقليل احتمالية حدوث أي اختلاف أثناء التركيب.</p>
            <div class="pbar-label"><span>دقة التنفيذ</span><span class="gold">98%</span></div>
            <div class="pbar"><div class="pbar-fill" data-width="98"></div></div>
          </div>
          <div class="qual-pillar gc rv rv-up">
            <div class="qp-icon">${svgIcon('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4')}</div>
            <h3>تنفيذ احترافي</h3>
            <p>يتم تنفيذ أعمال التركيب بواسطة فنيين ذوي خبرة، مع الالتزام بالخطوات الفنية المناسبة لكل نوع من أنواع الزجاج والمرايات، والاهتمام بالتشطيب النهائي.</p>
            <div class="pbar-label"><span>رضا العملاء</span><span class="gold">97%</span></div>
            <div class="pbar"><div class="pbar-fill" data-width="97"></div></div>
          </div>
          <div class="qual-pillar gc rv rv-up">
            <div class="qp-icon">${svgIcon('M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01')}</div>
            <h3>مراجعة قبل التسليم</h3>
            <p>قبل تسليم أي مشروع، نقوم بمراجعة العمل للتأكد من سلامة التركيب، وثبات الزجاج والإكسسوارات، وجودة التشطيب، ونظافة موقع العمل، ومطابقة التنفيذ لما تم الاتفاق عليه.</p>
            <div class="pbar-label"><span>الالتزام بالمواصفات</span><span class="gold">100%</span></div>
            <div class="pbar"><div class="pbar-fill" data-width="100"></div></div>
          </div>
        </div>

        <div class="pad-sm">
          <div class="s-head rv rv-up">
            <h2 class="s-title">مراحل ضمان <span class="gold">الجودة</span></h2>
          </div>
          <div class="qual-timeline">
            <div class="qt-item rv rv-up"><div class="qt-num">١</div><div class="qt-body gc"><h3>المعاينة وأخذ القياسات</h3><p>نبدأ بمعاينة الموقع وأخذ القياسات الدقيقة لضمان التنفيذ الصحيح</p></div></div>
            <div class="qt-item rv rv-up"><div class="qt-num">٢</div><div class="qt-body gc"><h3>اختيار الخامات المناسبة</h3><p>نختار الزجاج والإكسسوارات التي تتوافق مع طبيعة المشروع ومتطلبات العميل</p></div></div>
            <div class="qt-item rv rv-up"><div class="qt-num">٣</div><div class="qt-body gc"><h3>التصنيع الدقيق</h3><p>يتم التصنيع وفق المقاسات والمواصفات المحددة بدقة عالية</p></div></div>
            <div class="qt-item rv rv-up"><div class="qt-num">٤</div><div class="qt-body gc"><h3>التركيب الاحترافي</h3><p>يتولى فريقنا المتخصص التركيب مع الاهتمام بأدق التفاصيل والتشطيب النهائي</p></div></div>
            <div class="qt-item rv rv-up"><div class="qt-num">٥</div><div class="qt-body gc"><h3>المراجعة والتسليم</h3><p>مراجعة شاملة قبل التسليم للتأكد من مطابقة العمل لجميع المواصفات المتفق عليها</p></div></div>
          </div>
        </div>
      </div>
    </section>

    ${ctaBanner('الجودة التي تستحقها', 'لا نقدم خدماتنا فقط، بل نقدم التزاماً بالجودة والدقة. تواصل معنا لتجربة الفرق.')}
  `;
}

/* ---- WHY US ---- */
function pageWhyUs() {
  updateSEO('لماذا نحن | البريق للزجاج والمرايا', 'تعرف على أسباب اختيار العملاء للبريق للزجاج والمرايا - دقة التنفيذ، جودة الخامات، الالتزام بالمواعيد، وخدمة عملاء تهتم بك.', '/why-us');
  return `
    <section class="hero-float">
      <div class="hf-bg" style="background-image:url('${IMG.arch5}')"></div>
      <div class="hf-overlay"></div>
      <div class="hf-content">
        <div class="rv rv-right">
          ${breadcrumb([{label:'الرئيسية',href:'/'},{label:'لماذا نحن',href:'/why-us'}])}
          <div class="s-label">لماذا نحن</div>
          <h1 class="s-title" style="font-size:clamp(2rem,4vw,3rem)">لماذا يختار العملاء <span class="gold">البريق؟</span></h1>
          <p class="s-sub" style="max-width:500px">عند تنفيذ أعمال الزجاج والمرايات، لا يعتمد نجاح المشروع على جودة الخامات فقط، بل على دقة القياسات، وجودة التركيب، والاهتمام بالتفاصيل.</p>
        </div>
        <div class="hf-cards rv rv-left">
          <div class="hf-card"><div class="hfc-icon">✓</div><h4>دقة القياسات</h4><p>قياسات دقيقة لضمان الملاءمة التامة</p></div>
          <div class="hf-card"><div class="hfc-icon">✓</div><h4>خامات عالية الجودة</h4><p>نستخدم أفضل أنواع الزجاج والإكسسوارات</p></div>
          <div class="hf-card"><div class="hfc-icon">✓</div><h4>تنفيذ احترافي</h4><p>فريق فني ذو خبرة في التركيب</p></div>
          <div class="hf-card"><div class="hfc-icon">✓</div><h4>التزام بالمواعيد</h4><p>تسليم المشروع في الوقت المتفق عليه</p></div>
        </div>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="why-grid">
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z')}</div><h3>نهتم بالتفاصيل منذ البداية</h3><p>كل مشروع يبدأ بالاستماع إلى متطلبات العميل، ثم دراسة المكان وأخذ القياسات بدقة، حتى يتم تنفيذ العمل بالشكل المناسب للمساحة والاستخدام.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2')}</div><h3>جودة في التنفيذ</h3><p>يعتمد فريقنا على أساليب تنفيذ دقيقة لضمان تركيب الزجاج والمرايات بشكل صحيح، مع الاهتمام بالتشطيب النهائي ليظهر العمل بصورة مرتبة ومتناسقة.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M12 22a10 10 0 1 0 10 10 M12 8v4l3 3')}</div><h3>الالتزام بالمواعيد</h3><p>نعرف أن الالتزام بالوقت عنصر مهم في أي مشروع، لذلك نسعى إلى تنفيذ الأعمال وتسليمها وفق الجدول الزمني المتفق عليه.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z')}</div><h3>خدمة عملاء تهتم بك</h3><p>نجيب عن استفسارات العملاء، ونوضح تفاصيل الخدمة قبل بدء التنفيذ، ونبقى على تواصل حتى بعد انتهاء العمل.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4')}</div><h3>خامات وإكسسوارات مناسبة</h3><p>نحرص على استخدام خامات وإكسسوارات تتوافق مع طبيعة كل مشروع، بما يحقق التوازن بين الشكل الجمالي والأداء العملي.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01')}</div><h3>حلول تناسب كل مشروع</h3><p>لكل منزل أو شركة أو محل تجاري احتياجات مختلفة، لذلك لا نعتمد على حلول جاهزة، بل نساعد العميل في اختيار التصميم المناسب.</p></div>
        </div>

        <div class="gc rv rv-up" style="padding:40px;margin-top:40px">
          <h2 class="s-title" style="font-size:1.5rem;margin-bottom:20px">ما الذي يميزنا؟</h2>
          <div class="apart-grid">
            <div class="apart-item"><div class="apart-check">${svgIcon('M20 6 9 17 4 12',20,20)}</div><span>تنفيذ أعمال الزجاج والمرايات بمختلف أنواعها</span></div>
            <div class="apart-item"><div class="apart-check">${svgIcon('M20 6 9 17 4 12',20,20)}</div><span>تصميمات تناسب المنازل والمنشآت التجارية</span></div>
            <div class="apart-item"><div class="apart-check">${svgIcon('M20 6 9 17 4 12',20,20)}</div><span>دقة في القياسات والتركيب</span></div>
            <div class="apart-item"><div class="apart-check">${svgIcon('M20 6 9 17 4 12',20,20)}</div><span>اهتمام بالتشطيب النهائي</span></div>
            <div class="apart-item"><div class="apart-check">${svgIcon('M20 6 9 17 4 12',20,20)}</div><span>الالتزام بالمواعيد المتفق عليها</span></div>
            <div class="apart-item"><div class="apart-check">${svgIcon('M20 6 9 17 4 12',20,20)}</div><span>أسعار واضحة وتنافسية</span></div>
            <div class="apart-item"><div class="apart-check">${svgIcon('M20 6 9 17 4 12',20,20)}</div><span>التعامل باحترافية واحترام مع جميع العملاء</span></div>
            <div class="apart-item"><div class="apart-check">${svgIcon('M20 6 9 17 4 12',20,20)}</div><span>خدمة ما بعد البيع</span></div>
          </div>
        </div>

        <div class="pad-sm">
          <div class="s-head rv rv-up">
            <div class="s-label">القطاعات</div>
            <h2 class="s-title">القطاعات التي <span class="gold">نخدمها</span></h2>
          </div>
          <div class="sectors-grid">
            <div class="sector-card gc rv rv-up">${svgIcon('M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z')}<span>المنازل والشقق</span></div>
            <div class="sector-card gc rv rv-up">${svgIcon('M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10')}<span>الفلل</span></div>
            <div class="sector-card gc rv rv-up">${svgIcon('M2 7h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16')}<span>الشركات</span></div>
            <div class="sector-card gc rv rv-up">${svgIcon('M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z')}<span>المكاتب الإدارية</span></div>
            <div class="sector-card gc rv rv-up">${svgIcon('M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18')}<span>المحلات التجارية</span></div>
            <div class="sector-card gc rv rv-up">${svgIcon('M22 12h-4l-3 9L9 3l-3 9H2')}<span>المستشفيات والعيادات</span></div>
            <div class="sector-card gc rv rv-up">${svgIcon('M3 2h18 M3 7h18 M3 12h18 M3 17h18 M3 22h18')}<span>المطاعم والكافيهات</span></div>
            <div class="sector-card gc rv rv-up">${svgIcon('M1 3h15v13 M16 8h4l3 3v5h-7z')}<span>الفنادق</span></div>
          </div>
        </div>
      </div>
    </section>

    ${ctaBanner('هدفنا هو رضاك', 'هدفنا هو تنفيذ أعمال زجاج ومرايات تجمع بين الجودة والمظهر الأنيق، مع تقديم تجربة مريحة للعميل في جميع مراحل المشروع.')}
  `;
}

/* ---- AREAS LIST ---- */
function pageAreas() {
  updateSEO('مناطق الخدمة | البريق للزجاج والمرايا', 'نقدم خدمات الزجاج والمرايا في القاهرة، الجيزة، 6 أكتوبر، الشيخ زايد، التجمع الخامس، مدينة نصر، مصر الجديدة، المعادي والمزيد.', '/areas');
  return `
    <section class="hero-centered">
      <div class="hc-bg" style="background-image:url('${IMG.arch2}')"></div>
      <div class="hc-overlay"></div>
      <div class="hc-content">
        <div class="rv rv-up">${breadcrumb([{label:'الرئيسية',href:'/'},{label:'مناطق الخدمة',href:'/areas'}])}</div>
        <div class="s-label rv rv-up">مناطق الخدمة</div>
        <h1 class="s-title rv rv-up" style="color:#fff;font-size:clamp(2rem,4vw,3.2rem)">المناطق التي <span class="gold">نخدمها</span></h1>
        <p class="rv rv-up" style="color:rgba(255,255,255,.7);max-width:600px;margin:0 auto">تقدم البريق للزجاج والمرايا خدماتها للعملاء في عدد من المدن والمناطق، مع الحرص على تقديم نفس مستوى الجودة والاهتمام في جميع المشروعات</p>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="areas-grid">
          ${AREAS.map((a,i) => `
            <div class="area-card gc rv rv-up" data-link data-href="/areas/${a.slug}" style="animation-delay:${i*40}ms">
              <div class="area-icon">${svgIcon('M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0z')}</div>
              <h3>${a.name}</h3>
              <p>${a.desc}</p>
            </div>
          `).join('')}
        </div>
        <div class="gc rv rv-up" style="padding:24px 32px;margin-top:32px;display:flex;align-items:center;gap:14px;flex-wrap:wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:22px;height:22px;stroke:var(--gold);flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p style="flex:1;font-size:.92rem;color:var(--text-2)">إذا كانت منطقتك غير موجودة في القائمة، يمكنك التواصل معنا لمعرفة إمكانية تنفيذ المشروع.</p>
          <a data-link data-href="/contact" class="btn btn-gold btn-sm"><span>تواصل معنا</span></a>
        </div>
      </div>
    </section>

    ${ctaBanner('نخدم منطقتك؟', 'تواصل معنا اليوم لمعرفة ما إذا كنا نقدم خدمات في منطقتك وللحصول على عرض سعر مخصص.')}
  `;
}

/* ---- AREA DETAIL ---- */
function pageAreaDetail(slug) {
  const area = AREAS.find(a => a.slug === slug);
  if (!area) return pageNotFound();
  updateSEO(`${area.name} | خدمات الزجاج والمرايا | البريق`, `نقدم خدمات الزجاج والمرايا في ${area.name}. ${area.desc}. تواصل معنا للحصول على عرض سعر.`, `/areas/${slug}`);
  return `
    <section class="hero-typo">
      <div class="hty-bg" style="background-image:url('${IMG.arch6}')"></div>
      <div class="hty-overlay"></div>
      <div class="hty-content">
        <div class="rv rv-up">${breadcrumb([{label:'الرئيسية',href:'/'},{label:'مناطق الخدمة',href:'/areas'},{label:area.name,href:`/areas/${slug}`}])}</div>
        <div class="s-label rv rv-up">${area.name}</div>
        <h1 class="hty-title rv rv-up">خدماتنا في<br/><span class="gold">${area.name}</span></h1>
        <p class="rv rv-up" style="color:var(--text-2);font-size:1.05rem;max-width:600px;margin-top:14px">${area.desc}. نقدم خدماتنا بأعلى معايير الجودة والاحترافية لعملائنا في هذه المنطقة.</p>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <h2 class="s-title">خدماتنا في <span class="gold">${esc(area.name)}</span></h2>
          <p class="s-sub">نوفر جميع خدمات الزجاج والمرايا وأعمال الستانلس ستيل لعملائنا في ${esc(area.name)}</p>
        </div>
        <div class="area-detail-svcs">
          ${SERVICES.map(s => `
            <div class="ads-item gc rv rv-up" data-link data-href="/services/${s.slug}">
              <span class="ss-dot"></span>
              <span>${s.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="pad-sm">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <h2 class="s-title">لماذا تختارنا في <span class="gold">${esc(area.name)}؟</span></h2>
        </div>
        <div class="why-grid">
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z')}</div><h3>خبرة محلية</h3><p>نعرف طبيعة المباني والمنشآت في ${esc(area.name)} ونقدم حلولاً مناسبة.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M12 22a10 10 0 1 0 10 10 M12 8v4l3 3')}</div><h3>سرعة في الاستجابة</h3><p>نصل إليك في الوقت المحدد ونلتزم بمواعيد التسليم.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01')}</div><h3>جودة مضمونة</h3><p>نستخدم خامات عالية الجودة مع تنفيذ احترافي في كل مشروع.</p></div>
        </div>
      </div>
    </section>

    ${ctaBanner(`جاهزون لخدمتك في ${esc(area.name)}`, 'تواصل معنا اليوم للحصول على عرض سعر مجاني لمشروعك في ' + esc(area.name) + '. فريقنا جاهز لخدمتك.')}
  `;
}

/* ---- MAINTENANCE ---- */
function pageMaintenance() {
  updateSEO('الصيانة | البريق للزجاج والمرايا', 'خدمات صيانة واستبدال الزجاج والمرايات - استبدال الزجاج التالف، تغيير المفصلات والإكسسوارات، ضبط الأبواب والمزيد.', '/maintenance');
  return `
    <section class="hero-services">
      <div class="hs-left">
        <div class="rv rv-right">
          ${breadcrumb([{label:'الرئيسية',href:'/'},{label:'الصيانة',href:'/maintenance'}])}
          <div class="s-label">الصيانة</div>
          <h1 class="s-title" style="font-size:clamp(2rem,4vw,3rem)">صيانة واستبدال <span class="gold">الزجاج والمرايات</span></h1>
          <p class="s-sub" style="max-width:480px">لا تقتصر خدماتنا على تنفيذ المشروعات الجديدة، بل نقدم أيضاً خدمات الصيانة للحفاظ على كفاءة الاستخدام وجودة المظهر.</p>
          <div style="margin-top:24px" class="rv rv-up">
            <a href="${WA}" target="_blank" rel="noopener" class="btn btn-wa">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
              <span>اطلب صيانة</span>
            </a>
          </div>
        </div>
      </div>
      <div class="hs-right">
        <img src="${IMG.arch3}" alt="صيانة الزجاج والمرايا" />
        <div class="hs-right-overlay"></div>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <h2 class="s-title">تشمل خدمات <span class="gold">الصيانة</span></h2>
        </div>
        <div class="maint-grid">
          <div class="maint-card gc rv rv-up"><div class="maint-icon">${svgIcon('M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z')}</div><h3>استبدال الزجاج التالف</h3><p>نقوم باستبدال ألواح الزجاج التالفة أو المكسورة بخامات عالية الجودة تتناسب مع المكان.</p></div>
          <div class="maint-card gc rv rv-up"><div class="maint-icon">${svgIcon('M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.07 4.93a10 10 0 0 1 0 14.14 M4.93 4.93a10 10 0 0 0 0 14.14')}</div><h3>تغيير مفصلات الأبواب</h3><p>استبدال مفصلات أبواب الزجاج التالفة لضمان الفتح والإغلاق السلس.</p></div>
          <div class="maint-card gc rv rv-up"><div class="maint-icon">${svgIcon('M1 4h22v16H1z M1 10h23')}</div><h3>تغيير الإكسسوارات</h3><p>استبدال الإكسسوارات القديمة أو التالفة بإكسسوارات جديدة عالية الجودة.</p></div>
          <div class="maint-card gc rv rv-up"><div class="maint-icon">${svgIcon('M3 12l2-2 M5 10l7-7 7 7 M5 10v10a1 1 0 0 0 1 1h3 M15 21h3a1 1 0 0 0 1-1V10')}</div><h3>ضبط أبواب الزجاج</h3><p>ضبط وإعادة معايرة أبواب الزجاج لضمان عملها بشكل صحيح ومتناسق.</p></div>
          <div class="maint-card gc rv rv-up"><div class="maint-icon">${svgIcon('M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z')}</div><h3>إعادة تثبيت الوحدات</h3><p>إعادة تثبيت الوحدات الزجاجية التي فقدت استقرارها لضمان السلامة والمتانة.</p></div>
          <div class="maint-card gc rv rv-up"><div class="maint-icon">${svgIcon('M12 2a10 10 0 1 0 10 10 M2 12h20 M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10')}</div><h3>استبدال المرايات</h3><p>استبدال المرايات التالفة أو القديمة بمرايات جديدة حسب مواصفات المكان.</p></div>
        </div>
        <div class="gc rv rv-up" style="padding:20px 28px;margin-top:32px;display:flex;align-items:center;gap:14px">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:22px;height:22px;stroke:var(--gold);flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p style="font-size:.92rem;color:var(--text-2)">يتم تحديد طبيعة أعمال الصيانة بعد معاينة الحالة بواسطة فريقنا المتخصص.</p>
        </div>
      </div>
    </section>

    <section class="pad-sm">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <h2 class="s-title">لماذا تختارنا <span class="gold">للصيانة؟</span></h2>
        </div>
        <div class="why-grid">
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M12 22a10 10 0 1 0 10 10 M12 8v4l3 3')}</div><h3>سرعة الاستجابة</h3><p>نستجيب بسرعة لطلبات الصيانة ونحدد موعداً في أقرب وقت ممكن.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z')}</div><h3>فحص الحالة قبل التنفيذ</h3><p>نفحص الحالة بدقة قبل البدء في العمل لتحديد أفضل حل مناسب.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${svgIcon('M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z')}</div><h3>استخدام قطع مناسبة</h3><p>نستخدم قطع غيار وإكسسوارات عالية الجودة تتوافق مع طبيعة المنتج الأصلي.</p></div>
        </div>
      </div>
    </section>

    ${ctaBanner('تحتاج صيانة؟', 'لا تتجاهل الزجاج التالف أو الأبواب غير المتزنة. تواصل معنا اليوم لإصلاح المشكلة قبل أن تتفاقم.')}
  `;
}

/* ---- FAQ ---- */
function pageFAQ() {
  updateSEO('الأسئلة الشائعة | البريق للزجاج والمرايا', 'إجابات على أكثر الأسئلة شيوعاً عن خدمات الزجاج والمرايا والستانلس ستيل - المعاينة، التصميمات المخصصة، الصيانة، المناطق والمزيد.', '/faq');
  const faqs = [
    ['هل توفرون المعاينة؟','نعم، نوفر خدمة المعاينة للمشروعات التي تتطلب ذلك، بهدف أخذ القياسات وتحديد أفضل الحلول المناسبة. يتم تحديد موعد للمعاينة عند الحاجة.'],
    ['هل يمكن تنفيذ الأعمال حسب المقاسات المطلوبة؟','بالتأكيد، يتم تنفيذ جميع الأعمال وفق القياسات الفعلية للموقع. جميع أعمالنا تُنفذ حسب القياسات الفعلية لضمان الملاءمة التامة.'],
    ['هل تقدمون خدمات للمنازل والشركات؟','نعم، نقدم خدماتنا للعملاء الأفراد، والشركات، والمكاتب، والمحلات التجارية، والمنشآت المختلفة. نخدم قطاعات متعددة تشمل المنازل والفلل والشركات والمطاعم والفنادق والمستشفيات وغيرها.'],
    ['هل يمكن تنفيذ تصميمات خاصة؟','نعم، يمكن تنفيذ تصميمات مخصصة بما يتناسب مع احتياجات العميل وطبيعة المشروع. نوفر حلولاً مختلفة تناسب أنماط الديكور المتعددة.'],
    ['هل تقدمون خدمات الصيانة؟','نعم، نقدم خدمات الصيانة لبعض أعمال الزجاج والمرايات. تشمل استبدال الزجاج التالف، وتغيير الإكسسوارات، وضبط الأبواب، وإعادة تثبيت بعض الوحدات الزجاجية.'],
    ['كيف يمكن طلب عرض سعر؟','يمكن التواصل معنا عبر الهاتف أو واتساب وإرسال تفاصيل المشروع أو الصور إن وجدت. سيقوم فريقنا بمراجعة الطلب والتواصل معك في أقرب وقت.'],
    ['ما هي المناطق التي تغطونها؟','نخدم القاهرة، الجيزة، مدينة 6 أكتوبر، الشيخ زايد، التجمع الخامس، مدينة نصر، مصر الجديدة، المعادي، الشروق، العبور، الرحاب، والعاصمة الإدارية الجديدة.'],
    ['هل تقدمون ضماناً على الأعمال؟','إذا كانت الخدمة أو الخامات التي تم تنفيذها تشمل ضماناً من الشركة أو من المورد، يتم توضيح تفاصيل هذا الضمان للعميل قبل بدء العمل.'],
    ['هل تقدمون أعمال ستانلس ستيل؟','نعم، إلى جانب أعمال الزجاج والمرايات، نقدم خدمات تنفيذ وتركيب أعمال الستانلس ستيل التي تجمع بين المتانة والمظهر العصري.'],
    ['كم يستغرق تنفيذ المشروع؟','تختلف مدة التنفيذ حسب طبيعة وحجم المشروع. يتم تحديد المدة المتوقعة بعد معاينة الموقع وتحديد متطلبات المشروع.'],
  ];
  return `
    <section class="hero-centered">
      <div class="hc-bg" style="background-image:url('${IMG.arch6}')"></div>
      <div class="hc-overlay"></div>
      <div class="hc-content">
        <div class="rv rv-up">${breadcrumb([{label:'الرئيسية',href:'/'},{label:'الأسئلة الشائعة',href:'/faq'}])}</div>
        <div class="s-label rv rv-up">الأسئلة الشائعة</div>
        <h1 class="s-title rv rv-up" style="color:#fff;font-size:clamp(2rem,4vw,3.2rem)">إجابات على <span class="gold">أسئلتك</span></h1>
        <p class="rv rv-up" style="color:rgba(255,255,255,.7);max-width:600px;margin:0 auto">نجمع هنا أكثر الأسئلة شيوعاً من عملائنا. إذا لم تجد إجابة لسؤالك، تواصل معنا مباشرة.</p>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="faq-wrap">
          ${faqs.map(f => faqItem(f[0], f[1])).join('')}
        </div>
        <div class="gc rv rv-up" style="max-width:600px;margin:48px auto 0;padding:36px;text-align:center">
          <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:8px">لديك سؤال آخر؟</h3>
          <p style="font-size:.92rem;color:var(--text-2);margin-bottom:20px">يسعدنا الإجابة عن جميع استفساراتك. تواصل معنا الآن.</p>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <a href="tel:${PHONE}" class="btn btn-gold btn-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>اتصل بنا</span>
            </a>
            <a href="${WA}" target="_blank" rel="noopener" class="btn btn-wa btn-sm">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
              <span>واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ---- CONTACT ---- */
function pageContact() {
  updateSEO('تواصل معنا | البريق للزجاج والمرايا', 'تواصل مع البريق للزجاج والمرايا - اتصل بنا أو أرسل رسالة عبر واتساب أو املأ نموذج التواصل للحصول على عرض سعر مجاني.', '/contact');
  return `
    <section class="hero-glass">
      <div class="hg-bg" style="background-image:url('${IMG.arch1}')"></div>
      <div class="hg-shapes">
        <div class="hg-shape" style="width:350px;height:350px;top:5%;left:5%;animation-duration:25s"></div>
        <div class="hg-shape" style="width:250px;height:250px;bottom:10%;right:8%;animation-duration:20s;animation-direction:reverse"></div>
      </div>
      <div class="hg-content">
        <div class="rv rv-right">
          ${breadcrumb([{label:'الرئيسية',href:'/'},{label:'تواصل معنا',href:'/contact'}])}
          <div class="s-label">تواصل معنا</div>
          <h1 class="s-title" style="font-size:clamp(2rem,4vw,3rem)">تواصل مع <span class="gold">البريق</span></h1>
          <p class="s-sub">إذا كنت ترغب في تنفيذ مشروع جديد أو تحتاج إلى استشارة، يسعدنا استقبال استفساراتك. اختر طريقة التواصل التي تناسبك.</p>
          <div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap">
            <a href="tel:${PHONE}" class="btn btn-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>${PHONE}</span>
            </a>
            <a href="${WA}" target="_blank" rel="noopener" class="btn btn-wa">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
              <span>واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="contact-grid">
          <div class="rv rv-right">
            <div class="cinfo-card gc">
              <h2>بيانات التواصل</h2>
              <div class="cinfo-detail">
                <div class="cid-icon">${svgIcon('M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z')}</div>
                <div><h3>الهاتف وواتساب</h3><a href="tel:${PHONE}" class="cinfo-phone">${PHONE}</a></div>
              </div>
              <div class="cinfo-detail">
                <div class="cid-icon">${svgIcon('M12 22a10 10 0 1 0 10 10 M12 8v4l3 3')}</div>
                <div><h3>ساعات العمل</h3><p>السبت - الخميس</p><p>9:00 صباحاً - 8:00 مساءً</p></div>
              </div>
              <div class="cinfo-detail">
                <div class="cid-icon">${svgIcon('M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0z')}</div>
                <div><h3>مناطق الخدمة</h3><p>القاهرة الكبرى والجيزة والمناطق المجاورة</p></div>
              </div>
              <div class="cinfo-socials">
                <a href="${WA}" target="_blank" rel="noopener" class="social-btn social-wa" aria-label="واتساب"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg></a>
                <a href="tel:${PHONE}" class="social-btn social-ph" aria-label="اتصال"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>
              </div>
            </div>
            <div class="map-card gc" style="margin-top:20px">
              <div class="map-ph">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <p>القاهرة الكبرى، مصر</p>
                <span>يتم التواصل عبر الهاتف أو واتساب لتحديد موقع الخدمة</span>
              </div>
            </div>
          </div>
          <div class="rv rv-left">
            <div class="cform-card gc">
              <h2>طلب عرض سعر</h2>
              <p>يرجى تزويدنا بالمعلومات التالية وسيتواصل معك فريقنا في أقرب وقت</p>
              <form id="contactForm" novalidate>
                <div class="form-row">
                  <div class="form-g">
                    <label>الاسم <span class="req">*</span></label>
                    <input type="text" id="name" name="name" placeholder="أدخل اسمك الكامل" required />
                    <span class="ferr" id="nameErr"></span>
                  </div>
                  <div class="form-g">
                    <label>رقم الهاتف <span class="req">*</span></label>
                    <input type="tel" id="phone" name="phone" placeholder="01xxxxxxxxx" required dir="ltr" />
                    <span class="ferr" id="phoneErr"></span>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-g">
                    <label>المدينة</label>
                    <select id="city" name="city">
                      <option value="" disabled selected>اختر المدينة</option>
                      ${AREAS.map(a => `<option>${a.name}</option>`).join('')}
                      <option>أخرى</option>
                    </select>
                  </div>
                  <div class="form-g">
                    <label>نوع الخدمة <span class="req">*</span></label>
                    <select id="service" name="service" required>
                      <option value="" disabled selected>اختر الخدمة</option>
                      ${SERVICES.map(s => `<option>${s.name}</option>`).join('')}
                      <option>صيانة واستبدال</option>
                      <option>أخرى</option>
                    </select>
                    <span class="ferr" id="serviceErr"></span>
                  </div>
                </div>
                <div class="form-g">
                  <label>وصف مختصر للمشروع <span class="req">*</span></label>
                  <textarea id="message" name="message" rows="4" placeholder="اكتب وصفاً مختصراً لمشروعك..." required></textarea>
                  <span class="ferr" id="messageErr"></span>
                </div>
                <button type="submit" class="btn btn-gold btn-submit" id="submitBtn">
                  <span id="submitText">إرسال الطلب</span>
                  <div id="submitSpinner" style="display:none"><div class="spinner"></div></div>
                </button>
              </form>
              <div id="formSuccess" style="display:none" class="form-ok">
                <div class="ok-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></div>
                <h3>تم إرسال طلبك بنجاح!</h3>
                <p>سيقوم فريقنا بالتواصل معك في أقرب وقت. يمكنك أيضاً التواصل معنا مباشرة عبر واتساب.</p>
                <a href="${WA}" target="_blank" rel="noopener" class="btn btn-wa" style="justify-content:center">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                  <span>تواصل عبر واتساب</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ---- 404 ---- */
function pageAdminRedirect() {
  window.location.href = 'http://localhost:3000/admin/login';
  return `
    <section style="min-height:80vh;display:flex;align-items:center;justify-content:center;padding-top:var(--nav-h);text-align:center">
      <div class="wrap rv rv-up" style="max-width:720px;">
        <div class="s-label">Admin</div>
        <h1 class="s-title" style="font-size:clamp(2.6rem,6vw,4rem)">لوحة تحكم الإدارة</h1>
        <p class="s-sub" style="margin:0 auto 32px;max-width:640px;">إذا لم يتم التحويل تلقائيًا، اضغط على الرابط التالي.</p>
        <a href="http://localhost:3000/admin/login" class="btn btn-gold" target="_blank" rel="noopener">فتح لوحة التحكم</a>
      </div>
    </section>
  `;
}

function pageNotFound() {
  updateSEO('الصفحة غير موجودة | البريق للزجاج والمرايا', 'عذراً، الصفحة التي تبحث عنها غير موجودة. العودة للصفحة الرئيسية.', '/404');
  return `
    <section style="min-height:80vh;display:flex;align-items:center;justify-content:center;padding-top:var(--nav-h);text-align:center">
      <div class="wrap rv rv-up">
        <div class="s-label">404</div>
        <h1 class="s-title" style="font-size:clamp(3rem,8vw,6rem)">الصفحة <span class="gold">غير موجودة</span></h1>
        <p class="s-sub" style="margin:0 auto 32px">عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
        <a data-link data-href="/" class="btn btn-gold">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transform:rotate(180deg)"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <span>العودة للرئيسية</span>
        </a>
      </div>
    </section>
  `;
}

/* ============================================================
   ROUTER
============================================================ */
const routes = {
  '/': pageHome,
  '/services': pageServices,
  '/projects': pageProjects,
  '/gallery': pageGallery,
  '/about': pageAboutCompany,
  '/quality': pageAboutCompany,
  '/why-us': pageAboutCompany,
  '/faq': pageAboutCompany,
  '/areas': pageAreas,
  '/maintenance': pageMaintenance,
  '/contact': pageContact,
  '/admin': pageAdminRedirect,
};

const dynamicRoutes = [
  { pattern: /^\/services\/([\w-]+)$/, handler: (m) => pageServiceDetail(m[1]) },
  { pattern: /^\/projects\/([\w-]+)$/, handler: (m) => pageProjectDetail(m[1]) },
  { pattern: /^\/areas\/([\w-]+)$/, handler: (m) => pageAreaDetail(m[1]) },
];

function router() {
  const path = window.location.pathname;
  let pageFn = routes[path];
  let matchResult = null;

  if (!pageFn) {
    for (const dr of dynamicRoutes) {
      const m = path.match(dr.pattern);
      if (m) { pageFn = () => dr.handler(m); matchResult = m; break; }
    }
  }

  const app = $('#app');
  app.innerHTML = '';
  window.scrollTo(0, 0);

  if (pageFn) {
    app.innerHTML = pageFn();
  } else {
    app.innerHTML = pageNotFound();
  }

  // Post-render
  renderFooter();
  bindLinks();
  triggerReveals();
  initCounters();
  initProgressBars();
  initFAQAccordion();
  initFilters();
  initContactForm();
  initLightboxTriggers();
  updateNavActive(path);
}

/* ============================================================
   NAVIGATION BINDING
============================================================ */
function bindLinks() {
  $$('[data-link]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const href = el.getAttribute('data-href') || el.getAttribute('href');
      if (!href || href === '#') return;
      if (window.location.pathname === href) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      history.pushState(null, '', href);
      router();
      // Close mobile menu
      $('#hamburger')?.classList.remove('open');
      $('#navMenu')?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function updateNavActive(path) {
  $$('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const isActive = href === path || (path.startsWith('/services') && href === '/services') || (path === '/' && href === '/');
    link.classList.toggle('active', isActive);
  });
}

/* ============================================================
   REVEAL ANIMATIONS
============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function triggerReveals() {
  $$('.rv').forEach(el => {
    if (!el.classList.contains('in')) revealObserver.observe(el);
  });
}

/* ============================================================
   COUNTERS
============================================================ */
function animateCounter(el, target, duration = 2200) {
  const start = performance.now();
  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

function initCounters() {
  $$('.counter').forEach(el => counterObserver.observe(el));
}

/* ============================================================
   PROGRESS BARS
============================================================ */
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.getAttribute('data-width');
      setTimeout(() => { bar.style.width = width + '%'; }, 300);
      progressObserver.unobserve(bar);
    }
  });
}, { threshold: 0.3 });

function initProgressBars() {
  $$('.pbar-fill').forEach(bar => progressObserver.observe(bar));
}

/* ============================================================
   FAQ ACCORDION
============================================================ */
function initFAQAccordion() {
  $$('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      $$('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
      btn.setAttribute('aria-expanded', (!isOpen).toString());
    });
  });
}

/* ============================================================
   FILTERS
============================================================ */
function initFilters() {
  // Projects
  $$('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      $$('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      $$('#projGrid .proj-card').forEach(card => {
        const cat = card.getAttribute('data-category') || card.querySelector('[data-category]')?.getAttribute('data-category');
        card.classList.toggle('hidden', filter !== 'all' && cat !== filter);
      });
    });
  });

  // Gallery
  $$('[data-gfilter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-gfilter');
      $$('[data-gfilter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      $$('#galGrid .gal-item').forEach(item => {
        const cat = item.getAttribute('data-gcat');
        item.classList.toggle('hidden', filter !== 'all' && cat !== filter);
      });
    });
  });
}

/* ============================================================
   CONTACT FORM
============================================================ */
function initContactForm() {
  const form = $('#contactForm');
  if (!form) return;

  const fields = {
    name: { el: $('#name'), err: $('#nameErr'), validate: v => v.trim().length >= 2 ? '' : 'الاسم مطلوب (على الأقل حرفان)' },
    phone: { el: $('#phone'), err: $('#phoneErr'), validate: v => /^[0-9+\s\-()]{7,15}$/.test(v.trim()) ? '' : 'رقم الهاتف غير صحيح' },
    service: { el: $('#service'), err: $('#serviceErr'), validate: v => v ? '' : 'يرجى اختيار نوع الخدمة' },
    message: { el: $('#message'), err: $('#messageErr'), validate: v => v.trim().length >= 10 ? '' : 'يرجى كتابة وصف (10 أحرف على الأقل)' },
  };

  Object.keys(fields).forEach(key => {
    const f = fields[key];
    f.el.addEventListener('blur', () => {
      const msg = f.validate(f.el.value);
      f.err.textContent = msg;
      f.el.classList.toggle('err', !!msg);
    });
    f.el.addEventListener('input', () => {
      if (f.el.classList.contains('err')) {
        const msg = f.validate(f.el.value);
        f.err.textContent = msg;
        f.el.classList.toggle('err', !!msg);
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;
    Object.keys(fields).forEach(key => {
      const f = fields[key];
      const msg = f.validate(f.el.value);
      f.err.textContent = msg;
      f.el.classList.toggle('err', !!msg);
      if (msg) valid = false;
    });
    if (!valid) return;

    const btn = $('#submitBtn');
    const txt = $('#submitText');
    const spin = $('#submitSpinner');
    
    btn.disabled = true;
    txt.style.display = 'none';
    spin.style.display = 'flex';

    const name = fields.name.el.value.trim();
    const phone = fields.phone.el.value.trim();
    const service = fields.service.el.value;
    const message = fields.message.el.value.trim();

    const whatsappMessage = `*طلب عرض سعر جديد*

👤 الاسم:
${name}

📞 رقم الهاتف:
${phone}

🛠️ الخدمة المطلوبة:
${service}

📝 تفاصيل الطلب:
${message}`;

window.open(
      `https://wa.me/201118049615?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    );

    btn.disabled = false;
    txt.style.display = 'inline';
    spin.style.display = 'none';

    form.reset();
  });
}

/* ============================================================
   LIGHTBOX
============================================================ */
let lbImages = [];
let lbIndex = 0;

function initLightboxTriggers() {
  const lb = $('#lightbox');
  const lbImg = $('#lightbox-img');
  const lbCap = $('#lightbox-caption');

  $$('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      lbImages = $$('[data-lightbox]:not(.hidden)').map(e => ({
        src: e.getAttribute('data-lightbox'),
        cap: e.getAttribute('data-caption') || e.querySelector('img')?.getAttribute('alt') || '',
      }));
      const src = el.getAttribute('data-lightbox');
      lbIndex = lbImages.findIndex(i => i.src === src);
      if (lbIndex < 0) lbIndex = 0;
      openLightbox();
    });
  });
}

function openLightbox() {
  if (lbImages.length === 0) return;
  const item = lbImages[lbIndex];
  $('#lightbox-img').src = item.src;
  $('#lightbox-img').alt = item.cap;
  $('#lightbox-caption').textContent = item.cap;
  $('#lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  $('#lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function navLightbox(dir) {
  lbIndex += dir;
  if (lbIndex < 0) lbIndex = lbImages.length - 1;
  if (lbIndex >= lbImages.length) lbIndex = 0;
  openLightbox();
}

function initIntroOverlay() {
  const overlay = $('#intro-overlay');
  const enter = $('#intro-enter');
  if (!overlay || !enter) return;

  document.body.style.overflow = 'hidden';

  const hideIntro = () => {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  };

  const openDoors = () => {
    overlay.classList.add('opened');
  };

  enter.addEventListener('click', hideIntro);
  setTimeout(openDoors, 600);
  setTimeout(hideIntro, 4200);
}

/* ============================================================
   NAVBAR + UI
============================================================ */
function initNavbar() {
  const nav = $('#navbar');
  const ham = $('#hamburger');
  const menu = $('#navMenu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    $('#back-to-top').classList.toggle('vis', window.scrollY > 400);
    updateProgressBar();
  });

  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
    document.querySelectorAll('.nav-dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            link.parentElement.classList.toggle('open');
        }
    });
});

    if (menu.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      ham.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // إغلاق القائمة عند الضغط على أي لينك
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      ham.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function updateProgressBar() {
  const bar = $('#progress-bar');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : '0%';
}

/* ============================================================
   CURSOR GLOW
============================================================ */
function initCursorGlow() {
  const cursor = $('#cursor-glow');
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.opacity = '1'; });
  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  (function animate() {
    cx += (mx - cx) * 0.08; cy += (my - cy) * 0.08;
    cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px';
    requestAnimationFrame(animate);
  })();
}

/* ============================================================
   THEME TOGGLE
============================================================ */
function initThemeToggle() {
  const btn = $('#theme-toggle');
  const iDark = $('#theme-icon-dark');
  const iLight = $('#theme-icon-light');
  if (localStorage.getItem('albariq-theme') === 'light') {
    document.body.classList.add('light');
    iDark.style.display = 'none'; iLight.style.display = 'block';
  }
  btn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    localStorage.setItem('albariq-theme', isLight ? 'light' : 'dark');
    iDark.style.display = isLight ? 'none' : 'block';
    iLight.style.display = isLight ? 'block' : 'none';
  });
}

/* ============================================================
   INIT
============================================================ */
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  initIntroOverlay();
  initNavbar();
  initCursorGlow();
  initThemeToggle();

  // Lightbox events
  $('#lightbox-close').addEventListener('click', closeLightbox);
  $('#lightbox-overlay').addEventListener('click', closeLightbox);
  $('#lightbox-prev').addEventListener('click', () => navLightbox(-1));
  $('#lightbox-next').addEventListener('click', () => navLightbox(1));
  document.addEventListener('keydown', (e) => {
    if (!$('#lightbox').classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navLightbox(-1);
    if (e.key === 'ArrowLeft') navLightbox(1);
  });

  // Back to top
  $('#back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Initial route
  router();
});
