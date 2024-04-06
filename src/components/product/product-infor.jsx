import { Link } from "react-router-dom";
import routers from "../../config/router";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import instance from "../../axios/config";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const ProductInfor = ({
  name = "",
  price = 1,
  price_sale = null,
  imageUrl = "",
  idProduct = 1,
  setProducts,
  setImages,
}) => {
  const formatNumber = (num = 10) => {
    return num.toLocaleString() || num;
  };

  const handleDelete = async () => {
    const { data } = await instance.delete(
      `admin/delete-product/${idProduct}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    if (data.status == 200) {
      setProducts(data.products.data);
      setImages(data.images);
    }
  };

  const showToastSuccess = () => {
    toast.success("Thêm số điện thoại thành công!");
  };

  return (
    <>
      <div className="flex justify-between my-2 py-4 border-b-[1px] border-solid border-slate-300">
        <div className="flex">
          <div className="w-24 h-24 overflow-hidden rounded-sm">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover object-center block"
            />
          </div>
          <Link
            to={`/chi-tiet-san-pham/${idProduct}`}
            className="block ml-4 text-base hover:text-baseColor font-medium"
          >
            {name}
          </Link>
        </div>
        <div>
          <div className="flex items-center justify-end">
            <button title="Sửa thông tin" className="p-2 ml-2">
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button
              title="Xóa sản phẩm"
              className="p-2 ml-2"
              onClick={() => handleDelete()}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
          <div className="flex items-center justify-end">
            {price_sale ? (
              <>
                <p className="ml-4">
                  <span>Gía gốc:</span> {formatNumber(price_sale)}đ{" "}
                </p>
                <p className="ml-4">
                  <span>giảm còn:</span> {formatNumber(price)}đ
                </p>
              </>
            ) : (
              <>
                <p className="ml-4">
                  <span>Giá gốc: </span>
                  {formatNumber(price)}đ
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProductInfor;
