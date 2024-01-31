import { Link } from "react-router-dom";

const Product = ({
  type = "product",
  classes,
  title = "product name",
  path = "",
  price,
  price_sale,
  img,
}) => {
  const formatNumber = (num = 10) => {
    return num.toLocaleString() || num;
  };
  return (
    <div>
      <Link to={path} className="block rounded-sm overflow-hidden w-full group">
        <div className="w-full h-auto relative overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover object-center transition-all ease-linear duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.08)] transition-all ease-linear scale-0 duration-500 origin-top-left opacity-100 group-hover:opacity-0 group-hover:scale-100"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.08)] transition-all ease-linear scale-0 duration-500 origin-bottom-right opacity-100 group-hover:opacity-0 group-hover:scale-100"></div>
        </div>
      </Link>
      <Link
        to={path}
        className="block transition-all ease-linear hover:text-baseColor py-1 mt-1 font-medium px-1"
      >
        {title}
      </Link>
      {type === "product" && (
        <div className="flex items-center px-1">
          {price_sale ? (
            <>
              <p className="text-base font-medium text-baseColor">
                {formatNumber(price_sale)}
                <sup className="underline -top-1 left-[2px]">đ</sup>
              </p>
              <p className="text-sm font-medium px-2 opacity-50 line-through decoration-[1.2px]">
                {formatNumber(price)}
                <sup className="underline -top-1 left-[2px]">đ</sup>
              </p>
            </>
          ) : (
            <p className="text-base font-medium text-baseColor">
              {formatNumber(price)}
              <sup className="underline -top-1 left-[2px]">đ</sup>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
