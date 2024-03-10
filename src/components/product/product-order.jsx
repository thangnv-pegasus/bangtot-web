import { useState } from "react";
import instance from "../../axios/config";

const ProductOrder = ({ product = {} }) => {
  const [image, setImage] = useState("https://via.placeholder.com/200x200");

  const fetchImage = async () => {
    try {
      const { data } = instance.get(`image-product/${product.id}`);
      setImage(data.imageUrl);
    } catch (e) {
      console.log(e);
    }
  };

  return <div>
    
  </div>;
};
