import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import instance from "../../axios/config";
import { ToastContainer, toast } from "react-toastify";
const UpdatePhone = ({ phone, setOpen, setHotlines }) => {
  const [name, setName] = useState(phone?.name || "");
  const [phoneNumber, setPhoneNumber] = useState(phone?.phoneNumber || "");

  const update = async () => {
    const { data } = await instance.patch(
      `admin/update-phone/${phone.id}`,
      {
        id: phone.id,
        name: name,
        phoneNumber: phoneNumber,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    if (data.status == 200) {
      showToastSuccess();
    } else {
      showToastError();
    }
    setHotlines(data.hotline)
  };

  const showToastSuccess = () => {
    toast.success("Sửa số điện thoại thành công!");
  };

  const showToastError = () => {
    toast.error("Sửa số điện thoại thất bại!");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    update();
  };

  return (
    <div
      className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)]"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-1/3 min-h-40 p-10 bg-white rounded-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 p-2 text-xl"
          onClick={() => setOpen(false)}
        >
          <IoCloseSharp />
        </button>
        <h1 className="text-center pb-5 text-lg uppercase font-medium">
          Sửa số điện thoại liên hệ
        </h1>
        <form action="" method="post" onSubmit={(e) => handleUpdate(e)}>
          <div className="my-4">
            <input
              type="text"
              name="name"
              id=""
              placeholder="Tên số điện thoại"
              className="w-full block py-2 px-4 outline-none outline-0 border-[1px] border-solid border-gray-500 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-4">
            <input
              type="tel"
              name="phone"
              id=""
              placeholder="Số điện thoại"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full block py-2 px-4 outline-none outline-0 border-[1px] border-solid border-gray-500 rounded-md"
            />
          </div>
          <div className="flex items-center justify-between mt-10">
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

export default UpdatePhone;
