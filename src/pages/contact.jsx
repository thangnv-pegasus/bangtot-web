import { useRef } from "react";
import Layout from "../components/layout";
import TitlePage from "../components/page-title";
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const contentRef = useRef();

  const showToastSuccess = () => {
    toast.success('Cảm ơn bạn đã đóng góp!')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    showToastSuccess()
  }

  return (
    <Layout>
      <div className="mx-auto lg:max-w-[1000px] md:max-w-[760px] px-10 max-w-full md:px-0 xl:max-w-container">
        <div className="grid lg:grid-cols-4_6_2 md:gap-x-5 lg:gap-x-10 py-10">
          <div className="order-2 md:order-1">
            <TitlePage
              title="Nơi giải đáp thắc mắc của bạn"
              classes="text-xl font-medium"
            />
            <p>
              Với sứ mệnh "Khách hàng là ưu tiên số 1" chúng tôi luôn mạng lại
              giá trị tốt nhất
            </p>
            <div className="grid grid-cols-2 gap-5 py-5">
              <div className="flex items-center">
                <div className="text-xl border-[1px] border-solid border-baseColor text-baseColor w-10 h-10 leading-10 flex items-center justify-center rounded-full">
                  <IoLocationOutline className="w-5" />
                </div>
                <div className="px-2 text-sm">
                  <h3 className="font-medium">Địa chỉ</h3>
                  <p className="">70 Lữ Gia, Phường 15, Quận 11, TP.HCM</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-xl border-[1px] border-solid border-baseColor text-baseColor w-10 h-10 leading-10 flex items-center justify-center rounded-full">
                  <GoClock />
                </div>
                <div className="px-2 text-sm">
                  <h3 className="font-medium">Thời gian làm việc</h3>
                  <p className="">8h - 22h từ thứ 2 đến chủ nhật</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-xl border-[1px] border-solid border-baseColor text-baseColor w-10 h-10 leading-10 flex items-center justify-center rounded-full">
                  <MdOutlinePhoneInTalk />
                </div>
                <div className="px-2 text-sm">
                  <h3 className="font-medium">Hotline</h3>
                  <p className="">
                    <a href="tel:1900 6750" className="hover:text-baseColor">
                      1900 6750
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-xl border-[1px] border-solid border-baseColor text-baseColor w-10 h-10 leading-10 flex items-center justify-center rounded-full">
                  <FaRegEnvelope />
                </div>
                <div className="px-2 text-sm">
                  <h3 className="font-medium">Email</h3>
                  <p className="">
                    <a href="mailto:support@sapo.vn">support@sapo.vn</a>
                  </p>
                </div>
              </div>
            </div>

            <TitlePage
              title="Liên hệ với chúng tôi"
              classes="text-xl uppercase font-medium pt-5 pb-2"
            />
            <p className="text-sm">
              Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng
              tôi sẽ liên lạc lại với bạn sớm nhất có thể .
            </p>
            <form action="" method="post" className="block text-sm" onSubmit={(e) => handleSubmit(e)}>
              <div className="my-4">
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Họ và tên"
                  className="w-full block py-2 px-4 outline-none outline-0 border-[1px] border-solid border-gray-500 rounded-md"
                  ref={nameRef}
                />
              </div>
              <div className="my-4">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                  className="w-full block py-2 px-4 outline-none outline-0 border-[1px] border-solid border-gray-500 rounded-md"
                  ref={emailRef}
                />
              </div>
              <div className="my-4">
                <input
                  type="tel"
                  name="phone"
                  id=""
                  placeholder="Số điện thoại"
                  className="w-full block py-2 px-4 outline-none outline-0 border-[1px] border-solid border-gray-500 rounded-md"
                  ref={phoneRef}
                />
              </div>
              <div className="my-4">
                <textarea
                  name="content"
                  id=""
                  placeholder="Nội dung"
                  className="w-full block py-2 px-4 min-h-[120px] outline-none outline-0 border-[1px] border-solid border-gray-500 rounded-md"
                  ref={contentRef}
                />
              </div>
              <button type="submit" className="bg-baseColor text-white px-4 py-2 rounded-md transition-all ease-linear hover:bg-baseBg">Gửi thông tin</button>
            </form>
          </div>

          {/* gg map */}
          <div className="order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.880392196023!2d105.7807929747147!3d21.03747128748032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab355cc2239b%3A0x9ae247114fb38da3!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBTxrAgUGjhuqFtIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1709244114561!5m2!1svi!2s"
              className="border-0 h-[700px] w-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Contact;
