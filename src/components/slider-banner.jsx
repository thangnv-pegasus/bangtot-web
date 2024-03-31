/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../custom-css/banner-slider.css";
import instance from "../axios/config";
import { useEffect, useState } from "react";
const Banner = () => {
  const [banner, setBanner] = useState([]);

  const fetchData = async () => {
    const { data } = await instance.get("banner");

    if (data.status == 200) {
      setBanner(data.banner);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper select-none"
    >
      {banner.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="w-full h-60 md:h-96 lg:h-[550px]">
              <img src={item.url} alt="" className="w-full h-full" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;
