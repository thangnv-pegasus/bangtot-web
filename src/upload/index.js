import axios from "axios";

const uploadImage = async (file, folderName = 'products') => {
  let presetname = import.meta.env.VITE_CLOUDINARY_PRESET_NAME_PRODUCTS
  if(folderName === 'blogs'){
    presetname = import.meta.env.VITE_CLOUDINARY_PRESET_NAME_BLOGS
  }
  const apikey = import.meta.env.VITE_CLOUDINARY_API_KEY
  const clouname = import.meta.env.VITE_CLOUDINARY_NAME
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", presetname);
  formData.append("api_key", apikey);
  formData.append("cloud_name", clouname);
  formData.append("timestamp", (Date.now() / 1000) | 0);
  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/dk5g0mlni/image/upload/`,
    formData,
  );
  console.log({ data });
  return { publicId: data.public_id, url: data.secure_url };
};

export default uploadImage;
