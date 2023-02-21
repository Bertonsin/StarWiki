import {
  Box,
  Checkbox,
  Input,
  Select,
  SelectField,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Filter } from "../../Components/Filter";
import { Header } from "../../Components/Header";
import { List } from "../../Components/List";
import { useFetch } from "../../Hooks/useFetch";
import { useGetCount } from "../../Hooks/useGetCount";
import { useSearch } from "../../Hooks/useSearch";
import { peopleResultsDataType } from "./Dto/peopleDataTypes";

export function People() {
  const [page, setPage] = useState<number>(1);
  const { dataFetched, isLoading, setIsLoading } =
    useFetch<peopleResultsDataType>("people/", page);
  const { dataFiltered, SearchBy, FilterBy } =
    useSearch<peopleResultsDataType>(dataFetched);
  const { maxPageCount } = useGetCount("people/");
  let maxPage: number;

  if (maxPageCount) {
    maxPage = maxPageCount;
  } else {
    maxPage = 2;
  }

  function loadOnScroll() {
    const scrollHeight = document.documentElement.scrollHeight;

    const windowHeight = window.innerHeight;

    const scrollTop = document.documentElement.scrollTop;

    if (windowHeight + scrollTop + 1 >= scrollHeight && page <= maxPage) {
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
      <Box bg={"#CFE1FE"} h={"100%"} p={5}>
        <Stack
          spacing={3}
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Header />
          <Box
            display={"flex"}
            w={"100%"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Input
              size={"lg"}
              p={2}
              fontSize={15}
              w={"50%"}
              placeholder={"Search by name"}
              onChange={(event) => SearchBy(event)}
            />

            <SelectField
              onChange={(e) => FilterBy(e)}
              placeholder={"filter by gender"}
              borderRadius={10}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="hermaphrodite">Hermaphrodite</option>
              <option value="n/a">N/a</option>
            </SelectField>
          </Box>
        </Stack>
        <Box mt={5}>
          <List
            dataFetched={dataFetched}
            dataFiltered={dataFiltered}
            isLoading={isLoading}
            typeOfData={"people"}
          />
        </Box>
      </Box>
    </>
  );
}
