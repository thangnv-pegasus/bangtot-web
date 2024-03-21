import { useEffect, useState } from "react";
import instance from "../../axios/config";
import LayoutAdmin from "../../components/layout/admin";
import TitlePage from "../../components/page-title";
import ProductOrder from "../../components/product/product-order";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await instance.get("admin/bill-user", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    const { orders, products } = data;
    setOrders(orders);
    setProducts(products);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LayoutAdmin>
      <TitlePage title="Quản lý đơn hàng" classes="text-xl font-medium mb-5" />
      <div className="flex text-sm font-medium [&>div]:text-center [&>div]:select-none [&>div]:px-2 [&>div]:py-1 [&>div]:border-[1px] [&>div]:border-solid [&>div]:border-gray-300 [&>div]:border-collapse">
        <div className="w-28">Mã đơn hàng</div>
        <div className="w-72">Thông tin người nhận</div>
        <div className="flex-1">Sản phẩm</div>
        <div className="w-40">Tổng tiền</div>
        <div className="w-40">Trạng thái đơn hàng</div>
        <div className="w-28">Thao tác</div>
      </div>
      {orders.map((item, index) => {
        return (
          <RowOrder
            order={item}
            key={index}
            products={products}
            setOrders={setOrders}
          />
        );
      })}
    </LayoutAdmin>
  );
};

const RowOrder = ({ products = [], order = {}, setOrders }) => {
  const getSum = (init = 0) => {
    const product = products.filter((prod) => prod.idOrder === order.id);
    // console.log(product);
    const sum = product.reduce((pre_total, current) => {
      if (current.price_sale != 0) {
        return pre_total + current.price_sale * current.quantity;
      }
      return pre_total + current.price * current.quantity;
    }, init);

    return sum.toLocaleString();
  };

  const updateStatus = async (status) => {
    const { data } = await instance.patch(
      `admin/update-status`,
      {
        order_id: order.id,
        status,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    setOrders(data.order);
    console.log(data);
  };

  return (
    <div className="flex text-sm [&>div]:select-none [&>div]:px-2 [&>div]:py-1 [&>div]:border-[1px] [&>div]:border-solid [&>div]:border-gray-300 [&>div]:border-collapse">
      <div className="w-28 text-center">{order?.id}</div>
      <div className="w-72 text-left">
        <p>Tên người nhận: {order?.name}</p>
        <p>Tên người gửi: {order?.username}</p>
        <p>Số điện thoại: {order?.phone}</p>
        <p>Email: {order?.email}</p>
        <p>Thông tin khác: {order?.note}</p>
      </div>
      <div className="flex-1">
        {products.map((item, index) => {
          if (item.idOrder === order.id) {
            return <ProductOrder product={item} key={index} />;
          }
        })}
      </div>
      <div className="w-40 text-center font-medium">
        {getSum(40000)} <sup>đ</sup>{" "}
      </div>
      <div className="w-40 text-center">
        {order?.status === 1 ? "Đã giao" : "Chưa giao hàng"}
      </div>
      <div className="w-28">
        <button
          className={`border-[1px] border-solid border-gray-300 w-full text-center py-2 rounded-sm my-2 ${
            order.status === 1 ? "bg-baseBg text-white" : "bg-white text-black"
          }`}
          onClick={() => {
            updateStatus(1);
          }}
        >
          Đã giao
        </button>
        <button
          className={`border-[1px] border-solid border-gray-300 w-full text-center py-2 rounded-sm my-2 ${
            order.status === 0 ? "bg-baseBg text-white" : "bg-white text-black"
          }`}
          onClick={() => {
            updateStatus(0);
          }}
        >
          Chưa giao
        </button>
      </div>
    </div>
  );
};

export default ManageOrder;
