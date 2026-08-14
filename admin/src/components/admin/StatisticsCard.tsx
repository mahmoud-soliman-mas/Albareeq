interface StatisticsCardProps {
  label: string;
  value: string | number;
  detail: string;
}

export function StatisticsCard({ label, value, detail }: StatisticsCardProps) {
  return (
    <div className="glass-card rounded-[28px] border border-white/10 p-6 shadow-glass">
      <p className="text-sm uppercase tracking-[0.28em] text-primary/80">{label}</p>
      <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-3 text-sm text-slate-400">{detail}</p>
    </div>
  );
}
