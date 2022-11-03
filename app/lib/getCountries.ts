import { ICountry } from "../types";
export default async function getCountries(): Promise<ICountry[]> {
  const url = `${process.env.BASE_API as string}/all`;

  const res = await fetch(url);

  return res.json();
}
