import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../../custom-css/check-box.css";
import instance from "../../axios/config";

const SideBar = ({ setData, products = [] }) => {
  const [filter, setFilter] = useState({
    filterCollection: null,
    // filterPrice: null,
  });
  const [collections, setCollections] = useState([]);

  const fetchData = async () => {
    const { data } = await instance.get("show-collection");

    setCollections(data.collections);
  };

  const filteredProduct = products.filter((item) => {
    return (
      (!filter.filterCollection ||
        filter.filterCollection == item.collection_id) 
    );
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData(filteredProduct)
  },[filter])

  return (
    <div className="block bg-white md:px-4 overflow-y-auto animate-filter_amt relative">
      {(filter.filterCollection != null) && (
        <button
          className="absolute right-5 top-2 py-1 px-3 transition-all ease-linear duration-150 bg-red-600 text-white rounded-2xl"
          onClick={() =>
            setFilter({
              filterCollection: null,
              // filterPrice: null,
            })
          }
        >
          xóa
        </button>
      )}
      <div>
        <h2 className="text-base text-textColor font-semibold uppercase mb-4">
          Loại sản phẩm
        </h2>
        <ul className="text-textColor">
          {collections.map((item, index) => {
            return (
              <Item filter={filter} item={item} setFilter={setFilter} key={index} />
            );
          })}
        </ul>
      </div>
      {/* <div>
        <h2 className="text-base text-textColor font-semibold uppercase mb-4">
          Giá sản phẩm
        </h2>
        <ul className="text-textColor">
          <li>
            <label
              htmlFor="price1"
              className="checkbox_brand flex items-center my-3"
            >
              <input
                type="radio"
                name="radio3"
                id="price1"
                hidden
                value={"0-1m"}
                onClick={(e) =>
                  setFilter((pre) => ({
                    ...pre,
                    filterPrice: e.target.value,
                  }))
                }
              />
              <span className="checkmark"></span>
              <span className="text-sm">Giá dưới 1.000.000đ</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="price2"
              className="checkbox_brand flex items-center my-3"
            >
              <input
                type="radio"
                name="radio3"
                id="price2"
                hidden
                value={"1m-2m"}
                onClick={(e) =>
                  setFilter((pre) => ({
                    ...pre,
                    filterPrice: e.target.value,
                  }))
                }
              />
              <span className="checkmark"></span>
              <span className="text-sm">1.000.000đ - 2.000.000đ</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="price3"
              className="checkbox_brand flex items-center my-3"
            >
              <input
                type="radio"
                name="radio3"
                id="price3"
                value={"2m-3m"}
                onClick={(e) =>
                  setFilter((pre) => ({
                    ...pre,
                    filterPrice: e.target.value,
                  }))
                }
              />
              <span className="checkmark"></span>
              <span className="text-sm">2.000.000đ - 3.000.000đ </span>
            </label>
          </li>
          <li>
            <label
              htmlFor="price4"
              className="checkbox_brand flex items-center my-3"
            >
              <input
                type="radio"
                name="radio3"
                id="price4"
                value={"3m-5m"}
                onClick={(e) =>
                  setFilter((pre) => ({
                    ...pre,
                    filterPrice: e.target.value,
                  }))
                }
              />
              <span className="checkmark"></span>
              <span className="text-sm"> 3.000.000đ - 5.000.000đ </span>
            </label>
          </li>
          <li>
            <label
              htmlFor="price5"
              className="checkbox_brand flex items-center my-3"
            >
              <input
                type="radio"
                name="radio3"
                id="price5"
                value={"5m-10m"}
                onClick={(e) =>
                  setFilter((pre) => ({
                    ...pre,
                    filterPrice: e.target.value,
                  }))
                }
              />
              <span className="checkmark"></span>
              <span className="text-sm">5.000.000đ - 10.000.000đ</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="price6"
              className="checkbox_brand flex items-center my-3"
            >
              <input
                type="radio"
                name="radio3"
                id="price6"
                value={"10m-20m"}
                onClick={(e) =>
                  setFilter((pre) => ({
                    ...pre,
                    filterPrice: e.target.value,
                  }))
                }
              />
              <span className="checkmark"></span>
              <span className="text-sm">10.000.000đ - 20.000.000đ </span>
            </label>
          </li>
          <li>
            <label
              htmlFor="price8"
              className="checkbox_brand flex items-center my-3"
            >
              <input
                type="radio"
                name="radio3"
                id="price8"
                value={"max"}
                onClick={(e) =>
                  setFilter((pre) => ({
                    ...pre,
                    filterPrice: e.target.value,
                  }))
                }
              />
              <span className="checkmark"></span>
              <span className="text-sm">Giá trên 20.000.000đ </span>
            </label>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

const Item = ({ item, filter, setFilter }) => {
  return (
    <li key={item.id}>
      <label
        htmlFor={item.id}
        className="checkbox_brand flex items-center my-3"
      >
        <input
          type="radio"
          name="radio2"
          id={item.id}
          hidden
          value={item.id}
          onClick={(e) =>
            setFilter((pre) => ({
              ...pre,
              filterCollection: e.target.value,
            }))
          }
          checked={filter.filterCollection == item.id}
        />
        <span className="checkmark"></span>
        <span className="text-sm ">{item.name}</span>
      </label>
    </li>
  );
};

export default SideBar;
