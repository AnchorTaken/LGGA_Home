import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images
import MetaTags from "../comps/util/MetaTags.js";

export default function Gallery() {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Get Data
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/galleries?populate=deep")
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      });
  }, []);
  // gallery toggle
  const [toggle, setToggle] = useState(false);
  const [currentDate, setCurrentDate] = useState(0);
  const toggleGallery = () => {
    setToggle(!toggle);
  };
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    if (modal) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const [filter, setFilter] = useState(false);
  const toggleFilter = () => {
    setFilter(!filter);
  };
  const toggleDate = (index) => {
    setCurrentDate(index);
    toggleFilter();
  };

  return (
    <>
      <MetaTags
        title={"LGGA - Galerija"}
        desc={
          "LGGA turi net 29 metų darbo patirtį. Sėkmingai įgyvendinus pastarojo dešimtmečio selekcines programas, žalųjų veislių karvių produktyvumas didėja sparčiau nei kitų veislių."
        }
      />
      <div className={modal ? "gallery-modal " : "gallery-modal-hidden"}>
        <div className="close-gal" onClick={toggleModal}>
          <i className="gg-close"></i>
        </div>{" "}
        <Slider {...settings}>
          {!isLoading &&
            data[currentDate].attributes.images.data.map((img, index) => {
              return (
                <div className={"gallery_images"} key={currentDate}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={img.attributes.url}
                    alt=""
                  />
                </div>
              );
            })}
        </Slider>
      </div>
      <div className="whole-thingg">
        <div className="gallery-conteiner">
          <div className="top-hero">
            <div className="text-holder">
              <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
                Galerija
              </h1>
              <p data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
                LGGA narių įamžintos akimirkos iš įvairių parodų, seminarų,
                apmokymų, ekskursijų ir išvaizdžiai atrodančių galvijų ar jų
                bandų nuotraukos
              </p>
            </div>
          </div>
          <div className="gal-cont">
            <div className="main-content">
              {!isLoading &&
                data.map((img, index) => {
                  return (
                    <div key={index}>
                      {currentDate === index ? (
                        <>
                          <div className="date">
                            <p
                              data-aos="fade-right"
                              data-aos-once="true"
                              data-aos-delay="100"
                            >
                              {" "}
                              {img.attributes.date}
                            </p>{" "}
                            <span
                              data-aos="fade-down"
                              data-aos-once="true"
                              data-aos-delay="300"
                            ></span>
                            <div className="cal-holder" onClick={toggleFilter}>
                              <i className="gg-calendar-today"></i>
                            </div>
                          </div>
                          <div className="gallery-page-second">
                            {img.attributes !== undefined
                              ? img.attributes.images.data.map((img, index) => {
                                  return (
                                    <div
                                      className={`img-resize div${index + 1}`}
                                      key={index}
                                    >
                                      <Image
                                        onClick={toggleModal}
                                        data-aos="fade-in"
                                        data-aos-once="true"
                                        data-aos-duration={index * 100}
                                        layout="fill"
                                        src={img.attributes.url}
                                        alt=""
                                      />
                                    </div>
                                  );
                                })
                              : null}
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
            </div>
            <div
              className={
                filter === true ? "side-bar" : "side-bar hidden-mobile"
              }
            >
              <div className="cal-close" onClick={toggleFilter}>
                <i className="gg-close"></i> <span>Close</span>
              </div>
              <div className="text-holder">
                <div
                  className="title"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="100"
                >
                  Archyvas
                </div>
                {isLoading ? (
                  <></>
                ) : (
                  <ul>
                    {!isLoading &&
                      data.map((img, index) => {
                        return (
                          <div key={index}>
                            {img.attributes.date !== undefined ? (
                              <li
                                data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-delay="400"
                                className={
                                  currentDate === index
                                    ? "date-side active"
                                    : "date-side active"
                                }
                                key={index}
                                onClick={() => toggleDate(index)}
                              >
                                {img.attributes.date}
                              </li>
                            ) : null}
                          </div>
                        );
                      })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
