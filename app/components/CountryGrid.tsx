"use client";
import { useState } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import SkeletonGrid from "./SkeletonGrid";
import Country from "./Country";

import { ICountry } from "../types";

interface Props {
  selectedCountries: ICountry[];
  searchValue: string;
}

const loadFactor = 12;

export default function CountryGrid({ selectedCountries, searchValue }: Props) {
  const [currentLoadFactor, setCurrentLoadFactor] = useState(1);
  const { data } = useSWR(
    "https://restcountries.com/v3.1/all",
    fetcher<ICountry[]>
  );
  if (!data) {
    return <SkeletonGrid />;
  }

  let countryData =
    selectedCountries.length > 0 ? selectedCountries : (data as ICountry[]);
  if (searchValue !== "") {
    countryData = countryData.filter((country) => {
      return country.name.common
        .toLowerCase()
        .startsWith(searchValue.toLowerCase());
    });
  }

  const countriesToDisplay = countryData.slice(
    0,
    loadFactor * currentLoadFactor
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-9  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 xl:gap-12">
        {countriesToDisplay.map((country) => {
          return <Country key={country.name.official} {...country} />;
        })}
      </div>
      <div className="h-12 flex items-center justify-center  mt-12">
        {countriesToDisplay.length < countryData.length && (
          <button
            onClick={() => setCurrentLoadFactor(currentLoadFactor + 1)}
            className=" bg-gray-50 shadow-md text-gray-700 hover:bg-slate-700 hover:text-gray-100  py-2 px-4   dark:bg-gray-2  dark:text-gray-300 duration-200 dark:hover:bg-slate-900 dark:focus:bg-slate-900"
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
}
