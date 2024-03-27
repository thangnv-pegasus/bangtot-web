import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import uploadImage from "../../upload";
import instance from "../../axios/config";
import { ToastContainer, toast } from "react-toastify";
const CreateBanner = ({ setOpen, setBanner }) => {
  const fileRef = useRef();

  const showToastSuccess = () => {
    toast.success("Thêm ảnh thành công!");
  };

  const showToastError = () => {
    toast.error("Thêm ảnh thất bại!");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const images = fileRef.current.files;
    const arr = []

    for(let i=0;i<images.length;i++){
        const data = await uploadImage(images[i],'banner')
        arr.push(data)
    }
    const { data } = await instance.post(
      "admin/create-banner",
      {
        file: arr,
      },
      {
        method: "post",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (data.status == 200) {
      showToastSuccess();
      setBanner(data.banner)
    } else {
      showToastError();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="min-h-48 w-1/3 bg-white p-10 relative rounded-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="uppercase text-lg font-medium mb-10 text-center">
          Thêm ảnh cho banner
        </h1>
        <button
          className="absolute top-0 right-0 p-2 text-xl hover:bg-baseColor hover:text-white"
          onClick={() => setOpen(false)}
        >
          <IoClose />
        </button>
        <form
          action=""
          method="post"
          encType="multipart/form-data"
          onSubmit={(e) => {
            handleUpload(e);
          }}
        >
          <input
            class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-gray-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal leading-[2.15] text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none"
            id="multiple_files"
            type="file"
            multiple
            ref={fileRef}
          />
          <div className="flex items-center mt-8 justify-between">
            <button
              type="button"
              className="w-40 py-2 bg-orange-500 text-white rounded-md"
              onClick={() => setOpen(false)}
            >
              Hủy
            </button>
            <button
              type="submit"
              className="w-40 py-2 bg-baseColor text-white rounded-md"
            >
              Xác nhận
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateBanner;
