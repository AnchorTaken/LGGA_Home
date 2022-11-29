// Packages
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Image from "next/image.js";
// utils
import MetaTags from "../comps/util/MetaTags.js";
// Context
import AppContext from "../comps/util/AppContext.js";

export default function About() {
  // Context
  const contacts_deets = useContext(AppContext);
  // Get the data from the API
  const [about, setAbout] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/about?populate=deep")
      .then((res) => {
        setAbout(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="about">
      <MetaTags
        title={"LGGA - APIE MUS"}
        desc={
          "LGGA turi net 29 metų darbo patirtį. Sėkmingai įgyvendinus pastarojo dešimtmečio selekcines programas, žalųjų veislių karvių produktyvumas didėja sparčiau nei kitų veislių."
        }
      />

      <div className="top-hero">
        <div className="text-holder">
          <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
            {isLoading === false ? about.attributes.title : "Loading..."}
          </h1>
        </div>
        <div className="top-hero-img">
          <Image
            src={
              isLoading === false
                ? about.attributes.main_image.data.attributes.url
                : "https://res.cloudinary.com/lzgga/image/upload/v1669062611/lggaAssets/favicon_mkkipi.png"
            }
            layout="fill"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>

      <div className="about__who">
        {isLoading === false ? (
          <>
            {about.attributes.about_comp.map((item, index) => (
              <div key={index}>
                {item.left === true ? (
                  <div className="left-sided">
                    <div
                      className="left-text"
                      data-aos="fade-up"
                      data-aos-once="true"
                    >
                      <div className="text-holder">
                        <h1
                          data-aos="fade-up"
                          data-aos-once="true"
                          data-aos-delay="100"
                        >
                          {item.title}
                        </h1>
                        <p
                          data-aos="fade-up"
                          data-aos-once="true"
                          data-aos-delay="300"
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div
                      className="right-image"
                      data-aos="fade-left"
                      data-aos-once="true"
                      data-aos-delay="500"
                    >
                      {" "}
                      <div className="image">
                        <Image
                          src={
                            item.img.data.attributes.url !== null
                              ? item.img.data.attributes.url
                              : "https://res.cloudinary.com/lzgga/image/upload/v1669062611/lggaAssets/favicon_mkkipi.png"
                          }
                          alt=""
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>{" "}
                    </div>
                  </div>
                ) : (
                  <div
                    className="right-sided"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="400"
                  >
                    <div
                      className="left-image"
                      data-aos="fade-right"
                      data-aos-once="true"
                      data-aos-delay="100"
                    >
                      {" "}
                      <div className="image">
                        {" "}
                        <Image
                          src={
                            item.img.data.attributes.url !== null
                              ? item.img.data.attributes.url
                              : "https://res.cloudinary.com/lzgga/image/upload/v1669062611/lggaAssets/favicon_mkkipi.png"
                          }
                          alt=""
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>{" "}
                    </div>
                    <div
                      className="right-text"
                      data-aos="fade-up"
                      data-aos-once="true"
                    >
                      <div className="text-holder">
                        <h1
                          data-aos="fade-up"
                          data-aos-once="true"
                          data-aos-delay="300"
                        >
                          {item.title}
                        </h1>
                        <p
                          data-aos="fade-up"
                          data-aos-once="true"
                          data-aos-delay="500"
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          ""
        )}
      </div>

      <div className="about__info__container">
        <div className="about__info">
          <div
            className="list-item"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <div className="tfpxbox">
              {" "}
              <i className="gg-pin"></i>
            </div>
            <p>{contacts_deets[0].address}</p>
          </div>
          <div
            className="list-item"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
          >
            <div className="tfpxbox">
              {" "}
              <i className="gg-phone"></i>
            </div>{" "}
            <a href={`tel:${contacts_deets[0].phone}`}>
              {contacts_deets[0].phone}
            </a>
          </div>
          <div
            className="list-item"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="600"
          >
            <div className="tfpxbox">
              {" "}
              <i className="gg-mail"></i>
            </div>
            <a href={`mailto: ${contacts_deets[0].email}`}>
              {contacts_deets[0].email}
            </a>
          </div>
        </div>
      </div>

      <iframe
        title="map"
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30036.379520996932!2d23.344824182923393!3d55.97593347246835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5fdf5ebad7757%3A0xc1ebf1d339e7ab85!2zVGlsxb7El3MgZy4gMzM1LCDFoGlhdWxpYWkgNzYxMTYsIExpdGh1YW5pYQ!5e0!3m2!1sen!2suk!4v1644487929544!5m2!1sen!2suk"
      ></iframe>
    </div>
  );
}
