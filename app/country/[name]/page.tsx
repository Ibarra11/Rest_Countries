import Image from "next/image";
import Link from "next/link";
import getCountries from "../../lib/getCountries";
import getCountryByName from "../../lib/getCountryByName";

export async function generateStaticParams() {
  const countries = await getCountries();

  return countries.map((country) => ({
    name: country.cca2,
  }));
}

export default async function Page({
  params: { name },
}: {
  params: { name: string };
}) {
  console.log(name);
  const [country] = await getCountryByName(name);

  console.log(country);
  console.log(country.name.common);
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
            <span className="text-gray-400">{country.subregion}</span>
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Capital:</h2>
            <span className="text-gray-400">{country.capital}</span>
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Top Level Domain:</h2>
            <span className="text-gray-400">{country.tld}</span>
          </li>
          <li className="flex gap-2">
            <h2 className="font-semibold text-sm">Currencies:</h2>
            <ul>
              {Object.values(country.currencies).map((currency) => {
                return (
                  <li className="text-gray-400" key={currency.name}>
                    {currency.name}
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="flex gap-2">
            <h2 className=" font-semibold">Languages:</h2>
            <span className="text-gray-400">
              {Object.values(country.languages)
                .map((language) => language)
                .join(",")}
            </span>
            {/* <ul className="flex ">
              {Object.values(country.languages).map((language) => {
                return (
                  <li className="text-gray-400" key={language}>
                    {language}
                  </li>
                );
              })}
            </ul> */}
          </li>
        </ul>
        <div className="relative flex items-baseline gap-4 mt-auto">
          <h2 className=" font-semibold">Border Countries:</h2>

          <ul className="flex gap-3">
            {country.borders ? (
              country.borders.map((border) => {
                return (
                  <li
                    className=" bg-gray-2 px-6 py-1 text-gray-400"
                    key={border}
                  >
                    <Link href="#">{border}</Link>
                  </li>
                );
              })
            ) : (
              <li className=" bg-gray-2 px-6 py-1 text-gray-400">None</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
