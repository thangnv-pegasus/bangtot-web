import { Link } from "react-router-dom";
import routers from "../config/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <div>
      <div className="max-w-container mx-auto flex items-center">
        <Link to={routers.home} className="block">
          <img
            src="https://bizweb.dktcdn.net/100/494/385/themes/919262/assets/logo.png?1703641115968"
            alt="logo"
          />
        </Link>
        <div className="flex-1"></div>
        <ul className="flex text-lg font-normal">
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBagShopping} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
