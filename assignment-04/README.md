# Assignment 04 — JavaScript Cơ bản: Phiếu báo giá & Xác nhận đơn in

> Học phần **IT4409 — Lập trình Web** | Sinh viên: **Hà Tuấn Dũng - 20235299**

---

## 1. Cấu trúc thư mục Assignment 4

```
assignment-04/
├── index.html                      # Trang điều hướng tổng quan Assignment 4
├── README.md                       # Báo cáo và giải trình kỹ thuật Assignment 4
│
└── bai-tap-1/                      # Bài tập 1: Lập phiếu báo giá & xác nhận đơn in
    ├── index.html                  # Giao diện Bài A: Phiếu báo giá in thiệp
    ├── about.html                  # Giao diện Bài B: Phiếu xác nhận đơn in & 12 testcases
    ├── blog.html                   # Trang Blog mẫu Blakletterpress
    ├── news.html                   # Trang News mẫu Blakletterpress
    ├── css/
    │   ├── bai-js.css              # Style hiển thị khung kết quả #ket-qua
    │   └── style.css               # Style giao diện template Blakletterpress
    ├── fonts/                      # Bộ font PT Serif & UnifrakturCook
    ├── images/                     # Ảnh giao diện & tài nguyên
    └── js/
        ├── bai-a-bao-gia.js        # Bài 1a: Hoàn thiện 19 chỗ trống (Scope, Hoisting, Type Coercion...)
        ├── bai-b-phieu-in.js       # Bài 1b: Xây dựng 4 hàm xử lý đơn in (tinhTong, moTaInLai, inPhieu, taoDonInLai)
        ├── ho-tro.js               # Hàm hienThi(noiDung) in kết quả vào DOM
        └── kiem-tra.js             # Bộ 12 testcases tự động (T1 - T12)
```

---

## 2. Danh mục Liên kết Trực tiếp & Nộp bài

- **Trang chủ Assignment 04:** [https://dngk2408.id.vn/assignment-04/](https://dngk2408.id.vn/assignment-04/)
- **Bài A (Phiếu báo giá):** [https://dngk2408.id.vn/assignment-04/bai-tap-1/index.html](https://dngk2408.id.vn/assignment-04/bai-tap-1/index.html)
- **Bài B (Phiếu xác nhận đơn in & Test):** [https://dngk2408.id.vn/assignment-04/bai-tap-1/about.html](https://dngk2408.id.vn/assignment-04/bai-tap-1/about.html)
- **Mã nguồn Bài 1a:** [`bai-a-bao-gia.js`](./bai-tap-1/js/bai-a-bao-gia.js)
- **Mã nguồn Bài 1b:** [`bai-b-phieu-in.js`](./bai-tap-1/js/bai-b-phieu-in.js)

---

## 3. Nội dung Kỹ thuật Chi tiết

### 3.1. Bài 1a: Điền chỗ trống (`js/bai-a-bao-gia.js`)
Phân tích 19 chỗ trống bao phủ các kiến thức nền tảng của JavaScript:
1. **Khai báo biến (`const` / `let`):** Dùng `const` cho hằng số không gán lại (`TEN_XUONG`), dùng `let` cho biến cần gán lại trong phạm vi khối (`soLuong`, `giamGia`).
2. **Ép kiểu & Toán tử so sánh:** Chuỗi lấy từ form `"200"` khi thực hiện phép `+` với số `300` sẽ bị ép kiểu chuỗi (`"300200"`). So sánh lỏng `==` tự động ép kiểu (`true`), so sánh nghiêm ngặt `===` kiểm tra cả kiểu dữ liệu (`false`). Chuyển đổi tường minh qua `Number()`.
3. **Phạm vi (Scope):** Biến khai báo trong khối `if` bằng `const`/`let` chỉ tồn tại trong block đó; truy cập từ ngoài sẽ ném lỗi `ReferenceError`.
4. **Cơ chế Hoisting:** `var` được hoisted và khởi tạo với `undefined`. Trong khi `let`/`const` được hoisted nhưng nằm trong vùng chết tạm thời (TDZ), gây lỗi `ReferenceError` nếu truy cập trước khi khai báo.
5. **Xử lý `null` và `undefined`:** Biểu thức `x == null` bao quát chính xác cả `null` và `undefined`, không bắt nhầm chuỗi rỗng `""` hay số `0`.
6. **Kiểu dữ liệu tham chiếu (Reference Types):** Object được gán theo tham chiếu; thay đổi thuộc tính qua biến tham chiếu thứ hai sẽ ảnh hưởng đến object gốc. Từ khóa `const` không cho phép gán lại object mới (`donMau = {}`) nhưng cho phép chỉnh sửa thuộc tính (`donMau.giay = "Kraft"`).
7. **Cơ chế tự động chèn dấu chấm phẩy (ASI):** Nếu để lệnh `return` đứng một mình một dòng rồi mới xuống dòng mở ngoặc, JS sẽ tự chèn dấu chấm phẩy (`return;`), khiến hàm trả về `undefined`.
8. **Template Literals:** Dùng cú pháp dấu huyền (`` ` ``) và cú pháp nội suy `${...}` để tạo chuỗi nhiều dòng mà không cần nối chuỗi bằng `+`.

### 3.2. Bài 1b: Xây dựng 4 hàm nghiệp vụ (`js/bai-b-phieu-in.js`)
1. `tinhTong(soLuong, donGia, phiGiao)`: Ép kiểu các tham số đầu vào bằng `Number()`, tính tiền hàng `soLuong × donGia`, cộng thuế VAT 10% và phí giao hàng, trả về kiểu `number`.
2. `moTaInLai(soLan)`: Xử lý theo bảng trạng thái: `null`/`undefined` trả về `"Chưa rõ"`, `0` trả về `"In lần đầu"`, số dương `n` trả về `"In lại lần n"`.
3. `inPhieu(don)`: Dùng template literal ghép 5 dòng chính xác từng khoảng trắng và ký tự; gọi `TEN_XUONG.toUpperCase()`, `tinhTong(...)`, `moTaInLai(don.soLanIn)`.
4. `taoDonInLai(donCu, sdtMoi)`: Áp dụng kỹ thuật clone bất biến (immutability) với toán tử spread `...`, nhân bản object lồng nhau `khach`, cập nhật số điện thoại mới và tăng `soLanIn` lên 1 mà không làm thay đổi đơn cũ.

---

## 4. Kết quả Kiểm thử Tự động (12/12 Testcases Đạt)

```
KIỂM TRA BÀI B: 12/12 đạt
✅ Đạt  T1  tinhTong nhận số: (250, 1500, 30000) → 442500
✅ Đạt  T2  tinhTong nhận chuỗi: ("250", "1500", "30000") → 442500
✅ Đạt  T3  tinhTong trả về kiểu number
✅ Đạt  T4  tinhTong("100", "2000", "0") → 220000
✅ Đạt  T5  moTaInLai(0) → "In lần đầu"
✅ Đạt  T6  moTaInLai(2) → "In lại lần 2"
✅ Đạt  T7  moTaInLai(null) và moTaInLai(undefined) → "Chưa rõ"
✅ Đạt  T8  inPhieu đúng từng ký tự (5 dòng)
✅ Đạt  T9  taoDonInLai trả về object MỚI (khác đơn cũ)
✅ Đạt  T10 đơn mới: sdt mới, soLanIn tăng 1
✅ Đạt  T11 đơn cũ KHÔNG đổi sdt và soLanIn
✅ Đạt  T12 sửa tên khách trên đơn mới không ảnh hưởng đơn cũ
```
