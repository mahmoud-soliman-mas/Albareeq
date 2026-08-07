'use client';

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({ open, title, description, confirmText = 'تأكيد', cancelText = 'إلغاء', onConfirm, onCancel }: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-[32px] border border-white/10 bg-slate-950/95 p-6 shadow-glass">
        <div className="space-y-4 text-right">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-slate-400">{description}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button type="button" onClick={onCancel} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">
              {cancelText}
            </button>
            <button type="button" onClick={onConfirm} className="rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary/90">
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
