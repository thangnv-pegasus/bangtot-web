import { Link } from "react-router-dom";
import CollectionItem from "./collection-item";
import routers from "../../config/router";

const MegaMenu = ({ collections = [], collectionItems = [] }) => {
  const items = (keyTitle = 1) => {
    const list = [];

    for (let i = 0; i < collectionItems.length; i++) {
      if (collectionItems[i].idCollection === keyTitle) {
        list.push(collectionItems[i]);
      }
    }
    return list;
  };

  return (
    <div className="absolute hidden animate-fadeIn top-full left-1/2 -translate-x-1/2 lg:min-w-[800px] lg:max-w-[1200px] sm:w-[500px] bg-white shadow-mega_menu p-5 rounded-lg group-hover:block group-hover:text-black">
      <div className="grid grid-cols-3 gap-5">
        {collections.map((item, index) => {
          return (
            <Link to={''} className="block hover:text-baseColor">{item.name}</Link>
          );
        })}
      </div>
    </div>
  );
};

export default MegaMenu;
