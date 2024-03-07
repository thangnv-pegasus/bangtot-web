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
import { SET_ACTIVE_USER } from "../redux/slices/auth-slice";

const Home = () => {
  const [url, setUrl] = useState(
    localStorage.getItem("token") ? "/user/home" : "/home"
  );
  const { searchModal, cart, auth } = useSelector((state) => state);
  const [collection, setCollection] = useState()
  const dispath = useDispatch();

  async function fetchData() {
    const token = localStorage.getItem("token");
    try {
      const {data} = await instance.get(url, {
        method: "get",
        headers: {
          "Authorization": token,
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json",
          'Access-Control-Allow-Origin': '*'
        },
      });
      const { collections, user } = data;
      setCollection(collections)
      dispath(
        SET_ACTIVE_USER({
          isLogin: localStorage.getItem("token") != null ? true : false,
          user: user,
          isAdmin: user.role === 'admin' ? true : false,
          token: localStorage.getItem("token"),
        })
      );
      if (!res) {
        setUrl("/home");
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Layout>
        {/* banner slider */}
        <Banner />

        {/* service auto scroll */}
        <div className="shadow-slate_bottom">
          <Service />
        </div>
        {/* collections */}
        <Collections />
        {/* feature collections */}
        <Collection showLink={true} title={"Bảng phấn"} path="" collection_id={1}/>
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
