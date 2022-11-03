import { ICountry } from "../types";

export default async function getCountryByName(
  name: string
): Promise<[ICountry]> {
  const res = await fetch(`${process.env.BASE_API}/name/${name}`);
  return res.json();
}
