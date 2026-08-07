import { ReactNode } from 'react';

interface SettingsCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function SettingsCard({ title, description, children }: SettingsCardProps) {
  return (
    <div className="glass-card rounded-[28px] border border-white/10 p-6 shadow-glass">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
      <div className="mt-6 space-y-4">{children}</div>
    </div>
  );
}
