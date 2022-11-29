// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

// Components
import BlogLoader from "../comps/util/BlogLoader.js";
import MetaTags from "../comps/util/MetaTags.js";

const Blog = () => {
  const [menuOn, setMenu] = useState("false");
  const handleToggle = () => {
    setMenu(!menuOn);
  };
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // Get Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/blogs?populate=deep`
        );
        setData(response.data.data.reverse());
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  {
    console.log(data);
  }
  return (
    <div className="blog">
      <MetaTags
        title={"LŽGGA - Naujienos"}
        desc={
          "LGGA turi net 29 metų darbo patirtį. Sėkmingai įgyvendinus pastarojo dešimtmečio selekcines programas, žalųjų veislių karvių produktyvumas didėja sparčiau nei kitų veislių."
        }
      />
      <div className="top-hero">
        <div className="text-holder">
          <h1>Naujienos</h1>
        </div>
      </div>

      <div className="container blog-flexed">
        <div className="blog-feed">
          {isLoading ? (
            <BlogLoader />
          ) : (
            <>
              {data[0] && (
                <div className="blog-core">
                  <div className="single-blog blog-article">
                    <div className="left-side">
                      <Image
                        layout="fill"
                        src={data[0].attributes.banner.data.attributes.url}
                        alt={data[0].attributes.banner.data.attributes.url}
                        objectFit="cover"
                        priority={true}
                      />
                    </div>
                    <div className="right-side blog-article-info">
                      <h2>{data[0].attributes.date}</h2>
                      <h1>{data[0].attributes.title}</h1>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data[0].attributes.desc,
                        }}
                      />
                      <a
                        className="read-more"
                        href={"/article/" + data[0].attributes.slug}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              )}
              <div className="blog-core">
                <div className="two-blogs">
                  {data.slice(1, 4).map((blog, index) => {
                    return (
                      <div className="blog-article" key={index}>
                        <div className="dashed-line">
                          <Image
                            layout="fill"
                            src={blog.attributes.banner.data.attributes.url}
                            alt={blog.attributes.banner.data.attributes.url}
                            objectFit="cover"
                          />
                        </div>
                        <div className="blog-article-info">
                          <h2>{blog.attributes.date}</h2>
                          <h1>{blog.attributes.title}</h1>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: blog.attributes.desc,
                            }}
                          />
                          <a
                            className="read-more"
                            href={"/article/" + blog.attributes.slug}
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
