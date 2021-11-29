import React from "react";
import { Button } from "antd";
import { trackEvent } from "../components/utils";
import { FormattedMessage, Link } from "gatsby-plugin-intl";

export const Banner03DataSource = {
  wrapper: { className: "home-page-wrapper banner5" },
  page: { className: "home-page banner5-page" },
  childWrapper: {
    className: "banner5-title-wrapper",
    children: [
      {
        name: "content",
        className: "banner5-content",
        children: <p>CVS Insurtech</p>
      },
      {
        name: "content",
        className: "banner5-description",
        children: (
          <p>
            CVS INSURTECH là giải pháp thị giác máy tính toàn diện cho ngành bảo
            hiểm giúp các doanh nghiệp bảo hiểm tự động hóa trong xử lý giấy tờ
            nhằm giảm thiểu chi phí vận hành, nâng cao trải nghiệm khách hàng
            khi triển khai các dịch vụ trực tuyến.
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
    children: "/banner25.jpg"
  },
  image2: {
    className: "banner5-image",
    children: "/banner25_1.jpg"
  }
};
export const CustomersDataSource = {
  wrapper: { className: "home-page-wrapper customers-wrapper" },
  page: { className: "home-page customers" },
  titleWrapper: {
    className: "title-wrapper",
    children: "Được tin dùng bởi các doanh nghiệp hàng đầu"
  },
  content: [
    {
      key: "0",
      md: 4,
      xs: 24,
      children: <img src="/customer0.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "1",
      md: 4,
      xs: 24,
      children: <img src="/customer1.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "2",
      md: 4,
      xs: 24,
      children: <img src="/customer7.jpg" alt="img" width={170} height={84} />
    },
    // {
    //   key: "3",
    //   md: 4,
    //   xs: 24,
    //   children: <img src="/customer8.jpg" alt="img" width={170} height={84} />
    // },
    {
      key: "4",
      md: 4,
      xs: 24,
      children: <img src="/customer9.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "5",
      md: 4,
      xs: 24,
      children: <img src="/customer10.jpg" alt="img" width={170} height={84} />
    }
  ]
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
          <img alt="img" src="/insurtech01.jpg" />
        </div>
      )
    },
    {
      md: 12,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">
            Trích xuất thông tin giấy tờ tùy thân
          </div>
          <div className="cmnd01-block-description">
            Sản phẩm OCR của chúng tôi được các khách hàng đánh giá có độ chính
            xác trích xuất thông tin trên 95%, và là một trong những sản phẩm có
            độ chính xác cao nhất hiện nay.
            <br />
            <br />
            Sản phẩm của chúng tôi là một trong các sản phẩm có tốc độ trích
            xuất thông tin nhanh nhất hiện nay, dưới 2s với bản CPU và dưới 0.7s
            với bản GPU, có thể giúp các doanh nghiệp xử lý hàng triệu tài liệu
            một cách nhanh chóng.
            <br />
            <br />
            CVS OCR có khả năng xử lý ngay cả các trường hợp khó như ảnh bị
            xoay, ảnh chất lượng thấp, ảnh mất góc...
          </div>
          <Link to="/products/ocr/vietnam-id-cards">
            <Button
              type="link"
              className="cmnd01-block-button"
              onClick={() => trackEvent("/products/ocr/vietnam-id-cards")}
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
          <img alt="img" src="/insurtech02.jpg" />
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">Đăng kiểm xe</div>
          <div className="cmnd01-block-description">
            Tự động trích xuất thông tin từ hình ảnh của giấy đăng kiểm xe.
          </div>
          <Link to="/products/ocr/vehicle-inspection-certficicate">
            <Button
              type="link"
              className="cmnd01-block-button"
              onClick={() =>
                trackEvent("/products/ocr/vehicle-inspection-certficicate")
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
          <img alt="img" src="/insurtech03.jpg" />
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">Đăng ký xe</div>
          <div className="cmnd01-block-description">
            Tự động trích xuất thông tin từ hình ảnh của giấy đăng ký xe ô tô,
            đăng ký xe mô tô, xe máy.
          </div>
          <Link to="/products/ocr/vehicle-registration">
            <Button
              type="link"
              className="cmnd01-block-button"
              onClick={() => trackEvent("/products/ocr/vehicle-registration")}
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
          <img alt="img" src="/insurtech04.jpg" />
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">OCR văn bản scan</div>
          <div className="cmnd01-block-description">
            Chuyển thông tin từ dạng hình ảnh sang văn bản phục vụ việc tìm kiếm
            văn bản dựa vào nội dung.
          </div>
          <Link to="/products/ocr/image-to-text">
            <Button
              type="link"
              className="cmnd01-block-button"
              onClick={() => trackEvent("/products/ocr/image-to-text")}
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
          <img alt="img" src="/insurtech05.jpg" />
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">
            Trích xuất thông tin giấy khai sinh
          </div>
          <div className="cmnd01-block-description">
            Tự động trích xuất thông tin các loại giấy khai sinh bản chính, giấy
            khai sinh bản sao, trích lục khai sinh,...
          </div>
          <Link to="/products/ocr/birth-certificate">
            <Button
              type="link"
              className="cmnd01-block-button"
              onClick={() => trackEvent("/products/ocr/birth-certificate")}
            >
              Tìm hiểu thêm
            </Button>
          </Link>
        </div>
      )
    },
    {
      md: 18,
      xs: 24,
      children: (
        <div className="cmnd01-block-image">
          <img alt="img" src="/insurtech06.jpg" />
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">
            Face matching - So khớp khuôn mặt ảnh chân dung và giấy tờ tùy thân
          </div>
          <div className="cmnd01-block-description">
            Công nghệ nhận dạng khuôn mặt và so khớp khuôn mặt dựa trên AI sẽ
            xác minh danh tính một cách chính xác dựa vào ảnh selfie và ảnh trên
            giấy tờ tuỳ thân.
          </div>
          <Link to="/products/facial-recognition/face-verification">
            <Button
              type="link"
              className="cmnd01-block-button"
              onClick={() =>
                trackEvent("/products/facial-recognition/face-verification")
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
          <img alt="img" src="/insurtech07.jpg" />
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">Smart Avatar</div>
          <div className="cmnd01-block-description">
            Tự động tạo ảnh crop chân dung theo kích thước tùy chọn một cách
            thông minh và nhanh chóng.
          </div>
          <Link to="/products/facial-recognition/smart-avatar">
            <Button type="link" className="cmnd01-block-button">
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
          <img alt="img" src="/insurtech08.jpg" />
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">
            Face search: Quản lý và nhận dạng khách hàng
          </div>
          <div className="cmnd01-block-description">
            Là hệ thống tự động trích xuất, và lưu lại thông tin khách hàng được
            chụp từ Chứng minh nhân dân/Căn cước công dân/Hộ chiếu,... Bằng công
            nghệ trí tuệ nhân tạo OCR
          </div>
          <Link to="/products/facial-recognition/face-search">
            <Button type="link" className="cmnd01-block-button">
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
