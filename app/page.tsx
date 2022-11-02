"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";

import SearchBar from "./components/searchbar";
import Country from "./components/country";

import fetcher from "./lib/fetcher";

import { ICountry } from "./types";

export default function Home() {
  const [searchResults, setSearchResults] = useState("");
  const { data } = useSWR(
    "https://restcountries.com/v3.1/all",
    fetcher<ICountry[]>
  );

  if (!data) {
    return <div>loading</div>;
  }

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
