import React, { InputHTMLAttributes } from "react";

// Estendemos os atributos nativos do HTML <input> para que o componente
// aceite automaticamente propriedades como type, required, min, step, placeholder, etc.
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  containerClassName?: string;
}

export default function Input({
  label,
  error,
  id,
  className = "",
  containerClassName = "",
  ...props
}: InputProps) {
  // Gera um ID único para vincular o label ao input caso nenhum seja passado
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={`w-full ${containerClassName}`}>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full px-3 py-2 p-2 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${
          error
            ? "border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:ring-amber-500"
        } ${className}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 mt-1 block">{error}</span>
      )}
    </div>
  );
}
