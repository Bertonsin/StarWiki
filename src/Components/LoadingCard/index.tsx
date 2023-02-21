import { Box, Skeleton } from "@chakra-ui/react";

export function LoadingCard() {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          gap={5}
          w={"100%"}
          h={20}
          boxShadow={"lg"}
        >
          <Skeleton
            startColor="gray.300"
            endColor="gray.200"
            height="40px"
            ml={3}
            w={"75%"}
            boxShadow={"lg"}
            borderRadius={"20px"}
          />
          <Box
            display={"flex"}
            h={20}
            justifyContent={"space-around"}
            w={"100%"}
          >
            <Skeleton
              startColor="gray.300"
              endColor="gray.200"
              height="20px"
              w={10}
              boxShadow={"lg"}
              borderRadius={"20px"}
            />
            <Skeleton
              startColor="gray.300"
              endColor="gray.200"
              height="20px"
              w={10}
              boxShadow={"lg"}
              borderRadius={"20px"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
