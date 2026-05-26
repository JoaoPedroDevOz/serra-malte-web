// components/Button.tsx
import React from "react";

// Tipos para as variantes do botão
type ButtonVariant = "primary" | "secondary" | "outline" | "danger" | "success";
type ButtonSize = "sm" | "md" | "lg";

// Props do componente
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

// Configurações de estilo por variante
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-amber-600 hover:bg-amber-700 text-white shadow-md hover:shadow-lg",
  secondary: "bg-gray-600 hover:bg-gray-700 text-white",
  outline: "border-2 border-amber-600 text-amber-600 hover:bg-amber-50",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
};

// Configurações de tamanho
const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-2.5 text-base rounded-lg",
  lg: "px-8 py-3 text-lg rounded-full",
};

// Componente principal
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  isLoading = false,
  type = "button",
  fullWidth = false,
  icon,
  iconPosition = "left",
  className = "",
}) => {
  const handleClick = async () => {
    if (disabled || isLoading) return;

    if (onClick) {
      try {
        await onClick();
      } catch (error) {
        console.error("Erro no clique do botão:", error);
      }
    }
  };

  const baseStyles = `
    font-medium 
    transition-all 
    duration-300 
    transform 
    hover:scale-105 
    active:scale-95
    focus:outline-none 
    focus:ring-2 
    focus:ring-amber-400 
    focus:ring-offset-2
    disabled:opacity-50 
    disabled:cursor-not-allowed 
    disabled:hover:scale-100
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={baseStyles}
    >
      <div className="flex items-center justify-center gap-2">
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Processando...</span>
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
          </>
        )}
      </div>
    </button>
  );
};

export default Button;
