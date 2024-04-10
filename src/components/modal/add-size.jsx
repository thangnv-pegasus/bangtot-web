import { IoCloseSharp } from "react-icons/io5";
import instance from "../../axios/config";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddSize = ({ setSizes, setOpen }) => {
  const sizeNameRef = useRef();
  const factorRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await instance.post(
      "admin/add-size",
      {
        name: sizeNameRef.current.value,
        factor: factorRef.current.value || 0,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    if (data.status == 200) {
      showToastSuccess();
      setSizes(data.sizes)
    } else {
      showToastError();
    }
  };

  const showToastSuccess = () => {
    toast.success("Thêm mới kích thước thành công!");
  };

  const showToastError = () => {
    toast.error("Thêm mới kích thước thất bại");
  };
  return (
    <div
      className="flex fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] justify-center items-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-white w-1/3 min-h-20 rounded-md py-5 px-10 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-center uppercase font-medium pb-2">
          Thêm kích cỡ mới
        </h1>
        <button
          type="button"
          className="absolute top-0 right-0 p-[10px] transition-all ease-linear hover:bg-baseColor hover:text-white"
          onClick={() => setOpen(false)}
        >
          <IoCloseSharp />
        </button>
        <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
          <div className="py-2">
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-gray-600 select-none"
            >
              Kích thước
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nhập kích thước VD: 200x300"
              className="block outline-none border-[1px] border-solid border-gray-400 w-full rounded-md py-2 px-4 text-sm"
              ref={sizeNameRef}
            />
          </div>
          <div className="py-2">
            <label
              htmlFor="factor"
              className="block mb-1 text-sm font-medium text-gray-600 select-none"
            >
              Hệ số cộng thêm
            </label>
            <input
              type="text"
              name="factor"
              id="factor"
              placeholder="Nhập hệ số cộng thêm"
              className="block outline-none border-[1px] border-solid border-gray-400 w-full rounded-md py-2 px-4 text-sm"
              ref={factorRef}
            />
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              type="button"
              className="w-52 py-[10px] text-sm uppercase text-white bg-orange-700 rounded-md"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="w-52 py-[10px] text-sm uppercase text-white bg-baseColor rounded-md"
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

export default AddSize;
