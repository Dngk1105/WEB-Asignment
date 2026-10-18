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
│   ├── bai-tap-2/                  # Bài tập 2: Sửa lỗi dùng Prompt GenAI
│   │   ├── index.html              # Trang web chạy với CSS đã sửa
│   │   ├── trang.html              # File HTML gốc
│   │   ├── style.css               # CSS đã sửa theo kết quả GenAI
│   │   ├── style-loi-goc.css       # CSS gốc bị lỗi để đối chứng
│   │   ├── images/                 # Ảnh sản phẩm và hero
│   │   └── prompt-ai.md            # Bộ Prompt chuyên gia & báo cáo giải trình
│   │
│   ├── bai-tap-3/                  # Bài tập 3: Responsive Web Design Demo
│   │   ├── index.html              # Trang demo điều hướng
│   │   └── responsive-Bai tap 3.html # Demo Flexbox 3 cột / 2 cột / 1 cột
│   │
│   └── bai-tap-4/                  # Bài tập 4: CSS Responsive (IDE Dark Theme)
│       ├── index.html              # Trang web giao diện theme IDE
│       ├── trang-goc.html          # HTML gốc không sửa đổi
│       ├── style.css               # CSS chuẩn theme IDE Dark
│       └── images/                 # Ảnh tài nguyên
│
├── assignment-04/                  # [Module độc lập Assignment 4]
│   ├── index.html                  # Cây thư mục điều hướng Assignment 4
│   ├── README.md                   # Báo cáo tổng kết Assignment 4
│   │
│   ├── bai-tap-1/                  # Bài tập 1: Phiếu báo giá & Phiếu xác nhận đơn in
│   │   ├── index.html              # Bài A: Phiếu báo giá in thiệp (js/bai-a-bao-gia.js)
│   │   ├── about.html              # Bài B: Phiếu xác nhận đơn in & 12 testcases (js/bai-b-phieu-in.js)
│   │   ├── news.html, blog.html
│   │   ├── css/, fonts/, images/
│   │   └── js/                     # bai-a-bao-gia.js, bai-b-phieu-in.js, ho-tro.js, kiem-tra.js
│   │
│   ├── bai-tap-2/                  # Bài tập 2: Tin tức JSON & Giỏ hàng OOP
│   │   ├── news.html               # Bài A: Tin tức JSON & Thống kê tags (js/bai-a-tin-tuc.js)
│   │   ├── index.html              # Bài B: Giỏ hàng OOP & 20 testcases (js/bai-b-gio-hang.js)
│   │   ├── about.html, blog.html
│   │   ├── css/, fonts/, images/
│   │   └── js/                     # bai-a-tin-tuc.js, bai-b-gio-hang.js, ho-tro.js, kiem-tra.js
│   │
│   └── bai-tap-3/                  # Bài tập 3: Gallery tương tác & Lọc/Đăng tin tức
│       ├── index.html              # Bài A: Thư viện ảnh tương tác Gallery (js/bai-a-gallery.js)
│       ├── news.html               # Bài B: Lọc tin & Đăng tin nhanh & 18 testcases (js/bai-b-tin-nhanh.js)
│       ├── about.html, blog.html
│       ├── css/, fonts/, images/
│       └── js/                     # bai-a-gallery.js, bai-b-tin-nhanh.js, ho-tro.js, kiem-tra.js
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

