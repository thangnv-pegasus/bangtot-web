import { useEffect, useState } from "react";
import Layout from "../components/layout";
import TitlePage from "../components/page-title";
import instance from "../axios/config";
import Product from "../components/product";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await instance.get(`products?page=${1}`);
    setProducts(data.products.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="max-w-container mx-auto">
        <div className="py-10">
          <TitlePage title="Tất cả sản phẩm" classes="font-medium text-xl pb-5" />
          <div className="grid grid-cols-5">
            {products.map((item, index) => {
              return <Product product={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
