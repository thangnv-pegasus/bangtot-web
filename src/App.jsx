import { Route, Routes } from "react-router-dom";
import { adminRouter, priveRouter, publicRouter } from "./router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
function App() {
  const auth = useSelector((state) => state.auth);
  const dispath = useDispatch();

  async function fetchData() {
    const token = localStorage.getItem("token");
    try {
      const res = await instance.get('/user', {
        method: "get",
        headers: {
          "Authorization": token,
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json",
        },
      });
      const { user } = res.data;
      dispath(
        SET_ACTIVE_USER({
          isLogin: user != null ? true : false,
          user: user,
          isAdmin: user.role === 'admin' ? true : false,
          token: localStorage.getItem("token"),
        })
      );
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
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
        })
        
        
        }
      {auth.isAdmin === true && auth.isLogin === true &&
        adminRouter.map((item, index) => {
          return (
            <Route path={item.path} element={<item.component />} key={index} />
          );
        })}
    </Routes>
  );
}

export default App;
