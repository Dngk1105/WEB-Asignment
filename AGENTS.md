# AGENT GUIDELINES — IT4409 WEB ASSIGNMENT

> Hướng dẫn kiến trúc, quy chuẩn thiết kế và quy trình làm việc dành cho AI Assistant (Antigravity Agent) khi phát triển các bài tập trong repository **WEB-Asignment**.

---

## 1. Thông tin Dự án & Tác giả

- **Sinh viên:** Hà Tuấn Dũng — MSSV: `20235299`
- **Học phần:** IT4409 — Công nghệ Web và Dịch vụ trực tuyến (Lập trình Web) | HUST
- **GitHub Repository:** [Dngk1105/WEB-Asignment](https://github.com/Dngk1105/WEB-Asignment)
- **Live Deployment:** [https://dngk2408.id.vn/](https://dngk2408.id.vn/) (tự động deploy qua GitHub Pages)

---

## 2. Nguyên tắc Kiến trúc Cốt lõi (Mini-Site Independence)

1. **Mỗi Assignment là một Module Độc lập:**
   - Mọi bài tập theo tuần **BẮT BUỘC** nằm trong thư mục `assignment-XX/` tương ứng (ví dụ: `assignment-02/`, `assignment-03/`, `assignment-04/`...).
   - Bên trong `assignment-XX/` chia thành các thư mục con theo từng bài: `bai-tap-1/`, `bai-tap-2/`, v.v.
   - Mỗi bài tập con phải tự chứa đầy đủ tài nguyên của nó (`css/`, `js/`, `images/`, `fonts/`), không phụ thuộc chéo vào các bài tập tuần khác.
2. **Tuyệt đối KHÔNG đặt file rời rạc ở Thư mục Gốc:**
   - Thư mục root chỉ chứa: `index.html` (trang cây thư mục), `README.md`, `AGENTS.md`, `DESIGN_SYSTEM.md`, thư mục tài nguyên dùng chung `shared/` (`shared/css/design-tokens.css`), cấu hình CI/CD (`.github/`), `CNAME`, `.nojekyll`, `404.html` và các trang chuyển hướng cũ.
   - **CẤM** tạo các thư mục như `js/`, `css/` riêng lẻ tại root để chứa code của một bài tập cụ thể. Tất cả phải nằm trong `assignment-XX/bai-tap-Y/`.

---

## 3. Quy chuẩn Giao diện & Hệ thống Design System (Design System & Anti-Patterns)

Tất cả các trang điều hướng (`index.html` tại root, `assignment-XX/index.html`) và các ứng dụng bài tập con (`bai-tap-Y/index.html`) **BẮT BUỘC** tuân thủ triệt để phong cách thiết kế **Academic Monospace Minimalism** theo đặc tả tại [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) và sử dụng hệ thống tokens từ [shared/css/design-tokens.css](shared/css/design-tokens.css):

### 3.1. Các Quy chuẩn Bắt buộc (Mandatory Standards)
- **Typography:** `font-family: 'CaskaydiaCove Nerd Font Mono', 'Consolas', 'Monaco', 'Courier New', monospace;` (Đồng bộ font monospace trên toàn bộ các thành phần giao diện).
- **Hệ màu chuẩn (Design Tokens):**
  - Nền trang: `--color-bg: #f8fafc;` (Slate light).
  - Nền Card & Modal: `--color-surface: #ffffff;` (Trắng thuần).
  - Đường viền: `--color-border: #cbd5e1;` (Slate-300).
  - Màu chữ chính: `--color-text-main: #0f172a;`, chữ nội dung: `--color-text-body: #1e293b;`, chữ phụ: `--color-text-muted: #475569;`.
  - Màu chủ đạo (Primary): `--color-primary: #2563eb;`, hover: `--color-primary-hover: #1d4ed8;`, thư mục/nhãn: `--color-primary-dark: #1e40af;`.
  - Màu cảnh báo/Xóa (Danger): `--color-danger: #b91c1c;`, hover: `--color-danger-hover: #991b1b;`, viền: `--color-danger-border: #fca5a5;`.
- **Thành phần bắt buộc trên mỗi trang Hub (`assignment-XX/index.html`):**
  - Nút quay lại: `<a href="../index.html" class="back-link">← Về trang chủ</a>`
  - Tiêu đề: `<h1>Assignment XX - Tên chủ đề</h1>`
  - Khung thông tin: `Hà Tuấn Dũng - 20235299` kèm link tới thư mục Assignment trên GitHub.
  - Cây thư mục `ul.tree` liệt kê đầy đủ các bài tập con, file HTML, CSS, JS và tài liệu.
  - Footer bản quyền: `&copy; 2026 Hà Tuấn Dũng — Học phần IT4409 (Lập trình Web) | HUST`

### 3.2. Quy tắc Chống Mẫu Nghiêm ngặt (Strict Anti-Patterns)
Mọi AI Agent khi phát triển hoặc sinh mã giao diện cho repository này **BẮT BUỘC** tuân thủ các quy tắc cấm sau:
1. **NEVER use emojis or icons in UI elements:**
   - **CẤM** chèn emoji hoặc biểu tượng hình ảnh vào nút bấm, tiêu đề, ô nhập liệu, bảng biểu hay huy hiệu (Ví dụ: CẤM `🗑️ Xóa`, `✏️ Sửa`, `🔍 Tìm kiếm`, `➕ Thêm mới`, `🚀 Submit`).
   - **BẮT BUỘC** chỉ dùng văn bản rõ nghĩa hoặc ký tự bàn phím tối giản: `[+]`, `[X]`, `<-`, `Sửa`, `Xóa`, `Đóng`, `Lưu`, `Tìm theo tên...`.
2. **NEVER use flashy SaaS gradients or neon styling:**
   - **CẤM** dùng nền dải màu gradient rực rỡ (tím, hồng, pastel đa sắc kiểu landing page marketing/SaaS startup hiện đại).
   - **BẮT BUỘC** dùng màu nền phẳng, tương phản cao, sạch sẽ (`#f8fafc`, `#ffffff`) theo phong cách học thuật Bách Khoa.
3. **NEVER use heavy multi-layer shadows or blur glows:**
   - **CẤM** các kiểu `box-shadow` nhiều lớp, bóng mờ phát sáng (glow), bóng màu mè gây rối mắt.
   - **BẮT BUỘC** dùng bóng mờ đơn lớp nhẹ: `0 1px 3px rgba(0, 0, 0, 0.05)` cho card hoặc `0 4px 12px rgba(15, 23, 42, 0.15)` cho modal.
4. **NEVER use non-monospace fonts as default:**
   - **CẤM** tự ý đổi phông mặc định sang sans-serif tự do (như Inter, Poppins, Roboto, Arial) cho các trang Hub hoặc giao diện bài tập kỹ thuật. Monospace là định danh nhận diện thương hiệu của toàn bộ repository.

---

## 4. Quy chuẩn Viết Code & Kiểm thử (Code Standards)

1. **JavaScript:**
   - Sử dụng chuẩn ES6+ (`const`, `let`, Arrow functions, Template Literals, Destructuring, Spread syntax).
   - Kiểm tra chặt chẽ kiểu dữ liệu đầu vào: chuỗi số từ form phải chuyển sang số qua `Number(...)`.
   - Giữ tính bất biến (Immutability): khi sao chép/tạo mới đối tượng lồng nhau (nested objects), phải nhân bản sâu (deep clone) để tránh làm thay đổi object gốc.
   - Tuân thủ kiểm tra `null` / `undefined` đúng đặc tả.
   - Bảng mã UTF-8 không BOM (UTF-8 without BOM).
2. **HTML & CSS:**
   - Thẻ ngữ nghĩa HTML5 rõ ràng (`header`, `nav`, `main`, `section`, `article`, `footer`).
   - Đường dẫn tương đối (relative paths) chuẩn xác để chạy tốt cả trên localhost lẫn GitHub Pages.
   - Kiểm tra tính tương thích và Responsive theo yêu cầu từng bài.
3. **Kiểm thử tự động:**
   - Nếu bài tập có sẵn bộ kiểm tra (`kiem-tra.js`), agent phải chạy kiểm tra và đảm bảo **100% testcases đạt** (✅ Đạt) trước khi kết luận hoàn thành.

---

## 5. Quy trình 5 bước khi triển khai Assignment mới

Khi người dùng yêu cầu làm bài tập tuần mới (ví dụ Assignment 05):
1. **Bước 1 — Khởi tạo thư mục:**
   - Tạo `assignment-XX/` và các bài con `bai-tap-1/`, `bai-tap-2/`...
   - Giải nén/sao chép tài nguyên vào đúng thư mục con của assignment.
2. **Bước 2 — Hoàn thiện mã nguồn:**
   - Đọc kỹ đặc tả bài toán, file mẫu, các file hỗ trợ (`ho-tro.js`, `kiem-tra.js`...).
   - Viết code hoàn chỉnh, chạy test thử nghiệm qua browser hoặc môi trường kiểm thử.
3. **Bước 3 — Tạo trang Hub & Tài liệu cho Assignment:**
   - Tạo `assignment-XX/index.html` theo chuẩn cây thư mục monospace.
   - Tạo `assignment-XX/README.md` báo cáo kỹ thuật, cấu trúc và kết quả kiểm thử.
4. **Bước 4 — Cập nhật cây điều hướng toàn cục:**
   - Cập nhật root `index.html`: Thêm nút và nhánh thư mục cho `assignment-XX`.
   - Cập nhật root `README.md`: Thêm mục danh mục bài tập tương ứng.
5. **Bước 5 — Kiểm tra tổng thể:**
   - Chạy `git status` đảm bảo không có file rác phát sinh ở root.
   - Xác nhận mọi liên kết hoạt động tốt.
