import CollectionItem from "./collection-item";

const listDemo = [
  {
    title: "Bảng phấn",
    path: "/bang-phan",
    list: [
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
    ],
  },
  {
    title: "Bảng phấn",
    path: "/bang-phan",
    list: [
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
    ],
  },
  {
    title: "Bảng phấn",
    path: "/bang-phan",
    list: [
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
    ],
  },
  {
    title: "Bảng phấn",
    path: "/bang-phan",
    list: [
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
      {
        title: "Bảng phấn 1",
        path: "/bang-phan",
      },
    ],
  },
];

const MegaMenu = () => {
  return (
    <div className="absolute hidden animate-fadeIn top-full left-1/2 -translate-x-1/2 w-container bg-white shadow-mega_menu p-5 rounded-lg group-hover:block group-hover:text-black">
      <div className="grid grid-cols-5 gpa-x-5">
        {listDemo.map((item, index) => {
          return (
            <CollectionItem
              title={item.title}
              path={item.path}
              key={index}
              list={item.list}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MegaMenu;
