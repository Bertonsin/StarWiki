import { RoutesApp } from "../../Routes";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../../Theme";
import "../../Fonts/StarJedi/Starjedi.ttf";
import "./app.css";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <RoutesApp />
    </ChakraProvider>
  );
}

export default App;
