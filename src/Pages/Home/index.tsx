import { Box, Stack, Text } from "@chakra-ui/react";
import { Header } from "../../Components/Header";
import { TypeWriter } from "../../Components/TypeWriter";

export function Home() {
  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"#222"}
      color={"#FFF"}
      h={"100vh"}
      w={"100vw"}
    >
      <Box
        h={350}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Text fontSize={80} mb={-10} color={"#FED147"}>
          Star
        </Text>
        <TypeWriter text="  All star wars information in one place!"></TypeWriter>
        <Text fontSize={80} mb={120} color={"#FED147"}>
          Wiki
        </Text>
      </Box>
      <Text
        textAlign={"center"}
        fontSize={30}
        color={"#FED147"}
        borderBottom={"1px solid #FED147"}
      >
        Select a category below to continue
      </Text>
      <Header />;
    </Stack>
  );
}
