// Packages
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import MetaTags from "../comps/util/MetaTags.js";

export default function About() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/services-page-news?populate=deep")
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <MetaTags
        title={"LGGA - Paslaugos"}
        desc={
          "LGGA turi net 29 metų darbo patirtį. Sėkmingai įgyvendinus pastarojo dešimtmečio selekcines programas, žalųjų veislių karvių produktyvumas didėja sparčiau nei kitų veislių."
        }
      />
      {isLoading === false ? (
        <div className="services-page">
          <div className="top-hero">
            <div className="text-holder">
              <h1>{data[0].attributes.title}</h1>
            </div>
            <iframe
              data-aos="fade-in"
              data-aos-once="true"
              data-aos-duration="1000"
              className="vid"
              width="853"
              height="480"
              src={
                data[0].attributes.video !== undefined
                  ? data[0].attributes.video
                  : "/"
              }
              frameBorder="0"
              allow=""
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <div className="main-content">
            {data !== undefined
              ? data.map((item, index) => {
                  return (
                    <div className="single" key={index}>
                      {item.attributes.left_side === null ? (
                        <div className="filler"></div>
                      ) : (
                        <div
                          className={
                            item.attributes.left_side.video === null
                              ? "doc-duo unique"
                              : "doc-duo"
                          }
                        >
                          {item.attributes.left_side.video == null ? null : (
                            <div className="video-holder">
                              <iframe
                                className="smol-vid"
                                src={item.attributes.left_side.content_url}
                                frameBorder="0"
                                allow=""
                                allowFullScreen
                                title="Embedded youtube"
                              />
                            </div>
                          )}
                          <div className="text-holder">
                            <div className="title">
                              {item.attributes.left_side.title}
                            </div>
                            <div className="desc">
                              {item.attributes.left_side.desc}
                            </div>
                          </div>

                          {item.attributes.left_side.single_component !==
                          undefined
                            ? item.attributes.left_side.single_component.map(
                                (item, index) => {
                                  return (
                                    <div
                                      className="video-holder unique"
                                      key={index}
                                    >
                                      <iframe
                                        className="smol-vid"
                                        src={item.content_url}
                                        frameBorder="0"
                                        allow=""
                                        allowFullScreen
                                        title="Embedded youtube"
                                      />
                                    </div>
                                  );
                                }
                              )
                            : null}
                          <div className="downloads">
                            {item.attributes.left_side.document !== undefined
                              ? item.attributes.left_side.document.map(
                                  (item, index) => {
                                    return (
                                      <a
                                        className="download"
                                        download={
                                          item.File.data.attributes.name
                                        }
                                        target="_blank"
                                        href={item.File.data.attributes.url}
                                        rel="noreferrer"
                                        key={index}
                                      >
                                        <span>
                                          {" "}
                                          <div className="tfpxbox">
                                            {" "}
                                            <i className="gg-software-download"></i>
                                          </div>
                                          <span className="namme">
                                            {item.text_for_the_file}
                                          </span>
                                        </span>
                                      </a>
                                    );
                                  }
                                )
                              : null}
                          </div>
                        </div>
                      )}
                      {item.attributes.right_side === null ? (
                        <div className="filler"></div>
                      ) : (
                        <div
                          className={
                            item.attributes.right_side.video === null
                              ? "doc-duo unique"
                              : "doc-duo"
                          }
                        >
                          {item.attributes.right_side.video ===
                          null ? null : item.attributes.right_side.video ===
                            true ? (
                            <div className="video-holder">
                              <iframe
                                className="smol-vid"
                                src={item.attributes.right_side.content_url}
                                frameBorder="0"
                                allow=""
                                allowFullScreen
                                title="Embedded youtube"
                              />
                            </div>
                          ) : (
                            <div className="img-cont">
                              {" "}
                              <Image
                                src={item.attributes.right_side.content_url}
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                          )}
                          <div
                            className={
                              item.attributes.right_side.video === null
                                ? "text-holder unique"
                                : "text-holder"
                            }
                          >
                            <div className="title">
                              {item.attributes.right_side.title}
                            </div>
                            <div className="desc">
                              {item.attributes.right_side.desc}
                            </div>
                          </div>
                          <div className="downloads">
                            {item.attributes.right_side.document !== undefined
                              ? item.attributes.right_side.document.map(
                                  (item, index) => {
                                    return (
                                      <a
                                        className="download"
                                        download={
                                          item.File.data.attributes.name
                                        }
                                        target="_blank"
                                        href={item.File.data.attributes.url}
                                        rel="noreferrer"
                                        key={index}
                                      >
                                        {" "}
                                        <span>
                                          {" "}
                                          <div className="tfpxbox">
                                            {" "}
                                            <i className="gg-software-download"></i>
                                          </div>
                                          <span className="namme">
                                            {item.text_for_the_file}
                                          </span>
                                        </span>
                                      </a>
                                    );
                                  }
                                )
                              : null}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : (
        "null"
      )}
    </>
  );
}
