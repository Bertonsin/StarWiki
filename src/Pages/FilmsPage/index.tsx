import { Box, Input, Spinner, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "../../Components/Header";
import { List } from "../../Components/List";
import { useFetch } from "../../Hooks/useFetch";
import { useSearch } from "../../Hooks/useSearch";
import { filmsDataType, filmsResultsDataType } from "./Dto/FilmsDataTypes";

export function FilmsPage() {
  const [page, setPage] = useState(1);
  const { dataFetched, isLoading } = useFetch<filmsDataType>("films/", page);
  const { dataFiltered, SearchBy } =
    useSearch<filmsResultsDataType>(dataFetched);

  return (
    <>
      <Box bg={"#616187"} h={"100vh"} p={5}>
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
            category={"films"}
          />
        </Box>
      </Box>
    </>
  );
}
