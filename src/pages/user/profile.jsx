import { useEffect, useState } from "react";
import instance from "../../axios/config";
import Layout from "../../components/layout";
import TitlePage from "../../components/page-title";
import ChangePassword from "../../components/modal/change-password";

const Profile = () => {
  const [user, setUser] = useState({});
  const [order, setOrder] = useState([]);
  const fetchData = async () => {
    const { data } = await instance.get("user/profile", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setUser(data.infor);
    setOrder(data.order);
  };

  const [tab, setTab] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout>
      <div className="lg:max-w-[1000px] md:max-w-[760px] max-w-full px-10 md:px-0 xl:max-w-container mx-auto">
        <div className="grid grid-cols-3_9 gap-x-10 py-10">
          <div>
            <TitlePage title="Trang tài khoản" classes="text-xl font-medium" />
            <p className="text-sm font-medium mb-5">
              Xin chào, <span className="text-baseColor">{user.name}</span>
            </p>
            <button
              className={`block my-2 py-1 font-medium ${
                tab === 1 ? "text-baseColor" : "text-gray-700"
              }`}
              onClick={() => setTab(1)}
            >
              Thông tin tài khoản
            </button>
            <button
              className={`block my-2 py-1 font-medium ${
                tab === 2 ? "text-baseColor" : "text-gray-700"
              }`}
              onClick={() => setTab(2)}
            >
              Đơn hàng của bạn
            </button>
            <button
              className={`block my-2 py-1 font-medium ${
                tab === 3 ? "text-baseColor" : "text-gray-700"
              }`}
              onClick={() => setTab(3)}
            >
              Đổi mật khẩu
            </button>
          </div>
          {tab === 1 && <Infor infor={user} />}
          {tab === 2 && <Order order={order} />}
          {tab === 3 && <ChangePassword />}
        </div>
      </div>
    </Layout>
  );
};

const Infor = ({ infor }) => {
  return (
    <div>
      <TitlePage title="Thông tin tài khoản" classes="text-xl font-medium" />
      <p className="py-2 font-medium">
        Họ tên: <span className="font-normal">{infor?.name}</span>
      </p>
      <p className="py-2 font-medium">
        Email: <span className="font-normal">{infor?.email}</span>
      </p>
      <p className="py-2 font-medium">
        Địa chỉ: <span className="font-normal">{infor?.address}</span>
      </p>
      <p className="py-2 font-medium">
        Số điện thoại: <span className="font-normal">{infor?.phone}</span>
      </p>
    </div>
  );
};

const Order = ({ order = [] }) => {
  const formatDate = (str) => {
    const date = new Date(str);
    return date.toLocaleDateString();
  };
  return (
    <div>
      <table className="block w-full border-[1px] border-solid border-gray-400 border-collapse p-0 m-0">
        <th className="font-normal bg-baseColor text-white w-full text-sm [&>td]:px-2 [&>td]:py-1 flex p-0 m-0">
          <td className="block w-1/6 border-[1px] border-solid border-gray-200 border-collapse">
            Đơn hàng
          </td>
          <td className="block w-1/6 border-[1px] border-solid border-gray-200 border-collapse">
            Ngày
          </td>
          <td className="block w-2/6 border-[1px] border-solid border-gray-200 border-collapse">
            Địa chỉ
          </td>
          <td className="block w-1/6 border-[1px] border-solid border-gray-200 border-collapse">
            Giá trị đơng hàng
          </td>
          <td className="block flex-1 border-[1px] border-solid border-gray-200 border-collapse">
            Thông tin vận chuyển
          </td>
        </th>
        {order.map((item, index) => {
          return (
            <tr
              className="font-normal text-center bg-white text-black w-full text-sm [&>td]:px-2 [&>td]:py-1 flex p-0 m-0"
              key={index}
            >
              <td className="block w-1/6 text-center border-[1px] border-solid border-gray-200 border-collapse">
                #{item.id}
              </td>
              <td className="block w-1/6 border-[1px] border-solid border-gray-200 border-collapse">
                {formatDate(item.created_at)}
              </td>
              <td className="block w-2/6 border-[1px] border-solid border-gray-200 border-collapse">
                {item.address}
              </td>
              <td className="block w-1/6 border-[1px] border-solid border-gray-200 border-collapse">
                Giá trị đơng hàng
              </td>
              <td className="block flex-1 border-[1px] border-solid border-gray-200 border-collapse">
                {item.status === 1 ? 'Đã xong' : 'Đang giao'}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Profile;
