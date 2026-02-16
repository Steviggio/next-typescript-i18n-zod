import * as React from "react";
import { cn } from "@/core/lib/cn";

/**
 * Card Component
 * Container principal avec bordures et background adaptatif (Dark/Light)
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow-sm",
      "bg-cream-dark/30 dark:bg-neutral-900/50", // Tes couleurs personnalisées
      "border-sage/20 dark:border-neutral-800",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

/**
 * CardHeader
 * Section du haut (Titre, Icone, Méta-données)
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/**
 * CardTitle
 * Typographie standardisée pour les titres de cartes
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-semibold leading-none tracking-tight text-sage-dark dark:text-cream",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/**
 * CardContent
 * Contenu principal (Description, Tags)
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

/**
 * CardFooter
 * Actions (Liens, Boutons)
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardContent };
