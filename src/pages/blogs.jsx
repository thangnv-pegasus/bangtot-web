import { useEffect, useState } from "react";
import Layout from "../components/layout";
import instance from "../axios/config";
import { useNavigate } from "react-router-dom";
import TitlePage from "../components/page-title";
import Blog from "../components/blogs/blog";
import LoadingSpinner from "../components/loading/spinner";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await instance.get("blogs", {
        method: "get",
      });

      setBlogs(data.blogs);
      setLoading(false);
    } catch (e) {
      console.log(e);
      // navigate('/')
    } 
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="max-w-container mx-auto">
        {loading === true ? (
          <LoadingSpinner />
        ) : (
          <div className="py-10">
            <TitlePage title="Tin tức" classes="font-semibold pb-5" />
            <div className="grid grid-cols-3 gap-10">
              {blogs.map((item, index) => {
                return <Blog blog={item} key={index} />;
              })}
              <Blog />;
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blogs;
