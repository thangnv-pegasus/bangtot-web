import Title from "../title";
import Blog from "./blog";

const Blogs = () => {
  return (
    <div className="max-w-container mx-auto">
      <div className="py-10">
        <Title title="Tin tức mới nhât" classess={'flex-1 text-center'}/>
        <div className="grid grid-cols-3 gap-10 py-5">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
