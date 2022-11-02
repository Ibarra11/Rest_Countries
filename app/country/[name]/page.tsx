import getCountries from "../../lib/getCountries";
import getCountryByName from "../../lib/getCountryByName";
export async function generateStaticParams() {
  console.log(process.env.BASE_API);
  const countries = await getCountries();
  console.log(countries);

  return countries.map((country) => ({
    name: country.name.common,
  }));
}

export default async function Page({
  params: { name },
}: {
  params: { name: string };
}) {
  console.log(name);
  //   const country = await getCountryByName(name);
  //   console.log(country.name.common);
  return <div>{/* <h1>{country.name.common}</h1> */}</div>;
}
