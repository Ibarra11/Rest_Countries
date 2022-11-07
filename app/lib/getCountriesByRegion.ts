import { Regions, ICountry } from "../types";
export async function getCountriesByRegion(
  region: Regions
): Promise<ICountry[]> {
  // https: restcountries.com/v3.1/region/{region}
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/region/${region}`
  );
  const data = await response.json();
  return data;
}
