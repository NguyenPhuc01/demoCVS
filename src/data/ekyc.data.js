import React from "react";

export const Banner03DataSource = {
  wrapper: { className: "home-page-wrapper banner5" },
  page: { className: "home-page banner5-page" },
  childWrapper: {
    className: "banner5-title-wrapper",
    children: [
      {
        name: "content",
        className: "banner5-content",
        children: <p>eKYC - Định danh khách hàng trực tuyến</p>
      },
      {
        name: "content",
        className: "banner5-description",
        children: (
          <p>
            Tự động xác minh danh tính nhanh chóng, chính xác bằng công nghệ trí
            tuệ nhân tạo tiên tiến của CVS giúp tuân thủ các quy định KYC/AML và
            làm hài lòng khách hàng.
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
    children: "/banner24.jpg"
  },
  image2: {
    className: "banner5-image",
    children: "/banner24_1.jpg"
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
      children: <img src="/customer2.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "1",
      md: 4,
      xs: 24,
      children: <img src="/customer12.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "2",
      md: 4,
      xs: 24,
      children: <img src="/customer5.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "3",
      md: 4,
      xs: 24,
      children: <img src="/customer11.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "4",
      md: 4,
      xs: 24,
      children: <img src="/customer15.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "4",
      md: 4,
      xs: 24,
      children: <img src="/customer4.jpg" alt="img" width={170} height={84} />
    }
  ]
};

export const CMND01DataSource = {
  wrapper: { className: "home-page-wrapper cmnd01-wrapper" },
  page: { className: "home-page cmnd01" },
  titleWrapper: {
    className: "title-wrapper",
    children: "Một giải pháp xác minh danh tính kỹ thuật số hoàn chỉnh"
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
          <img alt="img" src="/ekyc01.jpg" />
        </div>
      )
    },
    {
      md: 12,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">
            Đáp ứng các nghĩa vụ pháp lý và làm hài lòng khách hàng
          </div>
          <div className="cmnd01-block-description">
            Bạn không cần phải thỏa hiệp về trải nghiệm người dùng để đáp ứng
            các yêu cầu xác minh danh tính của các quy định KYC và AML.
            <br />
            <br />
            <b>CVS eKYC</b> giúp bạn cân bằng cả hai ưu tiên với thiết kế lấy
            người dùng làm trung tâm, tăng thêm độ mượt cho các khu vực mà bạn
            cần hỏi khách hàng cung cấp thêm dữ liệu để xác minh danh tính của
            họ.
            <br />
            <br />
            OCR Autofill của chúng tôi trích xuất dữ liệu từ tài liệu và sử dụng
            để tự động điền trước biểu mẫu đăng ký. SDK của chúng tôi hoạt động
            trên tất cả các nền tảng
          </div>
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div className="cmnd01-block-image">
          <img alt="img" src="/ekyc02.jpg" />
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">
            Giải pháp tuỳ chỉnh phù hợp với nhiều cấp độ tiêu chuẩn về rủi ro
          </div>
          <div className="cmnd01-block-description">
            Xây dựng luồng đăng ký mà phù hợp với doanh nghiệp của bạn. Khi nói
            đến các yêu cầu xác minh danh tính cho việc tuân thủ KYC và AML, bạn
            cần một giải pháp dựa trên rủi ro có thể phù hợp với kế hoạch rộng
            hơn của bạn để giải quyết các quy định này.
          </div>
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div className="cmnd01-block-image">
          <img alt="img" src="/ekyc03.jpg" />
        </div>
      )
    },
    {
      md: 6,
      xs: 24,
      children: (
        <div>
          <div className="cmnd01-block-title">
            Giảm chi phí hoạt động và điểu chỉnh quy mô linh hoạt
          </div>
          <div className="cmnd01-block-description">
            CVS eKYC giúp cung cấp giải pháp tự động hoá dựa trên AI giúp cắt
            giảm chi phí vận hành và tiết kiệm rất nhiều thời gian so với thực
            hiện thủ công.
          </div>
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
        "Giải pháp được tính phí theo từng sản phẩm CVS Vision được sử dụng. Trong đó, giải pháp CVS eKYC sử dụng hai sản phẩm là Nhận diện giấy tờ tùy thân và So khớp ảnh selfie - ảnh chân dung trên giấy tờ tùy thân. Nếu doanh nghiệp của bạn có cần sử dụng với số lượng lớn, hãy liên hệ với chúng tôi để có giải pháp chi phí tối ưu nhất cho doanh nghiệp của bạn."
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
export const EKYCDataSource = {
  wrapper: { className: "home-page-wrapper ekyc01-wrapper" },
  page: { className: "home-page ekyc01" },
  titleWrapper: {
    className: "title-wrapper",
    children: "CVS eKYC hoạt động như thế nào?"
  },
  explainWrapper: {
    className: "explain-wrapper",
    children: ""
  },
  content: [
    {
      img_big: <img src="/ekyc021.jpg" alt="img" width={195} />,
      img: <img src="/step1.svg" alt="img" />,
      title: "Nhận diện và kiểm tra giấy tờ tùy thân",
      content: (
        <ul>
          <li>
            Người dùng được yêu cầu chụp ảnh mặt trước và mặt sau (nếu có) giấy
            tờ tùy thân bằng smartphone hoặc webcam.
          </li>
          <br />
          <li>
            Thông tin trên giấy tờ tùy thân được tự động trích xuất từ ảnh chụp
            nhờ công nghệ OCR của CVS Vision.
          </li>
          <br />
          <li>
            CVS Vision tự động kiểm tra các trường hợp hình ảnh giấy tờ mà người
            dùng cung cấp không hợp lệ hoặc có dấu hiệu giả mạo.
          </li>
          <br />
          <li>
            Kết quả gồm thông tin trích xuất được từ hình ảnh của giấy tờ và các
            dấu hiệu giảo mạo (nếu có) sẽ được gửi về cho hệ thống của khách
            hàng.
          </li>
        </ul>
      ),
      link: "/products/ocr/vietnam-id-cards"
    },
    {
      img_big: <img src="/ekyc022.jpg" alt="img" width={195} />,
      img: <img src="/step2.svg" alt="img" />,
      title: "Xác minh danh tính",
      content: (
        <ul>
          <li>
            Người dùng được yêu cầu chụp ảnh selfie khuôn mặt bằng smartphone
            hoặc webcam.
          </li>
          <br />
          <li>
            CVS Vision tự động so khớp khuôn mặt trong ảnh selfie và ảnh chân
            dung trong giấy tờ tùy thân để xác định có cùng một người hay không.
          </li>
          <br />
          <li>
            CVS Vision tự động kiểm tra các trường hợp ảnh selfie mà người dùng
            cung cấp không hợp lệ hoặc có dấu hiệu giả mạo.
          </li>
          <br />
          <li>
            Kết quả gồm thông tin so khớp ảnh selfie - chân dung trên giấy tờ
            tùy thân và các dấu hiệu giả mạo (nếu có) sẽ được gửi về cho hệ
            thống của khách hàng.
          </li>
        </ul>
      ),
      link: "/products/facial-recognition/face-verification"
    },
    {
      img_big: <img src="/ekyc023.jpg" alt="img" width={195} />,
      img: <img src="/step3.svg" alt="img" />,
      title: "Kiểm tra nâng cao",
      content: (
        <>
          <div>
            CVS Vision có thể thực hiện các kỹ thuật kiểm tra độ tin cậy thông
            tin người dùng cung cấp để phát hiện giả mạo như:
          </div>
          <ul style={{ marginLeft: 24 }}>
            <br />
            <li>
              Kiểm tra trùng lặp bằng khuôn mặt để phát hiện các hồ sơ giả mạo
              nhiều lần.
            </li>
            <br />
            <li>Kiểm tra chéo với dữ liệu sẵn có.</li>
          </ul>
        </>
      ),
      link: "/products/facial-recognition/face-search"
    }
  ]
};
