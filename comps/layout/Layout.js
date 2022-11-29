// Packages
import { useEffect, useState } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Header />

      {children}
      <Footer />
    </>
  );
}
