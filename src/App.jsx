import { Route, Routes } from "react-router-dom";
import { adminRouter, priveRouter, publicRouter } from "./router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import instance from "./axios/config";
import Home from "./pages/home";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispath = useDispatch();

  async function fetchData() {
    const token = localStorage.getItem("token");
    try {
      const res = await instance.get("/user", {
        method: "get",
        headers: {
          Authorization: token,
        },
      });
      const { user } = res.data;
      dispath(
        SET_ACTIVE_USER({
          isLogin: user != null ? true : false,
          user: user,
          isAdmin: localStorage.setItem("admin"),
          token: localStorage.getItem("token"),
        })
      );
    } catch (error) {}
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchData();
    }
  }, []);

  return (
    <Routes>
      {publicRouter.map((item, index) => {
        return (
          <Route path={item.path} element={<item.component />} key={index} />
        );
      })}
      {auth.isLogin === true &&
        priveRouter.map((item, index) => {
          return (
            <Route path={item.path} element={<item.component />} key={index} />
          );
        })}
      {auth.isAdmin == true &&
        auth.isLogin === true &&
        adminRouter.map((item, index) => {
          return (
            <Route path={item.path} element={<item.component />} key={index} />
          );
        })}
      <Route path="*" element={<div className="w-full h-screen flex items-center justify-center">Page not found</div>} />
    </Routes>
  );
}

export default App;
