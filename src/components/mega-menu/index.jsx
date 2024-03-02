import CollectionItem from "./collection-item";

const MegaMenu = ({ collections = [], collectionItems = [] }) => {

  const items = (keyTitle = 1) => {
    const list = []

    for(let i = 0; i<collectionItems.length; i++){
      if(collectionItems[i].idCollection === keyTitle){
        list.push(collectionItems[i])
      }
    }
    return list
  }

  return (
    <div className="absolute hidden animate-fadeIn top-full left-1/2 -translate-x-1/2 w-container bg-white shadow-mega_menu p-5 rounded-lg group-hover:block group-hover:text-black">
      <div className="grid grid-cols-6 gap-5">
        {collections.map((item, index) => {
          return (
            <CollectionItem
              title={item.name}
              path={item.path}
              key={index}
              list={items(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MegaMenu;
