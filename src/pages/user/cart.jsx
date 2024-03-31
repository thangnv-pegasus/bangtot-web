import { useEffect, useState } from "react";
import instance from "../../axios/config";
import Layout from "../../components/layout";
import TitlePage from "../../components/page-title";
import Row from "../../components/table/row";
import ProductCart from "../../components/product/product-cart";
import routers from "../../config/router";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const { data } = await instance.get("user/cart", {
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setCart(data.cart);
    console.log(data);
  };

  const sumProduct = () => {
    const sum = cart.reduce((pre_total, current) => {
      if (current.price_sale != 0) {
        return (
          (pre_total + current.factor + current.price_sale) * current.quantity
        );
      }
      return (pre_total + current.price + current.factor) * current.quantity;
    }, 0);
    return sum
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="lg:max-w-[1000px] md:max-w-[760px] max-w-full px-10 md:px-0 xl:max-w-container mx-auto">
        <div className="py-10">
          <TitlePage title="Giỏ hàng" classes="font-semibold" />
          <div className="my-5 overflow-hidden rounded-md border-[1px] border-solid border-gray-300">
            <div className="grid grid-cols-3_1_2_1 border-b-[1px] border-solid border-gray-300">
              <div className="lg:px-2 py-1 text-sm font-medium">
                Thông tin sản phẩm
              </div>
              <div className="lg:px-2 py-1 text-sm font-medium">Đơn giá</div>
              <div className="lg:px-2 py-1 text-sm font-medium">Số lượng</div>
              <div className="lg:px-2 py-1 text-sm font-medium">Thành tiền</div>
            </div>
            <ProductCart />
          </div>
          <div className="flex flex-col items-end">
            <div className="flex justify-end">
              <p className="mr-1">Tổng tiền: </p> <p>{sumProduct(cart)}</p>
            </div>
            <Link
              to={routers.order}
              className="bg-baseColor text-white px-10 py-3 rounded-md font-meidum mt-5 transition-all ease-linear hover:bg-baseBg"
            >
              Thanh toán
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
