import { FaPhone } from "react-icons/fa";

const PhoneNumber = ({
  phoneNumber = "Đặt hàng ngay",
  classes = "",
  color = "bg-hotline_bg1",
  shadow = ''
}) => {
  return (
    <div
      className={`flex items-center px-3 py-1 rounded-full text-white mt-10 ${color}`}
    >
      <a href={`tel:${phoneNumber}`} className="pr-5">
        {phoneNumber}
      </a>
      <span className={`animate-shaking relative ${color}`}>
        <FaPhone className="relative z-50" />
        <span
          className={`animate-zoom absolute opacity-70 ${shadow} rounded-full w-12 h-12 -top-4 -right-4 translate-x-1/2 ${color}`}
        ></span>
      </span>
    </div>
  );
};

export default PhoneNumber;
