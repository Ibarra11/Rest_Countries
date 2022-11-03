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
  console.log(country);
  return (
    <div className="relative flex items-center  gap-28 ">
      <div className="relative w-[560px] h-[400px]">
        <Image
          src={country.flags.png}
          alt={`the flag of ${country.name.common}`}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className=" h-80 flex flex-col gap-6 flex-1  ">
        <h1 className="text-[32px] font-extrabold mb-6 ">
          {country.name.common}
        </h1>

        <ul className="flex flex-col flex-wrap gap-2 h-40 w-full content-between text-base">
          <li className="flex gap-2">
            <h2 className=" font-semibold">Official Name:</h2>
            <span className="text-gray-400">{country.name.official}</span>
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Population:</h2>
            <span className="text-gray-400">{country.population}</span>
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Region:</h2>
            <span className="text-gray-400">{country.region}</span>
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Sub Region:</h2>
            <span className="text-gray-400">
              {country.subregion ? country.subregion : "N/A"}
            </span>
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Capital:</h2>
            <span className="text-gray-400">
              {country.capital ? country.capital : "N/A"}
            </span>
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Top Level Domain:</h2>
            <span className="text-gray-400">{country.tld}</span>
          </li>
          <li className="flex gap-2">
            <h2 className="font-semibold">Currencies:</h2>
            {country.currencies ? (
              <ul>
                {Object.values(country.currencies).map((currency) => {
                  return (
                    <li className="text-gray-400" key={currency.name}>
                      {currency.name}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <span className="text-gray-400">N/A</span>
            )}
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Languages:</h2>
            <span className="text-gray-400">
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
                    className=" bg-gray-2 px-6 py-1 text-gray-400"
                    key={border}
                  >
                    {border}
                  </li>
                );
              })
            ) : (
              <li className=" bg-gray-2 px-6 py-1 text-gray-400">N/A</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
