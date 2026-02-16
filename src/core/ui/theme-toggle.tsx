"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/core/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Évite l'erreur d'hydratation (le thème n'est connu que côté client)
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" />; // Placeholder de la taille du bouton
  }

  return (
    <Button
      variant="ghost" // On utilise notre variante 'ghost' ou 'outline'
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-neutral-100" />
      ) : (
        <Moon className="h-5 w-5 text-neutral-800" />
      )}
    </Button>
  );
}
