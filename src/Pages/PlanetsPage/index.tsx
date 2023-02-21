import { Box, Input, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { List } from "../../Components/List";
import { useFetch } from "../../Hooks/useFetch";
import { useGetCount } from "../../Hooks/useGetCount";
import { useSearch } from "../../Hooks/useSearch";
import {
  planetsDataType,
  planetsResultsDataType,
} from "./Dto/PlanetsDataTypes";

export function PlanetsPage() {
  const [page, setPage] = useState(1);
  const { dataFetched, isLoading, setIsLoading } = useFetch<planetsDataType>(
    "planets/",
    page
  );
  const { dataFiltered, SearchBy } =
    useSearch<planetsResultsDataType>(dataFetched);
  const { maxPageCount } = useGetCount("planets/");

  let maxPage;

  if (maxPageCount) {
    maxPage = maxPageCount;
  } else {
    maxPage = 2;
  }

  function loadOnScroll() {
    const scrollHeight = document.documentElement.scrollHeight;

    const windowHeight = window.innerHeight;

    const scrollTop = document.documentElement.scrollTop;

    if (windowHeight + scrollTop + 1 >= scrollHeight && 6) {
      setIsLoading(true);
      setPage((prev) => prev + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", loadOnScroll);

    return () => window.removeEventListener("scroll", loadOnScroll);
  }, []);

  return (
    <>
      <Box mb={20} bg={"#FFCCBC"} p={5}>
        <Stack
          spacing={3}
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Header />
          <Input
            size={"lg"}
            p={2}
            fontSize={15}
            w={"90%"}
            placeholder={"Search by name"}
            onChange={(event) => SearchBy(event)}
          />
        </Stack>
        <Box margin={"0 auto"}>
          <List
            dataFetched={dataFetched}
            dataFiltered={dataFiltered}
            isLoading={isLoading}
            typeOfData={"planets"}
          />
        </Box>
      </Box>
    </>
  );
}
