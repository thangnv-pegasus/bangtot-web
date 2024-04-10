import { useEffect, useState } from "react";
import instance from "../axios/config";
import Layout from "../components/layout";
import TitlePage from "../components/page-title";
import ProductCart from "../components/product/product-cart";
import { Link } from "react-router-dom";
import routers from "../config/router";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    const { data } = await instance.get("user/cart", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    setCart(data.cart);
  };

  const sumCart = () => {
    const sum = cart.reduce((pre_total, currentValue) => {
      if (currentValue.price_sale !== 0) {
        return (
          (pre_total + currentValue.price_sale + currentValue.factor) *
          currentValue.quantity
        );
      }
      return (
        (pre_total + currentValue.price + currentValue.factor) *
        currentValue.quantity
      );
    }, 0);
    return sum
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
          <TitlePage
            title="Giỏ hàng của bạn"
            classes="text-xl font-semibold mb-5"
          />
          {cart.length > 0 && (
            <>
              <div className="border-[1px] border-solid border-gray-400 rounded-md overflow-hidden">
                <div className="grid grid-cols-3_1_2_1 gap-x-10 border-solid border-b-[1px] border-gray-400 font-medium">
                  <div className="py-1 px-2">Thông tin sản phẩm</div>
                  <div className="py-1 px-2">Đơn giá</div>
                  <div className="py-1 px-2">Số lượng</div>
                  <div className="py-1 px-2">Thành tiền</div>
                </div>
                {cart.map((item, index) => {
                  return (
                    <ProductCart
                      product={item}
                      setCart={setCart}
                      key={item.cart_product_id}
                    />
                  );
                })}
              </div>
              <div className="flex items-end flex-col pt-5">
                <div className="flex items-center text-lg font-medium">
                  <p className="mr-5">Tổng tiền:</p>{" "}
                  <p className=" text-baseColor">
                    {formatNumber(sumCart())}{" "}
                    <sup className="text-sm underline -left-[2px] top-1/2 -translate-y-1/2">
                      đ
                    </sup>{" "}
                  </p>
                </div>
                <Link
                  to={routers.order}
                  className="block mt-4 border-[1px] border-solid border-gray-200 px-10 py-2 rounded-md bg-black text-white transition-all ease-linear duration-300 hover:bg-baseColor"
                >
                  Thanh toán
                </Link>
              </div>
            </>
          )}
          {cart.length === 0 && <p>Không có sản phẩm nào trong giỏ hàng</p>}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
