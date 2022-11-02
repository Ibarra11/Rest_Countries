import { ICountry } from "../types";

export default async function getCountryByName(
  name: string
): Promise<ICountry> {
  console.log(process.env.BASE_API);
  console.log(`${process.env.BASE_API}/name/${name}?fullText=true`);
  const res = await fetch(`${process.env.BASE_API}/name/${name}?fullText=true`);
  return res.json();
}
