import { Link } from "react-router-dom";
import routers from "../config/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { MdOutlineShoppingBag } from "react-icons/md";
import MegaMenu from "./mega-menu";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_SEARCH } from "../redux/slices/search-modal-slice";

const Header = () => {
  const searchModal = useSelector((state) => state.searchModal);
  const cartUser = useSelector((state) => state.cart);
  const dispath = useDispatch();

  return (
    <div className="bg-white shadow-slate_bottom fixed left-0 top-0 right-0 z-40">
      <div className="max-w-container mx-auto flex items-center">
        <Link to={routers.home} className="block">
          <img
            src="https://bizweb.dktcdn.net/100/494/385/themes/919262/assets/logo.png?1703641115968"
            alt="logo"
          />
        </Link>
        <div className="flex-1 flex items-center justify-center font-medium text-base py-4">
          <Link
            to=""
            className="block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
          >
            Trang chủ
          </Link>
          <Link
            to=""
            className="block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
          >
            Giới thiệu
          </Link>
          <div className="relative group">
            <Link
              to=""
              className="flex items-center px-4 py-4 mx-3 transition-all ease-linear group duration-200 hover:text-baseColor relative"
            >
              <p>Sản phẩm</p>{" "}
              <p className="ml-1 -mt-1 transition-all ease-linear duration-200 origin-center leading-3">
                <FontAwesomeIcon icon={faSortDown} />
              </p>
            </Link>
            <MegaMenu />
          </div>
          <Link
            to=""
            className="block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
          >
            Tin tức
          </Link>
          <Link
            to=""
            className="block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-baseColor"
          >
            Liên hệ
          </Link>
        </div>
        <ul className="flex text-lg items-center font-normal">
          <li
            className="ml-2 cursor-pointer p-2 hover:text-baseColor"
            onClick={() => dispath(OPEN_SEARCH(true))}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li className="ml-2 cursor-pointer p-2 hover:text-baseColor group relative">
            <FontAwesomeIcon icon={faUser} />
            <div className="shadow-mega_menu hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 bg-white min-w-40 group-hover:text-black rounded-md overflow-hidden">
              <Link
                to={routers.login}
                className="block text-base py-1 text-center hover:bg-baseBg hover:text-white transition-all ease-linear"
              >
                Đăng nhập
              </Link>
              <Link
                to={routers.register}
                className="block text-base py-1 text-center hover:bg-baseBg hover:text-white transition-all ease-linear"
              >
                Đăng ký
              </Link>
            </div>
          </li>
          <li className="ml-2 cursor-pointer p-2 hover:text-baseColor">
            <FontAwesomeIcon icon={faHeart} />
          </li>
          <li className="ml-2 p-2 hover:text-baseColor relative cursor-pointer text-[22px] group">
            <MdOutlineShoppingBag />
            <div className="absolute top-full shadow-mega_menu bg-white w-96 right-0 hidden text-sm rounded-sm overflow-hidden group-hover:block group-hover: cursor-auto">
              {cartUser.cart.length === 0 ? (
                <p className="p-5 group-hover:text-black">
                  Không có sản phẩm nào trong giỏ hàng
                </p>
              ) : (
                <></>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
