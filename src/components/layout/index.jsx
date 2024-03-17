import Footer from "./footer";
import Header from "./header";
import Search from "../modal/search";
import HotLine from "../hot-line";
import { useSelector } from "react-redux";
import instance from "../../axios/config";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const searchStatus = useSelector((state) => state.searchModal.value);
  const [phones, setPhones] = useState([]);
  const { searchModal, cart, auth } = useSelector((state) => state);

  const fetchData = async () => {
    try {
      const { data } = await instance.get("phone-contact", {
        method: "get",
      });
      setPhones(data.phones);
    } catch (e) {
      setPhones([
        {
          phone_name: "xample",
          phone_number: "012345678281",
        },
      ]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header cartUser={cart} searchModal={searchModal} />

      <div className="py-24">{children}</div>

      <Footer />
      {searchStatus && <Search />}
      <HotLine
        phones={phones}
      />
    </>
  );
};

export default Layout;
