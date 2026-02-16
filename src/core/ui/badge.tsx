import * as React from "react";
import { cn } from "@/core/lib/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "secondary";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        // Variant: Default (Sage style)
        variant === "default" &&
          "border-transparent bg-sage/10 text-sage dark:bg-sage-light/10 dark:text-cream hover:bg-sage/20",
        // Variant: Secondary (Gris neutre)
        variant === "secondary" &&
          "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50",
        // Variant: Outline
        variant === "outline" && "text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
