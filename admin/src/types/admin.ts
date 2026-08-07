export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  coverImage: string;
  gallery: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  position: string;
  quote: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactSettings {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapLink: string;
  social: { platform: string; url: string }[];
}

export interface SiteSettings {
  companyName: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string;
  logo: string;
  favicon: string;
  ogImage: string;
}

export interface AdminData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    media: string;
    mediaType: 'image' | 'video';
  };
  about: {
    headline: string;
    description: string;
    stats: { label: string; value: string }[];
    images: string[];
  };
  services: ServiceItem[];
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
  faq: FAQItem[];
  contact: ContactSettings;
  settings: SiteSettings;
  media: string[];
}
