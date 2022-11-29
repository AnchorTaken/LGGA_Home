//React
import { useEffect, useState } from "react";

// Next
import Image from "next/image";

// Axios
import axios from "axios";

// Utils
import MetaTags from "../comps/util/MetaTags.js";

export default function Home() {
  // Get the data from the API
  const [services, setServices] = useState([]);
  const [generic, setGeneric] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/services?populate=*")
      .then((res) => {
        setServices(res.data.data);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:1337/api/home?populate=deep")
      .then((res) => {
        setGeneric(res.data.data);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:1337/api/home-gallery?populate=*")
      .then((res) => {
        setGallery(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="main-content">
        <MetaTags
          title={"LGGA - Pagrindinis"}
          desc={
            "LGGA turi net 29 metų darbo patirtį. Sėkmingai įgyvendinus pastarojo dešimtmečio selekcines programas, žalųjų veislių karvių produktyvumas didėja sparčiau nei kitų veislių."
          }
        />
        <div
          className="hero"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/lzgga/image/upload/v1669101541/tmudpnditkxwaxg0yxhc.jpg)`,
          }}
        >
          <div className="hero-holder">
            <h1 data-aos="fade-down" data-aos-once="true">
              {isLoading === false ? generic.attributes.title : "Loading..."}
            </h1>

            <p data-aos="fade-down" data-aos-once="true" data-aos-delay="200">
              {isLoading === false ? generic.attributes.tag_line : "Loading..."}
            </p>
            {/* <button className="btn-main btn-white btn-hero"><span>Contact Us</span> </button> */}
          </div>
        </div>
        <div className="services container">
          <div className="services container">
            <div className="top-of-services">
              <h1
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="300"
              >
                {isLoading === false
                  ? generic.attributes.top_of_services_left
                  : "Loading..."}
              </h1>

              <div
                className="line"
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="400"
              ></div>
              <p data-aos="fade-down" data-aos-once="true" data-aos-delay="500">
                {isLoading === false
                  ? generic.attributes.top_of_services_right
                  : "Loading..."}
              </p>
            </div>
            <div className="boxes-holder">
              <div className="boxes-grid">
                {services.map((item, index) => (
                  <div
                    className="box flex split-3"
                    data-aos="fade-down"
                    data-aos-once="true"
                    data-aos-delay={index * 100}
                    data-aos-offset={index - 100}
                    key={index}
                  >
                    <div className="box-img">
                      <Image
                        src={
                          item.attributes.icon.data !== null
                            ? item.attributes.icon.data.attributes.url
                            : "/"
                        }
                        objectFit="contain"
                        width={50}
                        height={50}
                        alt={item.attributes.title}
                      />
                    </div>
                    <div className="not-flexed">
                      <h1>{item.attributes.title}</h1>
                      <p>{item.attributes.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="about-us">
          <div
            className="left-side"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="100"
          ></div>
          <div className="right-side">
            <div className="text-holder">
              <h1
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="100"
              >
                {generic.attributes !== undefined
                  ? generic.attributes.IIN_title
                  : "Loading..."}
              </h1>
              <a
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="300"
                className="btn-main custom"
                download={
                  generic.attributes !== undefined
                    ? generic.attributes.IIN.data.attributes.url
                    : "/"
                }
                rel="noreferrer"
                target="_blank"
                href={
                  generic.attributes !== undefined
                    ? generic.attributes.IIN.data.attributes.url
                    : "/"
                }
              >
                <span>
                  {generic.attributes !== undefined
                    ? generic.attributes.IIN_btn_name
                    : "Loading.."}
                </span>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="container">
            <div className="stats-title">
              <h1
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="100"
              >
                Šiuo momentu LGGA asociacijai priklauso
              </h1>
            </div>
            <div className="container">
              <div className="holder">
                <div className="split-4">
                  <div className="icon">
                    <Image
                      src={
                        "https://res.cloudinary.com/lzgga/image/upload/v1669062605/lggaAssets/assets/img/icons/clients_ijlw4a.png"
                      }
                      alt=""
                      widht={50}
                      height={50}
                      layout="fill"
                      objectFit="contain"
                      data-aos="fade-right"
                      data-aos-once="true"
                      data-aos-delay="200"
                    />
                  </div>
                  <div className="text-holder">
                    <div
                      className="number"
                      data-aos="fade-down"
                      data-aos-once="true"
                      data-aos-delay="300"
                    >
                      {isLoading === false
                        ? generic.attributes.clients + "+"
                        : "Loading..."}
                    </div>
                    <div
                      className="title"
                      data-aos="fade-up"
                      data-aos-once="true"
                      data-aos-delay="400"
                    >
                      Klientų
                    </div>
                  </div>
                </div>
                <div className="split-4 second">
                  <div className="icon">
                    <Image
                      src={
                        "https://res.cloudinary.com/lzgga/image/upload/v1669062604/lggaAssets/assets/img/icons/cow_lkzcry.png"
                      }
                      widht={25}
                      height={50}
                      layout="fill"
                      alt=""
                    />
                  </div>
                  <div className="text-holder">
                    <div
                      className="number"
                      data-aos="fade-left"
                      data-aos-once="true"
                      data-aos-delay="500"
                    >
                      {isLoading === false
                        ? generic.attributes.animals + "+"
                        : "Loading..."}
                    </div>
                    <div
                      className="title"
                      data-aos="fade-up"
                      data-aos-once="true"
                      data-aos-delay="600"
                    >
                      Gyvulių
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <></>
        ) : (
          <div className="gallery container gallery-home">
            <div className="gallery-title">
              <div className="date">
                <p>Gallery</p> <span></span>
              </div>
            </div>
            <div className="gallery-grid">
              {gallery.attributes.slides.data.map((item, index) => (
                <div key={index} className={`img-resize div${index + 1}`}>
                  <Image
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-duration="1000"
                    layout="fill"
                    src={
                      item.attributes.url !== null ? item.attributes.url : "/"
                    }
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
