"use client";
import { Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Header() {
  const [colorMode, setColorMode] = useState<"dark" | "light" | undefined>(
    undefined
  );

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setColorMode("dark");
      localStorage.setItem("color-mode", "dark");
    } else {
      setColorMode("light");
      localStorage.setItem("color-mode", "light");
    }
  }, []);

  function toggleDarkMode() {
    if (colorMode === "light") {
      setColorMode("dark");
      localStorage.setItem("color-mode", "dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      setColorMode("light");
      localStorage.setItem("color-mode", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }

  return (
    <header className="flex items-center h-20 px-9 bg-gray-100 text-gray-700 shadow-sm dark:bg-gray-2 dark:text-gray-300 dark:shadow-none  xl:px-20">
      <Link href="/">
        <h1 className=" text-2xl font-extrabold">Where in the world?</h1>
      </Link>
      {colorMode && (
        <div className="flex items-center gap-2 ml-auto ">
          <button
            aria-label={`${
              colorMode === "dark" ? "turn light mode on" : "turn dark mode on"
            }`}
            className="p-2"
            onClick={() => toggleDarkMode()}
          >
            <Moon size={16} />
          </button>
          <p className="text-base font-semibold">Dark Mode</p>
        </div>
      )}
    </header>
  );
}
