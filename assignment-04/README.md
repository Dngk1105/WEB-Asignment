# Assignment 04 — JavaScript Cơ bản: Báo giá, Giỏ hàng OOP & Tương tác DOM

> Học phần **IT4409 — Lập trình Web** | Sinh viên: **Hà Tuấn Dũng - 20235299**

---

## 1. Cấu trúc thư mục Assignment 4

```
assignment-04/
├── index.html                      # Trang điều hướng tổng quan Assignment 4
├── README.md                       # Báo cáo và giải trình kỹ thuật Assignment 4
│
├── bai-tap-1/                      # Bài tập 1: Lập phiếu báo giá & xác nhận đơn in
│   ├── index.html                  # Giao diện Bài A: Phiếu báo giá in thiệp
│   ├── about.html                  # Giao diện Bài B: Phiếu xác nhận đơn in & 12 testcases
│   ├── news.html, blog.html
│   ├── css/, fonts/, images/
│   └── js/
│       ├── bai-a-bao-gia.js        # Bài 1a: Hoàn thiện 19 chỗ trống (Scope, Hoisting, Type Coercion...)
│       ├── bai-b-phieu-in.js       # Bài 1b: 4 hàm xử lý đơn in (tinhTong, moTaInLai, inPhieu, taoDonInLai)
│       ├── ho-tro.js, kiem-tra.js  # 12/12 testcases Đạt
│
├── bai-tap-2/                      # Bài tập 2: Tin tức JSON & Giỏ hàng OOP
│   ├── news.html                   # Giao diện Bài A: Tải 4 tin từ JSON mẫu, thống kê tags & views
│   ├── index.html                  # Giao diện Bài B: Giỏ hàng OOP & 20 testcases
│   ├── about.html, blog.html
│   ├── css/, fonts/, images/
│   └── js/
│       ├── bai-a-tin-tuc.js        # Bài 2a: Hoàn thiện 30 chỗ trống (JSON, Array methods, Class, Reduce...)
│       ├── bai-b-gio-hang.js       # Bài 2b: Xây dựng Class GioHang & hàm napGioHang
│       ├── ho-tro.js, kiem-tra.js  # 20/20 testcases Đạt
│
└── bai-tap-3/                      # Bài tập 3: Thư viện ảnh tương tác & Đăng tin nhanh
    ├── index.html                  # Giao diện Bài A: Gallery ảnh tương tác, đổi ảnh lớn & khoá thư viện
    ├── news.html                   # Giao diện Bài B: Lọc tin thời gian thực & Form đăng tin nhanh
    ├── about.html, blog.html
    ├── css/, fonts/, images/
    └── js/
        ├── bai-a-gallery.js        # Bài 3a: Hoàn thiện 27 chỗ trống (DOM query, Event Delegation, textContent...)
        ├── bai-b-tin-nhanh.js       # Bài 3b: Xử lý chức năng F1 - F5 (Lọc tin, Read more, Đăng tin)
        ├── ho-tro.js, kiem-tra.js  # 18/18 testcases Đạt
```

---

## 2. Danh mục Liên kết Trực tiếp & Nộp bài

