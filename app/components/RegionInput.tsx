import { Search } from "lucide-react";
export default function RegionInput() {
  return (
    <div className="relative flex gap-8 items-center">
      <input
        className="relative bg-white text-gray-700 shadow-md   w-[480px] pl-14 h-full bg-transparent cursor-pointer py-4 dark:bg-gray-2 dark:text-gray-300 dark:shadow-none"
        placeholder="search for a country..."
        type="text"
      />
      <div className="absolute text-gray-700 dark:text-gray-300  translate-x-8 cursor-pointer ">
        <Search size={16} />
      </div>
    </div>
  );
}