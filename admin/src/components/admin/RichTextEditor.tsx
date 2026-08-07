'use client';

import { useEffect, useRef, useState } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function RichTextEditor({ value, onChange, placeholder = 'اكتب النص هنا...' }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const handleInput = () => {
    const content = editorRef.current?.innerHTML || '';
    onChange(content);
  };

  return (
    <div className={`rounded-[28px] border ${focused ? 'border-primary/70' : 'border-white/10'} bg-slate-950/60 p-4 transition`}> 
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="min-h-[170px] text-sm leading-7 text-slate-100 outline-none placeholder:text-slate-500"
        data-placeholder={placeholder}
      />
      {!value ? <p className="pointer-events-none mt-3 text-sm text-slate-500">{placeholder}</p> : null}
    </div>
  );
}
