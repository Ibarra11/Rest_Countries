import Image from "next/image";
import Link from "next/link";
import { ICountry } from "../types";
export default function Country(props: ICountry) {
  return (
    <div>
      <div className="relative w-44 h-44">
        <Image
          src={props.flags.png}
          alt={`the flag of ${props.name.official}`}
          fill
          className="object-cover"
        />
      </div>
      <Link
        className=" text-slate-100"
        href={`/country/${props.name.official}`}
      >
        {props.name.common}
      </Link>
    </div>
  );
}
