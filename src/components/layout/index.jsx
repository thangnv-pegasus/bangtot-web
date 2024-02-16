import Footer from "./footer";
import Header from "./header";
import Search from "../modal/search";
import HotLine from "../hot-line";
import Success from "../toast-message/success";
import Warning from "../toast-message/warning";
import Error from "../toast-message/error";
import { useSelector } from "react-redux";


const Layout = ({ children, collection = [], collectionItems = [] }) => {
  const message = useSelector((state) => state.toast);
  const searchStatus = useSelector((state) => state.searchModal.value);
  const { searchModal, cart, auth } = useSelector((state) => state);
  
  return (
    <>
      <Header
        collection={collection}
        collectionItems={collectionItems}
        cartUser={cart}
        searchModal={searchModal}
      />

      <div className="py-24">{children}</div>

      <Footer />
      {searchStatus && <Search />}
      {message.name === "success" && <Success message={message.message} />}
      {message.name === "error" && <Error message={message.message} />}
      {message.name === "warning" && <Warning message={message.message} />}
      <HotLine />
    </>
  );
};

export default Layout;
