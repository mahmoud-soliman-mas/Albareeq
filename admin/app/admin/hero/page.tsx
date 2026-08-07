'use client';

import { useMemo, useState } from 'react';
import DashboardShell from '@/components/admin/DashboardShell';
import { FormBuilder, type FieldConfig } from '@/components/admin/FormBuilder';
import { ImageUploader } from '@/components/admin/ImageUploader';
import { useAdminStorage } from '@/services/storage';

export default function AdminHeroPage() {
  const { getData, updateData } = useAdminStorage();
  const [formData, setFormData] = useState(getData().hero);
  const [saved, setSaved] = useState(false);

  const fields: FieldConfig[] = useMemo(() => [
    { name: 'title', label: 'عنوان البطل', type: 'text', value: formData.title, placeholder: 'أدخل عنوان البطل هنا' },
    { name: 'subtitle', label: 'العنوان الفرعي', type: 'text', value: formData.subtitle, placeholder: 'أدخل العنوان الفرعي' },
    { name: 'description', label: 'الوصف', type: 'textarea', value: formData.description, placeholder: 'أدخل الوصف التفصيلي' },
    { name: 'ctaPrimary', label: 'زر CTA الرئيسي', type: 'text', value: formData.ctaPrimary, placeholder: 'نص الزر الرئيسي' },
    { name: 'ctaSecondary', label: 'زر CTA الثانوي', type: 'text', value: formData.ctaSecondary, placeholder: 'نص الزر الثانوي' },
    { name: 'media', label: 'رابط الخلفية', type: 'url', value: formData.media, placeholder: 'رابط صورة أو فيديو الخلفية' },
  ], [formData]);

  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    updateData((current) => ({ ...current, hero: formData }));
    setSaved(true);
  };

  return (
    <DashboardShell>
      <div className="grid gap-8 xl:grid-cols-[0.72fr_0.68fr]">
        <div className="space-y-6">
          <div className="glass-card rounded-[28px] border border-white/10 p-6 shadow-glass">
            <h2 className="text-2xl font-semibold text-white">تحرير قسم البطل</h2>
            <p className="mt-2 text-sm text-slate-400">قم بتحديث النصوص والصورة الخلفية لعرض مميز في الصفحة الرئيسية.</p>
            <FormBuilder fields={fields} onChange={handleFieldChange} />
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={handleSave} className="rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary/90">
                حفظ التغييرات
              </button>
              {saved ? <span className="rounded-3xl bg-slate-900/70 px-4 py-3 text-sm text-slate-300">تم الحفظ بنجاح</span> : null}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-[28px] border border-white/10 p-6 shadow-glass">
            <h3 className="text-xl font-semibold text-white">المعاينة المباشرة</h3>
            <div className="mt-6 rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-primary/80">البطل</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">{formData.title}</h3>
              <p className="mt-3 text-lg text-slate-300">{formData.subtitle}</p>
              <p className="mt-4 text-slate-400">{formData.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-slate-950">{formData.ctaPrimary}</button>
                <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">{formData.ctaSecondary}</button>
              </div>
              <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-black/30">
                {formData.mediaType === 'video' ? (
                  <video src={formData.media} controls className="h-64 w-full object-cover" />
                ) : (
                  <img src={formData.media} alt="Hero background" className="h-64 w-full object-cover" />
                )}
              </div>
            </div>
          </div>
          <ImageUploader value={[formData.media]} onChange={(images) => { if (images.length) setFormData((prev) => ({ ...prev, media: images[0], mediaType: 'image' })); }} label="رابط الخلفية أو التحميل" hint="يمكنك تحميل صورة جديدة أو لصق رابط صورة موجودة." />
        </div>
      </div>
    </DashboardShell>
  );
}
