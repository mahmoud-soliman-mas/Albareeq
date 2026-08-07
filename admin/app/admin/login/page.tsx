'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signIn } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signIn(email, password);
      router.push('/admin/dashboard');
    } catch (err) {
      setError('بيانات تسجيل الدخول غير صحيحة. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="w-full max-w-xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-primary/80">لوحة الإدارة</p>
          <h1 className="text-3xl font-semibold text-white">تسجيل دخول المسؤول</h1>
          <p className="text-sm text-slate-400">استخدم بيانات الدخول الآمنة للوصول إلى لوحة التحكم.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-200">البريد الإلكتروني</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-3xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition focus:border-primary/70 focus:ring-2 focus:ring-primary/10"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-slate-200">كلمة المرور</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-3xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition focus:border-primary/70 focus:ring-2 focus:ring-primary/10"
            />
          </div>

          {error ? <p className="rounded-3xl bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p> : null}

          <button type="submit" disabled={loading} className="flex w-full items-center justify-center rounded-3xl bg-primary px-5 py-3 text-base font-semibold text-slate-950 transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70">
            {loading ? 'جارٍ التحقق...' : 'دخول'}
          </button>
        </form>
      </motion.section>
    </main>
  );
}
