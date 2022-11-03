"use client";
import { useEffect, useState } from "react";
export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header className="flex items-center h-20 dark:bg-gray-2 dark:text-white xl:mb-12 xl:px-20">
      <h1 className=" text-2xl font-extrabold">Where in the world?</h1>
      <div className="flex gap-2 ml-auto ">
        <button onClick={() => setDarkMode(!darkMode)}>toggle</button>
        <p className="text-base font-semibold">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
}
