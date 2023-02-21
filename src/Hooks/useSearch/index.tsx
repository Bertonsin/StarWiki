import { ChangeEvent, useState } from "react";
import { peopleResultsDataType } from "../../Pages/People/Dto/peopleDataTypes";
import { useFetch } from "../useFetch";
import { searchProps } from "./Dto/SearchTypes";

export function useSearch<type>(data: type | any) {
  const [dataFiltered, setDataFiltered] = useState<type[]>();
  const { dataFetched } = useFetch<peopleResultsDataType>("/people", 1);

  const SearchBy = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const results = dataFetched?.filter((item: any) => {
      if (item.name) {
        return item.name
          .toLocaleLowerCase()
          .includes(evento.target.value.toLocaleLowerCase());
      }
      return item.title
        ?.toLocaleLowerCase()
        .includes(evento.target.value.toLocaleLowerCase());
    });
    setDataFiltered(results as any);

    return results;
  };

  const FilterBy = (evento: ChangeEvent<HTMLSelectElement>) => {
    const results = dataFetched?.filter((item: any) => {
      if (evento.target.value === "male") {
        console.log(evento.target.value);
        return item.gender?.toLocaleLowerCase().match(/\bmale\b/);
      }
      return item.gender
        ?.toLocaleLowerCase()
        .includes(evento.target.value.toLocaleLowerCase());
    });
    setDataFiltered(results as any);
    return results;
  };

  return { dataFiltered, SearchBy, FilterBy };
}
