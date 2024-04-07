import { useEffect, useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import instance from "../../axios/config";
import ProductOrder from "../../components/product/product-order";
import { Link } from "react-router-dom";
import routers from "../../config/router";
import logo from '../../logo/logo.png'

const Bill = () => {
  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await instance.get("user/order-infor", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    const { order_infor, products } = data;
    // console.log(data);
    setOrder(order_infor);
    setProducts(products);
  };

  const getSum = (products = [], init = 0) => {
    const sum = products.reduce((pre_total, current) => {
      if (current.price_sale != 0) {
        return (pre_total + current.price_sale + current.factor) * current.quantity;
      }
      return (pre_total + current.price + current.factor) * current.quantity;
    }, 0);

    return (sum + init).toLocaleString();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#e6e8ea] w-full h-screen flex items-center justify-center">
      <div className="w-4/5">
        <div className="block text-center pb-10 w-60 h-36 mx-auto">
          <img
            src={logo}
            alt="logo"
            className="mx-auto w-full h-full object-cover object-center"
          />
        </div>
        <div className="grid lg:grid-cols-6_4 grid-cols-1 py-5 gap-x-5 lg:gap-x-10">
          <div>
            <div className="flex items-center pb-10">
              <div className="text-6xl text-[#8EC343]">
                <IoCheckmarkCircleOutline />
              </div>
              <p className="font-medium text-xl px-2">Cảm ơn bạn đã đặt hàng</p>
            </div>
            <div className="grid grid-cols-2 flex-wrap gap-10 p-4 border-[1px] border-solid border-[#dadada] rounded-md">
              <div>
                <h2 className="pb-2 text-xl">Thông tin mua hàng</h2>
                <p className="py-1">
                  Tên khách hàng: <b>{order?.name}</b>
                </p>
                <p>
                  Email: <b>{order?.email}</b>
                </p>
                <p>
                  Điện thoại: <b>{order?.phone}</b>
                </p>
              </div>

              <div>
                <h2 className="pb-2 text-xl">Địa chỉ nhận hàng</h2>
                <p className="py-1">
                  Tên khách hàng: <b>{order?.name}</b>
                </p>
                <p>
                  Email: <b>{order?.address}</b>
                </p>
                <p>
                  Thông tin khác: <b>{order?.note || "Không có"}</b>
                </p>
              </div>
              <div>
                <h2 className="pb-2 text-xl">Phương thức thanh toán</h2>
                <p className="py-1">Thu hộ (COD)</p>
              </div>
              <div>
                <h2 className="pb-2 text-xl">Phương thức vận chuyển</h2>
                <p className="py-1">Giao hàng tận nơi</p>
              </div>
            </div>
          </div>
          <div className="bg-white border-solid border-[1px] border-[#e1e1e1]">
            <h2 className="font-semibold py-2 px-5 border-b-[1px] border-solid border-[#e1e1e1]">
              Đơn hàng (#{order?.id})
            </h2>
            <div className="max-h-96 overflow-y-auto px-4 my-2">
              {products.map((item, index) => {
                console.log(item);
                return <ProductOrder product={item} key={index} />;
              })}
            </div>
            <div className="border-t-[1px] border-solid border-[#e1e1e1] px-5 py-2">
              <div className="flex flex-items-center justify-between pb-2">
                <p>Tạm Tính: </p>
                <p className="">
                  {getSum(products)} <sup className="">đ</sup>{" "}
                </p>
              </div>
              <div className="flex flex-items-center justify-between pt-2">
                <p>Phí vận chuyển: </p>
                <p className="">
                  {(40000).toLocaleString()} <sup className="">đ</sup>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between px-5 py-4 border-t-[1px] border-solid border-[#e1e1e1] text-lg font-medium">
              <p>Tổng cộng: </p>
              <p className="text-baseColor">
                {getSum(products, 40000)} <sup>đ</sup>{" "}
              </p>
            </div>
          </div>
        </div>

        <Link to={routers.home} className="block w-52 mx-auto bg-orange-400 text-center mt-5 py-4 rounded-md text-lg transition-all ease-linear hover:bg-orange-600">Tiếp tục mua hàng</Link>
      </div>
    </div>
  );
};

export default Bill;
