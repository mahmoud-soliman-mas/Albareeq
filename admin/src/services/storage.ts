export interface AdminData {
  hero: { title: string; subtitle: string; description: string; ctaPrimary: string; ctaSecondary: string; media: string; mediaType: 'image' | 'video' };
  about: { headline: string; description: string; stats: { label: string; value: string }[]; images: string[] };
  services: { id: string; title: string; description: string; image: string }[];
  projects: { id: string; title: string; category: string; location: string; description: string; coverImage: string; gallery: string[] }[];
  testimonials: { id: string; name: string; position: string; quote: string; avatar: string }[];
  faq: { id: string; question: string; answer: string }[];
  contact: { phone: string; whatsapp: string; email: string; address: string; mapLink: string; social: { platform: string; url: string }[] };
  settings: { companyName: string; seoTitle: string; metaDescription: string; keywords: string; logo: string; favicon: string; ogImage: string };
  media: string[];
}

const initialData: AdminData = {
  hero: {
    title: 'البريق للزجاج والمرايا',
    subtitle: 'تصميم راقٍ وتنفيذ دقيق لكل مشروع',
    description: 'خبرة طويلة في تنفيذ الزجاج السيكوريت، المرايات، واجهات المحلات، وكبائن الشاور بأعلى جودة.',
    ctaPrimary: 'تواصل معنا',
    ctaSecondary: 'اطلب عرض سعر',
    media: 'https://images.pexels.com/photos/3709404/pexels-photo-3709404.jpeg?auto=compress&cs=tinysrgb&w=1200',
    mediaType: 'image',
  },
  about: {
    headline: 'نحن نقدم حلول زجاجية متكاملة لأي مساحة',
    description: 'فريق متخصص في تصميم وتركيب الزجاج والمرايا مع أعلى معايير الأمان والجودة.',
    stats: [
      { label: 'مشروع ناجح', value: '120+' },
      { label: 'عملاء راضون', value: '95%' },
      { label: 'سنوات خبرة', value: '15' },
    ],
    images: [
      'https://images.pexels.com/photos/14925511/pexels-photo-14925511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7227629/pexels-photo-7227629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  services: [
    { id: 's1', title: 'واجهات الزجاج السيكوريت', description: 'تركيب واجهات زجاجية للمحلات والشركات بتصميمات عصرية.', image: 'https://images.pexels.com/photos/9784184/pexels-photo-9784184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { id: 's2', title: 'كبائن الشاور', description: 'تصميمات متنوعة من كبائن الشاور الزجاجية حسب الطلب.', image: 'https://images.pexels.com/photos/7227629/pexels-photo-7227629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  ],
  projects: [
    { id: 'p1', title: 'واجهة محل تجاري', category: 'واجهات', location: 'مدينة نصر', description: 'تصميم واجهة زجاجية عصرية تناسب نشاط المتجر.', coverImage: 'https://images.pexels.com/photos/9784184/pexels-photo-9784184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', gallery: ['https://images.pexels.com/photos/3709404/pexels-photo-3709404.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'] },
  ],
  testimonials: [
    { id: 't1', name: 'أحمد مصطفى', position: 'مالك محل', quote: 'خدمة احترافية وجودة عالية في تنفيذ الواجهة الزجاجية.', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=200&w=200' },
  ],
  faq: [
    { id: 'f1', question: 'كم يستغرق تركيب الواجهة الزجاجية؟', answer: 'يختلف الوقت حسب حجم المشروع، عادة يتراوح بين 7 إلى 14 يومًا.' },
  ],
  contact: {
    phone: '+201118049615',
    whatsapp: 'https://wa.me/201118049615',
    email: 'info@albariqglass.com',
    address: 'القاهرة، مصر',
    mapLink: 'https://maps.google.com/?q=القاهرة',
    social: [
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'Facebook', url: 'https://facebook.com' },
    ],
  },
  settings: {
    companyName: 'البريق للزجاج والمرايا',
    seoTitle: 'البريق للزجاج والمرايا | حلول زجاجية متكاملة',
    metaDescription: 'شركة متخصصة في تصميم وتصنيع وتركيب الزجاج السيكوريت والمرايات في مصر.',
    keywords: 'زجاج, مرايات, واجهات محلات, كبائن شاور, درابزين',
    logo: '/logo.elbariq.png',
    favicon: '/favicon.ico',
    ogImage: 'https://images.pexels.com/photos/3709404/pexels-photo-3709404.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  media: [
    'https://images.pexels.com/photos/3709404/pexels-photo-3709404.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/9784184/pexels-photo-9784184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ],
};

const STORAGE_KEY = 'albariq_admin_data_v1';

function saveData(data: AdminData) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadData(): AdminData {
  if (typeof window === 'undefined') return initialData;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
    return initialData;
  }
  try {
    return JSON.parse(stored) as AdminData;
  } catch {
    return initialData;
  }
}

export function useAdminStorage() {
  const getData = (): AdminData => loadData();
  const updateData = (updater: (current: AdminData) => AdminData) => {
    const current = loadData();
    const next = updater(current);
    saveData(next);
    return next;
  };
  return { getData, updateData };
}
