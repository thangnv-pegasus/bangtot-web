import { Link } from "react-router-dom";

const Blog = ({ blog = {}, classes }) => {
  return (
    <div>
      <Link className="w-full h-auto overflow-hidden">
        <img src="https://via.placeholder.com/200x200" alt="" />
      </Link>
      
    </div>
  );
};

export default Blog;
