"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
// import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <Image
              src="/nami.jpg"
              alt="Nami"
              width={60}
              height={60}
              className="rounded-full border-2 border-gray-200 dark:border-gray-700"
            />
            <div>
              <h1 className="text-xl font-bold">Harshil Valiya</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Full-Stack Developer
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            {/* <Button variant="ghost" className="text-sm">
              <Link href="#about">About</Link>
            </Button>
            <Button variant="ghost" className="text-sm">
              <Link href="#projects">Projects</Link>
            </Button>
            <Button variant="ghost" className="text-sm">
              <Link href="#experience">Experience</Link>
            </Button> */}
            <Switch
              checked={theme === "dark"}
              onCheckedChange={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="ml-4"
              aria-label="Toggle dark mode"
            />
            {theme === "dark" ? (
              <MoonIcon className="h-4 w-4" />
            ) : (
              <SunIcon className="h-4 w-4" />
            )}
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-6">
            <Button
              variant="ghost"
              className="text-sm w-full"
              onClick={toggleMenu}
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="text-sm w-full"
              onClick={toggleMenu}
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              className="text-sm w-full"
              onClick={toggleMenu}
            >
              Experience
            </Button>
            <div className="flex items-center space-x-2">
              <Switch
                checked={theme === "dark"}
                onCheckedChange={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                aria-label="Toggle dark mode"
              />
              {theme === "dark" ? (
                <MoonIcon className="h-4 w-4" />
              ) : (
                <SunIcon className="h-4 w-4" />
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
