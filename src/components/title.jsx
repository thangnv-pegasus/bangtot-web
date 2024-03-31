import { Link } from "react-router-dom";

const Title = ({
  title = "collection",
  path = "",
  showLink = false,
  classess,
}) => {
  return (
    <div className="flex justify-between items-center py-">
      <h1 className={`xl:text-xl font-medium uppercase2 text-lg ${classess}`}>{title}</h1>
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
