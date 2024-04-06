import { useNavigate, useParams } from "react-router-dom";
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
import { TiMinus } from "react-icons/ti";
import { FaShoppingBasket } from "react-icons/fa";
import Guide from "../../components/product/shopping-guide";
import TitlePage from "../../components/page-title";
import Product from "../../components/product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [currentImg, setCurrentImg] = useState();
  const [sizes, setSizes] = useState([]);
  const [selectSize, setSelectSize] = useState();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [showToast, setShowToast] = useState();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const fetchData = async () => {
    setLoading(true);
    const { data } = await instance.get(`product/${id}`);

    setProduct(data.product[0]);
    setImages(data.images);
    setCurrentImg(data.images[0]);
    setSizes(data.sizes);
    setSelectSize(data.sizes[0]);
    setRelatedProducts(data.related);
    // console.log(data)
    setLoading(false);
  };

  const addToCart = async () => {
    if (auth.isLogin === false) {
      navigate("/dang-nhap");
    } else {
      try {
        const { data } = await instance.post("user/add-to-cart", {
          productId: id,
          quantity: Number(quantity),
          sizeId: Number(selectSize.idSize),
        });
        showToastMessage();
        setShowToast(true);
        console.log(data);
      } catch (e) {
        console.log(e);
        showToastError();
        setShowToast(false);
      }
    }
  };

  const formatNumber = (num) => {
    const x = Number(num);
    return x.toLocaleString();
  };

  const showToastMessage = () => {
    toast.success("Thêm sản phẩm vào giỏ hàng thành công!");
  };

  const showToastError = () => {
    toast.error("Thêm sản phẩm thất bại!");
  };

  const buyNow = () => {
    if (auth.isLogin === false) {
      navigate("/dang-nhap");
    } else {
      localStorage.setItem(
        "temp",
        JSON.stringify({
          size: selectSize,
          quantity,
          product: product,
        })
      );
      navigate("/mua-ngay");
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="lg:max-w-[1000px] md:max-w-[760px] max-w-full px-10 md:px-0 xl:max-w-container mx-auto">
        <div className="py-10">
          {loading === true ? (
            <>
              {" "}
              <LoadingDots />{" "}
            </>
          ) : (
            <>
              <div className="grid grid-cols-4_6 gap-x-5 md:gap-x-16 pb-10">
                <div>
                  <div className="w-full h-96 overflow-hidden rounded-sm">
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
                              className={`w-full h-24 overflow-hidden border-[2px] border-solid rounded-sm cursor-pointer p-2 ${
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
                  <h1 className="text-2xl font-semibold">{product.name}</h1>
                  {product.price_sale != 0 ? (
                    <div className="mt-4 flex items-center">
                      <p className="text-xl font-semibold text-orange-500 relative">
                        {formatNumber(product.price_sale + selectSize?.factor)}{" "}
                        <sup className="top-1/2 text-sm underline -left-[2px]">
                          đ
                        </sup>
                      </p>
                      <p className="ml-2 text-gray-400 line-through decoration-2">
                        {formatNumber(product.price + selectSize?.factor)}{" "}
                        <sup className="top-0 text-sm underline -left-[2px]">
                          đ
                        </sup>
                      </p>
                    </div>
                  ) : (
                    <p className="text-xl font-medium text-orange-500 mt-4">
                      {formatNumber(product.price + selectSize?.factor)}{" "}
                      <sup className="top-0 text-sm underline -left-[2px]">
                        đ
                      </sup>
                    </p>
                  )}
                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    className="my-2 [&>ul>li]:py-1 [&>ul]:list-disc [&>ul]:pl-5"
                  />
                  <p className="mb-2 font-medium">Kích thước:</p>
                  <div className="flex flex-wrap items-center">
                    {sizes.map((item, index) => {
                      return (
                        <button
                          key={index}
                          className={`border-[1px] border-solid border-gray-300 px-2 py-1 rounded-sm mr-3 my-2 ${
                            selectSize.idSize === item.idSize && selectSize
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
                  <div className="flex items-center py-5">
                    <p>Số lượng:</p>
                    <div className="flex items-center border-[1px] border-solid border-gray-400 ml-4">
                      <button
                        className="p-2 border-r-2 border-solid border-gray-300"
                        onClick={() =>
                          setQuantity((pre) => (pre > 1 ? pre - 1 : pre))
                        }
                      >
                        <TiMinus />
                      </button>
                      <input
                        type="text"
                        name="quantity"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="block w-10 text-center outline-none"
                      />
                      <button
                        className="p-2 border-l-2 border-solid border-gray-300"
                        onClick={() => setQuantity((pre) => pre + 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="flex items-center px-5 py-3 rounded-md mr-5 border-[1px] border-solid border-gray-400 bg-orange-500 text-white"
                      onClick={() => addToCart()}
                    >
                      <p className="text-sm font-semibold uppercase">
                        Thêm vào giỏ hàng
                      </p>{" "}
                      <span className="text-lg ml-2">
                        <FaShoppingBasket />
                      </span>
                    </button>
                    <button
                      className="block px-5 py-3 rounded-md mr-5 border-[1px] border-solid uppercase text-sm font-semibold border-baseColor text-baseColor bg-white transition-all ease-linear duration-200 hover:text-white hover:bg-baseColor"
                      onClick={() => buyNow()}
                    >
                      Mua ngay
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-10">
                <ul className="inline-flex items-center uppercase font-medium text-sm relative border-b-2 border-solid border-gray-300">
                  <li
                    onClick={() => setShowGuide(false)}
                    className={`block px-5 py-2 cursor-pointer ${
                      showGuide === false ? "text-orange-500" : "text-black"
                    }`}
                  >
                    Mô tả
                  </li>
                  <li
                    onClick={() => setShowGuide(true)}
                    className={`block px-5 py-2 cursor-pointer ${
                      showGuide === true ? "text-orange-500" : "text-black"
                    }`}
                  >
                    Hướng dẫn mua hàng
                  </li>
                  <li
                    className={`block w-20 h-1 bg-orange-500 absolute top-full bottom-0 -translate-y-1/2 transition-all ease-linear duration-300 origin-center ${
                      showGuide === false
                        ? "left-0 right-full"
                        : "right-0 left-36"
                    }`}
                  ></li>
                </ul>
                {showGuide ? (
                  <>
                    <Guide />
                  </>
                ) : (
                  <div class="ql-editor">
                    <div
                      className="pt-5 leading-10 [&>h2]:font-bold"
                      dangerouslySetInnerHTML={{ __html: product.detail }}
                    />
                  </div>
                )}
              </div>
              <div className="pt-10">
                <TitlePage
                  title="Sản phẩm liên quan"
                  classes="text-lg font-medium pb-6"
                />
                <div className="grid grid-cols-5 gap-x-10">
                  {relatedProducts.map((item, index) => {
                    return (
                      <Product product={item} key={index} type="product" />
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {showToast === true && <ToastContainer />}
    </Layout>
  );
};

export default ProductDetail;
