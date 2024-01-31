/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counter-slice";
import Layout from "../components/layout";
import Banner from "../components/slider-banner";
import Service from "../components/service/service-scroll";
import Search from "../components/modal/search";
import Title from "../components/title";

import Collections from "../components/collections";
import Collection from "../components/collections/feature-collection";
const Home = () => {
  return (
    <>
      <Layout>
        <div className="py-24">
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
        </div>
      </Layout>
    </>
  );
};

const TextEditor = () => {
  return <></>;
};
export default Home;
