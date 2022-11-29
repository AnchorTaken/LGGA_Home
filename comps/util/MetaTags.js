import Head from "next/head";
import ogImage from "/public/assets/img/ogimage.jpg";

export default function MetaTags({ title, desc, keywords }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="ITRSQ" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="/public/assets/img/ogimage.jpg" />
      </Head>
    </>
  );
}
