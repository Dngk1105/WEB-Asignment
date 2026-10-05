# BÁO CÁO PHÂN TÍCH VÀ SỬA LỖI CSS — BÀI TẬP 1 (ASSIGNMENT 3)
**Học phần:** IT4409 - Lập trình Web  
**Sinh viên thực hiện:** Hà Tuấn Dũng  
**Phương pháp:** Tự chẩn đoán và khắc phục lỗi trực tiếp (Không dùng AI)

---

## 1. Yêu cầu đề bài đối với trang web
1. **Menu trên cùng**: Dính lại khi cuộn (`sticky`) và luôn nằm trên ảnh hero.
2. **Ảnh hero**: Phủ kín khung, tiêu đề nằm chính giữa ảnh.
3. **Ba thẻ sản phẩm**: Xếp thành một hàng ngang; mỗi thẻ có nhãn "-20%" ở góc trên bên phải của chính thẻ đó; ảnh và chữ nằm gọn trong thẻ.
4. **Nút "↑"**: Nổi cố định ở góc dưới bên phải màn hình khi cuộn trang.
5. **Ràng buộc:** Không thay đổi mã nguồn HTML.

---

## 2. Bảng tổng hợp các lỗi phát hiện và giải pháp khắc phục

| STT | Thành phần giao diện | Hiện tượng lỗi ban đầu | Nguyên nhân kỹ thuật trong CSS | Giải pháp khắc phục |
| :---: | :--- | :--- | :--- | :--- |
| **1** | **Menu điều hướng (`.site-header`)** | Cuộn trang menu trôi mất, khi trượt qua ảnh hero bị ảnh đè lên che mất menu | Thuộc tính `position: sticky` thiếu giá trị ngưỡng kích hoạt `top: 0`; thiếu `z-index` so với `.hero-overlay` (`z-index: 5`) | Thêm `top: 0;` để kích hoạt dính; thêm `z-index: 100;` để luôn nổi trên lớp ảnh |
| **2** | **Hero Banner (`.hero`, `.hero-bg`)** | Chữ tiêu đề bị lệch khỏi khung ảnh hero; ảnh nền bị méo tỉ lệ | 1) Khung cha `.hero` không khai báo `position: relative`, khiến lớp con `.hero-overlay` (`position: absolute`) phải căn theo thẻ `body`/viewport toàn trang.<br>2) `.hero-bg` thiếu thuộc tính giữ tỉ lệ `object-fit` | 1) Thêm `position: relative;` cho `.hero` để làm mốc tọa độ.<br>2) Thêm `object-fit: cover;` cho `.hero-bg` |
| **3** | **Độ rộng 3 thẻ sản phẩm (`.card`)** | Ba thẻ bị rớt dòng (vỡ hàng), không nằm trên một hàng ngang | Toàn cục chưa khai báo `box-sizing: border-box`. Khi `.card` có `padding: 16px` và `border: 1px`, mỗi thẻ bị cộng thêm 34px vào chiều ngang khiến tổng chiều rộng 3 thẻ vượt quá 100% | Áp dụng `box-sizing: border-box;` cho `*` (hoặc trực tiếp cho `.card`) |
| **4** | **Chiều cao thẻ (`.card`)** | Nội dung chữ bên dưới thẻ bị tràn ra ngoài khung | Thẻ `.card` bị cố định cứng `height: 300px` trong khi nội dung thực tế dài hơn | Chuyển sang `min-height: 320px` để khung co giãn linh hoạt theo nội dung |
| **5** | **Nhãn giảm giá (`.badge`)** | Nhãn "-20%" bị bay ra tít góc trên màn hình hoặc lệch khỏi thẻ | Thẻ `.card` thiếu `position: relative`, khiến `.badge` (`position: absolute; top: 12px; right: 12px;`) căn theo body | Thêm `position: relative;` cho `.card` để nhãn bám chuẩn vào góc trên bên phải của chính thẻ đó |
| **6** | **Ảnh sản phẩm (`.card img`)** | Ảnh giữ nguyên kích cỡ gốc, tràn ra ngoài viền thẻ | `.card img` chỉ có `display: block` mà không giới hạn kích thước theo thẻ cha | Thêm `width: 100%; height: 180px; object-fit: cover; border-radius: 4px;` |
| **7** | **Nút cuộn trang (`.back-to-top`)** | Nút "↑" nằm ở góc TRÊN bên phải màn hình thay vì góc dưới | CSS ban đầu khai báo `top: 24px;` | Sửa thành `bottom: 24px;` và bổ sung `z-index: 200;` |

---

## 3. Đoạn mã CSS đã sửa đổi chi tiết

```css
/* 1. Chuẩn hóa box model */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Đảm bảo 3 thẻ sản phẩm luôn nằm vừa vặn 1 hàng ngang */
}

/* 2. Menu sticky bám đỉnh và nổi trên ảnh */
.site-header {
    background: #2b2b2b;
    position: sticky;
    top: 0;          /* Kích hoạt dính ở đỉnh màn hình */
    z-index: 100;    /* Luôn nổi trên hero */
}

/* 3. Hero làm mốc tọa độ và ảnh phủ kín khung */
.hero {
    position: relative; /* Mốc căn giữa cho overlay */
    height: 360px;
    overflow: hidden;
}
.hero-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;  /* Phủ kín không méo hình */
}

/* 4. Thẻ sản phẩm: Mốc tọa độ cho badge và co giãn linh hoạt */
.card {
    flex: 0 0 calc((100% - 48px) / 3);
    min-height: 320px;  /* Thay cho height: 300px cố định */
    position: relative; /* Mốc cho badge góc trên bên phải */
    background: #fff;
    border: 1px solid #e0d8c8;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

/* 5. Nhãn -20% bám góc phải thẻ */
.badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #c0392b;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 20px;
    z-index: 10;
}

/* 6. Ảnh sản phẩm nằm gọn trong thẻ */
.card img {
    display: block;
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 4px;
}

/* 7. Nút back-to-top ở góc dưới bên phải */
.back-to-top {
    position: fixed;
    bottom: 24px; /* Sửa từ top: 24px */
    right: 24px;
    width: 48px;
    height: 48px;
    background: #2b2b2b;
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 22px;
    text-decoration: none;
    border-radius: 50%;
    z-index: 200;
}
```
