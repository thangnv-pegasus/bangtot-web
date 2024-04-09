import { IoMdClose } from "react-icons/io";
import SizeItem from "../size/item";
import { useEffect, useRef, useState } from "react";
import instance from "../../axios/config";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import uploadImage from "../../upload";

const UpdateProduct = ({ setOpen, idProduct = 1, setProducts }) => {
  const descriptionRef = useRef();
  const detailRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const pricesaleRef = useRef();
  const imageRef = useRef();
  const collectionRef = useRef();

  // state
  const [product, setProduct] = useState({});
  const [collections, setCollections] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [listChecked, setListChecked] = useState([]);
  const [sizeProduct, setSizeProduct] = useState([]);
  console.log(listChecked)

  const fetchData = async () => {
    const { data } = await instance.get(`admin/update-data/${idProduct}`, {
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setCollections(data.collections);
    setSizes(data.sizes);
    setProduct(data.product);
    setSizeProduct(data.size_product);
  };
  const handleChange = (e) => {
    const { value, checked, id } = e.target;
    // Case 1 : The user checks the box
    if (checked) {
      setListChecked([
        ...listChecked,
        {
          id,
          value,
        },
      ]);
    }
    // Case 2  : The user unchecks the box
    else {
      setListChecked(listChecked.filter((e) => e.id !== id));
    }
  };

  const handleDefaultCheck = (id) => {
    let check = false;
    sizeProduct.forEach((item) => {
      if (item.id === id) {
        check = true;
      }
    });
    return check;
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const images = imageRef.current.files;
    let arr = [];
    for (let i = 0; i < images.length; i++) {
      const data = await uploadImage(images[i]);
      arr.push(data);
    }
    const { data } = await instance.patch(
      `admin/update-product/${idProduct}`,
      {
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        detail: detailRef.current.value,
        price: priceRef.current.value,
        price_sale: pricesaleRef.current.value,
        sizes: listChecked,
        collectionId: collectionRef.current.value,
        image: arr,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    setProducts(data.products.data)
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 justify-center items-center flex bg-[rgba(0,0,0,0.4)] py-10 z-20">
      <div className="w-4/5 max-w-full min-h-20 bg-white relative rounded-md overflow-hidden p-5 max-h-screen overflow-y-auto">
        <button
          type="button"
          className="absolute top-0 right-0 p-2 text-lg transition-all ease-linear hover:bg-baseColor hover:text-white"
          onClick={() => setOpen(false)}
        >
          <IoMdClose />
        </button>
        <h2 className="py-2 text-center font-medium uppercase">
          Cập nhật thông tin sản phẩm
        </h2>
        <form
          action=""
          method="post"
          onSubmit={(e) => updateProduct(e)}
          encType="multipart/form-data"
          className="block"
        >
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
              defaultValue={product.name}
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
              defaultValue={
                <div
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              }
              modules={{
                toolbar: {
                  container: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ size: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { align: "" },
                      { align: "center" },
                      { align: "right" },
                      { align: "justify" },
                    ],
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
                "color",
                "bullet",
                "indent",
                "link",
                "align",
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
                    [
                      { align: "" },
                      { align: "center" },
                      { align: "right" },
                      { align: "justify" },
                    ],
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
                "color",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "align",
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
              defaultValue={product.price}
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
              defaultValue={product.price_sale || ""}
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
                  <option
                    value={item.id}
                    key={index}
                    selected={item.id === product.collection_id}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="my-2">
            <div className="flex justify-between pb-2">
              <label
                for=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Chọn kích cỡ sản phẩm
              </label>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {sizes.map((item, index) => {
                return (
                  <SizeItem
                    size={item}
                    key={index}
                    handleCheck={handleChange}
                    setSizes={setSizes}
                    check={handleDefaultCheck(item.id)}
                  />
                );
              })}
            </div>
          </div>
          <button
            type="submit"
            className="px-5 py-2 bg-baseColor text-white rounded-sm"
          >
            Lưu sản phẩm
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
