import { Route, Routes } from "react-router-dom";
import { publicRouter } from "./router";
import { useSelector } from "react-redux";

function App() {
  return (
    <Routes>
      {publicRouter.map((item, index) => {
        return (
          <Route path={item.path} element={<item.component />} key={index} />
        );
      })}
    </Routes>
  );
}

export default App;
