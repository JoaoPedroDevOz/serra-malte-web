import * as React from "react";
import "./Card.css";
import { cn } from "../../shared/utils";

type CardProps = React.ComponentProps<"div">;

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

function CardHeader({ className, children, ...props }: CardProps) {
  const hasAction = React.Children.toArray(children).some(
    (child: any) => child?.props?.["data-slot"] === "card-action",
  );

  return (
    <div
      data-slot="card-header"
      className={cn("card-header", hasAction && "has-action", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function CardTitle({ className, style, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
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
      style={style}
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
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardBody,
};
