import { useEffect, useState } from "react";
import Layout from "../components/layout";
import TitlePage from "../components/page-title";
import instance from "../axios/config";
import Product from "../components/product";
import Pagination from "../components/pagination";
import SideBar from "../components/nav-bar/side-bar";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState({
    current_page: 1,
    last_page: 1,
  });
  const [data, setData] = useState([]);
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
    setData(data.products.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <Layout>
      <div className="lg:max-w-[1000px] md:max-w-[760px] max-w-full px-10 md:px-0 xl:max-w-container mx-auto">
        <div className="py-10 grid grid-cols-3_9 xl:gap-x-10 lg:gap-x-8 md:gap-x-5 gap-x-5">
          <div>
            <SideBar setData={setData} products={products} />
          </div>
          <div>
            <TitlePage
              title="Tất cả sản phẩm"
              classes="font-medium text-xl pb-5"
            />
            <div className="grid md:grid-cols-3 lg:grid-cols-4 lg:gap-10 md:gap-5 gap-3 grid-cols-2">
              {data.map((item, index) => {
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
      </div>
    </Layout>
  );
};

export default Products;
