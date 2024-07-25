"use client";
import { useState, useEffect } from "react";
import { getCountriesByRegion } from "./lib/getCountriesByRegion";
import CountryGrid from "./components/CountryGrid";
import RegionSelect from "./components/RegionSelect";
import RegionInput from "./components/RegionInput";

import { ICountry, Regions } from "./types";
import Header from "./components/Header";
import { verifyAuth } from "./actions/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState<undefined | Regions>(undefined);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const { isAuthenticated } = await verifyAuth();
      console.log(isAuthenticated);
      if (!isAuthenticated) {
        return router.push("/auth/login");
      }
    }
    checkAuth();
  }, []);

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
    <div>
      <Header />
      <div className="relative  flex flex-col gap-12   md:flex-row md:gap-0  my-12 justify-between">
        <RegionInput searchValue={searchValue} onValueChange={setSearchValue} />
        <RegionSelect
          currentRegion={region}
          onRegionChange={(region) => setRegion(region)}
          key={region === "All" ? "reset" : "region"}
        />
      </div>

      <CountryGrid searchValue={searchValue} selectedCountries={countries} />
    </div>
  );
}
