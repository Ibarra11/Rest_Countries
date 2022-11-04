"use client";
import { Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      const mode = localStorage.getItem("darkMode");
      if (mode === "true") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("darkMode", "true");
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("darkMode", "false");
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    } else {
      localStorage.setItem("darkMode", "false");
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleDarkMode() {
    if (!darkMode) {
      localStorage.setItem("darkMode", "true");
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("darkMode", "false");
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <header className="flex items-center h-20 dark:bg-gray-2 dark:text-white xl:mb-12 xl:px-20">
      <Link href="/">
        <h1 className=" text-2xl font-extrabold">Where in the world?</h1>
      </Link>
      <div className="flex items-center gap-2 ml-auto ">
        <button className="p-2" onClick={() => toggleDarkMode()}>
          <Moon size={16} />
        </button>
        <p className="text-base font-semibold">Dark Mode</p>
      </div>
    </header>
  );
}
