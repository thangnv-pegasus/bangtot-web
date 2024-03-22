import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import routers from "../../config/router";
import { FaTruckFast } from "react-icons/fa6";
import { ImNewspaper } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
const NavBar = () => {
  const checkActive = (isActive) => {
    if (isActive || isActive === true) {
      return "text-baseColor";
    } else {
      return "text-black";
    }
  };

  return (
    <div className="fixed flex flex-col justify-center items-center top-0 left-0 bottom-0 w-36 bg-white shadow-xl">
      <NavLink
        to={routers.manageStore}
        className={({ isActive }) =>
          checkActive(isActive) +
          " flex flex-col items-center text-center py-2 my-4 font-bold"
        }
      >
        <p className="text-2xl">
          <IoHomeOutline />
        </p>
        <p className="text-sm my-1">Dash board</p>
      </NavLink>
      <NavLink
        to={routers.manageProduct}
        className={({ isActive }) =>
          checkActive(isActive) +
          " flex flex-col items-center text-center py-2 my-4"
        }
      >
        <p className="text-2xl">
          <BsBoxSeam />
        </p>
        <p className="text-sm my-1">Hàng hóa</p>
      </NavLink>
      <NavLink
        to={routers.manageUser}
        className={({ isActive }) =>
          checkActive(isActive) +
          " flex flex-col items-center text-center py-2 my-4"
        }
      >
        <p className="text-2xl">
          <FaUsers />
        </p>
        <p className="text-sm my-1">người dùng</p>
      </NavLink>
      {/* <NavLink
        to={routers.manageRevenue}
        className={({ isActive }) =>
          checkActive(isActive) +
          " flex flex-col items-center text-center py-2 my-4"
        }
      >
        <p className="text-2xl">
          <FaChartBar />
        </p>
        <p className="text-sm my-1">Thống kê</p>
      </NavLink> */}
      <NavLink
        to={routers.manageOrder}
        className={({ isActive }) =>
          checkActive(isActive) +
          " flex flex-col items-center text-center py-2 my-4"
        }
      >
        <p className="text-2xl">
          <FaTruckFast />
        </p>
        <p className="text-sm my-1">Đơn hàng</p>
      </NavLink>
      <NavLink
        to={routers.manageBlogs}
        className={({ isActive }) =>
          checkActive(isActive) +
          " flex flex-col items-center text-center py-2 my-4"
        }
      >
        <p className="text-2xl">
          <ImNewspaper />
        </p>
        <p className="text-sm my-1">Bài đăng</p>
      </NavLink>
      <Link to={routers.home} className="flex flex-col items-center text-center py-2 my-4">
        <p className="text-2xl font-bold">
        <AiOutlineHome />
        </p>
        <p className="text-sm my-1">Về trang chủ</p>
      </Link>
    </div>
  );
};

export default NavBar;
