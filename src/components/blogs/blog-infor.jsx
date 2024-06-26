import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import instance from "../../axios/config";
import { useEffect, useState } from "react";

const BlogInfor = ({
  blog = {
    imageUrl: "https://via.placeholder.com/200x200",
    name: "name",
    content: "content blog sssssssssssssssssssssssssss",
    create_at: "02/02/2002",
  },
  classes = "",
}) => {
  const [author, setAuthor] = useState("author");

  const fetchAuthor = async () => {
    const { data } = await instance.get(`author/${blog.id}`);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchAuthor();
  }, []);
  return (
    <div className="flex justify-between my-2 py-4 border-b-[1px] border-solid border-slate-300">
      <div className="flex">
        <div className="w-40 h-24 overflow-hidden rounded-mega shadow-mega_menu">
          <img
            src={blog.imageUrl}
            alt={blog.name}
            className="w-full h-full object-cover object-center block"
          />
        </div>
        <div className="pl-4">
          <Link
            to={""}
            className="block text-base hover:text-baseColor font-medium mb-3"
          >
            {blog.name}
          </Link>
          <div className="line-clamp-2 max-w-80" dangerouslySetInnerHTML = {{ __html:blog.content }} />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-end">
          <button title="Sửa thông tin" className="p-2 ml-2">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button title="Xóa sản phẩm" className="p-2 ml-2">
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
        <div className="flex items-center justify-end">
          <p className="ml-4">
            <span>Tác giả:</span> {author}
          </p>
          <p className="ml-4">
            <span>Thời gian đăng:</span> {blog.create_at}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogInfor;
