// import Swiper from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Product from "../product";
import Title from "../title";

const Collections = () => {
    return (
        <div className="max-w-container mx-auto">
            <div className="py-10">
              <Title title="Các loại bảng" />
              <div className="pt-5">
                <Swiper
                  slidesPerView={"6"}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Product
                      path="/"
                      img={"https://via.placeholder.com/200x200"}
                      title="collection name"
                      type="collection"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Product
                      path="/"
                      img={"https://via.placeholder.com/200x200"}
                      title="collection name"
                      type="collection"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Product
                      path="/"
                      img={"https://via.placeholder.com/200x200"}
                      title="collection name"
                      type="collection"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Product
                      path="/"
                      img={"https://via.placeholder.com/200x200"}
                      title="collection name"
                      type="collection"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Product
                      path="/"
                      img={"https://via.placeholder.com/200x200"}
                      title="collection name"
                      type="collection"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Product
                      path="/"
                      img={"https://via.placeholder.com/200x200"}
                      title="collection name"
                      type="collection"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Product
                      path="/"
                      img={"https://via.placeholder.com/200x200"}
                      title="collection name"
                      type="collection"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Product
                      path="/"
                      img={"https://via.placeholder.com/200x200"}
                      title="collection name"
                      type="collection"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
    )
}

export default Collections