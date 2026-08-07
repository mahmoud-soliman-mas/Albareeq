'use client';

import DashboardShell from '@/components/admin/DashboardShell';

export default function AdminTestimonialsPage() {
  return (
    <DashboardShell>
      <div className="space-y-6 rounded-[28px] border border-white/10 bg-slate-950/70 p-8 shadow-glass">
        <h1 className="text-3xl font-semibold text-white">آراء العملاء</h1>
        <p className="text-slate-300">يمكنك عرض وتحرير مراجعات العملاء من هذه الصفحة.</p>
      </div>
    </DashboardShell>
  );
}
