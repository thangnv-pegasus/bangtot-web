import axios from "axios";

const uploadImage = async (file, folder) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "project-bangdep");
  formData.append("api_key", "625354317799392");
  formData.append("cloud_name", "dk5g0mlni");
  formData.append("timestamp", (Date.now() / 1000) | 0);
  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/dk5g0mlni/image/upload/${folder}`,
    formData,
  );
  console.log({ data });
  return { publicId: data.public_id, url: data.secure_url };
};

export default uploadImage;
