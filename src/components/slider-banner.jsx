/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../images/slideshow_5.png";
import img2 from "../images/slideshow1.png";
import img3 from "../images/slideshow2.png";
import '../custom-css/banner-slider.css'
const Banner = () => {
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
      <SwiperSlide>
        <div className="w-full">
          <img src='https://via.placeholder.com/1600x600' alt="" className="w-full h-full"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full">
          <img src="https://via.placeholder.com/1600x600" alt="" className="w-full h-full"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full">
          <img src="https://via.placeholder.com/1600x600" alt="" className="w-full h-full"/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
