"use client";
import { useState, useEffect, Suspense, use } from "react";
import { getCountriesByRegion } from "./lib/getCountriesByRegion";
import CountryGrid from "./components/CountryGrid";
import SkeletonGrid from "./components/SkeletonGrid";
import RegionSelect from "./components/RegionSelect";
import RegionInput from "./components/RegionInput";

import { ICountry, Regions } from "./types";

export default function Home() {
  const [searchResults, setSearchResults] = useState("");
  const [region, setRegion] = useState<undefined | Regions>(undefined);
  const [countries, setCountries] = useState<ICountry[]>([]);
  useEffect(() => {
    if (region) {
      getCountriesByRegion(region).then(setCountries);
    }
  }, [region]);
  return (
    <>
      <div className="isolate relative flex mb-12 justify-between">
        <RegionInput />
        <RegionSelect
          currentRegion={region}
          onRegionChange={(region) => setRegion(region)}
        />
      </div>
      <Suspense fallback={<SkeletonGrid />}>
        <CountryGrid selectedCountries={countries} />
      </Suspense>
    </>
  );
}
