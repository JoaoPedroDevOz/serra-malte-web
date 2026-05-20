import * as React from "react";
import "./Button.css";
import { cn } from "../../shared/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize = "regular" | "sm" | "lg" | "icon";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};  

export function Button({
  className,
  variant = "primary",
  size = "regular",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "button",
        `button--variant-${variant}`,
        `button--size-${size}`,
        className,
      )}
      {...props}
    />
  );
}
