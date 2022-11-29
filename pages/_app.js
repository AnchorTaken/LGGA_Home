// Global CSS
import "../styles/globals.css";
import "../styles/icons.css";

// Packages
import axios from "axios";
import { useState, useEffect } from "react";

// Comps
import Layout from "../comps/layout/Layout.js";

// Context
import { AppWrapper } from "../comps/util/AppContext.js";

export default function LGGA({ Component, pageProps }) {
  // States
  const [color, setColor] = useState("#fff");
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/color")
      .then((res) => {
        setColor(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  isLoading == false
    ? (document.documentElement.style.setProperty(
        "--clr--primary",
        color.attributes.primary_color
      ),
      document.documentElement.style.setProperty(
        "--txt--primary",
        color.attributes.text_primary
      ),
      document.documentElement.style.setProperty(
        "--txt--secondary",
        color.attributes.text_light
      ),
      document.documentElement.style.setProperty(
        "--clr--secondary",
        color.attributes.secondary_color
      ))
    : "";

  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}
