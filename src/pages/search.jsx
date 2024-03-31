import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import instance from "../axios/config";
import { useEffect, useState } from "react";
import TitlePage from "../components/page-title";
import Product from "../components/product";

const Search = () => {
  const { value } = useParams();
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await instance.get(`search/${value}`);

    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout>
      <div className="xl:max-w-container mx-auto lg:max-w-[1000px] md:max-w-[760px] max-w-full px-10 md:px-0">
        <TitlePage title={`Kết quả tìm kiếm cho ${value}`} classes="text-lg font-medium pb-4"/>
        <div className="grid grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((item, index) => {
              return <Product product={item} key={index} />;
            })
          ) : (
            <>Không có sản phẩm tương ứng</>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
