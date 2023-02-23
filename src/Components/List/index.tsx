import { Grid } from "@chakra-ui/react";
import { CategoryContext } from "../../Contexts/CategoryContext";
import { searchProps } from "../../Hooks/useSearch/Dto/SearchTypes";
import { CardItem } from "../CardItem";
import { LoadingCard } from "../LoadingCard";
import { ListProps } from "./Dto/ListTypes";
import { useContext, useEffect } from "react";

export function List({
  dataFetched,
  dataFiltered,
  isLoading,
  category,
}: ListProps) {
  const { setCategory } = useContext(CategoryContext);

  useEffect(() => {
    setCategory(category);
  });

  return (
    <>
      <Grid templateColumns={"1fr 1fr 1fr"} gap={10} m={"20px 60px 0 60px"}>
        {dataFiltered &&
          dataFiltered?.map((item: searchProps, index: number) => {
            if (item.name) {
              return (
                <CardItem
                  key={index}
                  title={item.name}
                  gender={item.gender}
                  especie={item.especies}
                  to={`/${index + 1}`}
                />
              );
            }
            return (
              <CardItem
                key={item.title}
                title={item.title}
                to={`/${index + 1}`}
              />
            );
          })}

        {!dataFiltered &&
          dataFetched?.map((item: searchProps, index: number) => {
            if (item.name) {
              return (
                <CardItem
                  key={index}
                  title={item.name}
                  gender={item.gender}
                  especie={item.especies}
                  to={`/${index + 1}`}
                />
              );
            }
            return (
              <CardItem
                key={item.title}
                title={item.title}
                to={`/${index + 1}`}
              />
            );
          })}
        {isLoading &&
          Array(10)
            .fill("")
            .map((_, index) => {
              return <LoadingCard key={index} />;
            })}
      </Grid>
    </>
  );
}
