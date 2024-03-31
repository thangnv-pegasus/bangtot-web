// import Swiper from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Title from "../title";
import Product from "../product";
import instance from "../../axios/config";
import { useEffect, useState } from "react";
import LoadingDots from "../loading/dot";

const Collection = ({
  title = 'Bảng phấn',
  collection_id = 1,
  path = "",
  showLink = false,
}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await instance.get(
      `product-in-collection/${collection_id}`
    );
    setProducts(data.products);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="md:max-w-[760px] max-w-full px-10 md:px-0 lg:max-w-[1000px] xl:max-w-container mx-auto">
      <div className="py-10">
        <Title title={title} showLink={showLink} path={path} />
        <div className="pt-5">
          {loading === false ? (
            <Swiper
              slidesPerView={"6"}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {products.length > 0 &&
                products.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Product product={item} type="product" />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          ) : (
            <>
              <LoadingDots />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
