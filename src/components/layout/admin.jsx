import { useDispatch, useSelector } from "react-redux";
import instance from "../../axios/config";
import { SET_ACTIVE_USER } from "../../redux/slices/auth-slice";
import NavBar from "../nav-bar";
import Footer from "./footer";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="pl-36">
        <div className="min-h-screen p-20">{children}</div>

        <Footer />
      </div>
    </>
  );
};

export default LayoutAdmin;
