import { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import instance from "../../axios/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormHotline = ({ open = false, setOpen }) => {
  const refNamePhone = useRef();
  const refPhone = useRef();

  const showToastSuccess = () => {
    toast.success("Thêm số điện thoại thành công!");
  };

  const showToastError = () => {
    toast.error("Thêm số điện thoại thất bại!");
  };

  const createPhone = async (e) => {
    e.preventDefault();
    try {
      const { data } = await instance.post(
        "admin/add-phone-contact",
        {
          phoneName: refNamePhone.current.value,
          phoneNumber: refPhone.current.value,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      showToastSuccess();
      refNamePhone.current.value = "";
      refPhone.current.value = "";
    } catch (e) {
      showToastError();
      console.log(e);
    }
  };

  return (
    <div
      className={`fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)] ${
        open === true ? "block" : "hidden"
      }`}
      onClick={() => setOpen(false)}
    >
      <form
        action=""
        method="post"
        className="block bg-white w-2/5 p-5 relative rounded-md overflow-hidden"
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={(e) => createPhone(e)}
      >
        <div
          className="absolute cursor-pointer top-0 right-0 p-2 text-lg transition-all ease-linear hover:bg-baseColor hover:text-white"
          onClick={() => setOpen(false)}
        >
          <IoCloseOutline />
        </div>
        <h2 className="text-xl font-medium text-center pb-4 select-none">
          Thêm mới số điện thoại liên hệ
        </h2>
        <div className="py-2">
          <label htmlFor="name" className="block pb-1 select-none">
            Nhập tên của số điện thoại
          </label>
          <input
            type="tel"
            name="phone-name"
            id="name"
            className="block w-full px-2 py-2 text-sm border-[1px] border-solid border-gray-400 rounded-md overflow-hidden outline-none"
            ref={refNamePhone}
          />
        </div>
        <div className="py-2">
          <label htmlFor="phone-number" className="block pb-1 select-none">
            Nhập số điện thoại
          </label>
          <input
            type="tel"
            name="phone-number"
            id="phone-number"
            className="block w-full px-2 py-2 text-sm border-[1px] border-solid border-gray-400 rounded-md overflow-hidden outline-none"
            ref={refPhone}
          />
        </div>
        <button
          type="submit"
          className="block w-40 mx-auto bg-baseColor mt-4 py-2 text-white rounded-md select-none"
        >
          Lưu số điện thoại
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormHotline;
