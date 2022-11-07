import { useState } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

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
    fetcher<ICountry[]>,
    { suspense: true }
  );
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
      <div className="grid xl:grid-cols-4 xl:gap-14">
        {countriesToDisplay.map((country) => {
          return <Country key={country.name.official} {...country} />;
        })}
      </div>
      <div className="h-12 flex items-center justify-center  mt-12 mb-8">
        {countriesToDisplay.length < countryData.length && (
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
