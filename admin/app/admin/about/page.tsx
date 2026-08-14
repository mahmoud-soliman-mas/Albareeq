'use client';

import DashboardShell from '@/components/admin/DashboardShell';

export default function AdminAboutPage() {
  return (
    <DashboardShell>
      <div className="space-y-6 rounded-[28px] border border-white/10 bg-slate-950/70 p-8 shadow-glass">
        <h1 className="text-3xl font-semibold text-white">قسم من نحن</h1>
        <p className="text-slate-300">يمكنك تحرير محتوى صفحة من نحن من هنا. هذه الصفحة تم إعدادها لتجنب خطأ 404 عند الدخول إلى الرابط.</p>
      </div>
    </DashboardShell>
  );
}
