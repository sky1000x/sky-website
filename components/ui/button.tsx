import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark";
  size?: "default" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-body font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-espresso text-ivory hover:bg-earth": variant === "primary",
            "border border-earth bg-transparent text-earth hover:bg-bone":
              variant === "secondary",
            "bg-charcoal text-ivory hover:bg-espresso": variant === "dark",
          },
          {
            "px-6 py-3 text-sm tracking-wide": size === "default",
            "px-8 py-4 text-base tracking-wide": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
export type { ButtonProps };
