import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
// Logos

export default function ConctactSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // load the data async
    axios
      .get("http://localhost:1337/api/sponsors?populate=deep")
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoading == false ? (
        <Slider {...settings}>
          {data[0].attributes.sponsor_single.map((item, index) => (
            <a
              href={item.url !== null || undefined ? item.url : "/"}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={index * 100}
              key={index}
            >
              <div className="cont-image">
                <Image
                  layout="fill"
                  src={
                    item.logo.data.attributes.url !== null || undefined
                      ? item.logo.data.attributes.url
                      : "/"
                  }
                  alt="{cows}"
                />
              </div>
            </a>
          ))}
        </Slider>
      ) : (
        "Loading..."
      )}
    </>
  );
}
