import { RoutesApp } from "../../Routes";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../../Theme";
import "../../Fonts/StarJedi/Starjedi.ttf";
import "./app.css";
import { CategoryProvider } from "../../Contexts/CategoryContext";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CategoryProvider>
        <RoutesApp />
      </CategoryProvider>
    </ChakraProvider>
  );
}

export default App;
