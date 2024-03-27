import { IoMdClose } from "react-icons/io";
import instance from "../../axios/config";
import { useRef } from "react";

const CreateCollection = ({ setOpen }) => {
  const nameRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await instance.post("admin/create-collection", {
      name: nameRef.current.value,
    });

    console.log(data);
  };

  return (
    <div
      className="flex fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] justify-center items-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-1/3 min-h-40 bg-white rounded-md overflow-hidden relative py-5 px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 hover:bg-baseColor hover:text-white p-2 text-xl"
          onClick={() => setOpen(false)}
        >
          <IoMdClose />
        </button>
        <h1 className="text-center uppercase font-medium mb-2">
          Tạo mới bộ sưu tập
        </h1>
        <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
          <div className="py-2">
            <input
              type="text"
              name="name"
              placeholder="Tên bộ sưu tập"
              className="w-full block outline-none border-[1px] border-solid border-gray-400 px-2 py-1 rounded-sm"
              ref={nameRef}
            />
            <div className="flex items-center justify-between mt-5">
              <button
                type="button"
                className="w-40 py-2 bg-orange-600 font-medium uppercase text-sm text-white"
                onClick={() => setOpen(false)}
              >
                Hủy
              </button>
              <button
                type="submit"
                className="w-40 py-2 bg-baseColor font-medium uppercase text-sm text-white"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCollection;
