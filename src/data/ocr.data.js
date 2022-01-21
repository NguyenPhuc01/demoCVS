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
        children: <p>CVS VISION OCR API</p>
      },
      {
        name: "content",
        className: "banner5-description",
        children: (
          <p>
            Tăng tốc quá trình xử lý tài liệu bằng các sản phẩm nhận diện ký tự
            dựa trên kỹ thuật Deep Learning tiên tiến nhất hiện nay
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
    children: "/banner1.jpg"
  },
  image2: {
    className: "banner5-image",
    children: "/banner1_1.jpg"
  }
};
export const OCR02DataSource = {
  title: "CVS VISION OCR hoạt động như thế nào?",
  image: <img alt="img" src="/ocr020.png" />,
  description: (
    <>
      CVS VISION OCR sử dụng các kỹ thuật Deep Learning mới nhất trong trí tuệ
      nhân tạo để tự động nhận diện và chuyển đổi các ký tự và chữ số in và viết
      tay thành dạng dữ liệu có thể chỉnh sửa, loại bỏ việc nhập liệu thủ công.
      Dễ dàng có được thông tin chính xác từ hình ảnh của nhiều loại giấy tờ và
      biểu mẫu, đồng thời nâng cao hiệu quả kinh doanh.
      <br />
      <br />
      <br />
      Kiến trúc phần mềm REST của CVS VISION OCR API có thể được truy cập thông
      qua các API đơn giản bởi bất kỳ ứng dụng nào có thể sử dụng các yêu cầu
      HTTPS. Ngoài sự hỗ trợ tất cả các hệ điều hành và ngôn ngữ lập trình, kiến
      trúc client-server cho phép tích hợp rất nhanh các chức năng có sẵn.
    </>
  )
};
export const OCR01DataSource = {
  wrapper: { className: "home-page-wrapper ocr01-wrapper" },
  page: { className: "home-page ocr01" },
  titleWrapper: {
    className: "title-wrapper",
    children: "Hỗ trợ đa dạng tài liệu và đa dạng ngôn ngữ"
  },
  explainWrapper: {
    className: "explain-wrapper",
    children:
      "Công nghệ của chúng tôi có khả năng chuyển đổi tài liệu và sử dụng thông tin tài liệu theo biểu mẫu hoặc không có biểu mẫu đến từ nhiều nguồn khác nhau từ scan, PDF, hình ảnh của tài liệu, ảnh chụp từ điện thoại hoặc ảnh chụp màn hình."
  },
  content: [
    {
      img: <img src="/app0.svg" alt="img" />,
      title: "Chứng minh nhân dân",
      content:
        "Nhận diện thông tin từ hình ảnh của các loại CMND: CMND 9 số, CMND 12 số, Căn cước công dân, CCCD gắn chip.",
      link: "/products/ocr/vietnam-id-cards"
    },
    {
      img: <img src="/app1.svg" alt="img" />,
      title: "Hộ chiếu Việt Nam",
      content:
        "Nhận diện thông tin tiếng Việt từ hình ảnh của hộ chiếu Việt Nam.",
      link: "/products/ocr/vietnam-id-cards",
      linkEvent: "/products/ocr/vietnam-id-cards-1"
    },
    {
      img: <img src="/app2.svg" alt="img" />,
      title: "Giấp phép lái xe",
      content: "Nhận diện thông tin từ hình ảnh của giấy phép lái xe.",
      link: "/products/ocr/vietnam-id-cards",
      linkEvent: "/products/ocr/vietnam-id-cards-2"
    },
    {
      img: <img src="/app4.svg" alt="img" />,
      title: "Giấy đăng ký xe",
      content: "Nhận diện thông tin từ giấy đăng ký xe máy, ô tô.",
      link: "/products/ocr/vehicle-registration"
    },
    {
      img: <img src="/app4.svg" alt="img" />,
      title: "Giấy đăng kiểm xe",
      content: "Nhận diện thông tin từ giấy đăng kiểm xe ô tô.",
      link: "/products/ocr/vehicle-inspection-certficicate"
    },
    {
      img: <img src="/app6.svg" alt="img" />,
      title: "Biển số xe",
      content: "Nhận diện biển số xe.",
      link: "/products/ocr/license-plate"
    },
    {
      img: <img src="/app7.svg" alt="img" />,
      title: "Giấy khai sinh",
      content:
        "Nhận diện thông tin từ hình ảnh giấy khai sinh gồm cả chữ in và chữ viết tay.",
      link: "/products/ocr/birth-certificate"
    },
    {
      img: <img src="/app8.svg" alt="img" />,
      title: "Giấy đăng ký doanh nghiệp",
      content:
        "Nhận diện thông tin doanh nghiệp và người đại diện pháp luật từ hình ảnh của giấy chứng nhận đăng ký doanh nghiệp.",
      link: "/products/ocr/business-registration-certificate"
    },
    {
      img: <img src="/app9.svg" alt="img" />,
      title: "Dữ liệu dạng bảng",
      content:
        "Chuyển đổi hình ảnh của các dữ liệu dạng bảng như bảng điểm, đơn thuốc, báo cáo tài chính ... thành dữ liệu file excel.",
      link: "/products/ocr/table"
    },
    {
      img: <img src="/app10.svg" alt="img" />,
      title: "Hộ chiếu quốc tế",
      content:
        "Nhận diện và phân tích mã MRZ để trả về thông tin từ hình ảnh của hộ chiếu bất kì.",
      link: "/products/ocr/passport"
    },
    {
      img: <img src="/app0.svg" alt="img" />,
      title: "ID Card Myanmar",
      content: "Nhận diện thông tin cá nhân từ hình ảnh của ID Card Myanmar.",
      link: "/products/ocr/myanmar-id-card"
    },
    {
      img: <img src="/app0.svg" alt="img" />,
      title: "ID Card Cambodia",
      content: "Nhận diện thông tin cá nhân từ hình ảnh của ID Card Campuchia.",
      link: "/products/ocr/cambodia-id-card"
    },
    {
      img: <img src="/app0.svg" alt="img" />,
      title: "ID Card Philippines",
      content:
        "Nhận diện thông tin cá nhân từ hình ảnh của ID Card Philippines.",
      link: "/products/ocr/philippines-id-card"
    },
    {
      img: <img src="/app11.svg" alt="img" />,
      title: "Nhận diện văn bản",
      content:
        "Chuyển đổi hình ảnh của văn bản sang dạng text cho phép tra cứu nội dung tài liệu.",
      link: "/products/ocr/image-to-text"
    }
  ]
};
export const Feature102DataSource = {
  wrapper: { className: "home-page-wrapper feature102" },
  page: { className: "home-page feature102-page" },
  childWrapper: {
    className: "feature102-title-wrapper",
    children: [
      {
        name: "content",
        className: "feature102-content",
        children: <p>Tại sao các khách hàng lựa chọn CVS VISION OCR?</p>
      }
    ]
  },
  content: [
    {
      name: "block0",
      className: "feature102-block",
      image: { className: "feature102-block-image", src: "/feature1020.svg" },
      title: {
        className: "feature102-block-title",
        children: "Độ chính xác cao"
      },
      description: {
        className: "feature102-block-description",
        children:
          "Công nghệ của chúng tôi có khả năng nhận diện thông tin chính xác lên tới trên 98%"
      }
    },
    {
      name: "block1",
      className: "feature102-block",
      image: { className: "feature102-block-image", src: "/feature1021.svg" },
      title: {
        className: "feature102-block-title",
        children: "Tốc độ xử lý vượt trội"
      },
      description: {
        className: "feature102-block-description",
        children:
          "CVS Vision OCR có tốc độ xử lý vượt trội so với nhập liệu thủ công, chỉ từ 2s cho mỗi trang tài liệu."
      }
    },
    {
      name: "block2",
      className: "feature102-block",
      image: { className: "feature102-block-image", src: "/feature1022.svg" },
      title: {
        className: "feature102-block-title",
        children: "Xử lý ảnh chất lượng kém"
      },
      description: {
        className: "feature102-block-description",
        children:
          "Nhận diện được thông tin từ các hình ảnh độ phân giải thấp, ảnh bị xoay, ảnh bị chụp chéo, ảnh mờ. Đồng thời trả lại hình ảnh rõ nét đã qua xử lý."
      }
    },
    {
      name: "block3",
      className: "feature102-block",
      image: { className: "feature102-block-image", src: "/feature1023.svg" },
      title: {
        className: "feature102-block-title",
        children: "Tích hợp dễ dàng qua REST API"
      },
      description: {
        className: "feature102-block-description",
        children:
          "Kiến trúc phần mềm dịch vụ dựa trên REST, HTTPS, JSON có khả năng tích hợp nhanh chóng với mọi nền tảng, mọi ngôn ngữ lập trình."
      }
    },
    {
      name: "block4",
      className: "feature102-block",
      image: { className: "feature102-block-image", src: "/feature1024.svg" },
      title: {
        className: "feature102-block-title",
        children: "Phát hiện giả mạo"
      },
      description: {
        className: "feature102-block-description",
        children:
          "Cảnh báo các trường hợp hình ảnh tài liệu có dấu hiệu bất thường như hình ảnh chụp từ một màn hình thiết bị điện tử, hình ảnh chụp từ bản photo...."
      }
    },
    {
      name: "block5",
      className: "feature102-block",
      image: { className: "feature102-block-image", src: "/feature1025.svg" },
      title: {
        className: "feature102-block-title",
        children: "Bắt đầu miễn phí"
      },
      description: {
        className: "feature102-block-description",
        children:
          "Hãy bắt đầu sử dụng hoàn toàn miễn phí cho đến khi bạn hoàn toàn yên tâm và tin tưởng vào dịch vụ của chúng tôi."
      }
    }
  ],
  image: {
    className: "feature102-image",
    children: "/feature102.jpg"
  },
  image2: {
    className: "feature102-image",
    children: "/feature102_1.jpg"
  }
};
