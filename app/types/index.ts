export interface ICountry {
  name: {
    official: string;
    common: string;
  };

  population: string;
  region: string;
  capital: [string];
  flags: {
    png: string;
  };
  border: string[];
  tld: [string];
  subregion: string;
  languages: Record<string, string>;
  curriences: Record<string, Record<"name", string>>;
}
