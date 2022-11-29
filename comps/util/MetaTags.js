import Head from "next/head";

export default function MetaTags({ title, desc, keywords }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/lzgga/image/upload/v1669754631/jw18mp4jtqxlqprfwjvh.png />"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/lzgga/image/upload/v1669754631/jw18mp4jtqxlqprfwjvh.png"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="ITRSQ" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/lzgga/image/upload/v1669754877/ucyip1dcblqgeke09xrc.jpg"
        />
      </Head>
    </>
  );
}
