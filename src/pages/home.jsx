import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout";
import Banner from "../components/slider-banner";
import Service from "../components/service/service-scroll";
import { useEffect, useState } from "react";
import Collections from "../components/collections";
import Collection from "../components/collections/feature-collection";
import Blogs from "../components/blogs";
import instance from "../axios/config";
import {Helmet} from "react-helmet";
const Home = () => {
  const [url, setUrl] = useState(
    localStorage.getItem("token") ? "/user/home" : "/home"
  );
  const { searchModal, cart, auth } = useSelector((state) => state);
  const [collections, setCollections] = useState([]);
  const dispath = useDispatch();

  async function fetchData() {
    const token = localStorage.getItem("token");
    try {
      const { data } = await instance.get("/home", {
        method: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const { collections } = data;
      setCollections(collections);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trang chủ</title>
        <meta name="description" content="Trang chủ" />
      </Helmet>
      <Layout>
        {/* banner slider */}
        <Banner />

        {/* service auto scroll */}
        <div className="shadow-slate_bottom">
          <Service />
        </div>
        {/* collections */}
        <Collections />

        {collections.length > 0 &&
          collections.map((item, index) => {
            if (index < 6) {
              return (
                <Collection
                  showLink={true}
                  title={item.name}
                  path={`/bo-suu-tap/${item.id}`}
                  collection_id={item.id}
                  key={index}
                />
              );
            }
          })}
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
