import { Route, Routes } from "react-router-dom";
import { priveRouter, publicRouter } from "./router";
import { useSelector } from "react-redux";
import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Accept'] = 'application/json'

function App() {
  const auth = useSelector((state) => state.auth);
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
    </Routes>
  );
}

export default App;
