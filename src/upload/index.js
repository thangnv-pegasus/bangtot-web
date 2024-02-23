import axios from "axios";

const uploadImage = async (file, folder) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ml_default");
  formData.append('api_key','625354317799392')
  formData.append('timestamp',Date.now()/1000 | 0)
  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/dk5g0mlni/image/upload/${folder}`,
    formData,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": "true",
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      method: 'post'
    }
  );

  return { publicId: data?.public_id, url: data?.secure_url };
};

export default uploadImage;
