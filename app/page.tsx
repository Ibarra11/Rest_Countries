"use client";
import { useState, useEffect, Suspense, use } from "react";
import { getCountriesByRegion } from "./lib/getCountriesByRegion";
import CountryGrid from "./components/CountryGrid";
import SkeletonGrid from "./components/SkeletonGrid";
import RegionSelect from "./components/RegionSelect";
import RegionInput from "./components/RegionInput";

import { ICountry, Regions } from "./types";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState<undefined | Regions>(undefined);
  const [countries, setCountries] = useState<ICountry[]>([]);
  useEffect(() => {
    if (region) {
      if (region === "All") {
        setCountries([]);
        setRegion(undefined);
      } else {
        getCountriesByRegion(region).then(setCountries);
      }
      setSearchValue("");
    }
  }, [region]);
  return (
    <>
      <div className="relative  flex flex-col gap-12   md:flex-row md:gap-0  my-12 justify-between">
        <RegionInput searchValue={searchValue} onValueChange={setSearchValue} />
        <RegionSelect
          currentRegion={region}
          onRegionChange={(region) => setRegion(region)}
          key={region === "All" ? "reset" : "region"}
        />
      </div>
      <Suspense fallback={<SkeletonGrid />}>
        <CountryGrid searchValue={searchValue} selectedCountries={countries} />
      </Suspense>
    </>
  );
}
