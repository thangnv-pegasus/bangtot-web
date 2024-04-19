import { useEffect, useState } from "react";
import instance from "../../axios/config";
import LayoutAdmin from "../../components/layout/admin";
import TitlePage from "../../components/page-title";
import ProductOrder from "../../components/product/product-order";
import FilterOrder from "../../components/filter/filter-order";
import { IoMdSearch } from "react-icons/io";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [orderguest, setOrderguest] = useState([])
  const [filter, setFilter] = useState({
    day: null,
    month: null,
    year: null,
    status: null,
  });

  const fetchData = async () => {
    const { data } = await instance.get("admin/bill-user", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    const { orders, products, order_guest } = data;
    setOrders(orders);
    setProducts(products);
    setOrderguest(order_guest)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getYear = (str) => {
    const dt = new Date(str);
    return dt.getFullYear();
  };

  const getMonth = (str) => {
    const dt = new Date(str);
    return dt.getMonth();
  };

  const getDay = (str) => {
    const dt = new Date(str);
    return dt.getDay();
  };
  const handleFilter = () => {
    const newOrder = orders.filter((od) => {
      return (
        (!filter.day || filter.day == getDay(od.created_at)) &&
        (!filter.month || filter.month == getMonth(od.created_at)) &&
        (!filter.year || filter.year == getYear(od.created_at)) &&
        (!filter.status || filter.status == od.status)
      );
    });
    setOrders(newOrder);
  };
  useEffect(() => {
    handleFilter();
  }, [filter]);

  return (
    <LayoutAdmin>
      <div className="flex items-center justify-between mb-5">
        <TitlePage
          title="Quản lý đơn hàng"
          classes="text-xl font-medium mb-5"
        />
        {/* <div className="flex items-center">
          <FilterOrder
            setFilter={setFilter}
            setOrder={setOrders}
            filter={filter}
            order={orders}
          />
          <div className="flex items-center bg-white border-[1px] border-solid border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              name="search"
              id="search"
              className="block text-sm outline-none py-2 px-4"
            />
            <button className="py-2 text-white text-xl px-3 bg-baseBg">
              <IoMdSearch />
            </button>
          </div>
        </div> */}
      </div>

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
      {orderguest.map((item, index) => {
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
    const sum = product.reduce((pre_total, current) => {
      if (current.price_sale != 0) {
        return pre_total + (current.price_sale + current.factor) * current.quantity;
      }
      return pre_total + (current.price + current.factor) * current.quantity;
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
  };
  const formatDate = (str) => {
    const date = new Date(str);
    return date.toLocaleDateString();
  };
  const getYear = (str) => {
    const dt = new Date(str);
    return dt.getFullYear();
  };
  return (
    <div className="flex text-sm [&>div]:select-none [&>div]:px-2 [&>div]:py-1 [&>div]:border-[1px] [&>div]:border-solid [&>div]:border-gray-300 [&>div]:border-collapse">
      <div className="w-28 text-center">{order?.id}</div>
      <div className="w-72 text-left [&>p]:pb-1">
        <p>Tên người nhận: {order?.name}</p>
        <p>Tên người gửi: {order?.username || order?.name}</p>
        <p>Số điện thoại: {order?.phone}</p>
        <p>Email: {order?.email}</p>
        <p>Thông tin khác: {order?.note}</p>
        <p>Ngày đặt hàng: {formatDate(order?.created_at)}</p>
      </div>
      <div className="flex-1">
        {products.map((item, index) => {
          if (item.idOrder === order.id) {
            return <ProductOrder product={item}  key={index} />;
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
            order.status === 0
              ? "bg-orange-600 text-white"
              : "bg-white text-black"
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
