import { useDispatch, useSelector } from "react-redux";
import instance from "../../axios/config";
import { SET_ACTIVE_USER } from "../../redux/slices/auth-slice";
import NavBar from "../nav-bar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LayoutAdmin = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const { data } = await instance.get("user", {
        method: "get",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      dispatch(
        SET_ACTIVE_USER({
          user: data.user,
          isLogin: true,
          isAdmin: data.user.role === "admin" ? true : false,
          token: localStorage.getItem("token"),
        })
      );
    } catch (e) {
      navigate("/");
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
