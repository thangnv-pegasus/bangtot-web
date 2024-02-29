import { FaPhone } from "react-icons/fa";

const PhoneNumber = ({ phoneNumber = "Đặt hàng ngay", classes = "" }) => {
  return (
    <div className="flex items-center px-3 py-1 rounded-full bg-[#ed5ae3] text-white my-5">
      <a href={`tel:${phoneNumber}`} className="pr-5">{phoneNumber}</a>
      <span className="bg-[#ed5ae3] animate-shaking relative">
        <FaPhone className="relative z-50"/>
        <span className="animate-zoom absolute opacity-70 shadow-phone_number bg-[#ed5ae3] rounded-full w-12 h-12 -top-4 -right-4 translate-x-1/2">
          
        </span>
      </span>
    </div>
  );
};

export default PhoneNumber;
