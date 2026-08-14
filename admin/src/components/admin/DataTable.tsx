import { ReactNode } from 'react';

interface Column<T> {
  header: string;
  accessor: keyof T;
  render?: (value: T[keyof T], item: T) => ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  actions?: (item: T) => ReactNode;
  emptyText?: string;
}

export function DataTable<T extends { id: string }>({ columns, data, actions, emptyText = 'لا توجد بيانات لعرضها.' }: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-glass backdrop-blur-xl">
      <table className="min-w-full border-collapse text-sm text-slate-300">
        <thead className="bg-slate-950/70 text-slate-400">
          <tr>
            {columns.map((column) => (
              <th key={String(column.accessor)} className="border-b border-white/10 px-4 py-4 text-right font-semibold uppercase tracking-[0.24em]">
                {column.header}
              </th>
            ))}
            {actions && <th className="border-b border-white/10 px-4 py-4 text-right font-semibold uppercase tracking-[0.24em]">إجراءات</th>}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (actions ? 1 : 0)} className="px-4 py-6 text-center text-slate-400">
                {emptyText}
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id} className="border-b border-white/10 last:border-b-0 hover:bg-white/5">
                {columns.map((column) => (
                  <td key={String(column.accessor)} className="px-4 py-4 align-top text-right">
                    {column.render ? column.render(item[column.accessor], item) : String(item[column.accessor])}
                  </td>
                ))}
                {actions && <td className="px-4 py-4 text-right">{actions(item)}</td>}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
