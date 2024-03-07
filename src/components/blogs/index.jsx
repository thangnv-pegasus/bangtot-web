import { useEffect, useState } from "react";
import instance from "../../axios/config";
import routers from "../../config/router";
import Title from "../title";
import Blog from "./blog";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const { data } = await instance.get(`blogs?page=${1}`);
    setPosts(data.blogs.data);
    console.log(data)
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-container mx-auto">
      <div className="py-10">
        <Title
          title="Tin tức mới nhât"
          classess={"flex-1 text-center"}
          showLink={true}
          path={routers.blogs}
        />
        <div className="grid grid-cols-3 gap-10 py-5">
          {
            posts.length > 0 && posts.map((item,index) => {
              return <Blog blog={item} key={index} />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Blogs;
