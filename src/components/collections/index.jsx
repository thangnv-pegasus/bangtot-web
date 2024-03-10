// import Swiper from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Product from "../product";
import Title from "../title";
import { useEffect, useState } from "react";
import instance from "../../axios/config";
import LoadingDots from "../loading/dot";

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await instance.get("show-collection");

    setCollections(data.collections);
    setLoading(false);
    // console.log(collections);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-container mx-auto">
      <div className="py-10">
        <Title title="Các loại bảng" />
        {loading === false ? (
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
              {collections.length > 0 &&
                collections.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Product type="collection" collection={item} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        ): (
          <>
            <LoadingDots />
          </>
        )}
      </div>
    </div>
  );
};

export default Collections;
