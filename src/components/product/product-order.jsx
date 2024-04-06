import { useEffect, useState } from "react";
import instance from "../../axios/config";
import { Link } from "react-router-dom";

const ProductOrder = ({ product = {}, quantity = 1, size = {} }) => {
  const [image, setImage] = useState("https://via.placeholder.com/200x200");

  const fetchImage = async () => {
    try {
      const { data } = await instance.get(`image-product/${product.id}`);
      setImage(data.image);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const formatNumber = (num) => {
    const x = Number(num);

    return x.toLocaleString();
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="p-2 flex justify-between">
      <div className="flex select-none">
        <div className="relative w-20 h-20 border-[1px] border-solid border-gray-300 rounded-md">
          <img
            src={image[0]?.name}
            alt={image[0]?.description}
            className="w-full h-full object-cover object-center rounded-md"
          />
          <p className="absolute -top-1 -right-1 text-white text-xs leading-5 w-5 h-5 rounded-full text-center bg-baseColor">
            {product.quantity || quantity}
          </p>
        </div>
        <Link to={`/chi-tiet-san-pham/${product.id}`} className="ml-5 text-sm">
          {product.name}{" "}
          <span className="opacity-80">({product.size_name || size.name})</span>
        </Link>
      </div>
      <div className="text-base font-medium text-baseColor">
        {product.price_sale == 0 ? (
          <>
            {formatNumber(
              (product.price + (product.factor || size.factor)) *
                (product.quantity || quantity)
            )}
          </>
        ) : (
          <>
            {formatNumber(
              (product.price_sale + (product.factor || size.factor)) *
                (product.quantity || quantity)
            )}
          </>
        )}
        <sup className="">đ</sup>
      </div>
    </div>
  );
};

export default ProductOrder;
