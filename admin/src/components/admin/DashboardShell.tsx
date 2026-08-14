'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Activity, ArrowRight, ChevronLeft, Search, Settings, ShieldCheck, Sidebar, Sparkles, Tag, Users, ImageIcon, LayoutDashboard, ClipboardList, FileText, Zap, MapPin } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const navigation = [
  { href: '/admin/dashboard', label: 'لوحة البيانات', icon: <LayoutDashboard size={18} /> },
  { href: '/admin/hero', label: 'الصفحة الرئيسية', icon: <Sparkles size={18} /> },
  { href: '/admin/about', label: 'قسم من نحن', icon: <Users size={18} /> },
  { href: '/admin/services', label: 'الخدمات', icon: <ClipboardList size={18} /> },
  { href: '/admin/projects', label: 'المشاريع', icon: <Tag size={18} /> },
  { href: '/admin/gallery', label: 'المعرض', icon: <ImageIcon size={18} /> },
  { href: '/admin/testimonials', label: 'آراء العملاء', icon: <Activity size={18} /> },
  { href: '/admin/faq', label: 'الأسئلة الشائعة', icon: <FileText size={18} /> },
  { href: '/admin/contact', label: 'بيانات الاتصال', icon: <MapPin size={18} /> },
  { href: '/admin/settings', label: 'إعدادات الموقع', icon: <Settings size={18} /> },
  { href: '/admin/media', label: 'مكتبة الوسائط', icon: <ImageIcon size={18} /> },
];

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, signOut } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const currentSection = useMemo(() => navigation.find((item) => item.href === pathname), [pathname]);

  if (!hydrated) {
    return <div className="min-h-screen bg-slate-950 p-6 text-slate-300">جار التحقق...</div>;
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-slate-950 p-6 text-slate-300">جار إعادة التوجيه إلى صفحة الدخول...</div>;
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(229,194,107,0.12),_transparent_25%),linear-gradient(180deg,_#05070d_0%,_#0b1221_100%)] text-white">
      <div className="relative flex min-h-screen flex-col lg:flex-row">
        <aside className={`fixed inset-y-0 left-0 z-30 w-full max-w-full bg-slate-950/95 backdrop-blur-xl border-r border-white/10 transition-transform duration-300 lg:static lg:translate-x-0 lg:w-72 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
          <div className="flex h-full flex-col gap-6 overflow-hidden px-5 py-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-primary/80">البريق</p>
                <h2 className="mt-2 text-xl font-semibold">لوحة الإدارة</h2>
              </div>
              <button type="button" className="lg:hidden text-slate-300" onClick={() => setSidebarOpen(false)} aria-label="إغلاق القائمة">
                <ChevronLeft size={22} />
              </button>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-glass">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">أدمن النظام</p>
                  <p className="text-xs text-slate-400">مسؤول الموقع</p>
                </div>
              </div>
            </div>

            <nav className="flex-1 space-y-1 overflow-y-auto pr-1">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} className={`group flex items-center justify-between gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition ${active ? 'bg-primary/15 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`} onClick={() => setSidebarOpen(false)}>
                    <span className="flex items-center gap-3">
                      <span className="text-primary/80">{item.icon}</span>
                      {item.label}
                    </span>
                    <ArrowRight size={18} className={`${active ? 'text-white' : 'text-slate-500'}`} />
                  </Link>
                );
              })}
            </nav>

            <div className="space-y-2">
              <button type="button" onClick={() => { signOut(); router.replace('/admin/login'); }} className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10">
                تسجيل الخروج
              </button>
            </div>
          </div>
        </aside>

        <div className="flex-1 lg:pl-72">
          <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl px-5 py-4 shadow-glass lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-primary transition hover:bg-white/10 lg:hidden" onClick={() => setSidebarOpen(true)} aria-label="فتح القائمة">
                  <Sidebar size={20} />
                </button>
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-primary/80">البريق</p>
                  <h1 className="text-lg font-semibold text-white">{currentSection?.label ?? 'لوحة الإدارة'}</h1>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <label htmlFor="dashboard-search" className="sr-only">بحث</label>
                <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-950/70 p-3 text-slate-300 focus-within:ring-2 focus-within:ring-primary/20">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input id="dashboard-search" type="search" placeholder="ابحث في لوحة التحكم" className="w-full border-none bg-transparent pr-11 text-sm text-slate-200 outline-none placeholder:text-slate-500" />
                </div>
                <div className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  <div className="h-10 w-10 rounded-3xl bg-primary/10 text-primary flex items-center justify-center">A</div>
                  <div className="text-right leading-tight">
                    <p className="text-sm font-semibold text-white">مدير النظام</p>
                    <p className="text-xs text-slate-500">admin@albariq.com</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="min-h-[calc(100vh-106px)] px-5 py-6 sm:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              {children}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
