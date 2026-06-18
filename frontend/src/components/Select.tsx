import React, { SelectHTMLAttributes } from "react";
import { X } from "lucide-react";

// Tipagem para as opções do Select
export interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
  containerClassName?: string;
  onClear?: () => void;
}

export default function Select({
  label,
  options,
  error,
  id,
  className = "",
  containerClassName = "",
  placeholder,
  value,
  onClear,
  ...props
}: SelectProps) {
  // Gera um ID único para vincular o label ao select caso nenhum seja passado
  const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

  // O botão de limpar só deve aparecer se a função onClear existir E houver um valor selecionado
  const showClearButton =
    onClear && value !== undefined && value !== null && value !== "";

  return (
    <div className={`w-full ${containerClassName}`}>
      <div className="flex justify-between items-center mb-1">
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      </div>

      {/* Container relativo para posicionar o botão de limpar dentro do input */}
      <div className="relative flex items-center">
        <select
          id={selectId}
          value={value}
          className={`w-full px-3 py-2 p-2 border rounded-lg bg-white focus:ring-2 focus:border-transparent outline-none transition-all cursor-pointer appearance-none ${
            showClearButton ? "pr-10" : "pr-8" 
          } ${
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

        <div className="pointer-events-none absolute right-3 flex items-center text-gray-500">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>

        {/* Botão de Limpar (X) */}
        {showClearButton && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onClear();
            }}
            className="absolute right-8 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all"
            title="Limpar seleção"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {error && (
        <span className="text-xs text-red-500 mt-1 block">{error}</span>
      )}
    </div>
  );
}
