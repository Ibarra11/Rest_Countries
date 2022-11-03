import { ICountry } from "../types";

export default async function getCountries(): Promise<ICountry[]> {
  const url = `${
    process.env.BASE_API as string
  }/all?name,capital,population,region,flags,border,tld,subregion,languages,curriences`;

  const res = await fetch(url);

  return res.json();
}
