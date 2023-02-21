import { useState } from "react";
import { searchProps } from "../useSearch/Dto/SearchTypes";

export function useFilter<type>(data: type[] | any) {
  const [filteredData, setFilteredData] = useState<type>();

  console.log(data.data);

  const filterBy = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const results = data?.data?.filter((item: searchProps) => {
      console.log(evento.target.value);
      if (item.gender) {
        console.log("gender:", item.gender);
        return (
          item.gender.toLocaleLowerCase() ===
          evento.target.value.toLocaleLowerCase()
        );
      }
    });

    setFilteredData(results);

    return results;
  };

  return { filterBy, filteredData };
}
