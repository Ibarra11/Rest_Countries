"use client";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

import { Regions } from "../types";

interface Props {
  currentRegion: Regions | undefined;
  onRegionChange: (region: Regions) => void;
}
export default function RegionSelect({ currentRegion, onRegionChange }: Props) {
  return (
    <Select.Root onValueChange={onRegionChange} value={currentRegion}>
      <Select.Trigger className="bg-white shadow-md flex justify-between items-center w-52 py-4 px-6 text-gray-700 dark:bg-gray-2 dark:shadow-none dark:text-gray-300 text-sm">
        <Select.Value placeholder="Filter by region" />
        <Select.Icon>
          <ChevronDown size={16} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.Viewport className="bg-white shadow-lg dark:bg-gray-2 dark:shadow-none rounded-md ">
            <Select.Group>
              {["Africa", "America", "Asia", "Europe", "Oceania", "All"].map(
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
