import fetcher from "./fetcher";
import useSWR from "swr";
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
