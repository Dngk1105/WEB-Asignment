# BÁO CÁO XÂY DỰNG PROMPT GENAI VÀ SỬA LỖI CSS — BÀI TẬP 2 (ASSIGNMENT 3)
**Học phần:** IT4409 - Lập trình Web  
**Sinh viên thực hiện:** Hà Tuấn Dũng  
**Phương pháp:** Thiết kế Prompt chuyên sâu cho GenAI kết hợp thẩm định và bảo vệ code

---

## 1. Bối cảnh và Thách thức kỹ thuật của Bài tập 2
Khác với Bài tập 1, mã nguồn của Bài tập 2 nhìn qua trông rất hoàn chỉnh nhưng thực chất chứa **3 cạm bẫy kỹ thuật cực kỳ tinh vi** về CSS Box Model và Positioning. Đồng thời, file CSS có chứa những đoạn code trông "lạ/thừa" nhưng thực tế lại đang đúng và có chủ đích thiết kế.
- **Rủi ro khi dùng AI thông thường:** Các mô hình AI nếu không được chỉ dẫn kỹ lưỡng thường mắc 2 lỗi:
  1. Bỏ qua lỗi tinh vi (như `overflow-x: hidden` trên thẻ cha làm triệt tiêu `position: sticky` của con, hoặc `z-index` của ảnh che `badge`).
  2. Tự ý xóa hoặc "sửa nhầm" các đoạn code đúng (như hiệu ứng thẻ sản phẩm đè lên hero `margin: -48px auto 48px`).

---

## 2. Câu Prompt GenAI chuyên nghiệp đã thiết kế

```markdown
Bạn là một chuyên gia lập trình Front-end cấp cao (Senior CSS Specialist).
Tôi có một trang web khuyến mãi Tết 2026 đang gặp một số lỗi CSS tinh vi về Box Model và Positioning. 
Mã nguồn HTML đã chuẩn semantic và KHÔNG ĐƯỢC PHÉP THAY ĐỔI.

Dưới đây là mã nguồn HTML (`trang.html`) và CSS (`style-loi.css`):
assignment-03\bai-tap-2\trang.html
assignment-03\bai-tap-2\style-loi-goc.css

### YÊU CẦU HIỂN THỊ ĐÚNG CỦA BÀI TOÁN:
Xem lại mô tả trong 2 file 
assignment-03\bai-tap-1\style_old.css
assignment-03\bai-tap-2\style-loi-goc.css

### ĐẦU RA YÊU CẦU:
1. Chỉ ra chính xác các dòng code lỗi, giải thích cơ chế trình duyệt dẫn đến lỗi đó.
2. Chỉ ra các đoạn code đúng cần được bảo vệ.
3. Cung cấp toàn bộ file `style.css` sau khi sửa lỗi sạch sẽ, giữ nguyên các đoạn code đúng.
```

---

## 3. Phân tích kết quả thực thi và giải trình chi tiết

### Bẫy lỗi 1: `position: sticky` bị vô hiệu hóa bởi `overflow-x: hidden`
- **Vị trí code:** `.page { overflow-x: hidden; }`
- **Nguyên lý CSS:** Theo chuẩn W3C, một phần tử `position: sticky` sẽ tìm tổ tiên gần nhất có cơ chế cuộn (scroll container). Khi thẻ cha `.page` có `overflow-x: hidden`, nó tạo ra một overflow context mới và triệt tiêu khả năng bám dính theo viewport trình duyệt.
- **Khắc phục:** Đổi sang `.page { overflow-x: clip; }`. Thuộc tính `clip` ngăn tràn màn hình ngang hiệu quả nhưng không tạo scroll container, cho phép `position: sticky` hoạt động hoàn hảo.

### Bẫy lỗi 2: `.card` ghi đè `box-sizing: content-box` gây rớt hàng
- **Vị trí code:** `.card { box-sizing: content-box; }`
- **Nguyên lý CSS:** Toàn cục `*` đã có `box-sizing: border-box`. Tuy nhiên `.card` lại bị cố tình ghi đè `content-box`. Do đó `padding: 16px` và `border: 1px` ở hai bên khiến độ rộng thực tế của mỗi thẻ lớn hơn `calc((100% - 48px) / 3)`, làm tổng bề ngang 3 thẻ vượt quá 100% của flex container, dẫn tới việc thẻ thứ 3 bị rớt dòng khi co hẹp cửa sổ.
- **Khắc phục:** Đổi thành `box-sizing: border-box;`.

### Bẫy lỗi 3: Nhãn `.badge` bị ảnh che khuất do Stacking Context
- **Vị trí code:** `.card img { position: relative; z-index: 2; }` và `.badge { position: absolute; ... }` (thiếu `z-index`).
- **Nguyên lý CSS:** Vì `.card img` có `position: relative` và `z-index: 2`, nó tạo một stacking context cao hơn `.badge` (vốn có `z-index: auto`). Mặc dù nhãn nằm ở góc trên bên phải, nó bị ảnh sản phẩm đè lên và che mất.
- **Khắc phục:** Bổ sung `z-index: 10;` cho `.badge`.

### Những đoạn code đúng đã được bảo vệ thành công
1. `.products { margin: -48px auto 48px; border-radius: 16px 16px 0 0; }`: Tạo hiệu ứng bento card hiện đại, kéo khối sản phẩm đè lên ảnh hero.
2. `.hero-bg { transform: scale(1.08); }`: Tạo hiệu ứng chiều sâu không gian cho ảnh nền hero.
