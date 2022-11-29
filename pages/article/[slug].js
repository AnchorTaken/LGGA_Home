// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Article = () => {
  // States

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

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
    console.log(data, router.query.id);
  }

  return isLoading ? (
    "<Loader />"
  ) : (
    <div className="article">
      {data.map((blog) => {
        return (
          blog.attributes.slug === router.query.slug && (
            <div
              className="top-hero"
              style={{
                backgroundImage: `url(${
                  blog.attributes !== undefined
                    ? blog.attributes.banner.data.attributes.url
                    : "/"
                })`,
              }}
            >
              <div className="text-holder">
                <h1>{blog.attributes.title}</h1>
              </div>
            </div>
          )
        );
      })}
      <div className="content-holder">
        {data.map((blog) => {
          return (
            blog.attributes.slug === router.query.slug && (
              <div className="left-side">
                <div className="inside-article">
                  <div className="article-return">
                    <i className="gg-chevron-left-r"></i>
                    <Link href="/blog"> Return</Link>
                  </div>
                  <div className="inside-article-img">
                    <Image
                      src={blog.attributes.banner.data.attributes.url}
                      alt={blog.attributes.banner.data.attributes.url}
                      layout="fill"
                      objectFit="cover"
                      priority={true}
                    />
                  </div>

                  <div className="text-holder">
                    <h2>
                      <i className="fas fa-calendar-day"></i>
                      {blog.attributes.date}
                    </h2>
                    <h1>{blog.attributes.title}</h1>
                    <div
                      dangerouslySetInnerHTML={{ __html: blog.attributes.desc }}
                    />
                  </div>
                </div>
              </div>
            )
          );
        })}
        <div className="right-side">
          <div className="blog-filters">
            <div className="blog-filters-popular">
              <h1>More News</h1>
              {isLoading ? (
                <Loader />
              ) : (
                data.map((blog, index) => {
                  return (
                    index < 3 && (
                      <div
                        className="blog-filters-popular-preview"
                        key={blog.attributes.slug}
                        onClick={() =>
                          router.push(`/article/${blog.attributes.slug}`)
                        }
                      >
                        <div className="blog-filters-popular-preview-img">
                          {" "}
                          <Image
                            src={blog.attributes.banner.data.attributes.url}
                            alt={blog.attributes.banner.data.attributes.url}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>

                        <div className="blog-filters-popular-preview-info">
                          <h1>{blog.attributes.title}</h1>
                          <h2>
                            <i className="fas fa-calendar-day"></i>
                            {blog.attributes.date}{" "}
                          </h2>
                        </div>
                      </div>
                    )
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
