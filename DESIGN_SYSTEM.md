# HUST IT4409 — DESIGN SYSTEM GUIDELINES & SPECIFICATION

> **Academic Monospace Minimalism**  
> Chuẩn mực thiết kế giao diện cho toàn bộ repository **WEB-Asignment** (Học phần IT4409 — Công nghệ Web và Dịch vụ trực tuyến | ĐH Bách Khoa Hà Nội).  
> Tác giả: **Hà Tuấn Dũng — MSSV: 20235299**

---

## 1. Triết lý Thiết kế (Design Philosophy)

Hệ thống giao diện của repository này tuân thủ phong cách **Academic Monospace Minimalism** (Tối giản học thuật dạng Monospace):
1. **Monospace Nhất quán (Typography First):** Tất cả các thành phần văn bản, bảng biểu, form nhập liệu và cây thư mục đều hiển thị bằng phông chữ monospace (`CaskaydiaCove Nerd Font Mono`, `Consolas`, `Monaco`, `Courier New`).
2. **Tuyệt đối KHÔNG Dùng Emoji & Biểu tượng (Zero Icons & Emojis):** Giao diện kỹ thuật cần sự nghiêm túc, tinh giản và đồng nhất cao độ. Không dùng emoji (❌, 🗑️, ✏️, 🔍, 🚀) hay thư viện icon (FontAwesome, Material Icons) trên các nút bấm, tiêu đề hoặc ô nhập liệu. Dùng ký tự text thuần túy: `[+]`, `[X]`, `<-`, `Sửa`, `Xóa`, `Tìm kiếm...`.
3. **Phẳng & Tương phản Cao (Flat & High Contrast):**
   - Nền trang màu sáng dịu: Slate-50 (`#f8fafc`).
   - Nền khối/card màu trắng thuần: `#ffffff`.
   - Đường viền đơn sắc rõ nét: Slate-300 (`#cbd5e1`).
   - Chữ đậm màu than đá: Slate-900 (`#0f172a`) và Slate-800 (`#1e293b`).
4. **Bóng đổ Tối giản (Single-layer Subtle Shadows):** Chỉ sử dụng bóng đổ nhẹ 1 lớp (`0 1px 3px rgba(0, 0, 0, 0.05)` cho card và `0 4px 12px rgba(15, 23, 42, 0.15)` cho modal). Cấm các hiệu ứng gradient rực rỡ (SaaS rainbow/purple gradients), glow hoặc drop-shadow nhiều lớp.

---

## 2. Bảng Design Tokens (`shared/css/design-tokens.css`)

