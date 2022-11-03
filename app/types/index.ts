export interface ICountry {
  name: {
    official: string;
    common: string;
  };
  cca2: string;
  population: string;
  region: string;
  capital?: [string];
  flags: {
    png: string;
  };
  borders?: string[];
  tld: [string];
  subregion?: string;
  languages: Record<string, string>;
  currencies?: Record<string, Record<"name", string>>;
}
