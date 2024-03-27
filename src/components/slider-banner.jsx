/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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
        <div className="w-full h-[600px]">
          <img src='https://bangtot.vn/wp-content/uploads/2018/12/slideshow2.png' alt="" className="w-full h-full"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[600px]">
          <img src="https://bangtot.vn/wp-content/uploads/2018/12/slideshow1.png" alt="" className="w-full h-full"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[600px]">
          <img src="https://shopbang.vn/images/uploads/450_141814151220151.jpg?v=2018" alt="" className="w-full h-full"/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
