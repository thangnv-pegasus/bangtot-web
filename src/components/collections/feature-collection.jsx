// import Swiper from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Title from "../title";
import Product from "../product";

const Collection = ({ title, products = [], path = "", showLink = false }) => {
  return (
    <div className="max-w-container mx-auto">
      <div className="py-10">
        <Title title="Bảng phấn" showLink={showLink} path={path} />
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
                type="product"
                price={800000}
                price_sale={700000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                path="/"
                img={"https://via.placeholder.com/200x200"}
                title="collection name"
                type="product"
                price={800000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                path="/"
                img={"https://via.placeholder.com/200x200"}
                title="collection name"
                type="product"
                price={800000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                path="/"
                img={"https://via.placeholder.com/200x200"}
                title="collection name"
                type="product"
                price={800000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                path="/"
                img={"https://via.placeholder.com/200x200"}
                title="collection name"
                type="product"
                price={800000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                path="/"
                img={"https://via.placeholder.com/200x200"}
                title="collection name"
                type="product"
                price={800000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                path="/"
                img={"https://via.placeholder.com/200x200"}
                title="collection name"
                type="product"
                price={800000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                path="/"
                img={"https://via.placeholder.com/200x200"}
                title="collection name"
                type="product"
                price={800000}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Collection;
