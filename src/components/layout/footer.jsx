import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SocialItem from "./social-item";

const socials = [
  {
    path: "",
    name: "facebook",
  },
  {
    path: "",
    name: "instagram",
  },
  {
    path: "",
    name: "twiter",
  },
  {
    path: "",
    name: "youtube",
  },
];

const Footer = () => {
  return (
    <div className="min-h-[200px] bg-[#f4f2e9] text-black">
      <div className="md:max-w-[760px] px-10 md:px-0 max-w-full lg:max-w-[1000px] xl:max-w-container mx-auto py-8">
        <div className="grid xl:grid-cols-4 xl:gap-3 grid-cols-2 md:gap-4 gap-2">
          <div>
            <h1 className="text-lg uppercase font-semibold mb-2">Bảng Đẹp</h1>
            <ul className="text-sm">
              <li className="py-1 my-1">
                Với sứ mệnh "Khách hàng là ưu tiên số 1" chúng tôi luôn mạng lại
                giá trị tốt nhất
              </li>
              <li className="py-1 my-1 flex">
                <span className="text-baseColor text-base mr-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                Địa chỉ: 70 Lữ Gia, Phường 15, Quận 11, TP.HCM
              </li>
              <li className="py-1 my-1 flex items-center">
                <span className="text-base mr-2 text-baseColor">
                  <FontAwesomeIcon icon={faMobileScreen} />
                </span>
                Điện thoại:{" "}
                <a
                  href="tel: 1900 6750"
                  className="transition-all ease-linear hover:text-baseColor"
                >
                  1900 6750
                </a>
              </li>
              <li className="py-1 my-1 flex">
                <span className="text-base mr-2 text-baseColor">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                Email:{" "}
                <a
                  href="mailto: bangdep@gmail.com"
                  className="transition-all ease-linear hover:text-baseColor"
                >
                  bangdep@gmail.com
                </a>
              </li>
              <li className="py-1 my-1 flex items-center">
                {socials.map((item, index) => {
                  return (
                    <SocialItem path={item.path} name={item.name} key={index} />
                  );
                })}
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg uppercase font-semibold mb-2">
              Hỗ trợ khách hàng
            </h1>
            <div className="text-sm">
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Chính sách đổi trả
              </Link>
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Chính sách bảo hành sản phẩm
              </Link>
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Hướng dẫn mua hàng
              </Link>
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Hỗ trợ thông tin nhà xe các tỉnh
              </Link>
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Chính Sách Tặng Phụ Kiện
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-lg uppercase font-semibold mb-2">
              Hỗ trợ khách hàng
            </h1>
            <div className="text-sm">
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Chính sách đổi trả
              </Link>
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Chính sách bảo hành sản phẩm
              </Link>
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Hướng dẫn mua hàng
              </Link>
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Hỗ trợ thông tin nhà xe các tỉnh
              </Link>
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Chính Sách Tặng Phụ Kiện
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-lg uppercase font-semibold mb-2">
              Hỗ trợ khách hàng
            </h1>
            <div className="text-sm">
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Chính sách đổi trả
              </Link>
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Chính sách bảo hành sản phẩm
              </Link>
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Hướng dẫn mua hàng
              </Link>
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Hỗ trợ thông tin nhà xe các tỉnh
              </Link>
              <Link
                to=""
                className="py-1 my-1 block transition-all ease-linear hover:text-baseColor"
              >
                Chính Sách Tặng Phụ Kiện
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-solid border-t-2 border-baseColor text-center py-4 text-black font-medium">
        © Bản quyền thuộc về Mr. PlayBi | Cung cấp bởi PlayBi
      </div>
    </div>
  );
};

export default Footer;
