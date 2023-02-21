import { Grid } from "@chakra-ui/react";
import { searchProps } from "../../Hooks/useSearch/Dto/SearchTypes";
import { CardItem } from "../CardItem";
import { LoadingCard } from "../LoadingCard";
import { ListProps } from "./Dto/ListTypes";

export function List({
  dataFetched,
  dataFiltered,
  isLoading,
  typeOfData,
}: ListProps) {
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
                  typeOfData={typeOfData}
                />
              );
            }
            return (
              <CardItem
                key={item.title}
                title={item.title}
                to={`/${index + 1}`}
                typeOfData={typeOfData}
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
                  typeOfData={typeOfData}
                />
              );
            }
            return (
              <CardItem
                key={item.title}
                title={item.title}
                to={`/${index + 1}`}
                typeOfData={typeOfData}
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
