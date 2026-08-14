'use client';

import { useEffect, useState } from 'react';
import DashboardShell from '@/components/admin/DashboardShell';
import { ImageUploader } from '@/components/admin/ImageUploader';
import { useAdminStorage } from '@/services/storage';

export default function AdminMediaPage() {
  const { getData, updateData } = useAdminStorage();
  const [media, setMedia] = useState(getData().media);
  const [search, setSearch] = useState('');

  useEffect(() => {
    updateData((current) => ({ ...current, media }));
  }, [media, updateData]);

  const filteredMedia = media.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="glass-card rounded-[28px] border border-white/10 p-6 shadow-glass">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-primary/80">مكتبة الوسائط</p>
              <h2 className="text-3xl font-semibold text-white">إدارة الصور</h2>
            </div>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="ابحث عن صورة..."
              className="w-full max-w-xs rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-primary/70 focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <ImageUploader value={media} onChange={setMedia} label="رفع الصور إلى المكتبة" hint="استخدم السحب والإسقاط أو اختر الملفات من جهازك." />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredMedia.length ? (
            filteredMedia.map((item) => (
              <div key={item} className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60 shadow-glass">
                <img src={item} alt="Media item" className="h-52 w-full object-cover" />
                <div className="flex items-center justify-between gap-3 p-4">
                  <p className="truncate text-sm text-slate-200">{item}</p>
                  <button type="button" onClick={() => setMedia(media.filter((image) => image !== item))} className="rounded-3xl bg-white/5 px-3 py-2 text-sm text-rose-300 transition hover:bg-rose-500/10">حذف</button>
                </div>
              </div>
            ))
          ) : (
            <div className="glass-card rounded-[28px] border border-dashed border-white/10 bg-slate-950/60 p-10 text-center text-slate-500">لا توجد صور تطابق البحث.</div>
          )}
        </div>
      </div>
    </DashboardShell>
  );
}
