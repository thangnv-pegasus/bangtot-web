import { Link } from "react-router-dom";
const CollectionItem = ({ title, path, list = [] }) => {
  return (
    <div>
      <Link to={path} className="block font-bold text-baseColor pb-2">
        {title}
      </Link>
      <div className="">
        {list.map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              className="block text-base font-normal py-1 transition-all ease-linear duration-150 hover:text-baseColor"
            >
              {" "}
              {item.title}{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionItem;
