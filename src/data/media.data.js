import React from "react";
import { Button } from "antd";
import { trackEvent } from "../components/utils";
import { Link } from "gatsby-plugin-intl";

export const Banner03DataSource = {
  wrapper: { className: "home-page-wrapper banner5" },
  page: { className: "home-page banner5-page" },
  childWrapper: {
    className: "banner5-title-wrapper",
    children: [
      {
        name: "content",
        className: "banner5-content",
        children: <p>Xuất bản nội dung</p>
      },
      {
        name: "content",
        className: "banner5-description",
        children: (
          <p>
            Cung cấp các công cụ xử lý ảnh tự động thông minh cho ngành xuất
            bản, nội dung.
          </p>
        )
      },
      {
        name: "button",
        className: "banner5-button-wrapper",
        href: "#ContactForm",
        children: {
          className: "banner5-button",
          type: "primary",
          children: "DÙNG THỬ MIỄN PHÍ"
        }
      }
    ]
  },
  image: {
    className: "banner5-image",
    children: "/banner26.jpg"
  },
  image2: {
    className: "banner5-image",
    children: "/banner26_1.jpg"
  }
};
export const CMND01DataSource = {
  wrapper: { className: "home-page-wrapper cmnd01-wrapper" },
  page: { className: "home-page cmnd01" },
  titleWrapper: {
    className: "title-wrapper",
    children: "Ứng dụng thực tế"
  },
  explainWrapper: {
    className: "explain-wrapper",
    children: ""
  },
  content: [
    {
      md: 12,
      xs: 24,
      children: (
        <div className="cmnd01-block-image">
          <img alt="img" src="/media01.jpg" />
        </div>
      )
    },
    {
      md: 12,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">Smart Crop</div>
          <div className="cmnd01-block-description">
            Ảnh đại diện của các bài viết tại danh sách thường gặp vấn đề thiếu
            chi tiết khi áp dụng phương pháp thu nhỏ từ ảnh gốc hoặc mất chi
            tiết chính khi áp dụng phương pháp cắt ảnh từ chính giữa vì có thể
            những chi tiết chính không nằm ở giữa của tấm ảnh.
            <br />
            <br />
            Smart Crop của CVS Vision tự động nhận diện chủ thể chính của ảnh,
            từ đó sẽ cắt và tạo ảnh thu nhỏ đẹp và giữ lại được toàn bộ thông
            tin chính của ảnh.
          </div>
          <Link to="/products/image-recognition/smart-crop">
            <Button
              type="link"
              className="cmnd01-block-button"
              onClick={() =>
                trackEvent("/products/image-recognition/smart-crop")
              }
            >
              Tìm hiểu thêm
            </Button>
          </Link>
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div className="cmnd01-block-image">
          <img alt="img" src="/media02.jpg" />
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">Tagging</div>
          <div className="cmnd01-block-description">
            Tự động phân tích nội dung và gắn thẻ cho bài viết dựa vào các ảnh
            xuất hiện trong bài viết.
          </div>
          <Link to="/products/image-recognition/tagging">
            <Button
              type="link"
              className="cmnd01-block-button"
              onClick={() => trackEvent("/products/image-recognition/tagging")}
            >
              Tìm hiểu thêm
            </Button>
          </Link>
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div className="cmnd01-block-image">
          <img alt="img" src="/media03.jpg" />
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">Nhận diện người nổi tiếng</div>
          <div className="cmnd01-block-description">
            Tự động gắn thẻ người xuất hiện trong các ảnh của bài viết.
          </div>
          <Link to="/products/facial-recognition/face-search">
            <Button
              type="link"
              className="cmnd01-block-button"
              onClick={() =>
                trackEvent("/products/facial-recognition/face-search")
              }
            >
              Tìm hiểu thêm
            </Button>
          </Link>
        </div>
      )
    }
  ]
};
export const FAQDataSource = {
  wrapper: { className: "home-page-wrapper faq-wrapper" },
  page: { className: "home-page faq" },
  titleWrapper: {
    className: "title-wrapper",
    children: "Câu hỏi thường gặp"
  },
  content: [
    {
      header:
        "Tôi muốn sử dụng sản phẩm của nền tảng CVS Vision, tôi phải bắt đầu thế nào?",
      key: "1",
      text:
        "Hãy điền thông tin vào form liên hệ phía trên, chọn lý do liên hệ “Tôi muốn tạo tài khoản dùng thử CVS Vision API”. Sau khi nhận được yêu cầu của bạn, chúng tôi sẽ xem xét và tạo tài khoản cho bạn. Thông tin tài khoản của bạn và tài liệu hướng dẫn tích hợp sẽ được gửi vào email mà bạn đã đăng ký trong form liên hệ."
    },
    {
      header:
        "Sản phẩm CVS eKYC (định danh khách hàng trực tuyến) sử dụng được trên những nền tảng nào và hỗ trợ những ngôn ngữ lập trình nào?",
      key: "2",
      text:
        "CVS Vision dựa trên kết trúc dịch vụ REST API có thể tích hợp với tất cả ngôn ngữ lập trình và nền tảng hỗ trợ gửi yêu cầu qua HTTPS."
    },
    {
      header: "Để bắt đầu sử dụng, tôi phải trả những chi phí nào?",
      key: "3",
      text:
        "Chúng tôi không thu bất kì chi phí gì trong quá trình bạn sử dụng thử sản phẩm của chúng tôi. Tài khoản trial sẽ có 500 lượt sử dụng miễn phí. Bạn có thể yên tâm sử dụng cho đến khi chắc chắn rằng sản phẩm của chúng tôi mang lại lợi ích cho doanh nghiệp của bạn."
    },
    {
      header:
        "Sản phẩm CVS eKYC (định danh khách hàng trực tuyến) được tính phí thế nào?",
      key: "4",
      text:
        "Thông thường các sản phẩm của CVS Vision được tính phí theo số lượt sử dụng. Mỗi lượt sử dụng được tính là một lần gửi hình ảnh giấy đăng ký xe lên CVS Vision API và nhận được kết quả là thông tin trích xuất thành công từ hình ảnh gửi lên. Nếu doanh nghiệp của bạn có số lượng lớn giấy tờ cần xử lý, hãy liên hệ với chúng tôi để có giải pháp sử dụng tối ưu nhất cho doanh nghiệp của bạn."
    },
    {
      header:
        "Sử dụng nền tảng đám mây của CVS Vision, dữ liệu của bạn sẽ được lưu trữ và bảo mật thế nào?",
      key: "5",
      text:
        "Chúng tôi luôn đề cao sự an toàn dữ liệu của bạn. Chúng tôi chỉ lưu trữ hình ảnh trong khoảng thời gian ngắn nhằm phục vụ việc khắc phục khi có lỗi xảy ra. Sau đó, tất cả hình ảnh bạn tải lên sẽ được xóa khỏi lưu trữ đám mây của chúng tôi."
    },
    {
      header:
        "Triển khai On-premise có đòi hỏi kết nối ra môi trường Internet?",
      key: "6",
      text:
        "Sản phẩm của chúng tôi được đóng gói và triển khai hoàn toàn trong mạng nội bộ của bạn, không yêu cầu bất cứ kết nối nào ra môi trường Internet."
    },
    {
      header: "Khi có sự cố, tôi có thể nhận được sự hỗ trợ như thế nào?",
      key: "7",
      text:
        "Bạn có thể liên lạc với chúng tôi qua email hỗ trợ support@computervision.com.vn hoặc hotline (+84) 886 625 220. Chúng tôi hỗ trợ miễn phí trong giờ hành chính (9:00 - 17:00, từ thứ 2 đến thứ 6)."
    }
  ]
};
