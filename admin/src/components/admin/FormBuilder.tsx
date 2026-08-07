import { ChangeEvent } from 'react';

export type FieldType = 'text' | 'textarea' | 'url' | 'email' | 'number';

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  value: string | number;
  helpText?: string;
  rows?: number;
}

interface FormBuilderProps {
  fields: FieldConfig[];
  onChange: (name: string, value: string) => void;
}

export function FormBuilder({ fields, onChange }: FormBuilderProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(event.target.name, event.target.value);
  };

  return (
    <div className="space-y-5">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2 rounded-[26px] border border-white/10 bg-slate-950/60 p-4">
          <label htmlFor={field.name} className="block text-sm font-medium text-slate-200">
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              rows={field.rows ?? 4}
              value={String(field.value)}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full resize-none rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-primary/70 focus:ring-2 focus:ring-primary/10"
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={String(field.value)}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-primary/70 focus:ring-2 focus:ring-primary/10"
            />
          )}
          {field.helpText ? <p className="text-xs text-slate-500">{field.helpText}</p> : null}
        </div>
      ))}
    </div>
  );
}
