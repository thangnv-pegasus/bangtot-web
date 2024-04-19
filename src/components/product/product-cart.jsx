import { useEffect, useRef, useState } from "react";
import instance from "../../axios/config";
import { Link } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const ProductCart = ({ product = {}, setCart }) => {
  const [quantity, setQuantity] = useState(product.quantity || 1);
  const [image, setImage] = useState([]);
  const inputRef = useRef();
  const auth = useSelector((state) => state.auth);
  const fetchImage = async () => {
    const { data } = await instance.get(`image-product/${product.id}`);

    setImage(data.image);
  };

  const formatNumber = (num) => {
    const x = Number(num);

    return x.toLocaleString();
  };

  const updateProduct = async (quantity) => {
    if (auth.isLogin === true) {
      const { data } = await instance.patch(
        "user/update-cart",
        {
          productId: product.id,
          quantity,
          sizeId: product.idSize,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setCart(data.cart);
    } else {
      const productLocal =
        (await JSON.parse(localStorage.getItem("cart"))) || [];
      let check = false;
      let key = 0;
      if (productLocal.length > 0) {
        for (let index = 0; index < productLocal.length; index++) {
          const item = productLocal[index];
          if (item.id == product.id) {
            check = true;
            key = index;
          }
        }
      }
      if (check === true) {
        productLocal[key].quantity = Number(quantity);
      }
      localStorage.setItem("cart", JSON.stringify(productLocal));
      setCart(productLocal);
    }
  };

  const deleteProduct = async () => {
    if (auth.isLogin === true) {
      const { data } = await instance.delete(
        `user/delete-product-cart/${product.cart_product_id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setCart(data.cart);
    } else {
      const productLocal =
        (await JSON.parse(localStorage.getItem("cart"))) || [];
      const cart_temp =
        (await JSON.parse(localStorage.getItem("cart-local"))) || [];
      let check = false;
      let key = 0
      let key2 = 0;
      if (productLocal.length > 0) {
        for (let index = 0; index < productLocal.length; index++) {
          const item = productLocal[index];
          if (item.id == product.id) {
            check = true;
            key = index;
          }
        }
        for (let index = 0; index < cart_temp.length; index++) {
          const item = cart_temp[index];
          if(item.productId == product.id){
            key2 = index;
          }
        }
      }
      if (check === true) {
        productLocal.splice(key, 1);
        cart_temp.splice(key2, 1);
      }
      localStorage.setItem("cart", JSON.stringify(productLocal));
      localStorage.setItem("cart-local", JSON.stringify(cart_temp));
      setCart(productLocal);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="grid grid-cols-3_1_2_1 gap-x-10 py-4">
      <div className="flex px-2">
        <div className="w-auto h-24 overflow-hidden">
          <img
            src={image[0]?.name || "https://via.placeholder.com/200x200"}
            alt=""
            className="block w-full h-full object-cover object-center"
          />
        </div>
        <div className="mx-4">
          <div className="flex items-center">
            <Link
              to={`/chi-tiet-san-pham/${product.id}`}
              className="block font-meidum transition-all ease-linear hover:text-baseColor"
            >
              {product.name || "product name"}
            </Link>
            <p className="text-xs text-gray-600 font-medium ml-5">
              {product.size_name || "200 x 600"}
            </p>
          </div>
          <button
            className="text-sm mt-3 flex items-center bg-rose-600 text-white px-2 py-1 rounded-sm"
            onClick={() => deleteProduct()}
          >
            <span className="mr-1">Xóa</span> <IoTrashOutline />
          </button>
        </div>
      </div>
      <div className="px-2 relative">
        {(product.price_sale !== 0 ? product.price_sale : product.price) ||
          30000}
        <sup className="underline left-[2px]">đ</sup>
      </div>
      <div className="flex px-2 items-center text-sm border-[1px] border-solid border-gray-400 w-fit h-fit rounded-md">
        <button
          onClick={() => {
            setQuantity((pre) => (pre > 1 ? pre - 1 : pre));
            if (quantity > 1) {
              updateProduct(quantity - 1);
            }
          }}
          className="px-2 py-3"
        >
          <FiMinus />
        </button>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-10 text-center outline-none"
          ref={inputRef}
        />
        <button
          onClick={() => {
            setQuantity(quantity + 1);
            updateProduct(quantity + 1);
          }}
          className="px-2 py-3"
        >
          <FaPlus />
        </button>
      </div>
      <div className="px-2 text-baseColor font-medium relative">
        {(product.price_sale !== 0 ? product.price_sale : product.price) *
          quantity || 300000}{" "}
        <sup className="-left-[2px] underline">đ</sup>{" "}
      </div>
    </div>
  );
};

export default ProductCart;
