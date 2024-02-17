import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-36 bg-white shadow-md">
      <Link>
        <IoHomeOutline />
        <p>Dash board</p>
      </Link>
    </div>
  );
};

export default NavBar;
