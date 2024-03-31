import { useEffect, useRef, useState } from "react";
import Revenue from "../../components/chart/revenue";
import LayoutAdmin from "../../components/layout/admin";
import TitlePage from "../../components/page-title";
import instance from "../../axios/config";
import FormHotline from "../../components/modal/create-hotline";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { BsTrash3 } from "react-icons/bs";
import PhoneInfor from "../../components/other/phone-infor";
import CreateBanner from "../../components/modal/create-banner";
import CreateCollection from "../../components/modal/create-collection";

const Dashboard = () => {
  const [hotlines, setHotlines] = useState([]);
  const [formHotlineStatus, setFormHotlineStatus] = useState(false);
  const [formCreateBanner, setFormCreateBanner] = useState(false);
  const [formCreateCollection, setFormCreateCollection] = useState(false);
  const [banner, setBanner] = useState([]);
  const [collections, setCollections] = useState([]);

  const getData = async () => {
    const { data } = await instance.get("admin/dashboard", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log(data);

    setHotlines(data.phone);
    setBanner(data.banner);
    setCollections(data.collections);
  };

  const handleDelete = async (id) => {
    const { data } = await instance.delete(`admin/delete-banner/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(data);

    if (data.status == 200) {
      setBanner(data.banner);
    }
  };

  

  useEffect(() => {
    getData();
  }, []);

  return (
    <LayoutAdmin>
      <Revenue
        labelType="day"
        data={[200, 300, 400]}
        name="Doanh thu tháng 1"
      />

      {/* hotline page */}
      <div className="py-5">
        <div className="flex items-center justify-between">
          <TitlePage
            title="Các số điện thoại liên hệ cửa hàng"
            classes="text-lg font-medium uppercase"
          />
          <button
            className="block text-sm underline text-baseColor"
            onClick={() => setFormHotlineStatus(true)}
          >
            Thêm mới
          </button>
        </div>
        <div className="">
          {hotlines.length > 0 &&
            hotlines.map((item, index) => {
              return (
                <PhoneInfor
                  phone={item}
                  key={index}
                  setHotlines={setHotlines}
                />
              );
            })}
        </div>
      </div>
      {formHotlineStatus === true && (
        <FormHotline open={true} setOpen={setFormHotlineStatus} />
      )}

      {/* slider */}
      <div className="py-5">
        <div className="flex items-center justify-between">
          <TitlePage
            title="Danh sách ảnh banner"
            classes="text-lg font-medium uppercase"
          />
          <button
            className="block text-sm underline text-baseColor"
            onClick={() => setFormCreateBanner(true)}
          >
            Thêm mới
          </button>
        </div>
        <div className="mt-4">
          <PhotoProvider className="flex">
            <div className="flex items-center flex-wrap">
              {banner.map((item, index) => {
                return (
                  <div className="p-3 shadow-lg mr-4 mb-4" key={index}>
                    <PhotoView src={item.url}>
                      <img
                        src={item.url}
                        alt=""
                        className="w-60 h-auto block"
                      />
                    </PhotoView>
                    <button
                      className="block text-lg text-center mx-auto mt-2"
                      title="Xóa"
                      onClick={() => handleDelete(item.id)}
                    >
                      <BsTrash3 />
                    </button>
                  </div>
                );
              })}
            </div>
          </PhotoProvider>
        </div>
      </div>
      {formCreateBanner === true && (
        <CreateBanner setOpen={setFormCreateBanner} setBanner={setBanner} />
      )}

      <div className="py-5">
        <div className="flex items-center justify-between mb-2">
          <TitlePage
            title="Danh sách bộ sưu tập"
            classes="text-lg font-medium uppercase"
          />
          <button
            className="block text-sm underline text-baseColor"
            onClick={() => setFormCreateCollection(true)}
          >
            Thêm mới
          </button>
        </div>
        {collections.map((item, index) => {
          return (
            <Item item={item} key={index} setCollections={setCollections} />
          );
        })}
      </div>
      {formCreateCollection === true && (
        <CreateCollection setOpen={setFormCreateCollection} />
      )}
    </LayoutAdmin>
  );
};

const Item = ({ item, setCollections }) => {
  const handleDeleteCollection = async () => {
    const { data } = await instance.delete(
      `admin/delete-collection/${item.id}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    if (data.status == 200) {
      setCollections(data.collections);
    }
    console.log(data)
  };

  return (
    <div
      className="flex items-center justify-between pb-2 mb-4 border-b-[1px] border-solid border-gray-300"
      key={item.id}
    >
      <p>{item.name}</p>
      <button
        className="px-2 py-1"
        onClick={() => handleDeleteCollection(item.id)}
      >
        <BsTrash3 />
      </button>
    </div>
  );
};

export default Dashboard;
