import { Stack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { itemProps } from "./Dto/itemDataTypes";
import { useContext } from "react";
import { CategoryContext } from "../../Contexts/CategoryContext";

export function ItemPage() {
  const params = useParams();
  const { category } = useContext(CategoryContext);

  const { dataFetchedItem } = useFetch<itemProps>(`${category}/${params.id}`);

  return (
    <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Text>Name: {dataFetchedItem?.name}</Text>
      <Text>Height: {dataFetchedItem?.height}</Text>
      <Text>Mass: {dataFetchedItem?.mass}</Text>
      <Text>BirthYear: {dataFetchedItem?.birth_year}</Text>
      <Text>hair_color: {dataFetchedItem?.hair_color}</Text>
    </Stack>
  );
}
