import { Link } from "react-router-dom";
import LayoutAdmin from "../../components/layout/admin";
import routers from "../../config/router";
import TitlePage from "../../components/page-title";
import TextEditor from "../../components/text-editor";
import { useRef, useState } from "react";
import instance from "../../axios/config";
import uploadImage from "../../upload";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/loading/spinner";

const NewPost = () => {
  const titleRef = useRef();
  const contentRef = useRef();
  const fileRef = useRef();
  const [loading, setLoading] = useState(null);

  const showToastSuccess = () => {
    toast.success("Tạo bài đăng thành công!");
  };

  const showToastError = () => {
    toast.error("Tạo bài đăng thất bại!");
  };

  const createPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const file = fileRef.current.files[0];

      const image = await uploadImage(file, "blogs");

      const { data } = await instance.post(
        "admin/new-post",
        {
          title: titleRef.current.value,
          content: contentRef.current.value,
          imageUrl: image.url,
          publicId: image.publicId,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(data);
      titleRef.current.value = "";
      contentRef.current.value = "";
      fileRef.current.file = ""
      showToastSuccess();
    } catch (e) {
      console.log(e);
      showToastError();
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutAdmin>
      <Link
        to={routers.manageBlogs}
        className="block w-20 text-center py-[6px] mb-5 text-white rounded-md bg-sky-600"
      >
        Trở lại
      </Link>
      <TitlePage
        title="Tạo bài đăng mới"
        classes="text-lg font-medium uppercase"
      />
      <form
        action=""
        method="post"
        className="block mt-4"
        encType="multipart/form-data"
        onSubmit={(e) => createPost(e)}
      >
        <div className="py-2 text-sm">
          <label htmlFor="title" className=" block pb-2">
            Tiêu đề bài đăng
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Tiêu đề bài đăng"
            className="block w-full text-sm px-2 border-[1px] border-solid border-gray-500 rounded-md py-2 outline-none"
            ref={titleRef}
          />
        </div>
        <div className="py-2 text-sm">
          <label htmlFor="image" className=" block pb-2">
            Ảnh bài đăng
          </label>
          <input
            type="file"
            name="image"
            id="image"
            placeholder="Tiêu đề bài đăng"
            className="block w-full text-sm px-2 border-[1px] border-solid border-gray-500 rounded-md py-2 outline-none"
            ref={fileRef}
          />
        </div>
        <div className="text-sm py-2">
          <label className=" block pb-2">Nội dung bài đăng</label>
          <TextEditor contentRef={contentRef} />
        </div>

        <button
          type="submit"
          className="bg-baseColor text-white px-5 py-2 text-sm mt-5 rounded-sm uppercase"
        >
          Đăng bài
        </button>
      </form>
      {loading === false && <ToastContainer />}
      {loading === true && <LoadingSpinner />}
    </LayoutAdmin>
  );
};

export default NewPost;
