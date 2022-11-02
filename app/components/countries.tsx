import Image from "next/image";
import { ICountry } from "../lib/getCountries";
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
    </div>
  );
}
