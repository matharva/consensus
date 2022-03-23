import "../styles/globals.css";
import "./styles.css";
import type { AppProps } from "next/app";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { extendTheme } from "@chakra-ui/react";
import Head from "next/head";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <title>Consensus</title>
        {/* <link rel="icon" href="/images/cns.png" /> */}
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="utf-8" />
        <meta content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="description of your project" />
        <meta name="theme-color" content="#000" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="grid-parent">
        <Navbar />
        <div className="main-body">
          <Component
            {...pageProps}
            onOpen={onOpen}
            onClose={onClose}
            isOpen={isOpen}
          />
        </div>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
