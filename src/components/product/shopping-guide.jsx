const Guide = () => {
  return (
    <ul className="pt-5 leading-9">
      <li>
        <b>Bước 1:</b> Truy cập website và lựa chọn sản phẩm cần mua
      </li>
      <li>
        <b>Bước 2:</b> Click và sản phẩm muốn mua, màn hình hiển thị ra pop up
        với các lựa chọn sau
        <ul>
          <li>
            Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để
            lựa chọn thêm sản phẩm vào giỏ hàng
          </li>
          <li>
            Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng
          </li>
          <li>
            Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm
            vào: Đặt hàng và thanh toán
          </li>
        </ul>
      </li>
      <li>
        <b>Bước 3:</b> Lựa chọn thông tin tài khoản thanh toán
        <ul>
          <li>
            Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là
            email và mật khẩu vào mục đã có tài khoản trên hệ thống
          </li>
          <li>
            Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền
            các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có tài
            khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình
          </li>
          <li>
            Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào
            mục đặt hàng không cần tài khoản
          </li>
        </ul>
      </li>
      <li>
        <b>Bước 4:</b> Điền các thông tin của bạn để nhận đơn hàng, lựa chọn
        hình thức thanh toán và vận chuyển cho đơn hàng của mình
      </li>
      <li>
        <b>Bước 5:</b> Xem lại thông tin đặt hàng, điền chú thích và gửi đơn
        hàng
      </li>
      <li>
        Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng cách gọi
        điện lại để xác nhận lại đơn hàng và địa chỉ của bạn.
      </li>
      <li>Trân trọng cảm ơn.</li>
    </ul>
  );
};

export default Guide
