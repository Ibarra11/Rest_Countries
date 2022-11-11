import Image from "next/image";

import getCountries from "../../lib/getCountries";
import getCountryByName from "../../lib/getCountryByName";

export async function generateStaticParams() {
  const countries = await getCountries();

  return countries.map((country) => ({
    name: country.name.common,
  }));
}

export default async function Page({
  params: { name },
}: {
  params: { name: string };
}) {
  const [country] = await getCountryByName(name);

  return (
    <div className="relative flex flex-col   gap-11 md:flex-row   md:items-center lg:gap-20 xl:gap-28 ">
      <div className="relative w-full h-[260px]  md:w-[560px] md:h-[400px] ">
        <Image
          src={country.flags.png}
          alt={`the flag of ${country.name.common}`}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 flex-1   ">
        <h1 className="text-[32px] font-extrabold mb-6 ">
          {country.name.common}
        </h1>

        <ul className="flex  flex-col text-base  gap-2 xl:h-40   content-between   xl:flex-wrap">
          <li className="flex gap-2">
            <h2 className=" font-semibold">Official Name:</h2>
            <span>{country.name.official}</span>
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Population:</h2>
            <span>{country.population}</span>
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Region:</h2>
            <span>{country.region}</span>
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Sub Region:</h2>
            <span>{country.subregion ? country.subregion : "N/A"}</span>
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Capital:</h2>
            <span>{country.capital ? country.capital : "N/A"}</span>
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Top Level Domain:</h2>
            <span>{country.tld}</span>
          </li>
          <li className="flex gap-2">
            <h2 className="font-semibold">Currencies:</h2>
            {country.currencies ? (
              <ul>
                {Object.values(country.currencies).map((currency) => {
                  return <li key={currency.name}>{currency.name}</li>;
                })}
              </ul>
            ) : (
              <span>N/A</span>
            )}
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Languages:</h2>
            <span>
              {country.languages
                ? Object.values(country.languages)
                    .map((language) => language)
                    .join(",")
                : "N/A"}
            </span>
          </li>
        </ul>
        <div className="relative flex items-baseline gap-4 mt-auto ">
          <h2 className=" font-semibold whitespace-nowrap">
            Border Countries:
          </h2>

          <ul className="flex flex-wrap gap-3">
            {country.borders ? (
              country.borders.map((border) => {
                return (
                  <li
                    className="bg-gray-300 text-gray-700 dark:bg-gray-2 dark:text-gray-300 px-6 py-1"
                    key={border}
                  >
                    {border}
                  </li>
                );
              })
            ) : (
              <li className=" bg-gray-300 text-gray-700 dark:bg-gray-2 dark:text-gray-300 px-6 py-1">
                N/A
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
