"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";

import SearchBar from "./components/searchbar";
import Country from "./components/country";

import fetcher from "./lib/fetcher";

import { ICountry } from "./types";
import getCountryByName from "./lib/getCountryByName";

export default function Home() {
  const [searchResults, setSearchResults] = useState("");
  const { data } = useSWR(
    "https://restcountries.com/v3.1/all",
    fetcher<ICountry[]>
  );
  useEffect(() => {
    async function getData() {
      const res = await getCountryByName((data as any)[0].name.common);
      console.log(res);
    }
    if (data) {
      console.log(data[0]);
      getData();
    }
  }, [data]);

  if (!data) {
    return <div>loading</div>;
  }

  // console.log(country);

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
