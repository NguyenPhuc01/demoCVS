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
        children: <p>Nhận diện đăng ký xe</p>
      },
      {
        name: "content",
        className: "banner5-description",
        children: (
          <p>
            Nhận diện và trích xuất thông tin từ hình ảnh của các loại giấy đăng
            ký ô tô và mô tô, xe máy
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
    children: "/banner6.jpg"
  },
  image2: {
    className: "banner5-image",
    children: "/banner6_1.jpg"
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
          to: "/solutions/insurance",
          imgSource: "/related04.jpg",
          title: "Giải pháp CVS Insurtech",
          description:
            "CVS INSURTECH là giải pháp thị giác máy tính toàn diện cho ngành bảo hiểm giúp các doanh nghiệp bảo hiểm tự động hóa trong xử lý giấy tờ nhằm giảm thiểu chi phí vận hành, nâng cao trải nghiệm khách hàng khi triển khai các dịch vụ trực tuyến."
        }
      },
      {
        name: "block1",
        className: "related-products-block",
        md: 8,
        xs: 24,
        children: {
          to: "/products/ocr/vehicle-inspection-certficicate",
          imgSource: "/related07.jpg",
          title: "Nhận diện giấy đăng kiểm xe",
          description: "Nhận diện thông tin từ giấy đăng ký xe máy, ô tô."
        }
      },
      {
        name: "block2",
        className: "related-products-block",
        md: 8,
        xs: 24,
        children: {
          to: "/products/ocr/vietnam-id-cards",
          linkEvent: "/products/ocr/vietnam-id-cards-2",
          imgSource: "/related06.jpg",
          title: "Nhận diện giấy phép lái xe",
          description: "Nhận diện thông tin từ hình ảnh của giấy phép lái xe."
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
        "Sản phẩm nhận diện giấy tờ tùy thân sử dụng được trên những nền tảng nào và hỗ trợ những ngôn ngữ lập trình nào?",
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
      header: "Sản phẩm Nhận diện giấy đăng ký xe được tính phí thế nào?",
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
    },
    {
      header:
        "Tôi muốn xử lý một loại giấy tờ không có trong danh sách sẵn có của CVS Vision có được không?",
      key: "8",
      text:
        "CVS Vision sử dụng công nghệ Học sâu (Deep Learning) cho phép xử lý các loại giấy tờ mới. Tuy nhiên, chúng tôi muốn cung cấp các sản phẩm sẵn dùng và độ chính xác cao do đó bạn sẽ cần cung cấp cho chúng tôi một số lượng mẫu tài liệu của bạn để chúng tôi có thể huấn luyện mô hình của mình tối ưu với dữ liệu của bạn."
    }
  ]
};
export const BenefitDataSource = {
  wrapper: { className: "home-page-wrapper benefit-wrapper" },
  page: { className: "home-page benefit" },
  titleWrapper: {
    className: "title-wrapper",
    children:
      "CVS đem lại cho khách hàng giải pháp chất lượng cao với chi phí hợp lý"
  },
  explainWrapper: {
    className: "explain-wrapper",
    children: ""
  },
  content1: [
    {
      img: <img src="/benefit06.svg" alt="img" />,
      title: "Độ chính xác trên 96%"
    },
    {
      img: <img src="/benefit07.svg" alt="img" />,
      title: "Nhanh hơn 40 lần nhập thủ công"
    },
    {
      img: <img src="/benefit03.svg" alt="img" />,
      title: "Xử lý ảnh chất lượng kém"
    }
  ],
  content2: [
    {
      img: <img src="/benefit04.svg" alt="img" />,
      title: "Tự động căn chỉnh lại ảnh"
    },
    {
      img: <img src="/benefit05.svg" alt="img" />,
      title: "Triển khai Cloud & On-premise"
    }
  ]
};
