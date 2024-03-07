import { Link } from "react-router-dom";
import { IoCalendarOutline } from "react-icons/io5";
import "react-quill/dist/quill.snow.css";
import instance from "../../axios/config";
import { useEffect, useState } from "react";
const Blog = ({ blog = {}, classes }) => {
  const [author, setAuthor] = useState("author");
  const fetchAuthor = async () => {
    const { data } = await instance.get(`author/${blog.idUser}`, {
      method: "get",
    });
    setAuthor(data.author);
  };

  useEffect(() => {
    if (blog.idUser) {
      fetchAuthor();
    }
  }, []);

  const formatDate = (str) => {
    const date = new Date(str);
    return date.toLocaleDateString();
  };
  return (
    <div className="">
      <Link
        to=""
        className="w-full h-60 overflow-hidden block group rounded-md shadow-mega_menu"
      >
        <img
          src={blog.imageUrl || "https://via.placeholder.com/200x120"}
          alt=""
          className="w-full h-full object-cover object-center transition-all ease-linear duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="px-5">
        <div className="p-5 bg-white shadow-mega_menu relative -top-10 rounded-md">
          <Link
            to=""
            className="line-clamp-1 text-center mb-2 font-medium transition-all ease-linear hover:text-baseColor"
            title={blog.name || "blog name"}
          >
            {blog.name || "blog name"}
          </Link>
          <div className="flex items-center justify-center text-sm relative">
            <div className="flex items-center pr-2">
              <span className="mr-1">
                <IoCalendarOutline />
              </span>
              <p className="font-medium text-[#91ad41]">
                {formatDate(blog.create_at)}
              </p>
            </div>
            <div className="flex items-center px-1">
              <span className="mr-1">Đăng bởi:</span>
              <p className="font-medium text-[#91ad41]">{author}</p>
            </div>
          </div>
          <p className="text-sm line-clamp-2 pt-2 select-none">
            {blog.content ? (
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            ) : (
              "Sự tiện dụng, thoải mái và thông minh luôn được đặt lên hàng đầu trong xã hội ngày nay. Vì vậy, những món đồ nội thất mang lại sự tiện nghi và không quá đắt đỏ luôn"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
