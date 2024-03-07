import { useEffect, useState } from "react";
import instance from "../../axios/config";
import { Link } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
const ProductCart = ({ product = {} }) => {
  const [quantity, setQuantity] = useState(product.quantity || 1);
  const [image, setImage] = useState([]);

  const fetchImage = async () => {
    const { data } = await instance.get(`image-product/${product.id}`);

    setImage(data.image);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="grid grid-cols-3_1_2_1 p-4">
      <div className="flex px-2">
        <div className="w-24 h-24 overflow-hidden">
          <img
            src={image[0] || "https://via.placeholder.com/200x200"}
            alt=""
            className="block w-full h-full object-cover object-center"
          />
        </div>
        <div className="mx-4">
          <Link to="" className="block font-meidum transition-all ease-linear hover:text-baseColor">{product.name || "product name"}</Link>
          <button className="text-sm mt-3 flex items-center bg-rose-600 text-white px-2 py-1 rounded-sm"><span className="mr-1">Xóa</span> <IoTrashOutline /></button>
        </div>
      </div>
      <div className="px-2">{product.price || 30000}</div>
      <div className="flex px-2 items-center text-sm border-[1px] border-solid border-gray-400 w-fit h-fit rounded-md">
        <button onClick={() => setQuantity((pre) => (pre > 1 ? pre - 1 : pre))} className="px-2 py-3">
          <FiMinus />
        </button>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-10 text-center outline-none"
        />
        <button onClick={() => setQuantity(quantity + 1)} className="px-2 py-3">
          <FaPlus />
        </button>
      </div>
      <div className="px-2">{product.price * quantity || 300000}</div>
    </div>
  );
};

export default ProductCart;
