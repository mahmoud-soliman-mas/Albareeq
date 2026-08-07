import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-primary/80">لوحة تحكم</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">مرحباً بك في لوحة الإدارة</h1>
            <p className="max-w-2xl text-base text-slate-300">
              هنا يمكنك إدارة محتوى الموقع، تحديث الخدمات، المشاريع، معرض الصور، وأي إعدادات عامة.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <Link href="/admin/login" className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-base font-semibold text-slate-950 transition hover:bg-primary/90">
              تسجيل الدخول كمسؤول
            </Link>
            <Link href="/admin/dashboard" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:border-primary">
              افتح لوحة البيانات
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
