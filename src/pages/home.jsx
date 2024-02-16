import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counter-slice";
import Layout from "../components/layout";
import Banner from "../components/slider-banner";
import Service from "../components/service/service-scroll";
import Search from "../components/modal/search";
import Title from "../components/title";
import { useEffect, useState } from "react";
import Collections from "../components/collections";
import Collection from "../components/collections/feature-collection";
import Blogs from "../components/blogs";
import instance from "../axios/config";
const Home = () => {
  const [collection, setCollection] = useState([]);
  const [url, setUrl] = useState(
    localStorage.getItem("token") ? "/user/home" : "/home"
  );
  const [collectionItems, setCollectionItems] = useState([]);
  const { searchModal, cart, auth } = useSelector((state) => state);
  const dispath = useDispatch();

  async function fetchData() {
    const token = localStorage.getItem("token");
    try {
      const res = await instance.get(url, {
        method: "get",
        headers: {
          "Authorization": token,
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json",
        },
      });
      const { collections, collectionItems, user } = res.data;
      // console.log(user) 
      setCollection(collections);
      setCollectionItems(collectionItems);
      dispath(
        SET_ACTIVE_USER({
          isLogin: user ? true : false,
          user: user,
          token: localStorage.getItem("token"),
        })
      );
      // console.log("response ", res.data);
      if (!res) {
        setUrl("/home");
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("auth", auth);

  return (
    <>
      <Layout collection={collection} collectionItems={collectionItems}>
        {/* banner slider */}
        <Banner />

        {/* service auto scroll */}
        <div className="shadow-slate_bottom">
          <Service />
        </div>
        {/* collections */}
        <Collections />
        {/* feature collections */}
        <Collection showLink={true} title={"Bảng phấn"} path="" />
        {/* feature collections */}
        <Collection showLink={true} title={"Bảng phấn"} path="" />
        {/* feature collections */}
        <Collection showLink={true} title={"Bảng phấn"} path="" />
        {/* feature collections */}
        <Collection showLink={true} title={"Bảng phấn"} path="" />
        {/* blogs */}
        <Blogs />
      </Layout>
    </>
  );
};

const TextEditor = () => {
  return <></>;
};
export default Home;
