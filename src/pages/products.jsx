import { useEffect, useState } from "react";
import Layout from "../components/layout";
import TitlePage from "../components/page-title";
import instance from "../axios/config";
import Product from "../components/product";
import Pagination from "../components/pagination";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState({
    current_page: 1,
    last_page: 1,
  });
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await instance.get(`products?page=${page.current_page}`);
    setProducts(data.products.data);
    setLoading(false);
    setPage({
      current_page: data.products.current_page,
      last_page: data.products.last_page,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="max-w-container mx-auto">
        <div className="py-10">
          <TitlePage
            title="Tất cả sản phẩm"
            classes="font-medium text-xl pb-5"
          />
          <div className="grid grid-cols-5 gap-10">
            {products.map((item, index) => {
              return <Product product={item} key={index} />;
            })}
          </div>
          {products.length > 0 && (
            <div>
              <Pagination
                currentPage={page.current_page}
                lastPage={page.last_page}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
