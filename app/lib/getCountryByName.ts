import { ICountry } from "../types";

export default async function getCountryByName(
  name: string
): Promise<[ICountry]> {
  const res = await fetch(`${process.env.BASE_API}/alpha/${name}`);
  return res.json();
}
