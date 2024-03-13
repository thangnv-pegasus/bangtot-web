import { useEffect, useState } from "react";
import instance from "../axios/config";
import Layout from "../components/layout";
import TitlePage from "../components/page-title";
import ProductCart from "../components/product/product-cart";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    const { data } = await instance.get("user/cart", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    setCart(data.cart);
    console.log(data) 
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
          <div className="border-[1px] border-solid border-gray-400 rounded-md overflow-hidden">
            <div className="grid grid-cols-3_1_2_1 gap-x-10 border-solid border-b-[1px] border-gray-400 font-medium">
              <div className="py-1 px-2">Thông tin sản phẩm</div>
              <div className="py-1 px-2">Đơn giá</div>
              <div className="py-1 px-2">Số lượng</div>
              <div className="py-1 px-2">Thành tiền</div>
            </div>

            {
              cart.map((item,index) => {
                return (
                  <ProductCart product={item} />
                )
              })
            }
            <ProductCart />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
