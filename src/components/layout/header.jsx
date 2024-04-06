import { Link, NavLink, useNavigate } from "react-router-dom";
import routers from "../../config/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { MdOutlineShoppingBag } from "react-icons/md";
import MegaMenu from "../mega-menu";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_SEARCH } from "../../redux/slices/search-modal-slice";
import instance from "../../axios/config";
import { useEffect, useState } from "react";
import logo from '../../logo/logo.png'
import {
  SET_ACTIVE_USER,
  SET_REMOVE_USER,
} from "../../redux/slices/auth-slice";

const Header = ({ searchModal = false }) => {
  const dispath = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [collection, setCollection] = useState([]);
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("user/logout", {
        method: "post",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      dispath(SET_REMOVE_USER());
      // navigate("/");
      localStorage.clear();
    } catch (e) {
      console.log(e);
    }
  };

  const checkActive = (isActive) => {
    if (isActive || isActive === true) {
      return "text-baseColor";
    } else {
      return "text-black";
    }
  };

  const getContentHeader = async () => {
    const { data } = await instance.get("header", {
      method: "get",
    });
    setCollection(data.collections);
    // setCollectionItems(data.collectionItems);
  };

  const fetchUser = async () => {
    const { data } = await instance.get("user", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    dispath(
      SET_ACTIVE_USER({
        isLogin: true,
        user: data.user,
        isAdmin: data.user.role === "admin" ? true : false,
        token: localStorage.getItem("token"),
      })
    );
  };

  useEffect(() => {
    getContentHeader();
    if (localStorage.getItem("token")) {
      fetchUser();
    }
  }, []);

  return (
    <div className="bg-white shadow-slate_bottom fixed left-0 top-0 right-0 z-40 scroll-smooth">
      <div className="md:max-w-[760px] max-w-full px-10 md:px-0 lg:max-w-[1000px] xl:max-w-container mx-auto flex items-center">
        <NavLink
          to={routers.home}
          className={({ isActive }) => checkActive(isActive) + " block lg:w-60 sm:w-40 h-20"}
        >
          <img src={logo} alt="Bàn ghế hoa mai" className="block w-full h-full object-cover object-center"/>
        </NavLink>
        <div className="flex-1 flex items-center justify-center font-medium lg:text-base text-sm py-4">
          <NavLink
            to={routers.home}
            // className=""
            className={({ isActive }) =>
              checkActive(isActive) +
              " block sm:px-2 sm:mx-1 xl:px-4 py-4 xl:mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
            }
          >
            Trang chủ
          </NavLink>
          <NavLink
            to={routers.about}
            // className="block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
            className={({ isActive }) =>
              checkActive(isActive) +
              " block sm:px-2 sm:mx-1 xl:px-4 py-4 xl:mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
            }
          >
            Giới thiệu
          </NavLink>
          <div className="relative group">
            <NavLink
              to={routers.products}
              // className="flex items-center px-4 py-4 mx-3 transition-all ease-linear group duration-200 hover:text-baseColor relative"
              className={({ isActive }) =>
                checkActive(isActive) +
                " flex items-center xl:px-4 py-4 xl:mx-3 sm:px-2 sm:mx-1 transition-all ease-linear group duration-200 hover:text-baseColor relative"
              }
            >
              <p>Sản phẩm</p>{" "}
              <p className="ml-1 -mt-1 transition-all ease-linear duration-200 origin-center leading-3">
                <FontAwesomeIcon icon={faSortDown} />
              </p>
            </NavLink>
            <MegaMenu collections={collection} />
          </div>
          <NavLink
            to={routers.blogs}
            // className="block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
            className={({ isActive }) =>
              checkActive(isActive) +
              " block sm:px-2 sm:mx-1 xl:px-4 py-4 xl:mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
            }
          >
            Tin tức
          </NavLink>
          <NavLink
            to={routers.contact}
            className={({ isActive }) =>
              checkActive(isActive) +
              " block sm:px-2 sm:mx-1 xl:px-4 py-4 xl:mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
            }
          >
            Liên hệ
          </NavLink>
        </div>
        <ul className="flex lg:text-lg text-base items-center font-normal">
          <li
            className="lg:ml-2 cursor-pointer lg:p-2 p-1 ml-1 hover:text-baseColor relative"
            onClick={() => dispath(OPEN_SEARCH(true))}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li className="ml-2 cursor-pointer p-2 hover:text-baseColor group relative">
            <FontAwesomeIcon icon={faUser} />
            <div className="shadow-mega_menu hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 bg-white min-w-40 group-hover:text-black rounded-md overflow-hidden">
              {auth.isLogin === false ? (
                <>
                  <Link
                    to={routers.login}
                    className="block lg:text-base text-sm py-1 text-center hover:bg-baseBg hover:text-white transition-all ease-linear"
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    to={routers.register}
                    className="block lg:text-base text-sm py-1 text-center hover:bg-baseBg hover:text-white transition-all ease-linear"
                  >
                    Đăng ký
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={routers.profile}
                    className="block lg:text-base text-sm py-1 text-center hover:bg-baseBg hover:text-white transition-all ease-linear"
                  >
                    {auth.user.name}
                  </Link>
                  {auth.user.role === "admin" && (
                    <Link
                      to={routers.manageStore}
                      className="block lg:text-base text-sm py-1 text-center hover:bg-baseBg hover:text-white transition-all ease-linear"
                    >
                      Quản lý cửa hàng
                    </Link>
                  )}
                  <Link
                    // to={routers.logout}
                    className="block lg:text-base text-sm py-1 text-center hover:bg-baseBg hover:text-white transition-all ease-linear"
                    onClick={(e) => handleLogout(e)}
                  >
                    Đăng xuất
                  </Link>
                </>
              )}
            </div>
          </li>
          <li className="ml-2 p-2 hover:text-baseColor relative cursor-pointer text-[22px] group">
            <Link to={routers.cart} className="block" title="Giỏ hàng">
              <MdOutlineShoppingBag />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
