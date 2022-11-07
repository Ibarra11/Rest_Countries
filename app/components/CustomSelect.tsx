import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";

export default function CustomSelect() {
  const [currentValue, setCurrentValue] = useState("");
  return (
    <Select.Root
      onValueChange={setCurrentValue}
      value={currentValue === "" ? undefined : currentValue}
    >
      <Select.Trigger className="bg-white shadow-md text-gray-700 dark:bg-gray-2 dark:shadow-none dark:text-gray-300 text-sm">
        <button className="flex justify-between items-center w-52 py-4 px-6">
          <Select.Value placeholder="Filter by region" />
          <Select.Icon>
            <ChevronDown size={16} />
          </Select.Icon>
        </button>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.Viewport className="bg-white shadow-lg dark:bg-gray-2 dark:shadow-none rounded-md ">
            <Select.Group>
              {["Africa", "America", "Asia", "Europe", "Oceania"].map(
                (val, i) => (
                  <Select.Item
                    key={`${val}-${i}`}
                    value={val}
                    className="
                    relative flex items-center px-8 py-4  rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900
                    focus:outline-none select-none
                  "
                  >
                    <Select.ItemText>{val}</Select.ItemText>
                    <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                )
              )}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
