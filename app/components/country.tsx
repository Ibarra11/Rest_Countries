import Image from "next/image";
import Link from "next/link";
import { ICountry } from "../types";
export default function Country(props: ICountry) {
  return (
    <Link
      href={`/country/${props.name.common}`}
      className="flex flex-col shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 lg:hover:scale-110 duration-150 hover:duration-300 "
      aria-label={props.name.common}
    >
      <div className="">
        <Image
          src={props.flags.png}
          alt={`the flag of ${props.name.official}`}
          width={264}
          height={180}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 bg-gray-100 dark:bg-gray-2 dark:text-white p-6  ">
        <h2 className="text-lg font-bold mb-4">{props.name.common}</h2>
        <ul className=" space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex gap-1 ">
            <h3 className="font-semibold">Population:</h3>
            <span>{props.population}</span>
          </li>
          <li className="flex gap-1">
            <h3 className="font-semibold">Region:</h3>
            <span>{props.region}</span>
          </li>
          <li className="flex gap-1">
            <h3 className="font-semibold">Capital:</h3>
            <span>{props.capital}</span>
          </li>
        </ul>
      </div>
    </Link>
  );
}
