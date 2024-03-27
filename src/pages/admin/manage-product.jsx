import { useEffect, useState } from "react";
import instance from "../../axios/config";
import LayoutAdmin from "../../components/layout/admin";
import TitlePage from "../../components/page-title";
import ProductInfor from "../../components/product/product-infor";
import { Link } from "react-router-dom";
import routers from "../../config/router";

const ManageProduct = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const fetchData = async () => {
    const { data } = await instance.get(`/products?page=${page}`, {
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setProducts(data.products.data);
    setImages(data.images)
    console.log(data)
  };

  const urlImage = (productId) => {
    let url = "";
    for (const image of images) {
      if (image.idProduct == productId) {
        url = image.name;
        break;
      }
    }
    return url;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LayoutAdmin>
      <div className="border-[1px] border-solid border-slate-300 p-5 rounded-md">
        <div className="flex justify-between items-center pb-4 border-b-2 border-solid border-slate-300 mb-5">
          <TitlePage title="Danh sách sản phẩm đang bán" />
          <Link
            to={routers.addProduct}
            className="bg-baseColor text-white px-2 py-1 rounded-sm"
          >
            Thêm sản phẩm mới
          </Link>
        </div>
        {products.length > 0 && products.map((item, index) => {
          return (
            <ProductInfor
              imageUrl={urlImage(item.id)}
              key={index}
              name={item.name}
              price={item.price}
              price_sale={item.price_sale}
              idProduct = {item.id}
              setProducts = {setProducts}
              setImages = {setImages}
            />
          );
        })}
      </div>
    </LayoutAdmin>
  );
};

export default ManageProduct;
