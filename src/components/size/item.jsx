import { BsTrash3 } from "react-icons/bs";
import instance from "../../axios/config";

const SizeItem = ({ size = {},setSizes, handleCheck = () => {} }) => {
  const handleDelete = async () => {
    const { data } = await instance.delete(`admin/delete-size/${size.id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    if(data.status === 200){
      setSizes(data.sizes)
    }
    // console.log(data)
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={size.id}
        id={size.id}
        value={size.name}
        onChange={(e) => handleCheck(e)}
      />
      <label htmlFor={size.id} className="mx-2 select-none cursor-pointer">
        {size.name}
      </label>
      <button type="button" className="bg-red-600 p-1 rounded-sm" title="Xóa" onClick={() => handleDelete()}>
        <BsTrash3 className="text-white" />
      </button>
    </div>
  );
};

export default SizeItem;
