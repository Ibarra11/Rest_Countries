import Image from "next/image";
interface Country {
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
async function getCountries(): Promise<Country[]> {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const countries = await getCountries();
  const country = countries[0];
  return (
    <div>
      <h1>{country.name.official}</h1>
      {country.capital}
      {country.region}
      <div className="relative w-64 h-44">
        <Image
          className="object-cover w-full h-full"
          fill
          src={country.flags.png}
          alt=""
        />
      </div>
      <p>population</p>
      {country.population}
    </div>
  );
}
