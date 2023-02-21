import axios from "axios";
import { useEffect, useState } from "react";

export function useGetCount(endpoint: string) {
  const [maxPageCount, setmaxPageCount] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const amountDataPerPage = 10;

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${endpoint}`)
      .then((response) => {
        setmaxPageCount(Math.ceil(response.data.count / 10));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  return { maxPageCount };
}
