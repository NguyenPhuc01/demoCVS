import React from "react";

export const BannerDataSource = {
  wrapper: { className: "home-page-wrapper banner5" },
  page: { className: "home-page banner5-page" },
  childWrapper: {
    className: "banner5-title-wrapper",
    children: [
      {
        name: "content",
        className: "banner5-content",
        children: <p>Tagging</p>
      },
      {
        name: "content",
        className: "banner5-description",
        children: <p>Tự động hóa quy trình gắn thẻ hình ảnh của bạn.</p>
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
    children: "/banner23.jpg"
  }
};
export const RelatedProductsDataSource = {
  wrapper: { className: "home-page-wrapper related-products-wrapper" },
  page: { className: "home-page related-products" },
  titleWrapper: {
    className: "title-wrapper",
    children: "Một số sản phẩm liên quan"
  },
  childWrapper: {
    className: "related-products-block-wrapper",
    children: [
      {
        name: "block0",
        className: "related-products-block",
        md: 8,
        xs: 24,
        children: {
          href:
            "https://cafebiz.vn/ung-dung-thi-giac-may-tinh-so-hoa-cho-nganh-bao-hiem-20210118170635574.chn",
          imgSource: "/news01.jpg",
          title: "Hộ chiếu Cambodia",
          description:
            "Tự động hóa quá trình nhập liệu, nhận dạng và so khớp khuôn mặt bằng công nghệ AI, trích xuất thông tin trực tiếp từ ảnh chụp giấy tờ chỉ trong 2 giây; giải pháp thị giác máy tính CVS Insurtech đang tạo ra làn sóng mới cho cuộc cách mạng chuyển đổi số ngành bảo hiểm."
        }
      },
      {
        name: "block1",
        className: "related-products-block",
        md: 8,
        xs: 24,
        children: {
          href:
            "https://baodautu.vn/chubb-life-viet-nam-ung-dung-cong-nghe-hien-dai-de-dinh-danh-khach-hang-d126262.html",
          imgSource: "/news02.jpg",
          title: "Hộ chiếu",
          description:
            "Với thao tác đơn giản, thông tin khách hàng Chubb Life Việt Nam sẽ tự động được nhận diện, trích xuất thành ký tự thông qua công nghệ hiện đại OCR với tính chính xác cao, tiết kiệm thời gian."
        }
      },
      {
        name: "block2",
        className: "related-products-block",
        md: 8,
        xs: 24,
        children: {
          href:
            "https://www.tienphong.vn/xa-hoi/nguoi-dan-da-nang-nhan-ho-tro-tu-atm-gao-tri-tue-nhan-tao-1707499.tpo",
          imgSource: "/news03.jpg",
          title: "Đăng ký xe",
          description:
            "TPO - ATM gạo ở Đà Nẵng được tái khởi động để hỗ trợ người nghèo, người có hoàn cảnh khó khăn... vượt qua thời gian giãn cách xã hội vì dịch bệnh COVID - 19. ATM gạo được ứng dụng công nghệ AI (trí tuệ nhân tạo) để tự độ..."
        }
      }
    ]
  }
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
        "Sản phẩm Nhận diện dữ liệu bảng sử dụng được trên những nền tảng nào và hỗ trợ những ngôn ngữ lập trình nào?",
      key: "2",
      text:
        "CVS Vision là một dịch vụ dựa trên đám mây có thể được tích hợp vào các ứng dụng của bạn thông qua REST API. Bằng cách sử dụng các yêu cầu HTTPS, nhiều ứng dụng có thể được kết nối với dịch vụ, độc lập với ngôn ngữ lập trình hoặc nền tảng được hỗ trợ của chúng."
    },
    {
      header: "Để bắt đầu sử dụng, tôi phải trả những chi phí nào?",
      key: "3",
      text:
        "Chúng tôi không thu bất kì chi phí gì trong quá trình bạn sử dụng thử sản phẩm của chúng tôi. Tài khoản trial hỗ trợ nhận diện 500 trang miễn phí. Bạn có thể yên tâm sử dụng cho đến khi chắc chắn rằng sản phẩm của chúng tôi mang lại lợi ích cho doanh nghiệp của bạn."
    },
    {
      header: "Sản phẩm Nhận diện giấy dữ liệu bảng được tính phí thế nào?",
      key: "4",
      text:
        "Sản phẩm Nhận diện giấy dữ liệu bảng được tính phí theo số trang nhận diện thành công. Nếu doanh nghiệp của bạn có số lượng lớn giấy tờ cần xử lý, hãy liên hệ với chúng tôi để có giải pháp sử dụng tối ưu nhất cho doanh nghiệp của bạn."
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
    },
    {
      header:
        "Tôi muốn xử lý một loại giấy tờ không có trong danh sách sẵn có của CVS Vision có được không?",
      key: "8",
      text:
        "Tôi muốn xử lý một loại giấy tờ không có trong danh sách sẵn có của CVS Vision có được không?"
    }
  ]
};
