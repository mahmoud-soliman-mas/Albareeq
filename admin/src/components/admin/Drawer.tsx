'use client';

import { ReactNode } from 'react';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function Drawer({ open, onClose, title, children }: DrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/80 p-4 backdrop-blur-sm sm:items-center">
      <div className="w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/95 shadow-glass">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button type="button" onClick={onClose} className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">إغلاق</button>
        </div>
        <div className="max-h-[75vh] overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}
