import React, { SelectHTMLAttributes } from "react";

// Tipagem para as opções do Select
interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
  containerClassName?: string;
}

export default function Select({
  label,
  options,
  error,
  id,
  className = "",
  containerClassName = "",
  placeholder,
  ...props
}: SelectProps) {
  // Gera um ID único para vincular o label ao select caso nenhum seja passado
  const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={`w-full ${containerClassName}`}>
      <label
        htmlFor={selectId}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id={selectId}
        className={`w-full px-3 py-2 p-2 border rounded-lg bg-white focus:ring-2 focus:border-transparent outline-none transition-all cursor-pointer ${
          error
            ? "border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:ring-amber-500"
        } ${className}`}
        {...props}
      >
        {/* Renderiza um placeholder opcional desabilitado no topo */}
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-xs text-red-500 mt-1 block">{error}</span>
      )}
    </div>
  );
}
