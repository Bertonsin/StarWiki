import { Stack, Text } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { itemProps } from "./Dto/itemDataTypes";

export function ItemPage() {
  const params = useParams();
  const location = useLocation();

  console.log(location);
  const { dataFetchedItem } = useFetch<itemProps>(`/${params.id}`);

  console.log(dataFetchedItem);
  return (
    <Stack>
      <Text>Name: {dataFetchedItem?.name}</Text>
      <Text>Height: {dataFetchedItem?.height}</Text>
      <Text>Mass: {dataFetchedItem?.mass}</Text>
      <Text>BirthYear: {dataFetchedItem?.birth_year}</Text>
      <Text>hair_color: {dataFetchedItem?.hair_color}</Text>
    </Stack>
  );
}
