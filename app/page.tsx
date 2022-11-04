"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";

import Filter from "./components/filter";
import Country from "./components/country";

import fetcher from "./lib/fetcher";

import { ICountry } from "./types";
const loadFactor = 12;
export default function Home() {
  const [searchResults, setSearchResults] = useState("");
  const [currentLoadFactor, setCurrentLoadFactor] = useState(1);
  const { data } = useSWR(
    "https://restcountries.com/v3.1/all",
    fetcher<ICountry[]>
  );
  if (!data) {
    return <div>loading</div>;
  }

  const countriesToDisplay = data.slice(0, loadFactor * currentLoadFactor);

  return (
    <>
      <Filter />
      <div className="grid xl:grid-cols-4 xl:gap-14">
        {countriesToDisplay.map((country) => {
          return <Country key={country.name.official} {...country} />;
        })}
      </div>
      <div className="h-12 flex items-center justify-center  mt-12 mb-8">
        {countriesToDisplay.length < data.length && (
          <button
            onClick={() => setCurrentLoadFactor(currentLoadFactor + 1)}
            className=" bg-gray-2 py-2 px-4 text-gray-400 duration-200 hover:bg-slate-900"
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
}
