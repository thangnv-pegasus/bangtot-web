import { Link } from "react-router-dom";
import { IoCalendarOutline } from "react-icons/io5";
const Blog = ({ blog = {}, classes }) => {
  return (
    <div className="">
      <Link
        to=""
        className="w-full h-auto overflow-hidden block group rounded-sm overflow-hidden"
      >
        <img
          src="https://via.placeholder.com/200x120"
          alt=""
          className="w-full h-full object-cover object-center transition-all ease-linear duration-300 group-hover:scale-110"
        />
      </Link>
      <div className="px-5">
        <div className="p-5 bg-white shadow-mega_menu relative -top-10 rounded-md">
          <Link
            to=""
            className="line-clamp-2 text-center pb-2 font-medium transition-all ease-linear hover:text-baseColor"
          >
            Blog name: demo blog
          </Link>
          <div className="flex items-center justify-center text-sm relative">
            <div className="flex items-center px-1">
              <span className="mr-1">
                <IoCalendarOutline />
              </span>
              <p className="font-medium text-[#91ad41]">20/10/2023</p>
            </div>
            <div className="flex items-center px-1">
              <span className="mr-1">Đăng bởi:</span>
              <p className="font-medium text-[#91ad41]">Thắng Nguyễn</p>
            </div>
          </div>
          <p className="text-sm line-clamp-2 pt-2 select-none">
            Sự tiện dụng, thoải mái và thông minh luôn được đặt lên hàng đầu
            trong xã hội ngày nay. Vì vậy, những món đồ nội thất mang lại sự
            tiện nghi và không quá đắt đỏ luôn
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
