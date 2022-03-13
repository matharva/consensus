import "../styles/globals.css";
import "./styles.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { extendTheme } from "@chakra-ui/react";

const overrides = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "Inter",
      },
      html: {
        fontFamily: "Inter",
      },
    }),
  },
});

const customTheme = extendTheme(overrides);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
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