Tất cả tokens được định nghĩa tập trung tại `:root` trong file [shared/css/design-tokens.css](file:///c:/Users/PC/Desktop/DUNG/Web/Web%20Asignment/shared/css/design-tokens.css):

### 2.1. Typography Tokens

| Token CSS | Giá trị mặc định | Ứng dụng |
| :--- | :--- | :--- |
| `--font-mono` | `'CaskaydiaCove Nerd Font Mono', 'Consolas', 'Monaco', monospace` | Phông chữ chính cho toàn bộ UI |
| `--font-base` | `var(--font-mono)` | Phông chữ áp dụng cho `body` |
| `--text-xs` | `11px` | Chú thích nhỏ, ngày giờ |
| `--text-sm` | `12.5px` | Nút bấm nhỏ, nhãn form |
| `--text-base` | `14px` | Nội dung văn bản thường, ô nhập liệu |
| `--text-md` | `15px` | Thông tin tác giả, tiêu đề phụ |
| `--text-lg` | `17px` | Tiêu đề khối (Card title), tiêu đề Modal |
| `--text-xl` | `20px` | Tiêu đề mục cấp 2 (`<h2>`) |
| `--text-2xl` | `24px` | Tiêu đề chính trang (`<h1>`) |

### 2.2. Bảng Màu (Color Tokens)

| Token CSS | Mã Màu | Ý nghĩa & Vai trò |
| :--- | :--- | :--- |
| `--color-bg` | `#f8fafc` | Màu nền toàn trang (Slate-50) |
| `--color-surface` | `#ffffff` | Nền Card, Modal, Input, Table |
| `--color-surface-hover` | `#f1f5f9` | Nền khi hover vào bảng, nút secondary |
| `--color-surface-alt` | `#f8fafc` | Nền hàng chẵn của bảng (Zebra stripe) |
| `--color-border` | `#cbd5e1` | Viền chuẩn cho Card, Input, Nút bấm |
| `--color-border-subtle`| `#e2e8f0` | Đường phân cách header, modal, ô bảng |
| `--color-border-dark` | `#94a3b8` | Viền chân `<th>`, đường kẻ đứt cây thư mục |
| `--color-text-main` | `#0f172a` | Tiêu đề chính, văn bản nhấn mạnh cao |
| `--color-text-body` | `#1e293b` | Văn bản nội dung thông thường |
| `--color-text-muted` | `#475569` | Văn bản thứ cấp, metadata, nhãn phụ |
| `--color-text-subtle`| `#94a3b8` | Chân trang (footer), placeholder |
| `--color-text-inverse`| `#ffffff` | Màu chữ trắng tương phản trên nút primary |
| `--color-primary` | `#2563eb` | Xanh học thuật chuẩn (Nút chính, link) |
| `--color-primary-hover`| `#1d4ed8` | Trạng thái hover của nút chính |
| `--color-primary-dark` | `#1e40af` | Tên thư mục cây điều hướng, tiêu đề form con |
| `--color-primary-light`| `#eff6ff` | Nền hover nút Sửa |
| `--color-primary-border`| `#93c5fd`| Viền nút Sửa |
| `--color-danger` | `#b91c1c` | Màu đỏ cảnh báo / Nút Xóa |
| `--color-danger-hover`| `#991b1b` | Hover nút Xóa |
| `--color-danger-light`| `#fef2f2` | Nền hover nút Xóa, ô báo lỗi |
| `--color-danger-border`| `#fca5a5`| Viền nút Xóa |

### 2.3. Bán kính Bo góc & Bóng mờ (Geometry & Elevation)

| Token CSS | Giá trị | Ứng dụng |
| :--- | :--- | :--- |
| `--radius-sm` | `4px` | Nút bấm, ô input, ô tìm kiếm |
| `--radius-md` | `6px` | Tag, badge thông tin nhỏ |
| `--radius-lg` | `8px` | Khung Card, Modal, Khung cây thư mục |
| `--shadow-sm` | `0 1px 3px rgba(0, 0, 0, 0.05)` | Bóng mờ nhẹ cho Card, Box |
| `--shadow-modal` | `0 4px 12px rgba(15, 23, 42, 0.15)` | Bóng đổ cho cửa sổ Modal |
| `--overlay-backdrop`| `rgba(15, 23, 42, 0.45)` | Lớp phủ nền tối phía sau Modal |

---

## 3. Mã Mẫu Các Thành phần Chuẩn (Component Templates)

### 3.1. Header Trang & Thanh Thông tin

```html
<header class="page-header">
  <a href="../index.html" class="back-link">&larr; Về trang chủ</a>
  <h1>Assignment XX - Tên Bài Tập</h1>
  <div class="header-info">
    <span><strong>Hà Tuấn Dũng - 20235299</strong></span>
    <span><strong>Học phần:</strong> IT4409 (Lập trình Web)</span>
    <span><a href="https://github.com/Dngk1105/WEB-Asignment" target="_blank">Dngk1105/WEB-Asignment</a></span>
  </div>
</header>
```

### 3.2. Khung Nội dung (Card)

```html
<div class="card">
  <div class="card-header">
    <div class="card-title">Danh sách Dữ liệu</div>
    <button class="btn btn-primary btn-sm">[+] Thêm mới</button>
  </div>
  <div class="card-body">
    <!-- Nội dung bên trong -->
  </div>
</div>
```

### 3.3. Các Nút bấm Chuẩn (Buttons)

> **Quy tắc:** Chỉ sử dụng văn bản rõ nghĩa, không chèn emoji (không dùng `🗑️ Xóa` hay `✏️ Sửa`).

```html
<!-- Nút chính (Thêm mới, Lưu dữ liệu) -->
<button class="btn btn-primary">Lưu người dùng</button>

<!-- Nút thứ cấp (Hủy bỏ, Đóng) -->
<button class="btn btn-secondary">Đóng</button>

<!-- Nút Sửa trong bảng dữ liệu -->
<button class="btn btn-sm btn-edit">Sửa</button>

<!-- Nút Xóa trong bảng dữ liệu -->
<button class="btn btn-sm btn-delete">Xóa</button>
```

### 3.4. Ô Nhập liệu & Tìm kiếm (Form Controls)

```html
<div class="form-group">
  <label class="form-label">
    Họ và tên <span class="required">*</span>
  </label>
  <input type="text" class="form-control" placeholder="Nhập họ và tên..." />
</div>

<!-- Ô tìm kiếm nhanh trên thanh công cụ -->
<input type="text" class="search-input" placeholder="Tìm theo tên hoặc username..." />
```

### 3.5. Bảng Dữ liệu (Data Tables)

```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th style="width: 50px;">ID</th>
        <th>Họ và tên</th>
        <th>Tên đăng nhập</th>
        <th>Email</th>
        <th>Địa chỉ</th>
        <th style="width: 140px; text-align: center;">Thao tác</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Leanne Graham</td>
        <td>Bret</td>
        <td>Sincere@april.biz</td>
        <td>Kulas Light, Apt. 556, Gwenborough</td>
        <td>
          <div class="actions" style="justify-content: center;">
            <button class="btn btn-sm btn-edit">Sửa</button>
            <button class="btn btn-sm btn-delete">Xóa</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### 3.6. Cửa sổ Modal (Modal Dialog)

```html
<div class="modal-overlay">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Cập nhật thông tin</h3>
      <button class="modal-close" title="Đóng">&times;</button>
    </div>
    
    <div class="modal-body">
      <div class="form-group">
        <label class="form-label">Họ và tên <span class="required">*</span></label>
        <input type="text" class="form-control" value="Leanne Graham" />
      </div>
      
      <div class="form-section">Thông tin Địa chỉ</div>
      
      <div class="form-group">
        <label class="form-label">Đường phố</label>
        <input type="text" class="form-control" value="Kulas Light" />
      </div>
    </div>
    
    <div class="modal-actions">
      <button class="btn btn-secondary">Hủy</button>
      <button class="btn btn-primary">Lưu thay đổi</button>
    </div>
  </div>
</div>
```

### 3.7. Cây Thư mục Điều hướng (Directory Tree)

```html
<div class="tree-container">
  <div class="tree-title">Cấu trúc thư mục</div>
  <ul class="tree">
    <li>
      <span class="folder">assignment-06/</span>
      <ul>
        <li><a href="./index.html">index.html</a></li>
        <li>
          <span class="folder">bai-tap-1/</span>
          <ul>
            <li><a href="./bai-tap-1/index.html">index.html</a></li>
          </ul>
        </li>
        <li><a href="./README.md">README.md</a></li>
      </ul>
    </li>
  </ul>
</div>
```

---

## 4. Danh sách Quy tắc Nghiêm ngặt (Strict Anti-Patterns)

Mọi AI Agent khi sinh mã giao diện cho repository này **BẮT BUỘC** kiểm tra và tránh các sai phạm sau:

| Trạng thái | Hành vi | Hậu quả / Lý do cấm |
| :---: | :--- | :--- |
| ❌ CẤM | Dùng Emojis trong nút bấm (`🗑️ Xóa`, `🔍 Tìm`, `➕ Thêm`) | Phá vỡ tính nghiêm túc học thuật; font emoji lệch baseline trên các OS. |
| ❌ CẤM | Dùng thư viện Icon nặng (FontAwesome, Lucide, Material Icons) | Tăng tải không cần thiết, làm mất tính độc lập tối giản của bài tập. |
| ❌ CẤM | Dùng dải màu Gradient rực rỡ phong cách SaaS hiện đại | Không phù hợp với tiêu chuẩn thiết kế monospace của môn học IT4409. |
| ❌ CẤM | Dùng bóng đổ đa lớp, phát sáng (glow, colored neon shadow) | Gây rối mắt, vi phạm nguyên tắc phẳng và tương phản cao. |
| ❌ CẤM | Sử dụng phông chữ sans-serif tự do (Inter, Roboto, Arial) làm phông mặc định | Toàn bộ giao diện phải sử dụng đồng bộ phông monospace. |
| ❌ CẤM | Viết CSS inline lộn xộn, không tham chiếu tokens trong CSS variables | Gây phân mảnh giao diện khi cần bảo trì hay mở rộng. |
| ✅ CHUẨN | Dùng text thuần: `[+]`, `[X]`, `<-`, `Sửa`, `Xóa`, `Đóng`, `Lưu` | Đồng bộ 100% trên mọi trình duyệt, nhẹ, chuẩn monospace. |
| ✅ CHUẨN | Dùng CSS Variables từ `shared/css/design-tokens.css` | Tái sử dụng dễ dàng, nhất quán giữa các bài tập tuần. |

---

## 5. Hướng dẫn Nhúng vào Bài tập Tuần

Để áp dụng Design System vào bài tập tuần mới:

### Cách 1: Liên kết file CSS chung (Khuyên dùng)
```html
<link rel="stylesheet" href="../../shared/css/design-tokens.css" />
```

### Cách 2: Nhúng trực tiếp vào thẻ `<style>` (Nếu bài tập yêu cầu file HTML độc lập hoàn toàn)
Sao chép các biến `:root` và các lớp tiện ích từ `shared/css/design-tokens.css` vào khối `<style>` đầu trang HTML của bài tập.
