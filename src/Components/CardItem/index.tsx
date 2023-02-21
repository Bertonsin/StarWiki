import { Card, Text, CardBody, Stack, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CardItemProps } from "./Dto/CardItemTypes";

export function CardItem({
  title,
  gender,
  especie,
  to,
  typeOfData,
}: CardItemProps) {
  let url;

  if (typeOfData == "people") {
    url = `${typeOfData}${to}`;
  } else {
    url = `${to}`;
  }

  return (
    <Link to={`${typeOfData}${to}`}>
      <Card
        bg={"#FFF"}
        maxW={"md"}
        maxH={"sm"}
        h={150}
        _hover={{
          transform: "scale(1.2)",
          transition: "all 0.5s ease-out",
          cursor: "pointer",
        }}
      >
        <CardBody shadow={"lg"} rounded={"md"} p={5} h={"100%"}>
          <Stack spacing={2} display={"flex"}>
            <Heading fontSize={"2xl"}>{title}</Heading>
            <Box display={"flex"} justifyContent={"space-around"}>
              {gender && (
                <Text
                  bg={"green.200"}
                  borderRadius={10}
                  p={1}
                  textAlign={"center"}
                >
                  {gender}
                </Text>
              )}
              {especie && (
                <Text
                  bg={"orange.200"}
                  borderRadius={10}
                  p={1}
                  textAlign={"center"}
                >
                  {especie}
                </Text>
              )}
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
}
