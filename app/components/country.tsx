import Image from "next/image";
import Link from "next/link";
import { ICountry } from "../types";
export default function Country(props: ICountry) {
  return (
    <div className="flex flex-col shadow-md rounded-lg">
      <div className="relative w-full h-44">
        <Image
          src={props.flags.png}
          alt={`the flag of ${props.name.official}`}
          fill={true}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 dark:bg-gray-2 dark:text-white xl:p-6 f ">
        <h2 className="text-lg font-bold mb-4">{props.name.common}</h2>
        <ul className=" space-y-2 text-sm">
          <li className="flex gap-1 ">
            <h3 className="font-semibold">Population:</h3>
            <span className="text-gray-300">{props.population}</span>
          </li>
          <li className="flex gap-1">
            <h3 className="font-semibold">Region:</h3>
            <span className="text-gray-300 ">{props.region}</span>
          </li>
          <li className="flex gap-1">
            <h3 className="font-semibold">Capital:</h3>
            <span className="text-gray-300">{props.capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
