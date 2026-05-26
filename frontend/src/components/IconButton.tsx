// components/IconButton.tsx
import React from "react";
import {
  ShoppingCart,
  Calendar,
  ChevronRight,
  Heart,
  Share2,
} from "lucide-react";
import Button from "./Button";

type IconType = "cart" | "calendar" | "chevron" | "heart" | "share";

interface IconButtonProps {
  type: IconType;
  onClick?: () => void;
  label: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const icons = {
  cart: <ShoppingCart className="w-4 h-4" />,
  calendar: <Calendar className="w-4 h-4" />,
  chevron: <ChevronRight className="w-4 h-4" />,
  heart: <Heart className="w-4 h-4" />,
  share: <Share2 className="w-4 h-4" />,
};

const IconButton: React.FC<IconButtonProps> = ({
  type,
  onClick,
  label,
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
      icon={icons[type]}
      iconPosition="left"
    >
      {label}
    </Button>
  );
};

export default IconButton;
