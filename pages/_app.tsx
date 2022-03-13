import "../styles/globals.css";
import "./styles.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div className="grid-parent">
        <Navbar />
        <div className="main-body">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