- **Trang chủ Hub Assignment 04:** [https://dngk2408.id.vn/assignment-04/](https://dngk2408.id.vn/assignment-04/)
- **Bài tập 1 (Báo giá & Xác nhận đơn in):** [https://dngk2408.id.vn/assignment-04/bai-tap-1/](https://dngk2408.id.vn/assignment-04/bai-tap-1/)
  - [Bài A — Phiếu báo giá (index.html)](https://dngk2408.id.vn/assignment-04/bai-tap-1/index.html)
  - [Bài B — Phiếu in & Test 12/12 Đạt (about.html)](https://dngk2408.id.vn/assignment-04/bai-tap-1/about.html)
- **Bài tập 2 (Tin tức JSON & Giỏ hàng OOP):** [https://dngk2408.id.vn/assignment-04/bai-tap-2/](https://dngk2408.id.vn/assignment-04/bai-tap-2/)
  - [Bài A — Trang Tin tức JSON (news.html)](https://dngk2408.id.vn/assignment-04/bai-tap-2/news.html)
  - [Bài B — Giỏ hàng OOP & Test 20/20 Đạt (index.html)](https://dngk2408.id.vn/assignment-04/bai-tap-2/index.html)
- **Bài tập 3 (Gallery ảnh & Đăng tin nhanh):** [https://dngk2408.id.vn/assignment-04/bai-tap-3/](https://dngk2408.id.vn/assignment-04/bai-tap-3/)
  - [Bài A — Thư viện ảnh tương tác Gallery (index.html)](https://dngk2408.id.vn/assignment-04/bai-tap-3/index.html)
  - [Bài B — Lọc tin & Đăng tin nhanh & Test 18/18 Đạt (news.html)](https://dngk2408.id.vn/assignment-04/bai-tap-3/news.html)

---

## 3. Nội dung Kỹ thuật Chi tiết

### 3.1. Bài tập 1: Phiếu báo giá & Phiếu xác nhận đơn in
- **Bài 1a (`bai-a-bao-gia.js`):** Hoàn thiện 19 chỗ trống về biến `const`/`let`, scope, hoisting, so sánh lỏng/nghiêm ngặt `==` vs `===`, ép kiểu số, toán tử so sánh `null`, tránh lỗi ASI khi `return` và template literal.
- **Bài 1b (`bai-b-phieu-in.js`):** Xây dựng 4 hàm `tinhTong`, `moTaInLai`, `inPhieu`, `taoDonInLai` (sử dụng deep copy với Spread operator để bảo toàn tính bất biến cho đơn cũ). Bộ test đạt **12/12 Đạt**.

### 3.2. Bài tập 2: Tin tức JSON & Giỏ hàng OOP
- **Bài 2a (`bai-a-tin-tuc.js`):** Hoàn thiện 30 chỗ trống: `JSON.parse` / `JSON.stringify`, các thao tác mảng (`push`, `unshift`, `pop`, `shift`), phương thức xử lý mảng nâng cao (`filter`, `map`, `reduce`), truy cập thuộc tính dấu cách qua bracket notation `["tac gia"]`, xóa thuộc tính với `delete`, cú pháp khai báo `class` và `constructor`.
- **Bài 2b (`bai-b-gio-hang.js`):**
  - Xây dựng `class GioHang` với các phương thức: `them(sp, soLuong)`, `xoa(id)`, `tongTien()`, `thongKeTheoLoai()`, `dongDatNhat()`, `layDanhSach()`, `xuatJSON()`.
  - Xây dựng hàm `napGioHang(chuoiJSON)` khôi phục instance `GioHang`.
  - Đảm bảo tính đóng gói và an toàn dữ liệu: danh mục gốc không bị sửa, trả về bản sao chứa `thanhTien` mà không sửa mảng nội bộ. Bộ test đạt **20/20 Đạt**, giỏ hàng hiển thị đúng **Tổng: 325000 đ**.

### 3.3. Bài tập 3: Gallery tương tác & Lọc / Đăng tin tức
- **Bài 3a (`bai-a-gallery.js`):** Hoàn thiện 27 chỗ trống về DOM traversal (`querySelector`, `querySelectorAll`, `getElementById`, `firstChild`, `childNodes`, `parentNode`), tạo và chèn DOM (`createElement`, `textContent`, `appendChild`, `prepend`), Event Delegation trên thẻ cha `ul` và gỡ bỏ trình lắng nghe bằng `removeEventListener`.
- **Bài 3b (`bai-b-tin-nhanh.js`):**
  - **F1 (Bộ đếm):** Hiển thị `Đang hiển thị x/y tin` chính xác tại mọi thời điểm.
  - **F2 & F3 (Lọc & Thông báo):** Lọc theo `keyup` không phân biệt hoa thường trong cả tiêu đề và nội dung; hiển thị thông báo `#khong-thay` nguyên văn ký tự gõ.
  - **F4 (Read more / Thu gọn):** 1 trình lắng nghe click duy nhất trên `#list` (Event Delegation) để toggle class `day-du` và đổi nhãn nút.
  - **F5 (Đăng tin nhanh):** Validate form, chèn `li` mới lên đầu danh sách qua `prepend`, chống chèn mã XSS bằng `textContent`. Bộ test đạt **18/18 Đạt**.

---

## 4. Bảng tổng kết kết quả kiểm thử (100% Đạt)

| Bài tập | Bộ kiểm tra | Số lượng Testcases | Kết quả |
| :--- | :--- | :---: | :---: |
| **Bài 1b** | `assignment-04/bai-tap-1/js/kiem-tra.js` | 12 / 12 | ✅ 100% Đạt |
| **Bài 2b** | `assignment-04/bai-tap-2/js/kiem-tra.js` | 20 / 20 | ✅ 100% Đạt |
| **Bài 3b** | `assignment-04/bai-tap-3/js/kiem-tra.js` | 18 / 18 | ✅ 100% Đạt |
| **Tổng cộng** | **Toàn bộ Assignment 04** | **50 / 50** | **✅ 100% Đạt** |
