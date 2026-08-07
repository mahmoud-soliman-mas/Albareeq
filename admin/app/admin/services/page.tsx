'use client';

import { useState } from 'react';
import DashboardShell from '@/components/admin/DashboardShell';
import { DataTable } from '@/components/admin/DataTable';
import { FormBuilder, type FieldConfig } from '@/components/admin/FormBuilder';
import { ImageUploader } from '@/components/admin/ImageUploader';
import { ConfirmDialog } from '@/components/admin/ConfirmDialog';
import { useAdminStorage } from '@/services/storage';
import { Trash2, Plus, Edit3 } from 'lucide-react';

export default function AdminServicesPage() {
  const { getData, updateData } = useAdminStorage();
  const [services, setServices] = useState(getData().services);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string>('');
  const [formState, setFormState] = useState({ title: '', description: '', image: '' });

  const handleEdit = (id: string) => {
    const item = services.find((service) => service.id === id);
    if (!item) return;
    setEditingItem(id);
    setFormState({ title: item.title, description: item.description, image: item.image });
  };

  const handleDelete = (id: string) => {
    setDeleteTarget(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    updateData((current) => ({ ...current, services: current.services.filter((item) => item.id !== deleteTarget) }));
    const next = services.filter((item) => item.id !== deleteTarget);
    setServices(next);
    setShowConfirm(false);
  };

  const saveService = () => {
    if (!editingItem) return;
    const next = services.map((item) => item.id === editingItem ? { ...item, ...formState } : item);
    setServices(next);
    updateData((current) => ({ ...current, services: next }));
    setEditingItem(null);
  };

  const addService = () => {
    const newService = { id: `s-${Date.now()}`, title: 'خدمة جديدة', description: 'وصف الخدمة', image: '' };
    const next = [newService, ...services];
    setServices(next);
    updateData((current) => ({ ...current, services: next }));
  };

  const fields: FieldConfig[] = [
    { name: 'title', label: 'عنوان الخدمة', type: 'text', value: formState.title },
    { name: 'description', label: 'الوصف', type: 'textarea', value: formState.description },
    { name: 'image', label: 'رابط الصورة', type: 'url', value: formState.image },
  ];

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-primary/80">الخدمات</p>
            <h2 className="text-3xl font-semibold text-white">إدارة الخدمات</h2>
          </div>
          <button type="button" onClick={addService} className="inline-flex items-center gap-2 rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary/90">
            <Plus size={18} /> إضافة خدمة جديدة
          </button>
        </div>

        <DataTable
          columns={[
            { header: 'الخدمة', accessor: 'title' },
            { header: 'الوصف', accessor: 'description' },
          ]}
          data={services}
          actions={(item) => (
            <div className="flex items-center gap-2 justify-end">
              <button type="button" onClick={() => handleEdit(item.id)} className="rounded-3xl bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10"><Edit3 size={16} /></button>
              <button type="button" onClick={() => handleDelete(item.id)} className="rounded-3xl bg-red-500/10 px-3 py-2 text-sm text-rose-300 transition hover:bg-red-500/20"><Trash2 size={16} /></button>
            </div>
          )}
        />

        {editingItem ? (
          <div className="glass-card rounded-[28px] border border-white/10 p-6 shadow-glass">
            <h3 className="text-xl font-semibold text-white">تحرير الخدمة</h3>
            <FormBuilder
              fields={[
                { name: 'title', label: 'عنوان الخدمة', type: 'text', value: formState.title },
                { name: 'description', label: 'الوصف', type: 'textarea', value: formState.description },
                { name: 'image', label: 'رابط الصورة', type: 'url', value: formState.image },
              ]}
              onChange={(name, value) => setFormState((prev) => ({ ...prev, [name]: value }))}
            />
            <ImageUploader value={formState.image ? [formState.image] : []} onChange={(images) => setFormState((prev) => ({ ...prev, image: images[0] || '' }))} label="صورة الخدمة" />
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={saveService} className="rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary/90">حفظ الخدمة</button>
              <button type="button" onClick={() => setEditingItem(null)} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:border-primary/50">إلغاء</button>
            </div>
          </div>
        ) : null}
      </div>

      <ConfirmDialog
        open={showConfirm}
        title="تأكيد حذف الخدمة"
        description="هل أنت متأكد أنك تريد حذف هذه الخدمة؟ لا يمكن التراجع عن هذا الإجراء بعد الحذف."
        onConfirm={confirmDelete}
        onCancel={() => setShowConfirm(false)}
      />
    </DashboardShell>
  );
}
