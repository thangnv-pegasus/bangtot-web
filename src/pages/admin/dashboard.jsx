import { useEffect, useRef, useState } from "react";
import Revenue from "../../components/chart/revenue";
import LayoutAdmin from "../../components/layout/admin";
import NavBar from "../../components/nav-bar";
import TitlePage from "../../components/page-title";
import { Link } from "react-router-dom";
import routers from "../../config/router";
import ProductInfor from "../../components/product/product-infor";
import instance from "../../axios/config";
import BlogInfor from "../../components/blogs/blog-infor";
import FormHotline from "../../components/modal/create-hotline";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const Dashboard = () => {
  const [products, setProduct] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [images, setImages] = useState([]);
  const [hotlines, setHotlines] = useState([]);
  const [formHotlineStatus, setFormHotlineStatus] = useState(false);

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

  const getData = async () => {
    const { data } = await instance.get("admin/dashboard", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    console.log(data);

    setProduct(data.products);
    setBlogs(data.blogs);
    setImages(data.images);
    setHotlines(data.phone);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <LayoutAdmin>
      <Revenue
        labelType="day"
        data={[200, 300, 400]}
        name="Doanh thu tháng 1"
      />

      {/* products */}
      <div className="py-5">
        <div className="flex items-center justify-between">
          <TitlePage
            title="Các sản phẩm đang được bán"
            classes="text-lg font-medium uppercase"
          />
          <Link
            to={routers.manageProduct}
            className="block text-sm underline text-baseColor"
          >
            Xem tất cả sản phẩm
          </Link>
        </div>
        {products.length > 0 &&
          products.map((item, index) => {
            return (
              <ProductInfor
                idProduct={item.id}
                imageUrl={urlImage(item.id)}
                key={index}
                name={item.name}
                price={item.price}
                price_sale={item.price_sale}
              />
            );
          })}
      </div>

      {/* blogs */}
      <div className="py-5">
        <div className="flex items-center justify-between">
          <TitlePage
            title="Các bài đăng"
            classes="text-lg font-medium uppercase"
          />
          <Link
            to={routers.manageProduct}
            className="block text-sm underline text-baseColor"
          >
            Xem tất cả
          </Link>
        </div>
        <div className="">
          <BlogInfor />
        </div>
      </div>

      {/* hotline page */}
      <div className="py-5">
        <div className="flex items-center justify-between">
          <TitlePage
            title="Các số điện thoại liên hệ cửa hàng"
            classes="text-lg font-medium uppercase"
          />
          <button
            className="block text-sm underline text-baseColor"
            onClick={() => setFormHotlineStatus(true)}
          >
            Thêm mới
          </button>
        </div>
        <div className="">
          {hotlines.length > 0 &&
            hotlines.map((item, index) => {
              return (
                <div className="flex items-center justify-between border-b-2 border-solid border-gray-400">
                  <div className="py-2">
                    <h3 className="text-base font-medium">{item.name}</h3>
                    <p className="text-sm">{item.phoneNumber}</p>
                  </div>
                  <div className="flex items-center">
                    <button className="block mx-2 p-1 text-lg">
                      <FaRegEdit />
                    </button>
                    <button className="block mx-2 p-1 text-lg">
                      <FaRegTrashCan />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {formHotlineStatus === true && (
        <FormHotline open={true} setOpen={setFormHotlineStatus} />
      )}
    </LayoutAdmin>
  );
};

export default Dashboard;
