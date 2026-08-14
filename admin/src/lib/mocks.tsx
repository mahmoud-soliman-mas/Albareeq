import { LucideIcon, Bell, FileText, ImageIcon, LayoutDashboard, MapPin, Settings, ShoppingBag, Users, Zap } from 'lucide-react';

export const stats = [
  { label: 'الخدمات', value: 12, description: 'عناصر الخدمة الحالية', icon: <ShoppingBag size={20} /> },
  { label: 'المشاريع', value: 9, description: 'مشروع قيد العرض', icon: <LayoutDashboard size={20} /> },
  { label: 'صور المعرض', value: 34, description: 'عدد صور المعرض', icon: <ImageIcon size={20} /> },
  { label: 'آخر تحديث', value: 'اليوم', description: 'آخر تعديل تم تسجيله', icon: <Zap size={20} /> },
];

export const activities = [
  { id: 'a1', title: 'تحديث قسم الخدمات', description: 'تمت إضافة خدمة جديدة باسم واجهات محلات.', time: 'قبل 10 دقائق' },
  { id: 'a2', title: 'رفع صور عرض المشروع', description: 'تمت إضافة 6 صور جديدة لمشروع واجهة زجاجية.', time: 'قبل ساعة' },
  { id: 'a3', title: 'تحديث بيانات الاتصال', description: 'تم تعديل رقم واتساب وروابط التواصل الاجتماعي.', time: 'قبل 3 ساعات' },
];

export const quickActions = [
  { label: 'إدارة الخدمات', description: 'أضف أو حرر معلومات الخدمة بسهولة.', icon: <FileText size={18} /> },
  { label: 'تحرير الصفحة الرئيسية', description: 'تعديل عنوان البطل وأزرار الدعوة لاتخاذ إجراء.', icon: <Bell size={18} /> },
  { label: 'قاعدة الوسائط', description: 'رفع الصور ونسخ الروابط بسرعة.', icon: <ImageIcon size={18} /> },
  { label: 'إعدادات الموقع', description: 'تحديث العلامة التجارية وبيانات SEO.', icon: <Settings size={18} /> },
];
