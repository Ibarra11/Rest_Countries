"use client";
import { useState } from "react";
import { Search } from "lucide-react";
export default function Filter() {
  return (
    <div className="isolate relative flex   mb-12">
      <div className="relative flex gap-8 items-center">
        <input
          className="relative   w-[480px] pl-14 h-full bg-transparent cursor-pointer py-4 dark:bg-gray-2 dark:text-gray-400"
          placeholder="search for a country"
          type="text"
        />
        <div className="absolute  translate-x-8 cursor-pointer ">
          <Search size={16} color="white" />
        </div>
      </div>
      <div className="ml-auto">
        <select
          placeholder="Filter by Region"
          className="native-select w-48 bg-gray-2 py-4 px-6"
          aria-label="region filter"
        >
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
    </div>
  );
}
