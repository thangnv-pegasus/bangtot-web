import { Link } from "react-router-dom";
import instance from "../../axios/config";
import { useEffect, useState } from "react";
import LoadingDots from "../loading/dot";

const Product = ({
  type = "product",
  product = {},
  collection = {},
  classes,
}) => {
  const [image, setImage] = useState("https://via.placeholder.com/200x200");
  const [loading, setLoading] = useState(false);
  const formatNumber = (num = 10) => {
    return num.toLocaleString() || num;
  };

  const setPath = (type) => {
    if(type === 'product'){
      return `/chi-tiet-san-pham/${product.id}`
    }
    return `#`
  }

  const fetchImage = async () => {
    setLoading(true);
    const { data } = await instance.get(`image-product/${product.id}`);

    setImage(data.image[0]?.name);
    setLoading(false);
  };

  const fetchDataCollection = async () => {
    setLoading(true);
    const { data } = await instance.get(
      `first-product-collection/${collection.id}`
    );
    if (data.product?.imageUrl) {
      setImage(data.product.imageUrl);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (type === "product") {
      fetchImage();
    } else {
      fetchDataCollection();
    }
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      {loading === false ? (
        <>
          <Link
            to={setPath(type)}
            className="block rounded-sm overflow-hidden w-full group"
            onClick={() => window.scrollTo(0,0)}
          >
            <div className="w-full h-48 relative overflow-hidden">
              <img
                src={image}
                alt={product.name || "product name"}
                className="w-full h-full object-cover object-center transition-all ease-linear duration-500 group-hover:scale-110"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.08)] transition-all ease-linear scale-0 duration-500 origin-top-left opacity-100 group-hover:opacity-0 group-hover:scale-100"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.08)] transition-all ease-linear scale-0 duration-500 origin-bottom-right opacity-100 group-hover:opacity-0 group-hover:scale-100"></div>
            </div>
          </Link>
          <Link
            to={setPath(type)}
            className="transition-all ease-linear hover:text-baseColor my-1 font-medium px-1 line-clamp-1"
          >
            {product.name || collection.name || "product name"}
          </Link>
          {type === "product" && (
            <div className="flex items-center px-1">
              {product.price_sale ? (
                <>
                  <p className="text-base font-medium text-baseColor">
                    {formatNumber(product.price_sale || 1000)}
                    <sup className="underline -top-1 left-[2px]">đ</sup>
                  </p>
                  <p className="text-sm font-medium px-2 opacity-50 line-through decoration-[1.2px]">
                    {formatNumber(product.price || 1000)}
                    <sup className="underline -top-1 left-[2px]">đ</sup>
                  </p>
                </>
              ) : (
                <p className="text-base font-medium text-baseColor">
                  {formatNumber(product.price || 1000)}
                  <sup className="underline -top-1 left-[2px]">đ</sup>
                </p>
              )}
            </div>
          )}
        </>
      ) : (
        <>
          <LoadingDots />
        </>
      )}
    </div>
  );
};

export default Product;
