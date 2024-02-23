import { useEffect, useState } from "react";
import instance from "../../axios/config";
import LayoutAdmin from "../../components/layout/admin";
import TitlePage from "../../components/page-title";
import ProductInfor from "../../components/product/product-infor";
import { Link } from "react-router-dom";
import routers from "../../config/router";

const ManageProduct = () => {
    const [page, setPage] = useState(1)
  const fetchData = async () => {
    const response = await instance.get(`/products?page=${page}`, {
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    // console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LayoutAdmin>
      <div className="border-[1px] border-solid border-slate-300 p-5 rounded-md">
        <div className="flex justify-between items-center pb-4 border-b-2 border-solid border-slate-300 mb-5">
          <TitlePage title="Danh sách sản phẩm đang bán" />
          <Link to={routers.addProduct} className="bg-baseColor text-white px-2 py-1 rounded-sm">Thêm sản phẩm mới</Link>
        </div>
        <ProductInfor
          imageUrl="https://via.placeholder.com/100x100"
          name="product name"
          price={100}
          price_sale={50}
        />
      </div>
    </LayoutAdmin>
  );
};

export default ManageProduct;
