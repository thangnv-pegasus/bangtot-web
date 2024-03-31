import { useRef } from "react";
import TitlePage from "../page-title";
import instance from "../../axios/config";
import { ToastContainer, toast } from "react-toastify";

const ChangePassword = () => {
  const currentPassRef = useRef();
  const newPassRef = useRef();
  const confirmRef = useRef();

  const showToastSuccess = () => {
    toast.success("Đổi mật khẩu thành công!");
  };

  const showToastError = (str) => {
    toast.error(str);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await instance.patch(
      "user/change-password",
      {
        current_pass: currentPassRef.current.value,
        new_pass: newPassRef.current.value,
        confirm_pass: confirmRef.current.value,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    if (data.status == 200) {
      // console.log(data)
      currentPassRef.current.value = "";
      newPassRef.current.value = "";
      confirmRef.current.value = "";
      showToastSuccess();
    } else if (data.status == 202) {
      showToastError("Mật khẩu hiện tại chưa đúng!");
    } else if (data.status == 201) {
      showToastError("Mật khẩu mới không khớp!");
    }
  };

  return (
    <div className="">
      <TitlePage
        title="Đổi mật khẩu"
        classes="uppercase text-lg font-medium pb-2"
      />
      <p className="text-sm text-gray-700">
        Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 kí tự
      </p>
      <form
        action=""
        method="post"
        className="block w-full mt-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="py-2">
          <label htmlFor="current-pass" className="mb-1 block text-gray-700">
            Mật khẩu hiện tại
          </label>
          <input
            type="password"
            name=""
            id="current-pass"
            placeholder="Nhập mật khẩu hiện tại"
            className="block w-1/2 border-[1px] border-solid border-gray-600 outline-none rounded-md py-2 px-4"
            ref={currentPassRef}
          />
        </div>
        <div className="py-2">
          <label htmlFor="new-pass" className="mb-1 block text-gray-700">
            Mật khẩu mới
          </label>
          <input
            type="password"
            name=""
            id="new-pass"
            placeholder="Nhập mật khẩu mới"
            className="block w-1/2 border-[1px] border-solid border-gray-600 outline-none rounded-md py-2 px-4"
            ref={newPassRef}
          />
        </div>
        <div className="py-2">
          <label htmlFor="confirm-pass" className="mb-1 block text-gray-700">
            Nhập lại mật khẩu
          </label>
          <input
            type="password"
            name=""
            id="confirm-pass"
            placeholder="Nhập lại mật khẩu"
            className="block w-1/2 border-[1px] border-solid border-gray-600 outline-none rounded-md py-2 px-4"
            ref={confirmRef}
          />
        </div>
        <button
          type="submit"
          className="bg-baseColor text-white px-10 py-[10px] mt-5 rounded-full hover:bg-baseBg transition-all ease-linear"
        >
          Xác nhận
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ChangePassword;
