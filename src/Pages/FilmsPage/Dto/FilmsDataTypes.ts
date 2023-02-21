export interface filmsResultsDataType {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface filmsDataType {
  count: number;
  next: null | string;
  previous: null | string;
  results: filmsResultsDataType[];
}
