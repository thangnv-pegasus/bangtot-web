import { Link } from "react-router-dom";

const Title = ({
  title = "collection",
  path = "",
  showLink = false,
  classess,
}) => {
  return (
    <div className="flex justify-between items-center py-2">
      <h1 className={`text-xl font-medium uppercase ${classess}`}>{title}</h1>
      {showLink && (
        <Link
          to={path}
          className="block text-sm transition-all ease-linear hover:text-baseColor"
        >
          Xem tất cả
        </Link>
      )}
    </div>
  );
};

export default Title;
