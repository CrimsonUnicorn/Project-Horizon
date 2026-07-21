import type { ChangeEvent } from "react";

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
        className="mb-2 block text-sm font-medium"
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
        className="w-full rounded-md border p-3"
      />

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;