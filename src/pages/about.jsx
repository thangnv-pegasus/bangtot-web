import { useEffect } from "react";
import Layout from "../components/layout";
import TitlePage from "../components/page-title";
import about1 from "../logo/about1.png";
import about2 from "../logo/about2.png";
import about3 from "../logo/about3.png";
import about4 from "../logo/about4.jpg";
import about5 from "../logo/about5.jpg";
import {Helmet} from "react-helmet";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Về chúng tôi</title>
                <meta name="description" content="Giới thiệu về chúng tôi" />
            </Helmet>
      <div className="lg:max-w-[1000px] md:max-w-[760px] px-10 max-w-full md:px-0 xl:max-w-container mx-auto">
        <TitlePage
          title="Chào mừng đến với bàn ghế hoa mai"
          classes="font-semibold text-baseColor"
        />
        <p className="">
          Chào mừng bạn đến với doanh nghiệp chúng tôi - nhà cung cấp hàng đầu
          các loại bàn học cho học sinh, sinh viên và giáo viên. Với nhiều năm
          kinh nghiệm trong ngành, chúng tôi tự hào mang đến cho khách hàng
          những sản phẩm chất lượng, thiết kế đẹp mắt và phù hợp với mọi nhu cầu
          học tập...
        </p>

        <h2 className="text-center pt-4 pb-2 text-xl text-baseColor font-bold">
          BANGHEHOAMAI.COM VỚI PHƯƠNG CHÂM KINH DOANH :
          <br />” KHÔNG CHỈ TỐT MÀ CÒN LUÔN TỐT HƠN ”
        </h2>
        <p className="uppercase text-xl font-medium text-baseColor py-2">
          CHÍNH SÁCH CHẤT LƯỢNG{" "}
        </p>
        <p>
          Tất cả các sản phẩm của chúng tôi được làm từ các vật liệu chất lượng
          như gỗ, thép không gỉ, đảm bảo độ bền và sự ổn định. Mặt bàn bằng gỗ
          công nghiệp/ gỗ tự nhiên được gia công nhẵn mịn, có các đường nét bo
          tròn (tránh việc để các cạnh sắc nhọn có thể làm bị thương trẻ khi sử
          dụng), khung bàn làm bằng sắt sơn tĩnh điện nâng đỡ bàn chắc chắn, có
          khả năng chống ẩm mốc, mối mọt.
        </p>
        <p className="py-2">
          Chúng tôi cung cấp các loại bàn học đa dạng để đáp ứng nhu cầu của
          từng đối tượng khách hàng. Đối với học sinh tiểu học, chúng tôi cung
          cấp bàn học nhỏ gọn và dễ dàng di chuyển, có thể phù hợp với mục đích
          nghỉ ngơi bán trú của một số trường.Đối với học sinh trung học và sinh
          viên, chúng tôi có các loại bàn học có kích thước lớn hơn,còn đối với
          giáo viên, chúng tôi cung cấp các loại bàn giáo viên chuyên nghiệp,
          với không gian rộng rãi để lưu trữ tài liệu và tiện ích
        </p>
        <div className="grid grid-cols-3 gap-x-10 pt-4">
          <div>
            <div className="w-full h-auto border-[1px] border-solid border-gray-300 overflow-hidden rounded-md">
              <img
                src={about1}
                alt="about page"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-sm text-center">Bàn học sinh </p>
          </div>
          <div>
            <div className="w-full h-auto border-[1px] border-solid border-gray-300 overflow-hidden rounded-md">
              <img
                src={about2}
                alt="about page"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-sm text-center">Bàn bán trú </p>
          </div>
          <div>
            <div className="w-full h-auto border-[1px] border-solid border-gray-300 overflow-hidden rounded-md">
              <img
                src={about3}
                alt="about page"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-sm text-center">Bàn gíao viên </p>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-baseColor uppercase pt-4 pb-2">
          Chúng tôi luôn luôn cải tiến liên lục nhằm nâng cao:
        </h2>
        <ul className="list-disc ml-4">
          <li>
            Sản phẩm liên tục cải tiến chất lượng, mẫu mã sản phẩm đa dạng phù
            hợp với nhu cầu của khách hàng nhằm giúp khách hàng sử dụng hữu ích
            hơn.
          </li>
          <li>
            Dịch vụ bán hàng luôn hỗ trợ khách hàng một cách tốt hơn mong đợi.
          </li>
          <li>Dịch vụ vận chuyển lắp đặt luôn cải tiến tốt hơn, nhanh hơn</li>
          <li>Giá cả sản phẩm luôn cải phù hợp với chất lượng sản phẩm.</li>
          <li>
            Đối với nhà cung cấp chúng tôi luôn là khách hàng uy tín và hỗ trợ
            đắc lực, hợp tác cùng phát triển
          </li>
          <li>
            Đối với khách hàng luôn luôn tận tâm phục vụ, hợp tác cùng phát
            triển.
          </li>
          <li>
            Đối với cán bộ công nhân viên luôn phấn đấu có chế độ đãi nghộ tốt
            hơn từng ngày
          </li>
          <li>
            Đối với nhà nước luôn luôn phấn đấu kiên quyết thực hiện tốt nhất
            chính sách pháp luật của nhà nươc.
          </li>
        </ul>
        <div className="px-20 py-10">
          <img
            src={about4}
            alt="Ảnh about page"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-xl font-semibold text-baseColor uppercase pt-4">
          Sứ mệnh của chúng tôi:
        </h2>
        <p className="pt-2">
          Với sứ mệnh tạo ra một môi trường học tập thoải mái và hiệu quả, chúng
          tôi cam kết cung cấp bàn học chất lượng cao và đáng tin cậy.{" "}
        </p>
        <div className="px-20 py-10">
          <img
            src={about5}
            alt="Ảnh about page"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <p>
          Hãy đến với chúng tôi để trải nghiệm những sản phẩm bàn học tốt nhất
          trên thị trường. Chúng tôi tin rằng sự chăm sóc đến từ chiếc bàn học
          chất lượng sẽ giúp bạn và con em bạn có một môi trường học tập tốt
          nhất, đồng thời tạo ra những nguồn lực cho sự phát triển tương lai.
          Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn và đặt hàng!
        </p>
      </div>
    </Layout>
  );
};

export default About;
