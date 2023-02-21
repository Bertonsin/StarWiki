import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useFilter } from "../../Hooks/useFilter";
import { searchProps } from "../../Hooks/useSearch/Dto/SearchTypes";

export function Filter(children: React.ReactNode) {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        {children}
      </Box>
    </>
  );
}
