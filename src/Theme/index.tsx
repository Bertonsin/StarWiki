import { extendBaseTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
  },
};

export const customTheme = extendBaseTheme({
  colors,
  fonts: {
    body: "Starjedi",
  },
});
