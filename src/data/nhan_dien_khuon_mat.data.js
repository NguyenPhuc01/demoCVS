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
        children: <p>Nhận diện khuôn mặt</p>
      },
      {
        name: "content",
        className: "banner5-description",
        children: (
          <p>
            CVS VISION FACE sử dụng các công nghệ Deep learning để phát hiện và
            nhận dạng nhanh chóng một hoặc nhiều khuôn mặt trong hình ảnh hoặc
            video với độ chính xác cao.
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
    children: "/banner14.jpg"
  },
  image2: {
    className: "banner5-image",
    children: "/banner14_1.jpg"
  }
};
export const OCR02DataSource = {
  title: "CVS Vision Face hoạt động như thế nào?",
  image: <img alt="img" src="/ocr021.svg" />,
  description: (
    <>
      CVS VISION FACE sử dụng các kỹ thuật Machine Learning mới nhất trong trí
      tuệ nhân tạo để tự động nhận diện khuôn mặt từ các hình ảnh hoặc video,
      được ứng dụng vào nhiều lĩnh vực khác nhau để mang lại sự tiện lợi cho
      khách hàng. Chúng tôi cực kỳ tôn trọng quyền riêng tư của người dùng và
      không tiết lộ danh tính của những người trên hình ảnh mà chúng tôi xử lý.
      Không có hình ảnh khuôn mặt nào được lưu trữ - chỉ các biểu diễn đặc điểm
      số đặc trưng của chúng được lưu trữ và sử dụng để nhận dạng.
      <br />
      <br />
      <br />
      Kiến trúc phần mềm REST của CVS VISION FACE API có thể được truy cập thông
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
    children: "Sản phẩm của nhận diện khuôn mặt"
  },
  explainWrapper: {
    className: "explain-wrapper",
    children: ""
  },
  content: [
    {
      img: <img src="/app12.svg" alt="img" />,
      title: "Xác minh danh tính",
      content:
        "So sánh ảnh selfie và ảnh chân dung trên các loại giấy tờ tùy để xác minh có cùng một người hay không.",
      link: "/products/facial-recognition/face-verification"
    },
    {
      img: <img src="/app13.svg" alt="img" />,
      title: "Tìm kiếm khuôn mặt",
      content:
        "Từ ảnh chân dung đầu vào, tìm kiếm trong một tập ảnh và trả về danh sách các ảnh trùng khớp với ảnh đầu vào và metadata được lưu gắn kèm với các ảnh đó.",
      link: "/products/facial-recognition/face-search"
    },
    {
      img: <img src="/app14.svg" alt="img" />,
      title: "Tạo ảnh đại diện",
      content:
        "Tự động nhận diện khuôn mặt và tạo ảnh đại diện với kích thước tùy biến.",
      link: "/products/facial-recognition/smart-avatar"
    },
    {
      img: <img src="/app15.svg" alt="img" />,
      title: "Phân tích khuôn mặt",
      content:
        "Phân tích giới tính, độ tuổi, cảm xúc từ hình ảnh chứa khuôn mặt.",
      link: "/products/facial-recognition/face-analysis"
    },
    {
      img: <img src="/app16.svg" alt="img" />,
      title: "Phân cụm khuôn mặt",
      content:
        "Tự động nhận diện và phân nhóm các khuôn mặt giống nhau trong một tập ảnh",
      link: "/products/facial-recognition/face-grouping"
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
        children: <p>Tại sao các khách hàng lựa chọn CVS VISION FACE?</p>
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
          "Công nghệ của chúng tôi có khả năng nhận diện thông tin chính xác lên tới trên 99%"
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
          "CVS Vision Face có tốc độ xử lý vượt trội so với nhập liệu thủ công, chỉ từ 2s cho mỗi trang tài liệu."
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
  }
};
