import * as React from "react";
import "./Card.css";
import { cn } from "../../shared/utils";

type CardProps = React.ComponentProps<"div">;
type CardTitleProps = React.ComponentProps<"h1"> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
type CardHeaderProps = CardProps & {
  noBorder?: boolean;
};

function Card({ className, style, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn("card", className)}
      style={style}
      {...props}
    />
  );
}

function CardHeader({
  className,
  children,
  noBorder = false,
  ...props
}: CardHeaderProps) {
  const hasAction = React.Children.toArray(children).some(
    (child: any) => child?.props?.["data-slot"] === "card-action",
  );

  return (
    <div
      data-slot="card-header"
      className={cn(
        "card-header",
        hasAction && "has-action",
        noBorder && "no-border",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeading({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("card-heading", className)} {...props} />;
}

function CardIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-icon"
      className={cn("card-icon", className)}
      {...props}
    />
  );
}

function CardTitle({
  as: Component = "h1",
  className,
  style,
  ...props
}: CardTitleProps) {
  return (
    <Component
      data-slot="card-title"
      className={cn("card-title", className)}
      style={style}
      {...props}
    />
  );
}

function CardDescription({
  className,
  style,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("card-description", className)}
      style={style}
      {...props}
    />
  );
}

function CardAction({ className, style, ...props }: CardProps) {
  return (
    <nav
      data-slot="card-action"
      className={cn("card-action", className)}
      style={style}
      {...props}
    />
  );
}

function CardBody({ className, style, ...props }: CardProps) {
  return (
    <div
      data-slot="card-body"
      className={cn("card-body", className)}
      style={{ flex: 1, ...style }}
      {...props}
    />
  );
}

function CardFooter({ className, style, ...props }: CardProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn("card-footer", className)}
      style={style}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardHeading,
  CardIcon,
  CardTitle,
  CardAction,
  CardFooter,
  CardDescription,
  CardBody,
};
