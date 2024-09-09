"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Footer() {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="bg-secondary py-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">
            <a href="https://github.com/harshilvaliya" target="_blank">
              &copy; 2024 Harshil Valiya
            </a>
          </p>
          <div className="flex items-center space-x-2">
            <Switch
              checked={theme === "dark"}
              onCheckedChange={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="mr-2"
              aria-label="Toggle dark mode"
            />
            {theme === "dark" ? (
              <MoonIcon className="h-4 w-4" />
            ) : (
              <SunIcon className="h-4 w-4" />
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
