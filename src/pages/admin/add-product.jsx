import { Link } from "react-router-dom";
import LayoutAdmin from "../../components/layout/admin";
import routers from "../../config/router";
import ReactQuill from "react-quill";
import { useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import instance from "../../axios/config";
import LoadingDots from "../../components/loading/dot";
import uploadImage from "../../upload";
const AddProduct = () => {
  // input ref
  const descriptionRef = useRef();
  const detailRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const pricesaleRef = useRef();
  const imageRef = useRef();
  const collectionRef = useRef();

  // state
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await instance.get("/show-collection", {
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    setCollections(response.data.collections);
    setLoading(false);
  };

  const upload = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const price_sale = pricesaleRef.current.value;
    const description = descriptionRef.current.value;
    const detail = detailRef.current.value;
    const collectionId = collectionRef.current.value;
    const images = imageRef.current.files;
    const response2 = await instance.get("/last-product", {
      method: "get",
    });
    const idLastest = response2.data.id;

    try{
        let arr = []
        for(let i =0;i<images.length;i++){
            const data = await uploadImage(images[i],`product/product_${idLastest+1}`)
            arr.push(data)
        }
        setLinks(arr)
    }catch(error){
        console.log(error)
    }

console.log(images[0])
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LayoutAdmin>
      {loading && (
        <>
          <LoadingDots />
        </>
      )}
      <Link
        to={routers.manageProduct}
        className="inline-block bg-sky-500 text-white px-4 py-1 rounded-sm mb-5"
      >
        Trở lại
      </Link>
      <form action="" method="post" onSubmit={(e) => upload(e)}>
        <div className="my-2">
          <label
            for="helper-text"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nhập tên sản phẩm
          </label>
          <input
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="tên sản phẩm"
            ref={nameRef}
          />
        </div>
        <div className="py-4">
          <label for="" className="block my-2 text-sm font-medium">
            Nhập mô tả sản phẩm
          </label>
          <ReactQuill
            ref={descriptionRef}
            theme="snow"
            placeholder="Nhập mô tả sản phẩm"
            modules={{
              toolbar: {
                container: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  //   [
                  //     { align: "" },
                  //     { align: "center" },
                  //     { align: "right" },
                  //     { align: "justify" },
                  //   ],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  //   ["link", "image", "video"],
                  ["code-block"],
                  ["clean"],
                  [
                    {
                      color: [
                        "#000000",
                        "#e60000",
                        "#ff9900",
                        "#ffff00",
                        "#008a00",
                        "#0066cc",
                        "#9933ff",
                        "#ffffff",
                        "#facccc",
                        "#ffebcc",
                        "#ffffcc",
                        "#cce8cc",
                        "#cce0f5",
                        "#ebd6ff",
                        "#bbbbbb",
                        "#f06666",
                        "#ffc266",
                        "#ffff66",
                        "#66b966",
                        "#66a3e0",
                        "#c285ff",
                        "#888888",
                        "#a10000",
                        "#b26b00",
                        "#b2b200",
                        "#006100",
                        "#0047b2",
                        "#6b24b2",
                        "#444444",
                        "#5c0000",
                        "#663d00",
                        "#666600",
                        "#003700",
                        "#002966",
                        "#3d1466",
                        "custom-color",
                      ],
                    },
                  ],
                ],
              },
              clipboard: {
                matchVisual: false,
              },
            }}
            formats={[
              "header",
              "font",
              "size",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "list",
              "bullet",
              "indent",
              "link",
              "image",
              "video",
              "code-block",
            ]}
          />
        </div>
        <div className="py-4">
          <label for="" className="block my-2 text-sm font-medium">
            Nhập thông tin chi tiết sản phẩm
          </label>
          <ReactQuill
            ref={detailRef}
            theme="snow"
            placeholder="Nhập thông tin chi tiết sản phẩm"
            modules={{
              toolbar: {
                container: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  //   [
                  //     { align: "" },
                  //     { align: "center" },
                  //     { align: "right" },
                  //     { align: "justify" },
                  //   ],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  //   ["link", "image", "video"],
                  ["code-block"],
                  ["clean"],
                  [
                    {
                      color: [
                        "#000000",
                        "#e60000",
                        "#ff9900",
                        "#ffff00",
                        "#008a00",
                        "#0066cc",
                        "#9933ff",
                        "#ffffff",
                        "#facccc",
                        "#ffebcc",
                        "#ffffcc",
                        "#cce8cc",
                        "#cce0f5",
                        "#ebd6ff",
                        "#bbbbbb",
                        "#f06666",
                        "#ffc266",
                        "#ffff66",
                        "#66b966",
                        "#66a3e0",
                        "#c285ff",
                        "#888888",
                        "#a10000",
                        "#b26b00",
                        "#b2b200",
                        "#006100",
                        "#0047b2",
                        "#6b24b2",
                        "#444444",
                        "#5c0000",
                        "#663d00",
                        "#666600",
                        "#003700",
                        "#002966",
                        "#3d1466",
                        "custom-color",
                      ],
                    },
                  ],
                ],
              },
              clipboard: {
                matchVisual: false,
              },
            }}
            formats={[
              "header",
              "font",
              "size",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "list",
              "bullet",
              "indent",
              "link",
              "image",
              "video",
              "code-block",
            ]}
          />
        </div>
        <div className="py-4">
          <label
            for="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nhập giá sản phẩm(VNĐ)
          </label>
          <input
            type="text"
            id="price"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="tên giá sản phẩm"
            ref={priceRef}
          />
        </div>
        <div className="py-2">
          <label
            for="price_sale"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nhập giá giảm sản phẩm(VNĐ)
          </label>
          <input
            type="text"
            id="price_sale"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="tên giá sản phẩm"
            ref={pricesaleRef}
          />
        </div>
        <div className="my-2">
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            for="multiple_files"
          >
            Thêm ảnh cho sản phẩm
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 py-2"
            id="multiple_files"
            type="file"
            multiple
            ref={imageRef}
          />
        </div>
        <div className="py-4">
          <label
            for="countries"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Chọn tên bộ sưu tập
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            defaultValue={1}
            ref={collectionRef}
          >
            <option selected defaultValue={1}>
              Chọn bộ sưu tập
            </option>
            {collections.map((item, index) => {
              return (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-baseColor text-white rounded-sm"
        >
          Lưu sản phẩm
        </button>
      </form>
      {
        links && links.length > 0 && links.map((link, item) => {
            return (
                <div>
                    <p>publicId: link?.publicId</p>
                    <p>url: link?.url</p>
                    <img src={link?.url} width={100} alt="" />
                </div>
            )
        })
      }
    </LayoutAdmin>
  );
};

export default AddProduct;
