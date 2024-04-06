import { useEffect, useRef, useState } from "react";
import instance from "../../axios/config";
import Layout from "../../components/layout";
import TitlePage from "../../components/page-title";
import { Link, useNavigate } from "react-router-dom";
import ProductOrder from "../../components/product/product-order";
import routers from "../../config/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../components/loading/spinner";
const BuyNow = () => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const noteRef = useRef();
  const [loading, setLoading] = useState(false);
  const temp = JSON.parse(localStorage.getItem("temp"));
  const formatNumber = (num) => {
    const x = Number(num);

    return x.toLocaleString();
  };
  const fetchData = async () => {
    const { data } = await instance.get(`product/${temp.product.id}`);
    setProduct(data.product[0]);
  };

  const showToastWarning = () => {
    toast.warning("Hãy điền đầy đủ thông tin!");
  };

  const handleOrder = async () => {
    if (
      nameRef.current.value == "" ||
      addressRef.current.value == "" ||
      phoneRef.current.value == "" ||
      emailRef.current.value == ""
    ) {
      showToastWarning();
    } else {
      setLoading(true);
      const { data } = await instance.post(
        "user/order",
        {
          username: nameRef.current.value,
          address: addressRef.current.value,
          phone: phoneRef.current.value,
          email: emailRef.current.value,
          note: noteRef.current.value,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      // console.log(data);
      nameRef.current.value = "";
      addressRef.current.value = "";
      phoneRef.current.value = "";
      emailRef.current.value = "";
      noteRef.current.value = "";
      setLoading(false);
      navigate("/hoa-don");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="lg:max-w-[1000px] md:max-w-[760px] max-w-full px-10 md:px-0 xl:max-w-container mx-auto">
        <div className="py-10">
          <div className="grid md:grid-cols-6_4 flex-wrap gap-x-5 lg:gap-x-10">
            <form action="" method="post" className="block">
              <TitlePage
                title="Thông tin nhận hàng"
                classes="text-lg font-semibold select-none"
              />
              <div class="my-4">
                <div class="relative w-full min-w-[200px] h-10">
                  <input
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-300 focus:border-gray-900"
                    placeholder=" "
                    type="text"
                    ref={nameRef}
                  />
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 peer-focus:font-meidum">
                    Họ tên
                  </label>
                </div>
              </div>
              <div class="my-4">
                <div class="relative w-full min-w-[200px] h-10">
                  <input
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-300 focus:border-gray-900"
                    placeholder=" "
                    type="email"
                    required
                    ref={addressRef}
                  />
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 peer-focus:font-meidum">
                    Địa chỉ
                  </label>
                </div>
              </div>
              <div class="my-4">
                <div class="relative w-full min-w-[200px] h-10">
                  <input
                    type="tel"
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-300 focus:border-gray-900"
                    placeholder=" "
                    ref={phoneRef}
                  />
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 peer-focus:font-meidum">
                    Số điện thoại
                  </label>
                </div>
              </div>
              <div class="my-4">
                <div class="relative w-full min-w-[200px] h-10">
                  <input
                    type="email"
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-300 focus:border-gray-900"
                    placeholder=" "
                    ref={emailRef}
                  />
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 peer-focus:font-meidum">
                    Địa chỉ email
                  </label>
                </div>
              </div>
              <div class="my-4">
                <div class="relative w-full min-w-[200px] h-10">
                  <textarea
                    class="peer w-full h-40 bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-300 focus:border-gray-900"
                    placeholder=" "
                    ref={noteRef}
                  />
                  <label class="flex w-full h-full select-none peer-focus:font-medium pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Thông tin bổ xung
                  </label>
                </div>
              </div>
            </form>
            <div className="block md:pt-0 pt-28">
              <TitlePage
                title="Đơn hàng của bạn"
                classes="text-lg font-medium select-none"
              />
              <div className="md:pt-5 pt-10">
                <div className="max-h-96 overflow-y-auto">
                  <ProductOrder
                    product={product}
                    key={product.id}
                    quantity={temp.quantity}
                    size={temp.size}
                  />
                </div>
                <div className="flex items-center justify-between py-2 mt-4 font-medium">
                  <p>Tổng tiền thanh toán:</p>
                  <p className="text-baseColor">
                    {product.price_sale == 0 ? (
                      <>
                        {formatNumber(
                          (product.price +
                            (product.factor || temp.size.factor)) *
                            (product.quantity || temp.quantity)
                        )}
                      </>
                    ) : (
                      <>
                        {formatNumber(
                          (product.price_sale +
                            (product.factor || temp.size.factor)) *
                            (product.quantity || temp.quantity)
                        )}
                      </>
                    )}
                    <sup className="top-1/2 -left-[2px] underline">đ</sup>{" "}
                  </p>
                </div>
                <button
                  onClick={() => handleOrder()}
                  className="block w-full mt-2 text-white font-meidum uppercase bg-baseColor text-center rounded-md py-2 transition-all ease-linear hover:bg-baseBg"
                >
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {loading === true && <LoadingSpinner />}
    </Layout>
  );
};

export default BuyNow;
