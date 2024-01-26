/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counter-slice";
import Layout from "../components/layout";
import Banner from "../components/slider-banner";
import Service from "../components/service-scroll";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // console.log(count);
  return (
    <>
      <Layout>
        <div className="py-24">
          <Banner />
          <div className="max-w-container mx-auto">
            <Service />
          </div>
        </div>
      </Layout>
    </>
  );
};

const TextEditor = () => {
  return <></>;
};
export default Home;
