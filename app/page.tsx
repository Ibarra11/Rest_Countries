"use client";
import { useState, use } from "react";
import useSWR from "swr";
import SearchBar from "./components/searchbar";
import Country from "./components/countries";
// import { getCountries, ICountry } from "./lib/getCountries";
import Image from "next/image";
import fetcher from "./lib/fetcher";

export interface ICountry {
  name: {
    official: string;
  };
  population: string;
  region: string;
  capital: [string];
  flags: {
    png: string;
  };
}
export async function getCountries(): Promise<ICountry[]> {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}

export default function Home() {
  const [searchResults, setSearchResults] = useState("");
  const { data } = useSWR(
    "https://restcountries.com/v3.1/all?field=name,capital,region,population,flags",
    fetcher<ICountry[]>
  );
  if (!data) {
    return <div>loading</div>;
  }

  console.log(data);

  return (
    <>
      <SearchBar />
      <div className="grid xl:grid-cols-4 xl:gap-14">
        {data.map((country) => {
          return <Country key={country.name.official} {...country} />;
        })}
      </div>
    </>
  );
}
