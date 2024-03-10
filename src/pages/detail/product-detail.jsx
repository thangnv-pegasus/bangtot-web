import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import instance from "../../axios/config";
import { useEffect, useState } from "react";
import LoadingDots from "../../components/loading/dot";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../custom-css/banner-slider.css";
// import required modules
import { Navigation } from "swiper/modules";
import { FaPlus } from "react-icons/fa";



const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [currentImg, setCurrentImg] = useState();
  const [sizes, setSizes] = useState([]);
  const [selectSize, setSelectSize] = useState();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await instance.get(`product/${id}`);

    setProduct(data.product[0]);
    setImages(data.images);
    setCurrentImg(data.images[0]);
    setSizes(data.sizes);
    setSelectSize(data.sizes[0]);
    setLoading(false);
  };

  const formatNumber = (num) => {
    const x = Number(num);
    return x.toLocaleString();
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout>
      <div className="max-w-container mx-auto">
        <div className="py-10">
          {loading === true ? (
            <>
              {" "}
              <LoadingDots />{" "}
            </>
          ) : (
            <div className="grid grid-cols-4_6 gap-x-16">
              <div>
                <div className="w-full h-auto overflow-hidden rounded-sm">
                  <img
                    src={currentImg?.name}
                    alt={currentImg?.name}
                    className="w-full h-full object-cover object-center block"
                  />
                </div>
                <div className="pt-4">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={4}
                    spaceBetween={20}
                    className="mySwiper w-[31rem] select-none"
                  >
                    {images.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div
                            className={`w-full h-auto overflow-hidden border-[2px] border-solid rounded-sm cursor-pointer p-2 ${
                              item.name === currentImg.name
                                ? "border-gray-300 opacity-100"
                                : "opacity-50 border-gray-200"
                            }`}
                            onClick={() => setCurrentImg(item)}
                          >
                            <img
                              src={item.name}
                              alt={item.name}
                              className="block w-full h-full object-cover object-center"
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{product.name}</h1>
                {product.price_sale != 0 ? (
                  <div className="mt-4">
                    <p className="text-xl font-semibold text-orange-500">
                      {formatNumber(product.price_sale)}{" "}
                      <sup className="top-0 text-sm underline -left-[2px]">
                        đ
                      </sup>
                    </p>
                    <p className="ml-2 text-gray-400 line-through decoration-2">
                      {formatNumber(product.price)}{" "}
                      <sup className="top-0 text-sm underline -left-[2px]">
                        đ
                      </sup>
                    </p>
                  </div>
                ) : (
                  <p className="text-xl font-medium text-orange-500 mt-4">
                    {formatNumber(product.price)}{" "}
                    <sup className="top-0 text-sm underline -left-[2px]">đ</sup>
                  </p>
                )}
                <div
                  dangerouslySetInnerHTML={{ __html: product.description }}
                  className="my-2 [&>ul>li]:py-1 [&>ul]:list-disc pl-5"
                />
                <p className="mb-2 font-medium">Kích thước:</p>
                <div className="flex flex-wrap items-center">
                  {sizes.map((item, index) => {
                    return (
                      <button
                        key={index}
                        className={`border-[1px] border-solid border-gray-300 px-2 py-1 rounded-sm mr-3 ${
                          selectSize.idSize === item.idSize
                            ? "bg-baseColor text-white"
                            : "bg-white text-black"
                        }`}
                        onClick={() => setSelectSize(item)}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center">
                  <p>Số lượng:</p>
                  <div className="flex items-center">
                    <button></button>
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button><FaPlus /></button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
