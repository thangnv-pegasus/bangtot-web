/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counter-slice";
import Layout from "../components/layout";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // console.log(count);
  return (
    <>
      <Layout>
        This is home page
        <div>
          <button
            className="border-2 border-solid border-[#ccc] p-2"
            onClick={() => dispatch(decrement())}
          >
            decre
          </button>
          <span className="mx-2">{count}</span>
          <button className="border-2 border-solid border-[#ccc] p-2">
            incre
          </button>
        </div>
      </Layout>
    </>
  );
};

const TextEditor = () => {
  return <></>;
};
export default Home;
