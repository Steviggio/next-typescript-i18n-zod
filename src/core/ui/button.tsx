import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/lib/cn";

// Définition des variantes avec CVA (Configuration centralisée des styles)
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-sage text-cream hover:bg-sage-dark shadow-sm",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:bg-red-900 dark:text-red-50",
        outline:
          "border border-sage/20 bg-transparent hover:bg-sage/10 text-sage-dark dark:text-cream dark:border-neutral-800",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200/80 dark:bg-neutral-800 dark:text-neutral-50",
        ghost:
          "hover:bg-sage/10 hover:text-sage dark:hover:text-cream dark:hover:bg-neutral-800",
        link: "text-sage underline-offset-4 hover:underline dark:text-sage-light",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Si asChild est true, le composant fusionne ses props avec l'enfant (utile pour les Tooltips ou Next/Link)
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
