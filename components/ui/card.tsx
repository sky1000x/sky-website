import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "bone" | "ivory" | "charcoal";
}

export function Card({
  className,
  variant = "bone",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border p-6 shadow-sm transition-shadow duration-200 hover:shadow-md md:p-8",
        {
          "border-sandstone/60 bg-bone": variant === "bone",
          "border-sandstone/40 bg-ivory": variant === "ivory",
          "border-charcoal bg-charcoal text-ivory": variant === "charcoal",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
