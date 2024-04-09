import { useEffect, useState } from "react";
import Layout from "../components/layout";
import instance from "../axios/config";
import { useNavigate } from "react-router-dom";
import TitlePage from "../components/page-title";
import Blog from "../components/blogs/blog";
import LoadingSpinner from "../components/loading/spinner";
import Pagination from "../components/pagination";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState({
    current_page: 1,
    last_page: 1,
  });
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await instance.get(`blogs?page=${page.current_page}`, {
        method: "get",
      });
      setBlogs(data.blogs.data);
      setPage({
        current_page: data.blogs.current_page,
        last_page: data.blogs.last_page,
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
      // navigate('/')
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="lg:max-w-[1000px] md:max-w-[760px] max-w-full px-10 md:px-0 xl:max-w-container mx-auto">
        {loading === true ? (
          <LoadingSpinner />
        ) : (
          <div className="py-10">
            <TitlePage title="Tin tức" classes="font-semibold pb-5" />
            <div className="grid lg:grid-cols-3 gap-10 grid-cols-2">
              {blogs.map((item, index) => {
                return <Blog blog={item} key={index} />;
              })}
            </div>
            {page.last_page > 1 && (
              <Pagination
                currentPage={page.current_page}
                lastPage={page.last_page}
                setBlogs={setBlogs}
                setPage={setPage}
                type="blogs"
              />
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blogs;
