'use client';

import DashboardShell from '@/components/admin/DashboardShell';

export default function AdminFaqPage() {
  return (
    <DashboardShell>
      <div className="space-y-6 rounded-[28px] border border-white/10 bg-slate-950/70 p-8 shadow-glass">
        <h1 className="text-3xl font-semibold text-white">الأسئلة الشائعة</h1>
        <p className="text-slate-300">يمكنك تعديل أسئلة وأجوبة الموقع من هذه الواجهة لاحقًا.</p>
      </div>
    </DashboardShell>
  );
}
