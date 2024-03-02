import { Link } from "react-router-dom";
import LayoutAdmin from "../../components/layout/admin";
import TitlePage from "../../components/page-title";
import BlogInfor from "../../components/blogs/blog-infor";
import { useEffect, useState } from "react";
import instance from "../../axios/config";
import routers from "../../config/router";
const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await instance.get("blogs", {
        method: "get",
      });
      setBlogs(data.blogs);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LayoutAdmin>
      <div className="flex items-center justify-between">
        <TitlePage
          title="Danh sách bài đăng"
          classes="text-lg font-medium pb-5"
        />
        <Link to={routers.newPost} className="text-sm underline text-baseColor font-medium">
          Thêm mới
        </Link>
      </div>
      <div>
        <BlogInfor />
      </div>
    </LayoutAdmin>
  );
};

export default ManageBlogs;
