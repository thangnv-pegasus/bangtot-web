import { useEffect, useState } from "react";
import instance from "../../axios/config";
import routers from "../../config/router";
import Title from "../title";
import Blog from "./blog";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const { data } = await instance.get(`blogs?page=${1}`);
    setPosts(data.blogs.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="md:max-w-[760px] max-w-full px-10 sm:px-0 lg:max-w-[1000px] xl:max-w-container mx-auto">
      <div className="py-10">
        <Title
          title="Tin tức mới nhât"
          classess={"flex-1 text-center pb-4"}
          showLink={true}
          path={routers.blogs}
        />
        <Swiper
          slidesPerView={2}
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
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {posts.length > 0 &&
            posts.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Blog blog={item} key={index} />;
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
