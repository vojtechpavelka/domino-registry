"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(className)}
      {...props}
    >
      <Sun className="block dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  );
}
