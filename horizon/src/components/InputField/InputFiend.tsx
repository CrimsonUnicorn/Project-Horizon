import { memo, type ChangeEvent } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  name: string;
  type: "text" | "email" | "password" | "number" | "checkbox";
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  id,
  label,
  name,
  type,
  placeholder,
  value,
  error,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
      />

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default memo(InputField);