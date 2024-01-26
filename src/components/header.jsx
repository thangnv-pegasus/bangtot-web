import { Link } from "react-router-dom";
import routers from "../config/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
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
            className="block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-yellow-700"
          >
            Trang chủ
          </Link>
          <Link
            to=""
            className="block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-yellow-700"
          >
            Giới thiệu
          </Link>
          <Link
            to=""
            className="block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-yellow-700 relative"
          >
            Sản phẩm
            <div className="absolute w-container"></div>
          </Link>
          <Link
            to=""
            className="block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-yellow-700"
          >
            Tin tức
          </Link>
          <Link
            to=""
            className="block px-4 py-4 mx-3 transition-all ease-linear duration-200 hover:text-yellow-700"
          >
            Liên hệ
          </Link>
        </div>
        <ul className="flex text-lg items-center font-normal">
          <li className="ml-4">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li className="ml-4">
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li className="ml-4">
            <FontAwesomeIcon icon={faHeart} />
          </li>
          <li className="ml-4 text-[22px]">
            {/* <FontAwesomeIcon icon={faBagShopping} /> */}
            <MdOutlineShoppingBag />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
