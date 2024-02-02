/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import Footer from "./footer";
import Header from "./header";
import Search from "../modal/search";
import HotLine from "../hot-line";

const Layout = ({ children }) => {
  const searchStatus = useSelector((state) => state.searchModal.value);
  return (
    <>
      <Header />

      {children}

      <Footer />
      {searchStatus && <Search />}
      <HotLine />
    </>
  );
};

export default Layout
