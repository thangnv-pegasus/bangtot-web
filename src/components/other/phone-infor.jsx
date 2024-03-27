import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import UpdatePhone from "../modal/update-phone";
import instance from "../../axios/config";
import { ToastContainer, toast } from "react-toastify";

const PhoneInfor = ({ phone, setHotlines }) => {
  const [open, setOpen] = useState(false);

  const deletePhone = async () => {
    const { data } = await instance.delete(`admin/delete-phone/${phone.id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    if (data.status == 200) {
      setHotlines(data.hotline);
    }
  };
  
  return (
    <>
      <div className="flex items-center justify-between border-b-2 border-solid border-gray-400">
        <div className="py-2">
          <h3 className="text-base font-medium">{phone.name}</h3>
          <p className="text-sm">{phone.phoneNumber}</p>
        </div>
        <div className="flex items-center">
          <button
            className="block mx-2 p-1 text-lg"
            onClick={() => setOpen(true)}
          >
            <FaRegEdit />
          </button>
          <button
            className="block mx-2 p-1 text-lg"
            onClick={() => deletePhone()}
          >
            <FaRegTrashCan />
          </button>
        </div>
      </div>
      {open === true && ( 
        <UpdatePhone
          phone={phone}
          setOpen={setOpen}
          key={phone}
          setHotlines={setHotlines}
        />
      )}
    </>
  );
};

export default PhoneInfor;
