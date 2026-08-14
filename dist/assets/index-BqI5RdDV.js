(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&t(f)}).observe(document,{childList:!0,subtree:!0});function e(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(l){if(l.ep)return;l.ep=!0;const n=e(l);fetch(l.href,n)}})();const p="+201118049615",u=`https://wa.me/201118049615?text=${encodeURIComponent("مرحباً، أريد الاستفسار عن خدمات البريق للزجاج والمرايا")}`,i={facade1:"https://images.pexels.com/photos/9784184/pexels-photo-9784184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",facade2:"https://images.pexels.com/photos/14925511/pexels-photo-14925511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",facade3:"https://images.pexels.com/photos/109553/pexels-photo-109553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",shower1:"https://images.pexels.com/photos/7227629/pexels-photo-7227629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",shower2:"https://images.pexels.com/photos/17840522/pexels-photo-17840522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",shower3:"https://images.pexels.com/photos/15273734/pexels-photo-15273734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",mirror1:"https://images.pexels.com/photos/36173241/pexels-photo-36173241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",mirror2:"https://images.pexels.com/photos/37793333/pexels-photo-37793333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",mirror3:"https://images.pexels.com/photos/20559490/pexels-photo-20559490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",door1:"https://images.pexels.com/photos/32560938/pexels-photo-32560938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",partition1:"https://images.pexels.com/photos/5483051/pexels-photo-5483051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",partition2:"https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",partition3:"https://images.pexels.com/photos/7534209/pexels-photo-7534209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",handrail1:"https://images.pexels.com/photos/7078471/pexels-photo-7078471.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",handrail2:"https://images.pexels.com/photos/29678826/pexels-photo-29678826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",handrail3:"https://images.pexels.com/photos/11469545/pexels-photo-11469545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",table1:"https://images.pexels.com/photos/6980724/pexels-photo-6980724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",kitchen1:"https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",shop1:"https://images.pexels.com/photos/9784184/pexels-photo-9784184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",shop2:"https://images.pexels.com/photos/7996793/pexels-photo-7996793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",shop3:"https://images.pexels.com/photos/14925511/pexels-photo-14925511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",stainless1:"https://images.pexels.com/photos/23940459/pexels-photo-23940459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",arch1:"https://images.pexels.com/photos/19707470/pexels-photo-19707470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",arch2:"https://images.pexels.com/photos/33650448/pexels-photo-33650448.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",arch3:"https://images.pexels.com/photos/941456/pexels-photo-941456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",arch4:"https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",arch5:"https://images.pexels.com/photos/17173969/pexels-photo-17173969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",arch6:"https://images.pexels.com/photos/3709404/pexels-photo-3709404.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},b=[{slug:"glass-facades",name:"واجهات زجاجية أمنية للمتاجر والشركات",short:"تصميم وتركيب واجهات زجاجية للمحلات والشركات بتصميمات عصرية",img:i.facade1,icon:"M3 3h18v18H3z M3 9h18 M9 3v18"},{slug:"shower-cabins",name:"حمامات استحمام بأحجام مخصصة",short:"تصميمات متنوعة من حمامات استحمام بأحجام مخصصة الزجاجية بمقاسات مخصصة",img:i.shower1,icon:"M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3 M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"},{slug:"mirrors",name:"مرايا زخرفية",short:"مرايات بأشكال ومقاسات مختلفة مع إمكانية إضاءة LED",img:i.mirror1,icon:"M12 2a10 10 0 1 0 10 10 M2 12h20 M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10"},{slug:"glass-doors",name:"أبواب زجاجية",short:"أبواب زجاجية للمكاتب والمنازل بتصميمات أنيقة وآمنة",img:i.door1,icon:"M3 21h18 M12 3v18 M5 3h14v18H5z"},{slug:"glass-partitions",name:"أقسام زجاجية للمكاتب",short:"قواطيع زجاجية لتقسيم المساحات دون التأثير على الإضاءة",img:i.partition1,icon:"M2 3h20v18H2z M12 3v18"},{slug:"glass-handrails",name:"درابزين زجاجي",short:"حلول درابزين زجاجي للسلالم والبلكونات بأمان وأناقة",img:i.handrail1,icon:"M3 17l6-6 4 4 8-8 M3 21h18"},{slug:"glass-tables",name:"طاولات زجاجية",short:"ترابيزات زجاجية حسب المقاسات بتصميمات عصرية",img:i.table1,icon:"M3 9h18 M5 9v12 M19 9v12 M3 5h18v4H3z"},{slug:"kitchen-glass",name:"مطبخ زجاجي",short:"حلول زجاجية للمطابخ تجمع بين الجمال وسهولة التنظيف",img:i.kitchen1,icon:"M18 8h1a4 4 0 0 1 0 8h-1 M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},{slug:"shop-fronts",name:"عروض متاجر",short:"واجهات زجاجية تساعد في إبراز هوية النشاط التجاري",img:i.shop1,icon:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},{slug:"stainless-steel",name:"مرايا مضاءة بتقنية LED",short:"درابزين، هاندريل، أبواب، واجهات ستانلس ستيل متينة وعصرية",img:i.stainless1,icon:"M12 2L3 7v6c0 5 9 9 9 9s9-4 9-9V7l-9-5z"}],z=[{slug:"cairo",name:"القاهرة",desc:"نخدم جميع أحياء القاهرة الكبرى"},{slug:"giza",name:"الجيزة",desc:"خدمة شاملة لمحافظة الجيزة"},{slug:"6-october",name:"مدينة 6 أكتوبر",desc:"منازل وشركات ومحلات 6 أكتوبر"},{slug:"sheikh-zayed",name:"الشيخ زايد",desc:"خدمات متكاملة في الشيخ زايد"},{slug:"5th-settlement",name:"التجمع الخامس",desc:"نخدم كافة مناطق التجمع الخامس"},{slug:"nasr-city",name:"مدينة نصر",desc:"تغطية شاملة لمدينة نصر"},{slug:"heliopolis",name:"مصر الجديدة",desc:"خدماتنا متاحة في مصر الجديدة"},{slug:"maadi",name:"المعادي",desc:"نخدم المعادي وما حولها"},{slug:"shorouk",name:"الشروق",desc:"خدمات الزجاج والمرايا في الشروق"},{slug:"obour",name:"العبور",desc:"نغطي مدينة العبور بالكامل"},{slug:"rehab",name:"الرحاب",desc:"خدمة متكاملة في مدينة الرحاب"},{slug:"new-capital",name:"العاصمة الإدارية",desc:"حضور قوي في العاصمة الإدارية الجديدة"}],A=[{slug:"facade-nasr-city",title:"واجهة محل تجاري",loc:"مدينة نصر",type:"واجهة زجاج سيكوريت",cat:"facades",img:i.facade1,desc:"تنفيذ واجهة زجاجية بتصميم عصري مع باب زجاج وإكسسوارات مناسبة لطبيعة النشاط التجاري.",services:["واجهات زجاجية أمنية للمتاجر والشركات","أبواب زجاجية"],gallery:[i.facade1,i.facade2,i.shop3]},{slug:"shower-zayed",title:"كابينة شاور مخصصة",loc:"الشيخ زايد",type:"كابينة شاور",cat:"showers",img:i.shower1,desc:"تنفيذ كابينة شاور حسب المقاس مع باب مفصلي وتشطيب احترافي.",services:["حمامات استحمام بأحجام مخصصة"],gallery:[i.shower1,i.shower2,i.shower3]},{slug:"facade-tagamoa",title:"واجهة زجاجية عصرية",loc:"التجمع الخامس",type:"واجهات زجاج",cat:"facades",img:i.facade2,desc:"تصميم وتركيب واجهة زجاجية كاملة لمحل متخصص تعكس هوية العلامة التجارية.",services:["واجهات زجاجية أمنية للمتاجر والشركات","عروض متاجر"],gallery:[i.facade2,i.shop2,i.facade3]},{slug:"mirror-heliopolis",title:"مرايات ديكور فاخرة",loc:"مصر الجديدة",type:"مرايات ديكور",cat:"mirrors",img:i.mirror1,desc:"تصميم وتركيب مرايات ديكور حسب الطلب لمساحة معيشة فاخرة.",services:["مرايا زخرفية"],gallery:[i.mirror1,i.mirror2,i.mirror3]},{slug:"handrail-october",title:"درابزين زجاجي للسلالم",loc:"مدينة 6 أكتوبر",type:"درابزين زجاج",cat:"handrails",img:i.handrail1,desc:"تركيب درابزين زجاجي يجمع بين الأمان والجماليات الحديثة لسلم فيلا سكنية.",services:["درابزين زجاجي"],gallery:[i.handrail1,i.handrail2,i.handrail3]},{slug:"partition-maadi",title:"قواطيع زجاجية لمكاتب",loc:"المعادي",type:"قواطيع زجاج",cat:"partitions",img:i.partition1,desc:"تصميم وتركيب قواطيع زجاجية لشركة متخصصة لتقسيم المساحات مع الحفاظ على التدفق البصري.",services:["أقسام زجاجية للمكاتب","أبواب زجاجية"],gallery:[i.partition1,i.partition2,i.partition3]}],r=s=>document.querySelector(s),d=s=>[...document.querySelectorAll(s)],c=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function o(s,a=24,e=24){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="${s}"/></svg>`}function v(s,a,e){document.getElementById("page-title").textContent=s,document.getElementById("meta-desc").setAttribute("content",a),document.getElementById("meta-canonical").setAttribute("href",`https://albariqglass.com${e}`),document.getElementById("og-title").setAttribute("content",s),document.getElementById("og-desc").setAttribute("content",a),document.getElementById("og-url").setAttribute("href",`https://albariqglass.com${e}`),document.getElementById("tw-title").setAttribute("content",s),document.getElementById("tw-desc").setAttribute("content",a)}function _(){r("#footer-root").innerHTML=`
    <div class="footer-glow"></div>
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-col footer-brand">
          <div class="nav-logo footer-logo" data-link style="cursor:pointer" data-href="/">
            <span class="nav-logo-mark"><img src="./logo-albareeq.png" alt="شعار البريق" class="nav-logo-img" /></span>
            <div class="nav-logo-text">
              <span class="nav-logo-ar">البريق</span>
              <span class="nav-logo-en">للزجاج والمرايا</span>
            </div>
          </div>
          <p class="footer-brand-desc">حلول متكاملة في تصميم وتصنيع وتركيب الزجاج والمرايات ومرايا مضاءة بتقنية LED للمنازل والشركات والمحلات التجارية في مصر</p>
          <p class="footer-tagline-txt gold">الجودة التي يمكنك رؤيتها في كل تفصيلة</p>
        </div>
        <div class="footer-col">
          <h3>روابط سريعة</h3>
          <ul>
            <li><a data-link data-href="/">الرئيسية</a></li>
            <li><a data-link data-href="/services">خدماتنا</a></li>
            <li><a data-link data-href="/projects">مشاريعنا</a></li>
            <li><a data-link data-href="/gallery">معرض الأعمال</a></li>
            <li><a data-link data-href="/about">عن الشركة</a></li>
            <li>
            <a href="https://albareeq.vercel.app/admin/login" target="_blank" rel="noopener">
                لوحة التحكم
                 </a>
         </li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>خدماتنا</h3>
          <ul>
            <li><a data-link data-href="/services/glass-facades">واجهات زجاجية أمنية للمتاجر والشركات</a></li>
            <li><a data-link data-href="/services/shower-cabins">حمامات استحمام بأحجام مخصصة</a></li>
            <li><a data-link data-href="/services/mirrors">مرايا زخرفية</a></li>
            <li><a data-link data-href="/services/glass-handrails">درابزين زجاجي</a></li>
            <li><a data-link data-href="/services/stainless-steel">مرايا مضاءة بتقنية LED</a></li>
            <li><a data-link data-href="/maintenance">الصيانة والاستبدال</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>تواصل معنا</h3>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:${p}">${p}</a>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor" style="fill:#25D366;stroke:none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
            <a href="${u}" target="_blank" rel="noopener">واتساب: ${p}</a>
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
  `}function h(s){return`<nav class="breadcrumb">${s.map((a,e)=>{const t=e<s.length-1?'<span class="breadcrumb-sep">/</span>':"";return`<a data-link data-href="${a.href}">${a.label}</a>${t}`}).join("")}</nav>`}function g(s,a){return`
    <div class="pad-sm">
      <div class="wrap">
        <div class="cta-banner gc rv rv-up">
          <div class="cta-banner-bg"></div>
          <div style="position:relative;z-index:1">
            <h2>${s}</h2>
            <p>${a}</p>
            <div class="cta-btns">
              <a href="tel:${p}" class="btn btn-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>اتصل الآن</span>
              </a>
              <a href="${u}" target="_blank" rel="noopener" class="btn btn-wa">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function q(s){return`
    <div class="svc-card gc rv rv-up" data-link data-href="/services/${s.slug}">
      <div class="svc-card-img">
        <img src="${s.img}" alt="${c(s.name)}" loading="lazy" />
        <div class="svc-card-overlay"></div>
      </div>
      <div class="svc-card-body">
        <div class="svc-card-icon">${o(s.icon)}</div>
        <h3>${s.name}</h3>
        <p>${s.short}</p>
        <div class="svc-card-arrow">
          <span>اعرف المزيد</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  `}function B(s){return`
    <div class="proj-card gc rv rv-up" data-link data-href="/projects/${s.slug}">
      <div class="proj-card-img">
        <img src="${s.img}" alt="${c(s.title)}" loading="lazy" />
        <div class="proj-hover">
          <div class="proj-hover-inner">
            <span class="proj-tag">${c(s.type)}</span>
            <h3>${c(s.title)}</h3>
            <p>${c(s.loc)}</p>
          </div>
        </div>
      </div>
      <div class="proj-card-info">
        <div class="proj-meta">
          <span class="proj-loc">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${c(s.loc)}
          </span>
          <span class="proj-type-badge">${c(s.type)}</span>
        </div>
        <h3>${c(s.title)}</h3>
        <p>${c(s.desc)}</p>
      </div>
    </div>
  `}function R(s,a=4){return`
    <div class="pad-sm">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <div class="s-label">خدمات ذات صلة</div>
          <h2 class="s-title">خدمات <span class="gold">أخرى</span></h2>
        </div>
        <div class="svcs-grid">
          ${b.filter(t=>t.slug!==s).slice(0,a).map(t=>q(t)).join("")}
        </div>
      </div>
    </div>
  `}function G(s,a=3){return`
    <div class="pad-sm">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <div class="s-label">مشاريع ذات صلة</div>
          <h2 class="s-title">مشاريع <span class="gold">أخرى</span></h2>
        </div>
        <div class="related-projs">
          ${A.filter(t=>t.slug!==s).slice(0,a).map(t=>B(t)).join("")}
        </div>
      </div>
    </div>
  `}function I(s,a){return`
    <div class="faq-item gc rv rv-up">
      <button class="faq-q" aria-expanded="false">
        <span>${c(s)}</span>
        <div class="faq-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
      </button>
      <div class="faq-answer"><p>${c(a)}</p></div>
    </div>
  `}function N(){return v("البريق للزجاج والمرايا | حلول زجاج متكاملة في مصر","البريق للزجاج والمرايا تقدم خدمات تصميم وتصنيع وتركيب الزجاج السيكوريت والمرايات وعروض متاجر ومرايا مضاءة بتقنية LED بجودة عالية في مصر.","/"),`
    <section class="hero-home">
      <div class="hero-home-bg">
        <div class="hero-home-img" style="background-image:url('${i.arch6}')"></div>
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
        <p class="h-tagline rv rv-up">الجودة التي يمكنك رؤيتها في كل تفصيلة</p>
        <p class="h-desc rv rv-up">في بريق للزجاج والمرايا نحن نعلم أن الزجاج ليس مجرد مادة بناء بل هو عنصر أساسي في التصميم والذي يمكن أن يجعل المساحة أوسع، يعكس الضوء بالإضافة إلى الجمالية وأسلوب عصري.</p>
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
            <p style="color:var(--text-2);line-height:1.8;margin-bottom:14px">في بريق للزجاج والمرايا نحن نعلم أن الزجاج ليس مجرد مادة بناء بل هو عنصر أساسي في التصميم والذي يمكن أن يجعل المساحة أوسع، يعكس الضوء بالإضافة إلى الجمالية وأسلوب عصري. لذلك في بريق للزجاج والمرايا نقدم خدمات متكاملة في تصميم وتصنيع وتركيب الزجاج والمرايا لتلبية احتياجات المنازل والشركات والمكاتب والمحلات التجارية ومشاريع أخرى.</p>
            <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px">لدينا فريق محترف من المتخصصين المهرة ونستخدم مواد عالية الجودة والتي تضمن النتيجة ذات الجودة العالية والاحترافية سواء كان ذلك لواجهة زجاجية لمحل أو تركيب لحمام استحمام أو تصميم لمرايا زخرفية حسب القياسات أو أقسام زجاجية للمكاتب.</p>
            <a data-link data-href="/services" class="btn btn-outline">اكتشف خدماتنا</a>
          </div>
          <div class="about-imgs rv rv-left">
            <div class="ai-main gc-static"><img src="${i.arch3}" alt="معمار زجاجي فاخر" loading="lazy" /></div>
            <div class="ai-second gc-static"><img src="${i.partition1}" alt="قواطيع زجاجية للمكاتب" loading="lazy" /></div>
          </div>
        </div>
      </div>
    </section>

    <section class="pad" style="background:linear-gradient(180deg,var(--bg-1),var(--bg-2),var(--bg-1))">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <div class="s-label">خدماتنا</div>
          <h2 class="s-title">حلول متكاملة في أعمال <span class="gold">الزجاج والمرايات</span></h2>
          <p class="s-sub">نوفر مجموعة واسعة من خدمات الزجاج والمرايات ومرايا مضاءة بتقنية LED تناسب المنازل والشركات والمحلات التجارية</p>
        </div>
        <div class="svcs-grid">
          ${b.map((s,a)=>q(s)).join("")}
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

    ${g("ابدأ مشروعك مع البريق للزجاج والمرايا","إذا كنت تبحث عن شريك موثوق لتنفيذ أعمال الزجاج والمرايات بجودة عالية وتصميمات عصرية وتنفيذ احترافي، فإن البريق للزجاج والمرايا جاهزة لتقديم الحل المناسب لمشروعك.")}
  `}function Y(){return v("خدماتنا | البريق للزجاج والمرايا","تصفح جميع خدمات البريق للزجاج والمرايا: واجهات زجاج سيكوريت، كبائن شاور، مرايات ديكور، أبواب زجاج، قواطيع، درابزين، ستانلس ستيل والمزيد.","/services"),`
    <section class="hero-services">
      <div class="hs-left">
        <div class="rv rv-right">
          ${h([{label:"الرئيسية",href:"/"},{label:"خدماتنا",href:"/services"}])}
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
        <img src="${i.arch2}" alt="خدمات البريق للزجاج والمرايا" />
        <div class="hs-right-overlay"></div>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="svcs-grid">
          ${b.map(s=>q(s)).join("")}
        </div>
      </div>
    </section>

    ${g("هل تحتاج إلى استشارة؟","فريقنا جاهز لمساعدتك في اختيار الحل المناسب لمشروعك. تواصل معنا اليوم للحصول على عرض سعر مجاني.")}
  `}function W(s){const a=b.find(l=>l.slug===s);if(!a)return M();const t={"glass-facades":{desc:"ننفذ واجهات زجاج سيكوريت للمحلات التجارية، والشركات، والمعارض، والمطاعم، والكافيهات، بتصميمات عصرية تساعد على إبراز المكان والاستفادة من الإضاءة الطبيعية، مع تركيب احترافي يضمن جودة التشطيب وسهولة الاستخدام.",benefits:["تصميم عصري يبرز هوية النشاط التجاري","استفادة قصوى من الإضاءة الطبيعية","زجاج سيكوريت آمن ومتين","تركيب احترافي يضمن جودة التشطيب","سهولة في الصيانة والتنظيف"],apps:["المحلات التجارية","الشركات","المعارض","المطاعم والكافيهات","المولات","صالات العرض"],faqs:[["هل يمكن تنفيذ الواجهة حسب تصميم مخصص؟","نعم، يمكن تنفيذ الواجهات بتصميمات مخصصة تتناسب مع هوية النشاط التجاري والمساحة المتاحة."],["ما هو الزجاج السيكوريت؟","الزجاج السيكوريت هو زجاج معالج حرارياً ليكون أكثر قوة وأمان، فإذا انكسر يتحول إلى حبيبات صغيرة بدلاً من شظايا حادة."],["هل توفرون استبدال الواجهات القديمة؟","نعم، نقوم باستبدال الواجهات الزجاجية القديمة بأخرى جديدة مع ضمان جودة التركيب."]]},"shower-cabins":{desc:"نوفر تصميمات متنوعة من حمامات استحمام بأحجام مخصصة الزجاجية تناسب مختلف مساحات الحمامات، مع تنفيذ حسب المقاسات المطلوبة واستخدام زجاج سيكوريت وإكسسوارات عالية الجودة.",benefits:["تصميمات تناسب جميع المساحات","زجاج سيكوريت آمن","إكسسوارات عالية الجودة","تشطيب احترافي","سهولة التنظيف والصيانة"],apps:["المنازل والشقق","الفلل","الفنادق","الشقق الفندقية","المستشفيات والعيادات"],faqs:[["ما هي أنواع حمامات استحمام بأحجام مخصصة المتاحة؟","نوفر كبائن مستقيمة، كبائن ركنية، أبواب سحب، أبواب مفصلية، وتصميمات مخصصة حسب الطلب."],["هل يمكن تنفيذ كابينة حسب مقاس مخصص؟","نعم، جميع حمامات استحمام بأحجام مخصصة تُنفذ حسب المقاسات الفعلية للحمام."],["هل الزجاج المستخدم آمن؟","نعم، نستخدم زجاج سيكوريت المعالج حرارياً للأمان."]]},mirrors:{desc:"نصمم ونركب مرايات تناسب مختلف الاستخدامات، سواء للمنازل أو المكاتب أو المحلات التجارية، مع إمكانية تنفيذها بأشكال ومقاسات مختلفة.",benefits:["أشكال ومقاسات مخصصة","إمكانية إضافة إضاءة LED","مرايات عالية الجودة بانعكاس واضح","تركيب احترافي وآمن","تصميمات تناسب جميع الديكورات"],apps:["مداخل المنازل","الحمامات","غرف المعيشة","غرف النوم","المحلات التجارية","صالونات التجميل"],faqs:[["هل يمكن تنفيذ مرايات بإضاءة LED؟","نعم، نوفر مرايات بإضاءة LED مدمجة بتصميمات عصرية."],["هل يمكن قص المرايا بأشكال مخصصة؟","نعم، يمكن تنفيذ المرايات بأي شكل أو مقاس مطلوب."],["هل المرايات آمنة في التركيب؟","نعم، نستخدم مرايات بتصميم آمن ونركبها بطريقة محكمة وآمنة."]]},"glass-doors":{desc:"نوفر أبواب زجاجية للمكاتب والمنازل والشركات بتصميمات أنيقة وآمنة، باستخدام زجاج سيكوريت وإكسسوارات عالية الجودة.",benefits:["تصميمات أنيقة وعصرية","زجاج سيكوريت آمن","إكسسوارات عالية الجودة","تركيب احترافي","تناسب جميع الاستخدامات"],apps:["المكاتب","المنازل","الشركات","المحلات التجارية","الفنادق"],faqs:[["هل الأبواب زجاجيةية آمنة؟","نعم، نستخدم زجاج سيكوريت المعالج حرارياً الذي يتحمل الاستخدام المكثف."],["هل يمكن تركيب أقفال خاصة؟","نعم، نركب مختلف أنواع الأقفال والإكسسوارات حسب الطلب."],["هل توفرون أبواب سحب ومفصلية؟","نعم، نوفر جميع أنواع الأبواب زجاجيةية: سحب، مفصلية، وكسوة."]]},"glass-partitions":{desc:"إذا كنت ترغب في تقسيم المساحات داخل المكتب دون التأثير على الإضاءة أو الإحساس بالاتساع، فإن الأقسام زجاجية للمكاتبية تعد خياراً عملياً وعصرياً.",benefits:["تقسيم المساحات دون التأثير على الإضاءة","إحساس بالاتساع والانسيابية","تصميم عصري وأنيق","سهولة الصيانة","خيار عملي واقتصادي"],apps:["المكاتب الإدارية","الشركات","العيادات","المطاعم","الفنادق","المدارس"],faqs:[["هل الأقسام زجاجية للمكاتبية عازلة للصوت؟","الزجاج يوفر عزلاً جزئياً للصوت، ويمكن تحسين العزل باستخدام زجاج مزدوج."],["هل يمكن فك القواطيع ونقلها؟","نعم، الأقسام زجاجية للمكاتبية يمكن فكها وإعادة تركيبها في موقع آخر."],["هل يمكن تركيب أبواب داخل القواطيع؟","نعم، يمكن دمج أبواب زجاجية ضمن القواطيع."]]},"glass-handrails":{desc:"نوفر حلولاً لتركيب درابزين زجاجي للسلالم والبلكونات، بما يحقق التوازن بين الأمان والمظهر الحديث، مع تنفيذ يتناسب مع طبيعة كل مشروع.",benefits:["توازن بين الأمان والمظهر الحديث","تصميمات عصرية","زجاج سيكوريت متين","تركيب احترافي وآمن","تناسب السلالم والبلكونات"],apps:["سلالم المنازل","بلكونات الشقق","الفلل","المكاتب","الفنادق","المولات"],faqs:[["هل درابزين زجاجي آمن؟","نعم، نستخدم زجاج سيكوريت متين وآمن مع تركيب محكم."],["هل يمكن تركيبه على البلكونات؟","نعم، نركب درابزين زجاجي للسلالم والبلكونات."],["ما هي سماكة الزجاج المستخدم؟","تختلف السماكة حسب الارتفاع والمتطلبات، ونختار السماكة المناسبة لكل مشروع."]]},"glass-tables":{desc:"نصنع ترابيزات زجاجية حسب المقاسات المطلوبة بتصميمات عصرية تناسب مختلف الاستخدامات، من ترابيزات الطعام إلى ترابيزات القهاوي والمكاتب.",benefits:["تصنيع حسب المقاس","تصميمات عصرية","زجاج سيكوريت متين","تشطيب احترافي","تناسب جميع الاستخدامات"],apps:["ترابيزات طعام","ترابيزات القهاوي","مكاتب زجاجية","ترابيزات صالونات","ترابيزات خارجية"],faqs:[["هل يمكن تنفيذ الترابيزات بأشكال مخصصة؟","نعم، نصنع الترابيزات بأي شكل أو مقاس مطلوب."],["هل الزجاج متين بما يكفي للاستخدام اليومي؟","نعم، نستخدم زجاج سيكوريت متين يتحمل الاستخدام المكثف."],["هل توفرون قواعد معدنية للترابيزات؟","نعم، نوفر قواعد من الستانلس ستيل أو الحديد حسب الطلب."]]},"kitchen-glass":{desc:"نوفر حلولاً لتركيب الزجاج في المطابخ بما يضيف لمسة جمالية ويسهل عملية التنظيف، مع إمكانية اختيار الألوان والتشطيبات المناسبة.",benefits:["لمسة جمالية للمطبخ","سهولة التنظيف","حماية الجدران من الزيوت والبخار","ألوان وتشطيبات متعددة","خامات عالية الجودة"],apps:["المطابخ المنزلية","مطابخ المطاعم","مطابخ الفنادق","مطابخ الكافيهات"],faqs:[["هل مطبخ زجاجي آمن بالقرب من النار؟","نعم، نستخدم زجاج مقاوم للحرارة آمن للاستخدام في المطابخ."],["هل يمكن تركيبه فوق البلاط الموجود؟","نعم، يمكن تركيب مطبخ زجاجي فوق معظم الأسطح الموجودة."],["هل يتوفر بألوان مختلفة؟","نعم، يتوفر بألوان وتشطيبات متعددة لتناسب جميع الأذواق."]]},"shop-fronts":{desc:"نعمل على تصميم وتركيب واجهات زجاجية تساعد في إبراز هوية النشاط التجاري وتمنح العملاء رؤية واضحة للمنتجات أو الخدمات المعروضة.",benefits:["إبراز هوية النشاط التجاري","رؤية واضحة للمنتجات","استفادة من الإضاءة الطبيعية","تصميم عصري وجذاب","تركيب احترافي"],apps:["المحلات التجارية","البوتيكات","المجوهرات","الصيدليات","المطاعم","الكافيهات"],faqs:[["هل يمكن تركيب واجهات منحنية؟","نعم، يمكن تنفيذ واجهات زجاجية منحنية حسب التصميم المطلوب."],["هل توفرون واجهات بأبواب أوتوماتيك؟","نعم، يمكن تركيب أبواب أوتوماتيكية ضمن الواجهة."],["هل يمكن إضافة شعار المحل على الزجاج؟","نعم، يمكن إضافة طباعة أو توزيعات على الزجاج حسب الطلب."]]},"stainless-steel":{desc:"إلى جانب أعمال الزجاج والمرايات، تقدم البريق للزجاج والمرايا خدمات تنفيذ وتركيب مرايا مضاءة بتقنية LED التي تجمع بين المتانة والمظهر العصري، وتناسب الاستخدام في المنازل، والشركات، والمحلات التجارية، والمباني الإدارية. نحرص على تنفيذ الأعمال بدقة مع اختيار الخامات المناسبة، للحصول على تشطيب أنيق وعمر افتراضي طويل.",benefits:["متانة عالية وعمر افتراضي طويل","مظهر عصري وأنيق","مقاومة للصدأ والتآكل","تناسب الاستخدام الداخلي والخارجي","صيانة سهلة","خامات عالية الجودة"],apps:["المنازل والفلل","الشركات والمكاتب","المحلات التجارية","المباني الإدارية","الفنادق","المطاعم"],faqs:[["هل يمكن تنفيذ أعمال ستانلس حسب تصميم مخصص؟","نعم، يمكن تنفيذ جميع مرايا مضاءة بتقنية LED حسب التصميم والمقاسات المطلوبة."],["هل الستانلس ستيل مقاوم للصدأ؟","نعم، نستخدم أنواع عالية الجودة مقاومة للصدأ والتآكل."],["هل توفرون صيانة لمرايا مضاءة بتقنية LED؟","نعم، نقدم خدمات صيانة وتلميع مرايا مضاءة بتقنية LED القائمة."]],extraList:["درابزين ستانلس","هاندريل للسلالم","أبواب ستانلس","واجهات ستانلس","إكسسوارات الستانلس","قواطيع الستانلس والزجاج","تنفيذ أعمال حسب الطلب"]}}[s]||{desc:a.short,benefits:[],apps:[],faqs:[]};return v(`${a.name} | البريق للزجاج والمرايا`,`${a.name} - ${a.short}. نقدم خدمات احترافية في ${a.name} بجودة عالية وتنفيذ دقيق في مصر.`,`/services/${s}`),`
    <section class="hero-centered">
      <div class="hc-bg" style="background-image:url('${a.img}')"></div>
      <div class="hc-overlay"></div>
      <div class="hc-content">
        <div class="rv rv-up">${h([{label:"الرئيسية",href:"/"},{label:"خدماتنا",href:"/services"},{label:a.name,href:`/services/${s}`}])}</div>
        <div class="s-label rv rv-up">${a.name}</div>
        <h1 class="s-title rv rv-up" style="font-size:clamp(2.2rem,5vw,3.5rem);color:#fff">${a.name}</h1>
        <p class="rv rv-up" style="color:rgba(255,255,255,.7);font-size:1.05rem;max-width:600px;margin:0 auto">${a.short}</p>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="svc-grid">
          <div class="svc-desc rv rv-right">
            <h2>عن الخدمة</h2>
            <p>${t.desc}</p>
            ${t.extraList?`
              <h2 style="margin-top:28px">تشمل خدماتنا</h2>
              <div class="ss-list">
                ${t.extraList.map(l=>`<div class="ss-item"><span class="ss-dot"></span>${c(l)}</div>`).join("")}
              </div>
            `:""}
            ${t.benefits.length?`
              <h2 style="margin-top:28px">المميزات</h2>
              <div class="svc-benefits">
                ${t.benefits.map(l=>`<div class="svc-benefit"><div class="svc-benefit-icon">✓</div><div><h4>${c(l)}</h4></div></div>`).join("")}
              </div>
            `:""}
            ${t.apps.length?`
              <h2 style="margin-top:28px">مجالات التطبيق</h2>
              <div class="svc-applications">
                ${t.apps.map(l=>`<span class="svc-app-tag">${c(l)}</span>`).join("")}
              </div>
            `:""}
            <h2 style="margin-top:28px">معرض الأعمال</h2>
            <div class="svc-gallery-mini">
              <div class="svc-gm-img" data-lightbox="${a.img}"><img src="${a.img}" alt="${c(a.name)}" loading="lazy" /></div>
              <div class="svc-gm-img" data-lightbox="${a.img===i.facade1?i.facade2:i.arch1}"><img src="${a.img===i.facade1?i.facade2:i.arch1}" alt="${c(a.name)}" loading="lazy" /></div>
              <div class="svc-gm-img" data-lightbox="${a.img===i.facade1?i.facade3:i.arch4}"><img src="${a.img===i.facade1?i.facade3:i.arch4}" alt="${c(a.name)}" loading="lazy" /></div>
            </div>
          </div>
          <div class="svc-sidebar rv rv-left">
            <div class="svc-cta-card gc">
              <h3>اطلب عرض سعر</h3>
              <p>تواصل معنا اليوم للحصول على عرض سعر مجاني لمشروعك</p>
              <div class="svc-cta-btns">
                <a href="${u}" target="_blank" rel="noopener" class="btn btn-wa" style="justify-content:center">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                  <span>واتساب</span>
                </a>
                <a href="tel:${p}" class="btn btn-gold" style="justify-content:center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>اتصل بنا</span>
                </a>
                <a data-link data-href="/contact" class="btn btn-ghost" style="justify-content:center"><span>نموذج التواصل</span></a>
              </div>
            </div>
            <div class="svc-related gc">
              <h4>خدمات ذات صلة</h4>
              ${b.filter(l=>l.slug!==s).slice(0,4).map(l=>`
                <div class="svc-rel-item" data-link data-href="/services/${l.slug}">
                  <img src="${l.img}" alt="${c(l.name)}" loading="lazy" />
                  <span>${l.name}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>

    ${t.faqs.length?`
      <section class="pad-sm">
        <div class="wrap">
          <div class="s-head rv rv-up">
            <div class="s-label">الأسئلة الشائعة</div>
            <h2 class="s-title">أسئلة عن <span class="gold">${c(a.name)}</span></h2>
          </div>
          <div class="faq-wrap">
            ${t.faqs.map(l=>I(l[0],l[1])).join("")}
          </div>
        </div>
      </section>
    `:""}

    <section class="pad-sm">
      <div class="wrap" style="text-align:center">
        <a data-link data-href="/services" class="btn btn-outline rv rv-up">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transform:rotate(180deg)"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <span>العودة للخدمات</span>
        </a>
      </div>
    </section>

    ${R(s)}
    ${g(`هل أنت جاهز لبدء مشروع ${a.name}؟`,"تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر مخصص لمشروعك.")}
  `}function U(){v("مشاريعنا | البريق للزجاج والمرايا","تصفح مجموعة من المشاريع المنفذة بواسطة البريق للزجاج والمرايا - واجهات، كبائن شاور، مرايات، درابزين، قواطيع والمزيد.","/projects");const s=[{id:"all",name:"الكل"},{id:"facades",name:"واجهات"},{id:"showers",name:"كبائن شاور"},{id:"mirrors",name:"مرايات"},{id:"handrails",name:"درابزين"},{id:"partitions",name:"قواطيع"}];return`
    <section class="hero-magazine">
      <div class="hm-left">
        <img src="${i.arch1}" alt="مشاريع البريق للزجاج والمرايا" />
        <div class="hm-diag"></div>
      </div>
      <div class="hm-right">
        <div class="rv rv-right">
          ${h([{label:"الرئيسية",href:"/"},{label:"مشاريعنا",href:"/projects"}])}
          <div class="s-label">مشاريعنا</div>
          <h1 class="s-title" style="font-size:clamp(2rem,4vw,3rem)">مشاريع <span class="gold">نفتخر بتنفيذها</span></h1>
          <p class="s-sub" style="max-width:440px">في هذه الصفحة نستعرض مجموعة من الأعمال المنفذة مع نبذة مختصرة عن كل مشروع. اضغط على أي مشروع لمعرفة التفاصيل.</p>
        </div>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="filter-row rv rv-up">
          ${s.map((a,e)=>`<button class="f-btn ${e===0?"active":""}" data-filter="${a.id}">${a.name}</button>`).join("")}
        </div>
        <div class="proj-grid" id="projGrid">
          ${A.map(a=>B(a)).join("")}
        </div>
      </div>
    </section>

    ${g("ابدأ مشروعك القادم معنا","هل لديك مشروع يحتاج إلى خبرة في الزجاج والمرايات؟ تواصل معنا اليوم واحصل على عرض سعر مخصص.")}
  `}function J(s){const a=A.find(e=>e.slug===s);return a?(v(`${a.title} | مشاريع البريق للزجاج والمرايا`,`${a.title} في ${a.loc} - ${a.desc}. تعرف على تفاصيل المشروع والخدمات المستخدمة والمعرض.`,`/projects/${s}`),`
    <section class="hero-typo">
      <div class="hty-bg" style="background-image:url('${a.img}')"></div>
      <div class="hty-overlay"></div>
      <div class="hty-content">
        <div class="rv rv-up">${h([{label:"الرئيسية",href:"/"},{label:"مشاريعنا",href:"/projects"},{label:a.title,href:`/projects/${s}`}])}</div>
        <h1 class="hty-title rv rv-up">${c(a.title)}<span class="gold">${c(a.loc)}</span></h1>
        <p class="rv rv-up" style="color:var(--text-2);font-size:1.05rem;max-width:600px;margin-top:14px">${c(a.desc)}</p>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="proj-detail-grid">
          <div class="rv rv-right">
            <h2 class="s-title" style="font-size:1.5rem;margin-bottom:16px">نظرة عامة</h2>
            <p style="color:var(--text-2);line-height:1.8;margin-bottom:24px">${c(a.desc)} تم تنفيذ هذا المشروع باحترافية عالية مع الالتزام بمعايير الجودة والدقة في كل التفاصيل.</p>
            <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:14px">الخدمات المستخدمة</h3>
            <div style="display:flex;flex-wrap:wrap;gap:9px;margin-bottom:28px">
              ${a.services.map(e=>`<span class="svc-app-tag">${c(e)}</span>`).join("")}
            </div>
            <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:14px">صور المشروع</h3>
            <div class="proj-gallery">
              ${a.gallery.map(e=>`<div class="proj-gal-img" data-lightbox="${e}"><img src="${e}" alt="${c(a.title)}" loading="lazy" /></div>`).join("")}
            </div>
          </div>
          <div class="proj-detail-sidebar rv rv-left">
            <div class="proj-info-card gc">
              <div class="proj-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <div><h4>الموقع</h4><p>${c(a.loc)}</p></div>
              </div>
              <div class="proj-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
                <div><h4>نوع المشروع</h4><p>${c(a.type)}</p></div>
              </div>
              <div class="proj-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                <div><h4>الخدمات</h4><p>${a.services.join("، ")}</p></div>
              </div>
            </div>
            <div class="svc-cta-card gc">
              <h3>مشروع مماثل؟</h3>
              <p>تواصل معنا لتنفيذ مشروع مشابه بجودة عالية</p>
              <div class="svc-cta-btns">
                <a href="${u}" target="_blank" rel="noopener" class="btn btn-wa" style="justify-content:center">
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

    ${G(s)}
    ${g("هل أعجبك هذا المشروع؟","تواصل معنا اليوم لتنفيذ مشروع مماثل يلبي احتياجاتك ويحقق رؤيتك.")}
  `):M()}function K(){v("معرض الأعمال | البريق للزجاج والمرايا","تصفح معرض أعمال البريق للزجاج والمرايا - صور لعروض متاجر، حمامات استحمام بأحجام مخصصة، المرايات، الدرابزين وأكثر.","/gallery");const s=[{img:i.facade1,cat:"facades",cap:"واجهة محل فاخرة"},{img:i.shower1,cat:"showers",cap:"كابينة شاور زجاجية"},{img:i.mirror1,cat:"mirrors",cap:"مرايات ديكور فاخرة"},{img:i.handrail1,cat:"handrails",cap:"درابزين زجاجي عصري"},{img:i.facade2,cat:"facades",cap:"واجهة زجاجية عصرية"},{img:i.partition1,cat:"partitions",cap:"قواطيع زجاجية"},{img:i.mirror2,cat:"mirrors",cap:"مرايات كلاسيكية"},{img:i.shower2,cat:"showers",cap:"دش زجاجي حديث"},{img:i.handrail2,cat:"handrails",cap:"سلم زجاجي فاخر"},{img:i.door1,cat:"doors",cap:"أبواب زجاجية"},{img:i.stainless1,cat:"stainless",cap:"درابزين ستانلس"},{img:i.kitchen1,cat:"kitchens",cap:"زجاج مطابخ"}],a=[{id:"all",name:"الكل"},{id:"facades",name:"واجهات"},{id:"showers",name:"كبائن شاور"},{id:"mirrors",name:"مرايات"},{id:"handrails",name:"درابزين"},{id:"partitions",name:"قواطيع"},{id:"doors",name:"أبواب"},{id:"stainless",name:"ستانلس ستيل"},{id:"kitchens",name:"مطابخ"}];return`
    <section class="hero-parallax">
      <div class="hp-bg" style="background-image:url('${i.arch2}')"></div>
      <div class="hp-overlay"></div>
      <div class="hp-content">
        <div class="rv rv-up">${h([{label:"الرئيسية",href:"/"},{label:"معرض الأعمال",href:"/gallery"}])}</div>
        <div class="s-label rv rv-up">معرض الأعمال</div>
        <h1 class="s-title rv rv-up" style="color:#fff;font-size:clamp(2rem,4vw,3.2rem)">أعمالنا تتحدث <span class="gold">عن نفسها</span></h1>
        <p class="rv rv-up" style="color:rgba(255,255,255,.7);max-width:600px;margin:0 auto">نفخر بالمشروعات التي قمنا بتنفيذها، حيث نحرص في كل مشروع على الجمع بين جودة التنفيذ ودقة التفاصيل</p>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="filter-row rv rv-up">
          ${a.map((e,t)=>`<button class="f-btn ${t===0?"active":""}" data-gfilter="${e.id}">${e.name}</button>`).join("")}
        </div>
        <div class="gal-grid" id="galGrid">
          ${s.map(e=>`
            <div class="gal-item rv rv-up" data-gcat="${e.cat}" data-lightbox="${e.img}" data-caption="${c(e.cap)}">
              <img src="${e.img}" alt="${c(e.cap)}" loading="lazy" />
              <div class="gal-overlay">
                <button class="gal-zoom" aria-label="تكبير"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></button>
                <span>${c(e.cap)}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    ${g("هل أعجبك معرض أعمالنا؟","تواصل معنا اليوم لتنفيذ مشروع يجمع بين الجودة والأناقة. فريقنا جاهز لتحقيق رؤيتك.")}
  `}function $(){v("عن الشركة | البريق للزجاج والمرايا","تعرف على البريق للزجاج والمرايا: حلول متكاملة في الزجاج والمرايا مع التزام كامل بالجودة والخدمة الاحترافية.","/about");const s=[["هل توفرون المعاينة؟","نعم، نوفر خدمة المعاينة للمشروعات التي تتطلب ذلك، بهدف أخذ القياسات وتحديد أفضل الحلول المناسبة. يتم تحديد موعد للمعاينة عند الحاجة."],["هل يمكن تنفيذ الأعمال حسب المقاسات المطلوبة؟","بالتأكيد، يتم تنفيذ جميع الأعمال وفق القياسات الفعلية للموقع. جميع أعمالنا تُنفذ حسب القياسات الفعلية لضمان الملاءمة التامة."],["هل تقدمون خدمات للمنازل والشركات؟","نعم، نقدم خدماتنا للعملاء الأفراد، والشركات، والمكاتب، والمحلات التجارية، والمنشآت المختلفة. نخدم قطاعات متعددة تشمل المنازل والفلل والشركات والمطاعم والفنادق والمستشفيات وغيرها."],["هل يمكن تنفيذ تصميمات خاصة؟","نعم، يمكن تنفيذ تصميمات مخصصة بما يتناسب مع احتياجات العميل وطبيعة المشروع. نوفر حلولاً مختلفة تناسب أنماط الديكور المتعددة."],["هل تقدمون خدمات الصيانة؟","نعم، نقدم خدمات الصيانة لبعض أعمال الزجاج والمرايات، بما في ذلك استبدال الزجاج التالف، تغيير الإكسسوارات، وضبط الأبواب."],["كيف يمكن طلب عرض سعر؟","يمكن التواصل معنا عبر الهاتف أو واتساب وإرسال تفاصيل المشروع أو الصور إن وجدت. سيقوم فريقنا بمراجعة الطلب والتواصل معك في أقرب وقت."],["ما هي المناطق التي تغطونها؟","نخدم القاهرة، الجيزة، مدينة 6 أكتوبر، الشيخ زايد، التجمع الخامس، مدينة نصر، مصر الجديدة، المعادي، الشروق، العبور، الرحاب، والعاصمة الإدارية الجديدة."]];return`
    <section class="hero-glass">
      <div class="hg-bg" style="background-image:url('${i.arch5}')"></div>
      <div class="hg-shapes">
        <div class="hg-shape" style="width:300px;height:300px;top:10%;right:5%;animation-duration:22s"></div>
        <div class="hg-shape" style="width:220px;height:220px;bottom:10%;left:8%;animation-duration:18s;animation-direction:reverse"></div>
      </div>
      <div class="hg-content">
        <div class="rv rv-right">
          ${h([{label:"الرئيسية",href:"/"},{label:"عن الشركة",href:"/about"}])}
          <div class="s-label">عن الشركة</div>
          <h1 class="s-title" style="font-size:clamp(2rem,4vw,3rem)">البريق للزجاج والمرايا<br><span class="gold">خبرة وجودة في كل مشروع</span></h1>
          <p class="s-sub">نقدم حلولاً متكاملة في تصميم وتصنيع وتركيب الزجاج والمرايات مع تركيز كامل على الجودة، الدقة، والتواصل الواضح مع العميل.</p>
          <div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap">
            <a href="${u}" target="_blank" rel="noopener" class="btn btn-wa">واتساب</a>
            <a data-link data-href="/contact" class="btn btn-gold">تواصل معنا</a>
          </div>
        </div>
        <div class="rv rv-left" style="display:flex;justify-content:center;align-items:center">
          <img src="${i.arch6}" alt="عن الشركة" style="border-radius:28px;box-shadow:var(--sh-lg);max-width:100%;height:auto;" />
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
            <div class="qp-icon">${o("M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z")}</div>
            <h3>اختيار الخامات</h3>
            <p>نستخدم خامات زجاج وإكسسوارات عالية الجودة لتدوم وتظهر بأفضل شكل.</p>
          </div>
          <div class="qual-pillar gc rv rv-up">
            <div class="qp-icon">${o("M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z")}</div>
            <h3>القياسات الدقيقة</h3>
            <p>نعتمد قياسات دقيقة لضمان تشغيل وتركيب مثالي دون فروقات.</p>
          </div>
          <div class="qual-pillar gc rv rv-up">
            <div class="qp-icon">${o("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4")}</div>
            <h3>تنفيذ متقن</h3>
            <p>فريقنا المتخصص يطبق أفضل أساليب التركيب لضمان نتائج احترافية.</p>
          </div>
          <div class="qual-pillar gc rv rv-up">
            <div class="qp-icon">${o("M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01")}</div>
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
          <div class="why-card gc rv rv-up"><div class="why-icon">${o("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")}</div><h3>الخبرة</h3><p>خبرتنا الواسعة تضمن نتائج عالية الجودة.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${o("M20 6 9 17 4 12")}</div><h3>الجودة</h3><p>نحرص على استخدام مواد دقيقة التشطيب ومتانة عالية.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${o("M12 22a10 10 0 1 0 10 10 M12 8v4l3 3")}</div><h3>الالتزام</h3><p>نلتزم بالمواعيد ونسلم المشروع بالجودة المتفق عليها.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${o("M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z")}</div><h3>خدمة عملاء</h3><p>نرافقك بخدمة محترفة وتواصل فعّال طوال المشروع.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${o("M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z")}</div><h3>حلول مخصصة</h3><p>نصمم حلولاً تتناسب مع احتياجات مكانك وطبيعة مشروعك.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${o("M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01")}</div><h3>الاعتمادية</h3><p>نعمل لكي تكون مشاريعك مطمئنة وجاهزة للاستخدام طويل الأمد.</p></div>
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
          ${s.map(a=>I(a[0],a[1])).join("")}
        </div>
      </div>
    </section>

    ${g("البريق شريكك الموثوق","اعرف المزيد عن خبرتنا في تنفيذ أعمال الزجاج والمرايا، وجودتنا في كل خطوة من المشروع.")}
  `}function Q(){return v("مناطق الخدمة | البريق للزجاج والمرايا","نقدم خدمات الزجاج والمرايا في القاهرة، الجيزة، 6 أكتوبر، الشيخ زايد، التجمع الخامس، مدينة نصر، مصر الجديدة، المعادي والمزيد.","/areas"),`
    <section class="hero-centered">
      <div class="hc-bg" style="background-image:url('${i.arch2}')"></div>
      <div class="hc-overlay"></div>
      <div class="hc-content">
        <div class="rv rv-up">${h([{label:"الرئيسية",href:"/"},{label:"مناطق الخدمة",href:"/areas"}])}</div>
        <div class="s-label rv rv-up">مناطق الخدمة</div>
        <h1 class="s-title rv rv-up" style="color:#fff;font-size:clamp(2rem,4vw,3.2rem)">المناطق التي <span class="gold">نخدمها</span></h1>
        <p class="rv rv-up" style="color:rgba(255,255,255,.7);max-width:600px;margin:0 auto">تقدم البريق للزجاج والمرايا خدماتها للعملاء في عدد من المدن والمناطق، مع الحرص على تقديم نفس مستوى الجودة والاهتمام في جميع المشروعات</p>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="areas-grid">
          ${z.map((s,a)=>`
            <div class="area-card gc rv rv-up" data-link data-href="/areas/${s.slug}" style="animation-delay:${a*40}ms">
              <div class="area-icon">${o("M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0z")}</div>
              <h3>${s.name}</h3>
              <p>${s.desc}</p>
            </div>
          `).join("")}
        </div>
        <div class="gc rv rv-up" style="padding:24px 32px;margin-top:32px;display:flex;align-items:center;gap:14px;flex-wrap:wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:22px;height:22px;stroke:var(--gold);flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p style="flex:1;font-size:.92rem;color:var(--text-2)">إذا كانت منطقتك غير موجودة في القائمة، يمكنك التواصل معنا لمعرفة إمكانية تنفيذ المشروع.</p>
          <a data-link data-href="/contact" class="btn btn-gold btn-sm"><span>تواصل معنا</span></a>
        </div>
      </div>
    </section>

    ${g("نخدم منطقتك؟","تواصل معنا اليوم لمعرفة ما إذا كنا نقدم خدمات في منطقتك وللحصول على عرض سعر مخصص.")}
  `}function X(s){const a=z.find(e=>e.slug===s);return a?(v(`${a.name} | خدمات الزجاج والمرايا | البريق`,`نقدم خدمات الزجاج والمرايا في ${a.name}. ${a.desc}. تواصل معنا للحصول على عرض سعر.`,`/areas/${s}`),`
    <section class="hero-typo">
      <div class="hty-bg" style="background-image:url('${i.arch6}')"></div>
      <div class="hty-overlay"></div>
      <div class="hty-content">
        <div class="rv rv-up">${h([{label:"الرئيسية",href:"/"},{label:"مناطق الخدمة",href:"/areas"},{label:a.name,href:`/areas/${s}`}])}</div>
        <div class="s-label rv rv-up">${a.name}</div>
        <h1 class="hty-title rv rv-up">خدماتنا في<br/><span class="gold">${a.name}</span></h1>
        <p class="rv rv-up" style="color:var(--text-2);font-size:1.05rem;max-width:600px;margin-top:14px">${a.desc}. نقدم خدماتنا بأعلى معايير الجودة والاحترافية لعملائنا في هذه المنطقة.</p>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <h2 class="s-title">خدماتنا في <span class="gold">${c(a.name)}</span></h2>
          <p class="s-sub">نوفر جميع خدمات الزجاج والمرايا ومرايا مضاءة بتقنية LED لعملائنا في ${c(a.name)}</p>
        </div>
        <div class="area-detail-svcs">
          ${b.map(e=>`
            <div class="ads-item gc rv rv-up" data-link data-href="/services/${e.slug}">
              <span class="ss-dot"></span>
              <span>${e.name}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="pad-sm">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <h2 class="s-title">لماذا تختارنا في <span class="gold">${c(a.name)}؟</span></h2>
        </div>
        <div class="why-grid">
          <div class="why-card gc rv rv-up"><div class="why-icon">${o("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")}</div><h3>خبرة محلية</h3><p>نعرف طبيعة المباني والمنشآت في ${c(a.name)} ونقدم حلولاً مناسبة.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${o("M12 22a10 10 0 1 0 10 10 M12 8v4l3 3")}</div><h3>سرعة في الاستجابة</h3><p>نصل إليك في الوقت المحدد ونلتزم بمواعيد التسليم.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${o("M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01")}</div><h3>جودة مضمونة</h3><p>نستخدم خامات عالية الجودة مع تنفيذ احترافي في كل مشروع.</p></div>
        </div>
      </div>
    </section>

    ${g(`جاهزون لخدمتك في ${c(a.name)}`,"تواصل معنا اليوم للحصول على عرض سعر مجاني لمشروعك في "+c(a.name)+". فريقنا جاهز لخدمتك.")}
  `):M()}function Z(){return v("الصيانة | البريق للزجاج والمرايا","خدمات صيانة واستبدال الزجاج والمرايات - استبدال الزجاج التالف، تغيير المفصلات والإكسسوارات، ضبط الأبواب والمزيد.","/maintenance"),`
    <section class="hero-services">
      <div class="hs-left">
        <div class="rv rv-right">
          ${h([{label:"الرئيسية",href:"/"},{label:"الصيانة",href:"/maintenance"}])}
          <div class="s-label">الصيانة</div>
          <h1 class="s-title" style="font-size:clamp(2rem,4vw,3rem)">صيانة واستبدال <span class="gold">الزجاج والمرايات</span></h1>
          <p class="s-sub" style="max-width:480px">لا تقتصر خدماتنا على تنفيذ المشروعات الجديدة، بل نقدم أيضاً خدمات الصيانة للحفاظ على كفاءة الاستخدام وجودة المظهر.</p>
          <div style="margin-top:24px" class="rv rv-up">
            <a href="${u}" target="_blank" rel="noopener" class="btn btn-wa">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
              <span>اطلب صيانة</span>
            </a>
          </div>
        </div>
      </div>
      <div class="hs-right">
        <img src="${i.arch3}" alt="صيانة الزجاج والمرايا" />
        <div class="hs-right-overlay"></div>
      </div>
    </section>

    <section class="pad">
      <div class="wrap">
        <div class="s-head rv rv-up">
          <h2 class="s-title">تشمل خدمات <span class="gold">الصيانة</span></h2>
        </div>
        <div class="maint-grid">
          <div class="maint-card gc rv rv-up"><div class="maint-icon">${o("M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z")}</div><h3>استبدال الزجاج التالف</h3><p>نقوم باستبدال ألواح الزجاج التالفة أو المكسورة بخامات عالية الجودة تتناسب مع المكان.</p></div>
          <div class="maint-card gc rv rv-up"><div class="maint-icon">${o("M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.07 4.93a10 10 0 0 1 0 14.14 M4.93 4.93a10 10 0 0 0 0 14.14")}</div><h3>تغيير مفصلات الأبواب</h3><p>استبدال مفصلات أبواب زجاجية التالفة لضمان الفتح والإغلاق السلس.</p></div>
          <div class="maint-card gc rv rv-up"><div class="maint-icon">${o("M1 4h22v16H1z M1 10h23")}</div><h3>تغيير الإكسسوارات</h3><p>استبدال الإكسسوارات القديمة أو التالفة بإكسسوارات جديدة عالية الجودة.</p></div>
          <div class="maint-card gc rv rv-up"><div class="maint-icon">${o("M3 12l2-2 M5 10l7-7 7 7 M5 10v10a1 1 0 0 0 1 1h3 M15 21h3a1 1 0 0 0 1-1V10")}</div><h3>ضبط أبواب زجاجية</h3><p>ضبط وإعادة معايرة أبواب زجاجية لضمان عملها بشكل صحيح ومتناسق.</p></div>
          <div class="maint-card gc rv rv-up"><div class="maint-icon">${o("M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z")}</div><h3>إعادة تثبيت الوحدات</h3><p>إعادة تثبيت الوحدات الزجاجية التي فقدت استقرارها لضمان السلامة والمتانة.</p></div>
          <div class="maint-card gc rv rv-up"><div class="maint-icon">${o("M12 2a10 10 0 1 0 10 10 M2 12h20 M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10")}</div><h3>استبدال المرايات</h3><p>استبدال المرايات التالفة أو القديمة بمرايات جديدة حسب مواصفات المكان.</p></div>
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
          <div class="why-card gc rv rv-up"><div class="why-icon">${o("M12 22a10 10 0 1 0 10 10 M12 8v4l3 3")}</div><h3>سرعة الاستجابة</h3><p>نستجيب بسرعة لطلبات الصيانة ونحدد موعداً في أقرب وقت ممكن.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${o("M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z")}</div><h3>فحص الحالة قبل التنفيذ</h3><p>نفحص الحالة بدقة قبل البدء في العمل لتحديد أفضل حل مناسب.</p></div>
          <div class="why-card gc rv rv-up"><div class="why-icon">${o("M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z")}</div><h3>استخدام قطع مناسبة</h3><p>نستخدم قطع غيار وإكسسوارات عالية الجودة تتوافق مع طبيعة المنتج الأصلي.</p></div>
        </div>
      </div>
    </section>

    ${g("تحتاج صيانة؟","لا تتجاهل الزجاج التالف أو الأبواب غير المتزنة. تواصل معنا اليوم لإصلاح المشكلة قبل أن تتفاقم.")}
  `}function ss(){return v("تواصل معنا | البريق للزجاج والمرايا","تواصل مع البريق للزجاج والمرايا - اتصل بنا أو أرسل رسالة عبر واتساب أو املأ نموذج التواصل للحصول على عرض سعر مجاني.","/contact"),`
    <section class="hero-glass">
      <div class="hg-bg" style="background-image:url('${i.arch1}')"></div>
      <div class="hg-shapes">
        <div class="hg-shape" style="width:350px;height:350px;top:5%;left:5%;animation-duration:25s"></div>
        <div class="hg-shape" style="width:250px;height:250px;bottom:10%;right:8%;animation-duration:20s;animation-direction:reverse"></div>
      </div>
      <div class="hg-content">
        <div class="rv rv-right">
          ${h([{label:"الرئيسية",href:"/"},{label:"تواصل معنا",href:"/contact"}])}
          <div class="s-label">تواصل معنا</div>
          <h1 class="s-title" style="font-size:clamp(2rem,4vw,3rem)">تواصل مع <span class="gold">البريق</span></h1>
          <p class="s-sub">إذا كنت ترغب في تنفيذ مشروع جديد أو تحتاج إلى استشارة، يسعدنا استقبال استفساراتك. اختر طريقة التواصل التي تناسبك.</p>
          <div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap">
            <a href="tel:${p}" class="btn btn-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>${p}</span>
            </a>
            <a href="${u}" target="_blank" rel="noopener" class="btn btn-wa">
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
                <div class="cid-icon">${o("M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z")}</div>
                <div><h3>الهاتف وواتساب</h3><a href="tel:${p}" class="cinfo-phone">${p}</a></div>
              </div>
              <div class="cinfo-detail">
                <div class="cid-icon">${o("M12 22a10 10 0 1 0 10 10 M12 8v4l3 3")}</div>
                <div><h3>ساعات العمل</h3><p>السبت - الخميس</p><p>9:00 صباحاً - 8:00 مساءً</p></div>
              </div>
              <div class="cinfo-detail">
                <div class="cid-icon">${o("M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0z")}</div>
                <div><h3>مناطق الخدمة</h3><p>القاهرة الكبرى والجيزة والمناطق المجاورة</p></div>
              </div>
              <div class="cinfo-socials">
                <a href="${u}" target="_blank" rel="noopener" class="social-btn social-wa" aria-label="واتساب"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg></a>
                <a href="tel:${p}" class="social-btn social-ph" aria-label="اتصال"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>
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
                      ${z.map(s=>`<option>${s.name}</option>`).join("")}
                      <option>أخرى</option>
                    </select>
                  </div>
                  <div class="form-g">
                    <label>نوع الخدمة <span class="req">*</span></label>
                    <select id="service" name="service" required>
                      <option value="" disabled selected>اختر الخدمة</option>
                      ${b.map(s=>`<option>${s.name}</option>`).join("")}
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
                <a href="${u}" target="_blank" rel="noopener" class="btn btn-wa" style="justify-content:center">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                  <span>تواصل عبر واتساب</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function as(){return window.location.href="https://albareeq.vercel.app/admin/login",`
    <section style="min-height:80vh;display:flex;align-items:center;justify-content:center;padding-top:var(--nav-h);text-align:center">
      <div class="wrap rv rv-up" style="max-width:720px;">
        <div class="s-label">Admin</div>
        <h1 class="s-title" style="font-size:clamp(2.6rem,6vw,4rem)">لوحة تحكم الإدارة</h1>
        <p class="s-sub" style="margin:0 auto 32px;max-width:640px;">إذا لم يتم التحويل تلقائيًا، اضغط على الرابط التالي.</p>
        <a href="https://albareeq.vercel.app/admin/login" class="btn btn-gold" target="_blank" rel="noopener">فتح لوحة التحكم</a>
      </div>
    </section>
  `}function M(){return v("الصفحة غير موجودة | البريق للزجاج والمرايا","عذراً، الصفحة التي تبحث عنها غير موجودة. العودة للصفحة الرئيسية.","/404"),`
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
  `}const es={"/":N,"/services":Y,"/projects":U,"/gallery":K,"/about":$,"/quality":$,"/why-us":$,"/faq":$,"/areas":Q,"/maintenance":Z,"/contact":ss,"/admin":as},ts=[{pattern:/^\/services\/([\w-]+)$/,handler:s=>W(s[1])},{pattern:/^\/projects\/([\w-]+)$/,handler:s=>J(s[1])},{pattern:/^\/areas\/([\w-]+)$/,handler:s=>X(s[1])}];function C(){const s=window.location.pathname;let a=es[s];if(!a)for(const t of ts){const l=s.match(t.pattern);if(l){a=()=>t.handler(l);break}}const e=r("#app");e.innerHTML="",window.scrollTo(0,0),a?e.innerHTML=a():e.innerHTML=M(),_(),is(),rs(),os(),ns(),ds(),vs(),ps(),hs(),ls(s)}function is(){d("[data-link]").forEach(s=>{s.addEventListener("click",a=>{var t,l;a.preventDefault();const e=s.getAttribute("data-href")||s.getAttribute("href");if(!(!e||e==="#")){if(window.location.pathname===e){window.scrollTo({top:0,behavior:"smooth"});return}history.pushState(null,"",e),C(),(t=r("#hamburger"))==null||t.classList.remove("open"),(l=r("#navMenu"))==null||l.classList.remove("open"),document.body.style.overflow=""}})})}function ls(s){d(".nav-link").forEach(a=>{const e=a.getAttribute("href");if(!e)return;const t=e===s||s.startsWith("/services")&&e==="/services"||s==="/"&&e==="/";a.classList.toggle("active",t)})}const D=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(a.target.classList.add("in"),D.unobserve(a.target))})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});function rs(){d(".rv").forEach(s=>{s.classList.contains("in")||D.observe(s)})}function cs(s,a,e=2200){const t=performance.now(),l=n=>{const f=n-t,x=Math.min(f/e,1),L=1-Math.pow(1-x,3);s.textContent=Math.round(L*a),x<1&&requestAnimationFrame(l)};requestAnimationFrame(l)}const S=new IntersectionObserver(s=>{s.forEach(a=>{if(a.isIntersecting){const e=a.target,t=parseInt(e.getAttribute("data-target"),10);cs(e,t),S.unobserve(e)}})},{threshold:.5});function os(){d(".counter").forEach(s=>S.observe(s))}const H=new IntersectionObserver(s=>{s.forEach(a=>{if(a.isIntersecting){const e=a.target,t=e.getAttribute("data-width");setTimeout(()=>{e.style.width=t+"%"},300),H.unobserve(e)}})},{threshold:.3});function ns(){d(".pbar-fill").forEach(s=>H.observe(s))}function ds(){d(".faq-q").forEach(s=>{s.addEventListener("click",()=>{const a=s.closest(".faq-item"),e=a.classList.contains("open");d(".faq-item.open").forEach(t=>t.classList.remove("open")),e||a.classList.add("open"),s.setAttribute("aria-expanded",(!e).toString())})})}function vs(){d("[data-filter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-filter");d("[data-filter]").forEach(e=>e.classList.remove("active")),s.classList.add("active"),d("#projGrid .proj-card").forEach(e=>{var l;const t=e.getAttribute("data-category")||((l=e.querySelector("[data-category]"))==null?void 0:l.getAttribute("data-category"));e.classList.toggle("hidden",a!=="all"&&t!==a)})})}),d("[data-gfilter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-gfilter");d("[data-gfilter]").forEach(e=>e.classList.remove("active")),s.classList.add("active"),d("#galGrid .gal-item").forEach(e=>{const t=e.getAttribute("data-gcat");e.classList.toggle("hidden",a!=="all"&&t!==a)})})})}function ps(){const s=r("#contactForm");if(!s)return;const a={name:{el:r("#name"),err:r("#nameErr"),validate:e=>e.trim().length>=2?"":"الاسم مطلوب (على الأقل حرفان)"},phone:{el:r("#phone"),err:r("#phoneErr"),validate:e=>/^[0-9+\s\-()]{7,15}$/.test(e.trim())?"":"رقم الهاتف غير صحيح"},service:{el:r("#service"),err:r("#serviceErr"),validate:e=>e?"":"يرجى اختيار نوع الخدمة"},message:{el:r("#message"),err:r("#messageErr"),validate:e=>e.trim().length>=10?"":"يرجى كتابة وصف (10 أحرف على الأقل)"}};Object.keys(a).forEach(e=>{const t=a[e];t.el.addEventListener("blur",()=>{const l=t.validate(t.el.value);t.err.textContent=l,t.el.classList.toggle("err",!!l)}),t.el.addEventListener("input",()=>{if(t.el.classList.contains("err")){const l=t.validate(t.el.value);t.err.textContent=l,t.el.classList.toggle("err",!!l)}})}),s.addEventListener("submit",async e=>{e.preventDefault();let t=!0;if(Object.keys(a).forEach(P=>{const w=a[P],j=w.validate(w.el.value);w.err.textContent=j,w.el.classList.toggle("err",!!j),j&&(t=!1)}),!t)return;const l=r("#submitBtn"),n=r("#submitText"),f=r("#submitSpinner");l.disabled=!0,n.style.display="none",f.style.display="flex";const x=a.name.el.value.trim(),L=a.phone.el.value.trim(),T=a.service.el.value,V=a.message.el.value.trim(),F=`*طلب عرض سعر جديد*

👤 الاسم:
${x}

📞 رقم الهاتف:
${L}

🛠️ الخدمة المطلوبة:
${T}

📝 تفاصيل الطلب:
${V}`;window.open(`https://wa.me/201118049615?text=${encodeURIComponent(F)}`,"_blank"),l.disabled=!1,n.style.display="inline",f.style.display="none",s.reset()})}let y=[],m=0;function hs(){r("#lightbox"),r("#lightbox-img"),r("#lightbox-caption"),d("[data-lightbox]").forEach(s=>{s.addEventListener("click",()=>{y=d("[data-lightbox]:not(.hidden)").map(e=>{var t;return{src:e.getAttribute("data-lightbox"),cap:e.getAttribute("data-caption")||((t=e.querySelector("img"))==null?void 0:t.getAttribute("alt"))||""}});const a=s.getAttribute("data-lightbox");m=y.findIndex(e=>e.src===a),m<0&&(m=0),O()})})}function O(){if(y.length===0)return;const s=y[m];r("#lightbox-img").src=s.src,r("#lightbox-img").alt=s.cap,r("#lightbox-caption").textContent=s.cap,r("#lightbox").classList.add("open"),document.body.style.overflow="hidden"}function E(){r("#lightbox").classList.remove("open"),document.body.style.overflow=""}function k(s){m+=s,m<0&&(m=y.length-1),m>=y.length&&(m=0),O()}function gs(){const s=r("#navbar"),a=r("#hamburger"),e=r("#navMenu");window.addEventListener("scroll",()=>{s.classList.toggle("scrolled",window.scrollY>50),r("#back-to-top").classList.toggle("vis",window.scrollY>400),ms()}),a.addEventListener("click",()=>{a.classList.toggle("open"),e.classList.toggle("open"),document.querySelectorAll(".nav-dropdown > .nav-link").forEach(t=>{t.addEventListener("click",l=>{window.innerWidth<=768&&(l.preventDefault(),t.parentElement.classList.toggle("open"))})}),e.classList.contains("open")?document.body.style.overflow="hidden":document.body.style.overflow=""}),document.addEventListener("click",t=>{s.contains(t.target)||(a.classList.remove("open"),e.classList.remove("open"),document.body.style.overflow="")}),e.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{a.classList.remove("open"),e.classList.remove("open"),document.body.style.overflow=""})})}function ms(){const s=r("#progress-bar"),a=window.scrollY,e=document.documentElement.scrollHeight-window.innerHeight;s.style.width=e>0?`${a/e*100}%`:"0%"}function us(){const s=r("#cursor-glow");let a=0,e=0,t=0,l=0;document.addEventListener("mousemove",n=>{a=n.clientX,e=n.clientY,s.style.opacity="1"}),document.addEventListener("mouseleave",()=>{s.style.opacity="0"}),function n(){t+=(a-t)*.08,l+=(e-l)*.08,s.style.left=t+"px",s.style.top=l+"px",requestAnimationFrame(n)}()}function fs(){const s=r("#theme-toggle"),a=r("#theme-icon-dark"),e=r("#theme-icon-light");localStorage.getItem("albariq-theme")==="light"&&(document.body.classList.add("light"),a.style.display="none",e.style.display="block"),s.addEventListener("click",()=>{const t=document.body.classList.toggle("light");localStorage.setItem("albariq-theme",t?"light":"dark"),a.style.display=t?"none":"block",e.style.display=t?"block":"none"})}window.addEventListener("popstate",C);document.addEventListener("DOMContentLoaded",()=>{gs(),us(),fs(),r("#lightbox-close").addEventListener("click",E),r("#lightbox-overlay").addEventListener("click",E),r("#lightbox-prev").addEventListener("click",()=>k(-1)),r("#lightbox-next").addEventListener("click",()=>k(1)),document.addEventListener("keydown",s=>{r("#lightbox").classList.contains("open")&&(s.key==="Escape"&&E(),s.key==="ArrowRight"&&k(-1),s.key==="ArrowLeft"&&k(1))}),r("#back-to-top").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"})),C()});
