'use client';

import { useMemo, useState } from 'react';

interface ImageUploaderProps {
  value: string[];
  onChange: (images: string[]) => void;
  label?: string;
  hint?: string;
}

export function ImageUploader({ value, onChange, label = 'رفع الصور', hint }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const previewItems = useMemo(() => value.slice(0, 8), [value]);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setProgress(0);

    const nextImages: string[] = [];
    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      if (!['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'].includes(file.type)) continue;
      const reader = new FileReader();
      const result = await new Promise<string | ArrayBuffer | null>((resolve) => {
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
      if (typeof result === 'string') nextImages.push(result);
      setProgress(Math.min(100, Math.round(((index + 1) / files.length) * 100)));
      await new Promise((resolve) => setTimeout(resolve, 120));
    }

    onChange([...nextImages, ...value]);
    setUploading(false);
  };

  return (
    <div className="space-y-4 rounded-[28px] border border-white/10 bg-slate-950/60 p-5">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-white">{label}</h3>
          {hint ? <p className="text-xs text-slate-500">{hint}</p> : null}
        </div>
        <label className="inline-flex cursor-pointer items-center rounded-3xl bg-primary px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-primary/90">
          اختر ملف
          <input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" multiple className="sr-only" onChange={(event) => handleFiles(event.target.files)} />
        </label>
      </div>
      {uploading ? (
        <div className="rounded-3xl bg-slate-900/80 p-4">
          <p className="text-sm text-slate-300">جارٍ رفع الصور...</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-4">
        {previewItems.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-white/15 bg-slate-900/30 px-4 py-16 text-center text-sm text-slate-500">لا توجد صور مرفوعة حتى الآن.</div>
        ) : (
          previewItems.map((src, index) => (
            <div key={`${src}-${index}`} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50">
              <img src={src} alt={`Uploaded ${index + 1}`} className="h-28 w-full object-cover" />
              <button type="button" className="absolute right-2 top-2 rounded-full bg-slate-950/90 px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100" onClick={() => onChange(value.filter((image, i) => i !== index))}>
                حذف
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
