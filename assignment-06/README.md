# Assignment 06 — Ứng dụng React Cơ bản: Quản lý Người dùng (CRUD) & State Lifting

> Bài tập thực hành tuần 6 môn **Lập trình Web (IT4409)** — Khoa CNTT, Đại học Bách Khoa Hà Nội (HUST).  
> **Sinh viên thực hiện:** Hà Tuấn Dũng — MSSV: `20235299`

---

## 1. Giới thiệu Bài tập

Bài tập tập trung vào việc làm quen và làm chủ các khái niệm cốt lõi của thư viện **React 18** (chạy độc lập qua CDN với Babel):
- **Functional Components & Hooks:** Khởi tạo và quản lý vòng đời component với `React.useState` và `React.useEffect`.
- **Cơ chế Nâng trạng thái (State Lifting):** Quản lý tập trung từ khóa tìm kiếm (`kw`) và đối tượng người dùng mới (`newUser`) tại component gốc `App` để điều phối giao tiếp giữa các component ngang hàng (`SearchForm`, `AddUser`, `ResultTable`).
- **Thực hiện đầy đủ mô hình CRUD:**
  - **Create (Thêm):** Form nhập liệu dạng Modal với tính năng xác thực bắt buộc (Name, Username) và xử lý đối tượng lồng nhau (`address: { street, suite, city }`).
  - **Read (Đọc & Hiển thị):** Nạp tự động 10 bản ghi mẫu từ REST API (`jsonplaceholder.typicode.com/users`) khi mount và lọc theo thời gian thực (Real-time Filter) theo tên hoặc username.
  - **Update (Sửa):** Hộp thoại Modal chỉnh sửa áp dụng kỹ thuật **Deep Copy** nhằm bảo đảm tính bất biến (Immutability), chống lỗi tham chiếu làm thay đổi dữ liệu bảng khi chưa lưu.
  - **Delete (Xóa):** Xóa trực tiếp bản ghi khỏi danh sách bằng phương thức bất biến `filter()`.
- **Thiết kế giao diện:** CSS thuần hiện đại, hỗ trợ hiệu ứng hiển thị Modal Overlay chuyên nghiệp và khả năng co giãn linh hoạt (Responsive).

---

## 2. Cấu trúc Thư mục Module `assignment-06/`

```text
assignment-06/
├── index.html               # Trang cây thư mục điều hướng Assignment 06 (Monospace Design)
├── README.md                # Tài liệu tổng quan kiến trúc và hướng dẫn triển khai
├── BAO-CAO-NOP-BAI.md       # Báo cáo kỹ thuật chuyên sâu (Component Tree, State Lifting, Bảng Props, Phân tích lỗi)
└── bai-tap-1/
    └── index.html           # Ứng dụng React 18 CRUD độc lập (HTML5 + CSS + React/ReactDOM/Babel CDN)
```

---

## 3. Kiến trúc Thành phần (Component Hierarchy)

```text
[App] (Component Gốc - Quản lý kw, newUser)
 ├── [SearchForm] (Tiếp nhận từ khóa tìm kiếm qua onChangeValue)
 ├── [AddUser] (Quản lý Modal form thêm người dùng qua onAdd)
 └── [ResultTable] (Nhận keyword, user, nạp API, Sửa, Xóa và callback onAdded)
```

### Bảng tóm tắt Props giao tiếp:
| Tên Prop | Component Phát | Component Nhận | Kiểu dữ liệu | Vai trò |
| :--- | :--- | :--- | :--- | :--- |
| `onChangeValue` | `App` | `SearchForm` | `(value: string) => void` | Đẩy từ khóa tìm kiếm lên state `kw` của `App` |
| `onAdd` | `App` | `AddUser` | `(newUser: object) => void` | Gửi người dùng mới lên state `newUser` của `App` |
| `keyword` | `App` | `ResultTable` | `string` | Cung cấp từ khóa để bảng lọc dữ liệu |
| `user` | `App` | `ResultTable` | `object \| null` | Bản ghi người dùng mới cần nạp vào bảng |
| `onAdded` | `App` | `ResultTable` | `() => void` | Báo hoàn tất nạp để `App` giải phóng `newUser = null` |

---

## 4. Tài liệu Báo cáo Kỹ thuật Chuyên sâu

Báo cáo phân tích toàn diện 4 yêu cầu bài tập được lưu trữ tại:
👉 **[BAO-CAO-NOP-BAI.md](./BAO-CAO-NOP-BAI.md)**

Nội dung chính trong báo cáo bao gồm:
1. **Sơ đồ phân cấp Component:** Trực quan hóa bằng Mermaid Diagram và ASCII Tree, định nghĩa rõ ràng trách nhiệm của từng component.
2. **Cơ chế State Lifting:** Phân tích 4 lý do nền tảng bắt buộc phải đặt `kw` và `newUser` tại `App` (*One-way data flow, Sibling communication, Single source of truth, Inversion of control*).
3. **Bảng mô tả Props chi tiết:** Toàn bộ kiểu dữ liệu, hướng truyền và hành vi kích hoạt.
4. **Phân tích 3 lỗi thực tế kinh điển:**
   - Lỗi `onClick={setAdding(false)}` gây vòng lặp render vô tận (*Too many re-renders*).
   - Lỗi tham chiếu nông (*Shallow Copy*) trên cấu trúc lồng nhau `address` làm đột biến dữ liệu bảng trước khi lưu.
   - Lỗi thiếu hoặc dùng sai thuộc tính `key` trong danh sách `Array.map()`.

---

## 5. Hướng dẫn Chạy & Trải nghiệm Ứng dụng

### 1. Trực tiếp trên trình duyệt (Local):
- Mở trực tiếp file `assignment-06/bai-tap-1/index.html` bằng bất kỳ trình duyệt web hiện đại nào (Chrome, Firefox, Edge, Safari).
- Không yêu cầu cài đặt `Node.js`, `npm` hay chạy câu lệnh build phức tạp nhờ thư viện React và Babel được nạp trực tiếp qua CDN unpkg.

### 2. Trực tuyến (Live Deployment):
- **Trang Hub Assignment 06:** [https://dngk2408.id.vn/assignment-06/](https://dngk2408.id.vn/assignment-06/)
- **Trang Ứng dụng React CRUD:** [https://dngk2408.id.vn/assignment-06/bai-tap-1/](https://dngk2408.id.vn/assignment-06/bai-tap-1/)
