'use client';

import DashboardShell from '@/components/admin/DashboardShell';
import { motion } from 'framer-motion';
import { stats, activities, quickActions } from '@/lib/mocks';

export default function AdminDashboardPage() {
  return (
    <DashboardShell>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="space-y-8">
        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-primary/80">المرحبا بك</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">نظرة سريعة على الأداء</h2>
                </div>
                <div className="rounded-3xl bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                  محدث في: {new Date().toLocaleDateString('ar-EG')}
                </div>
              </div>
              <p className="mt-5 text-slate-300">لوحة بيانات مرنة لإدارة المحتوى مع تجربة إدارية سلسة ومرنة.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="glass-card rounded-[26px] border border-white/10 p-6 shadow-glass">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.26em] text-slate-400">{item.label}</p>
                      <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                    </div>
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-[28px] border border-white/10 p-6 shadow-glass">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.26em] text-primary/80">النشاط الأخير</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">سجل التحديثات</h3>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-sm font-medium text-white">{activity.title}</p>
                    <p className="mt-2 text-sm text-slate-400">{activity.description}</p>
                    <p className="mt-3 text-xs uppercase text-slate-500">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[28px] border border-white/10 p-6 shadow-glass">
              <h3 className="text-xl font-semibold text-white">اجراءات سريعة</h3>
              <div className="mt-5 grid gap-3">
                {quickActions.map((action) => (
                  <button key={action.label} className="rounded-3xl border border-white/10 bg-slate-950/60 px-4 py-3 text-left text-white transition hover:border-primary/40 hover:bg-slate-900">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold">{action.label}</p>
                        <p className="mt-1 text-sm text-slate-400">{action.description}</p>
                      </div>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-primary">
                        {action.icon}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </DashboardShell>
  );
}
