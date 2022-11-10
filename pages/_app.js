import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import axios from "axios";
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
