'use client';

import { useMemo, useState } from 'react';
import DashboardShell from '@/components/admin/DashboardShell';
import { FormBuilder, type FieldConfig } from '@/components/admin/FormBuilder';
import { useAdminStorage } from '@/services/storage';

export default function AdminContactPage() {
  const { getData, updateData } = useAdminStorage();
  const [contact, setContact] = useState(getData().contact);
  const [saved, setSaved] = useState(false);

  const fields: FieldConfig[] = useMemo(() => [
    { name: 'phone', label: 'رقم الهاتف', type: 'text', value: contact.phone, placeholder: 'أدخل رقم الهاتف' },
    { name: 'whatsapp', label: 'رابط واتساب', type: 'url', value: contact.whatsapp, placeholder: 'أدخل رابط واتساب' },
    { name: 'email', label: 'البريد الإلكتروني', type: 'email', value: contact.email, placeholder: 'أدخل البريد الإلكتروني' },
    { name: 'address', label: 'العنوان', type: 'text', value: contact.address, placeholder: 'أدخل العنوان' },
    { name: 'mapLink', label: 'رابط الخريطة', type: 'url', value: contact.mapLink, placeholder: 'أدخل رابط Google Maps' },
  ], [contact]);

  const handleFieldChange = (name: string, value: string) => {
    setContact((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    updateData((current) => ({ ...current, contact }));
    setSaved(true);
  };

  return (
    <DashboardShell>
      <div className="grid gap-8 lg:grid-cols-[0.72fr_0.68fr]">
        <div className="glass-card rounded-[28px] border border-white/10 p-6 shadow-glass">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">بيانات الاتصال</h2>
            <p className="text-sm text-slate-400">قم بتحديث معلومات الاتصال وروابط المراسلة.</p>
          </div>
          <FormBuilder fields={fields} onChange={handleFieldChange} />
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={handleSave} className="rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary/90">حفظ التحديثات</button>
            {saved ? <span className="rounded-3xl bg-slate-900/70 px-4 py-3 text-sm text-slate-300">تم حفظ البيانات</span> : null}
          </div>
        </div>

        <div className="glass-card rounded-[28px] border border-white/10 p-6 shadow-glass">
          <h3 className="text-xl font-semibold text-white">معاينة الاتصال</h3>
          <div className="mt-6 space-y-4 rounded-[24px] border border-white/10 bg-slate-950/70 p-5">
            <div>
              <h4 className="text-sm text-slate-400">الهاتف</h4>
              <p className="mt-2 text-base text-white">{contact.phone}</p>
            </div>
            <div>
              <h4 className="text-sm text-slate-400">واتساب</h4>
              <p className="mt-2 text-base text-white">{contact.whatsapp}</p>
            </div>
            <div>
              <h4 className="text-sm text-slate-400">البريد</h4>
              <p className="mt-2 text-base text-white">{contact.email}</p>
            </div>
            <div>
              <h4 className="text-sm text-slate-400">العنوان</h4>
              <p className="mt-2 text-base text-white">{contact.address}</p>
            </div>
            <div>
              <h4 className="text-sm text-slate-400">خريطة Google</h4>
              <a href={contact.mapLink} target="_blank" rel="noreferrer" className="text-sm text-primary underline">عرض على الخريطة</a>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
