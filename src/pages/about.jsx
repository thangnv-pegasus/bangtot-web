import Layout from "../components/layout";
import TitlePage from "../components/page-title";

const About = () => {
  return (
    <Layout>
      <div className="max-w-container mx-auto">
        <TitlePage
          title="BANGDEP.VN CHUYÊN GIA SẢN XUẤT CÁC LOẠI BẢNG :"
          classes="font-semibold text-baseColor"
        />
        <ul className="list-disc pl-4">
          <li className="text-base my-2">bảng từ trắng,</li>
          <li className="text-base my-2">Bảng từ xanh chống lóa dạy học</li>
          <li className="text-base my-2">Bảng di động</li>
          <li className="text-base my-2">Bảng flipchart</li>
          <li className="text-base my-2">Bảng trượt ngang</li>
          <li className="text-base my-2">Bảng cột trượt lên xuống</li>
          <li className="text-base my-2">Bảng kính cho văn phòng</li>
          <li className="text-base my-2">Bàn ghế học sinh chất lượng cao</li>
          <li className="text-base my-2">
            Bàn ghế tiểu học chống gù chống cận chất lượng cao
          </li>
          <li className="text-base my-2">
            Với đội ngũ trên 10 năm kinh nghiệm trong lĩnh vực sản xuất kinh
            doanh các sản phẩm phụ vụ dạy học tại các trường học, trung tâm
            ngoại ngữ, gia đình…. Hàng tháng bangdep.vn đã phục vụ hàng nghìn
            lượt khách hàng trên toàn cuốc trải dài khắp mọi miền của tổ quốc từ
            bắc vào nam.
          </li>
        </ul>

        <h2 className="text-center py-4 text-xl text-baseColor font-bold">
          BANGTOT.VN VỚI PHƯƠNG CHÂM KINH DOANH :
          <br />” KHÔNG CHỈ TỐT MÀ CÒN LUÔN TỐT HƠN ”
        </h2>
        <p className="text-lg font-medium py-2">
          Chúng tôi luôn luôn cải tiến liên lục nhằm nâng cao :
        </p>
        <ul className="list-disc pl-4">
          <li className="my-2 text-base">
            Sản phẩm liên tục cải tiến chất lượng, mẫu mã sản phẩm đa dạng phù
            hợp với nhu cầu của khách hàng nhằm giúp khách hàng sử dụng hữu ích
            hơn.
          </li>
          <li className="my-2 text-base">
            {" "}
            Dịch vụ bán hàng luôn hỗ trợ khách hàng một cách tốt hơn mong đợi.
          </li>
          <li className="my-2 text-base">
            Dịch vụ vận chuyển lắp đặt luôn cải tiến tốt hơn, nhanh hơn
          </li>
          <li className="my-2 text-base">
            Giá cả sản phẩm luôn cải phù hợp với chất lượng sản phẩm.
          </li>
          <li className="my-2 text-base">
            Đối với nhà cung cấp chúng tôi luôn là khách hàng uy tín và hỗ trợ
            đắc lực, hợp tác cùng phát triển
          </li>
          <li className="my-2 text-base">
            Đối với khách hàng luôn luôn tận tâm phục vụ, hợp tác cùng phát
            triển.
          </li>
          <li className="my-2 text-base">
            Đối với cán bộ công nhân viên luôn phấn đấu có chế độ đãi nghộ tốt
            hơn từng ngày
          </li>
          <li className="my-2 text-base">
            Đối với nhà nước luôn luôn phấn đấu kiên quyết thực hiện tốt nhất
            chính sách pháp luật của nhà nươc.
          </li>
        </ul>

        <p className="uppercase text-xl font-medium text-baseColor py-2">
          CHÍNH SÁCH CHẤT LƯỢNG{" "}
        </p>
        <p>
          ” Cải tiến liên tục nâng cao chất lượng sản phẩm, dịch vụ nhằm thỏa
          mãn tốt nhất trải nghiệm của khách hàng”
        </p>

        <h2 className="text-xl font-semibold text-baseColor uppercase pt-4 pb-2">
          SỨ MỆNH BANGDEP.VN{" "}
        </h2>
        <p>
          bangdep.vn Trở thành nhà cung cấp đáng uy tín, chất lượng, dịch vụ tốt
          nhất là sự lựa chọn tốt nhất cho các văn phòng, trường học bênh viện,
          nhà hàng về bảng từ, bảng trắng, bảng từ xanh chống lóa, bảng ghim,
          bảng kính, bảng di động. bảng flipchart, bàn ghế học sinh tiểu học,
          bàn ghế học sinh học ở nhà chống gù, chống cận…..mang hàng triệu sản
          phẩm bảng mỗi năm cho người tiêu dùng việt nam và thế giới.
        </p>

        <p className="mt-4">
          Để được tư vấn và hỗ trợ tốt nhất quý khách vui lòng liên hệ với
          bangtot.vn
        </p>
      </div>
    </Layout>
  );
};

export default About;