### 2. [Assignment 3: CSS — Chẩn đoán, Sửa lỗi Bố cục & Responsive Design](./assignment-03/)
- **Trực tiếp Hub:** [https://dngk2408.id.vn/assignment-03/](https://dngk2408.id.vn/assignment-03/)
- **Bài tập 1 (Tự sửa lỗi):** [https://dngk2408.id.vn/assignment-03/bai-tap-1/](https://dngk2408.id.vn/assignment-03/bai-tap-1/)
  - [Trang demo web (trang.html)](https://dngk2408.id.vn/assignment-03/bai-tap-1/trang.html)
  - [Báo cáo phân tích chi tiết & Diff CSS](./assignment-03/bai-tap-1/phan-tich-loi.md)
- **Bài tập 2 (Prompt GenAI):** [https://dngk2408.id.vn/assignment-03/bai-tap-2/](https://dngk2408.id.vn/assignment-03/bai-tap-2/)
  - [Bộ Prompt chuyên gia & Báo cáo kỹ thuật](./assignment-03/bai-tap-2/prompt-ai.md)
- **Bài tập 3 (Responsive Demo):** [https://dngk2408.id.vn/assignment-03/bai-tap-3/](https://dngk2408.id.vn/assignment-03/bai-tap-3/)
  - [responsive-Bai tap 3.html](https://dngk2408.id.vn/assignment-03/bai-tap-3/responsive-Bai%20tap%203.html)
- **Bài tập 4 (CSS Blakletterpress - IDE Dark Theme):** [https://dngk2408.id.vn/assignment-03/bai-tap-4/](https://dngk2408.id.vn/assignment-03/bai-tap-4/)
  - [trang-goc.html](https://dngk2408.id.vn/assignment-03/bai-tap-4/trang-goc.html)
  - [style.css](./assignment-03/bai-tap-4/style.css)

### 3. [Assignment 4: JavaScript Cơ bản — Báo giá, Giỏ hàng OOP & Tương tác DOM](./assignment-04/)
- **Trực tiếp Hub:** [https://dngk2408.id.vn/assignment-04/](https://dngk2408.id.vn/assignment-04/)
- **Báo cáo tổng kết Assignment 4:** [README.md](./assignment-04/README.md)
- **Bài tập 1 (Báo giá & Xác nhận đơn in):** [https://dngk2408.id.vn/assignment-04/bai-tap-1/](https://dngk2408.id.vn/assignment-04/bai-tap-1/)
  - [Bài A — Phiếu báo giá in thiệp (index.html)](https://dngk2408.id.vn/assignment-04/bai-tap-1/index.html)
  - [Bài B — Phiếu xác nhận đơn in & Test 12/12 Đạt (about.html)](https://dngk2408.id.vn/assignment-04/bai-tap-1/about.html)
- **Bài tập 2 (Tin tức JSON & Giỏ hàng OOP):** [https://dngk2408.id.vn/assignment-04/bai-tap-2/](https://dngk2408.id.vn/assignment-04/bai-tap-2/)
  - [Bài A — Tin tức JSON & Thống kê tags (news.html)](https://dngk2408.id.vn/assignment-04/bai-tap-2/news.html)
  - [Bài B — Giỏ hàng OOP & Test 20/20 Đạt (index.html)](https://dngk2408.id.vn/assignment-04/bai-tap-2/index.html)
- **Bài tập 3 (Gallery tương tác & Lọc/Đăng tin):** [https://dngk2408.id.vn/assignment-04/bai-tap-3/](https://dngk2408.id.vn/assignment-04/bai-tap-3/)
  - [Bài A — Thư viện ảnh tương tác Gallery (index.html)](https://dngk2408.id.vn/assignment-04/bai-tap-3/index.html)
  - [Bài B — Lọc & Đăng tin nhanh & Test 18/18 Đạt (news.html)](https://dngk2408.id.vn/assignment-04/bai-tap-3/news.html)

---

## Hướng dẫn thêm bài tập mới (Tuần tiếp theo)
Khi có bài tập mới (ví dụ Assignment 5), bạn chỉ cần làm 3 bước:
1. Tạo thư mục mới: `assignment-XX/` (ví dụ `assignment-05/`) và đặt toàn bộ file bài tập vào đó theo mô hình Mini-Site độc lập.
2. Tạo file `assignment-XX/index.html` và `assignment-XX/README.md` theo chuẩn tree navigation.
3. Mở `index.html` và `README.md` tại root, cập nhật liên kết trỏ tới `./assignment-XX/`.
4. Commit và push lên GitHub, GitHub Actions sẽ tự động deploy lên GitHub Pages trong vòng 1 phút!

