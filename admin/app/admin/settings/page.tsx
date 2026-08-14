'use client';

import { useMemo, useState } from 'react';
import DashboardShell from '@/components/admin/DashboardShell';
import { FormBuilder, type FieldConfig } from '@/components/admin/FormBuilder';
import { ImageUploader } from '@/components/admin/ImageUploader';
import { useAdminStorage } from '@/services/storage';

export default function AdminSettingsPage() {
  const { getData, updateData } = useAdminStorage();
  const [settings, setSettings] = useState(getData().settings);
  const [saved, setSaved] = useState(false);

  const fields: FieldConfig[] = useMemo(() => [
    { name: 'companyName', label: 'اسم الشركة', type: 'text', value: settings.companyName },
    { name: 'seoTitle', label: 'عنوان SEO', type: 'text', value: settings.seoTitle },
    { name: 'metaDescription', label: 'وصف الميتا', type: 'textarea', value: settings.metaDescription },
    { name: 'keywords', label: 'الكلمات المفتاحية', type: 'text', value: settings.keywords },
  ], [settings]);

  const handleFieldChange = (name: string, value: string) => {
    setSettings((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    updateData((current) => ({ ...current, settings }));
    setSaved(true);
  };

  return (
    <DashboardShell>
      <div className="grid gap-8 xl:grid-cols-[0.72fr_0.68fr]">
        <div className="glass-card rounded-[28px] border border-white/10 p-6 shadow-glass">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-primary/80">إعدادات الموقع</p>
            <h2 className="text-3xl font-semibold text-white">تحديث إعدادات العلامة التجارية</h2>
          </div>
          <FormBuilder fields={fields} onChange={handleFieldChange} />
          <ImageUploader value={[settings.logo]} onChange={(images) => setSettings((prev) => ({ ...prev, logo: images[0] || prev.logo }))} label="تحميل الشعار" />
          <ImageUploader value={[settings.favicon]} onChange={(images) => setSettings((prev) => ({ ...prev, favicon: images[0] || prev.favicon }))} label="تحميل الفافيكون" />
          <ImageUploader value={[settings.ogImage]} onChange={(images) => setSettings((prev) => ({ ...prev, ogImage: images[0] || prev.ogImage }))} label="تحميل صورة Open Graph" />
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={handleSave} className="rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary/90">حفظ الإعدادات</button>
            {saved ? <span className="rounded-3xl bg-slate-900/70 px-4 py-3 text-sm text-slate-300">تم الحفظ</span> : null}
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-[28px] border border-white/10 p-6 shadow-glass">
            <h3 className="text-xl font-semibold text-white">معاينة الهوية</h3>
            <div className="mt-6 space-y-4 rounded-[24px] border border-white/10 bg-slate-950/70 p-5">
              <div className="space-y-1">
                <p className="text-sm text-slate-400">اسم الشركة</p>
                <p className="text-base text-white">{settings.companyName}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-400">عنوان SEO</p>
                <p className="text-base text-white">{settings.seoTitle}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-400">كلمات مفتاحية</p>
                <p className="text-base text-white">{settings.keywords}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 text-center">
                  <p className="text-sm text-slate-400">الشعار</p>
                  <img src={settings.logo} alt="logo preview" className="mx-auto mt-3 h-16 w-16 rounded-2xl object-cover" />
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 text-center">
                  <p className="text-sm text-slate-400">فافيكون</p>
                  <img src={settings.favicon} alt="favicon preview" className="mx-auto mt-3 h-16 w-16 rounded-2xl object-cover" />
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 text-center">
                  <p className="text-sm text-slate-400">OG Image</p>
                  <img src={settings.ogImage} alt="og preview" className="mx-auto mt-3 h-16 w-16 rounded-2xl object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
