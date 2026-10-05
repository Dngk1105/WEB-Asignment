# IT4409 — Lập trình Web (Web Application Development)

> Repository lưu trữ và triển khai các bài tập thực hành môn Lập trình Web (**IT4409**) theo từng tuần/assignment.

- **Sinh viên:** Hà Tuấn Dũng
- **GitHub Repository:** [Dngk1105/WEB-Asignment](https://github.com/Dngk1105/WEB-Asignment)
- **Live Demo (GitHub Pages):** [https://dngk2408.id.vn/](https://dngk2408.id.vn/)

---

## Cấu trúc Repository

Mỗi bài tập (Assignment) là một "Mini-Site" hoàn chỉnh độc lập, có mã nguồn, CSS, JS và tài nguyên riêng biệt. Khi thêm bài tập mới, các bài tập cũ được bảo đảm 100% không bị thay đổi đường dẫn hay ảnh hưởng giao diện.

```
WEB-Asignment/
├── .github/workflows/deploy.yml    # CI/CD tự động deploy lên GitHub Pages
├── .nojekyll                       # Ngăn Jekyll xử lý file
├── CNAME                           # Custom domain: dngk2408.id.vn
│
├── index.html                      # [CÂY THƯ MỤC BÀI TẬP] - Trang chính HTML thuần
├── register.html, media.html...    # Các file chuyển hướng (redirect) về Assignment 2
├── 404.html                        # Trang 404 điều hướng thông minh
│ 
├── assignment-02/                  # [Module độc lập Assignment 2]
│   ├── index.html                  # Trang chủ Website Báo chí Blakletterpress
│   ├── register.html               # Form đăng ký có JS validate & tính tuổi
│   ├── media.html                  # Trang truyền thông đa phương tiện Audio & Video
│   ├── about.html, news.html, blog.html...
│   ├── css/style.css               # CSS riêng của Assignment 2
│   ├── js/register.js              # JS validate form
│   ├── images/, fonts/, media/     # Tài nguyên độc lập
│
│ 
├── assignment-03/                  # [Module độc lập Assignment 3]
│   ├── index.html                  # Cây thư mục điều hướng Assignment 3
│   ├── README.md                   # Báo cáo tổng kết Assignment 3
│   │
│   ├── bai-tap-1/                  # Bài tập 1: Tự sửa lỗi (Không dùng AI)
│   │   ├── index.html              # Trang diff so sánh & phân tích lỗi CSS
│   │   ├── trang.html              # Trang web chạy với CSS đã sửa
│   │   ├── style_new.css           # CSS đã sửa hoàn chỉnh
│   │   ├── style_old.css           # CSS gốc bị lỗi để đối chứng
│   │   ├── images/                 # Ảnh sản phẩm và hero
│   │   └── phan-tich-loi.md        # Báo cáo phân tích kỹ thuật
│   │
│   └── bai-tap-2/                  # Bài tập 2: Sửa lỗi dùng Prompt GenAI
│       ├── index.html              # Trang web chạy với CSS đã sửa
│       ├── trang.html              # File HTML gốc
│       ├── style.css               # CSS đã sửa theo kết quả GenAI
│       ├── style-loi-goc.css       # CSS gốc bị lỗi để đối chứng
│       ├── images/                 # Ảnh sản phẩm và hero
│       └── prompt-ai.md            # Bộ Prompt chuyên gia & báo cáo giải trình
│
└── README.md
```

---

## Danh mục Bài tập & Liên kết Nộp bài

### 1. [Assignment 2: Semantic HTML5 & Báo Chí Blakletterpress](./assignment-02/)
- **Trực tiếp:** [https://dngk2408.id.vn/assignment-02/](https://dngk2408.id.vn/assignment-02/)
- **Các trang thành phần:**
  - Form Đăng ký: [https://dngk2408.id.vn/assignment-02/register.html](https://dngk2408.id.vn/assignment-02/register.html)
  - Trang Media (Video/Audio): [https://dngk2408.id.vn/assignment-02/media.html](https://dngk2408.id.vn/assignment-02/media.html)
  - Bản nâng cấp Semantic: [https://dngk2408.id.vn/assignment-02/index_new.html](https://dngk2408.id.vn/assignment-02/index_new.html)

### 2. [Assignment 3: CSS — Chẩn đoán & Sửa lỗi Bố cục](./assignment-03/)
- **Trực tiếp Hub:** [https://dngk2408.id.vn/assignment-03/](https://dngk2408.id.vn/assignment-03/)
- **Bài tập 1 (Tự sửa lỗi):** [https://dngk2408.id.vn/assignment-03/bai-tap-1/](https://dngk2408.id.vn/assignment-03/bai-tap-1/)
  - [Trang demo web (trang.html)](https://dngk2408.id.vn/assignment-03/bai-tap-1/trang.html)
  - [Báo cáo phân tích chi tiết & Diff CSS](./assignment-03/bai-tap-1/phan-tich-loi.md)
- **Bài tập 2 (Prompt GenAI):** [https://dngk2408.id.vn/assignment-03/bai-tap-2/](https://dngk2408.id.vn/assignment-03/bai-tap-2/)
  - [Bộ Prompt chuyên gia & Báo cáo kỹ thuật](./assignment-03/bai-tap-2/prompt-ai.md)

---

## Hướng dẫn thêm bài tập mới (Tuần tiếp theo)
Khi có bài tập mới (ví dụ Assignment 4), bạn chỉ cần làm 2 bước:
1. Tạo thư mục mới: `assignment-04/` và đặt toàn bộ file bài tập vào đó.
2. Mở `index.html` tại root, cập nhật thẻ `Assignment 4` thành trạng thái "Đã Hoàn Thành" kèm liên kết trỏ tới `./assignment-04/`.
3. Commit và push lên GitHub, GitHub Actions sẽ tự động deploy lên GitHub Pages trong vòng 1 phút!
