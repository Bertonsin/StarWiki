export interface peopleResultsDataType {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: [string, string, string, string];
  species: [];
  vehicles: [string, string];
  starships: [string, string];
  created: Date;
  edited: Date;
  url: string;
}

export interface peopleDataType {
  count: number;
  next: null | string;
  previous: null | string;
  results: peopleResultsDataType[];
}
