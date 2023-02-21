import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch<T = unknown>(endpoint: string, page?: number) {
  const [dataFetched, setdataFetched] = useState<T[]>([]);
  const [dataFetchedItem, setdataFetchedItem] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  if (page) {
    useEffect(() => {
      axios
        .get(`https://swapi.dev/api/${endpoint}/?page=${page}`)
        .then((response) => {
          setdataFetched((prev: T[]) => [...prev, ...response.data.results]);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [page]);
  } else {
    useEffect(() => {
      axios
        .get(`https://swapi.dev/api/${endpoint}`)
        .then((response) => {
          setdataFetchedItem(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  }

  return { dataFetched, isLoading, setIsLoading, dataFetchedItem };
}
