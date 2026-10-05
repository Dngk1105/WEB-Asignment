# Assignment 3: CSS — Chẩn đoán & Sửa lỗi Bố cục Trang Khuyến Mãi Tết 2026

**Môn học:** IT4409 - Lập trình Web  
**Sinh viên:** Hà Tuấn Dũng  
**Repository:** [Dngk1105/WEB-Asignment](https://github.com/Dngk1105/WEB-Asignment)  
**Live Demo:** [https://dngk2408.id.vn/assignment-03/](https://dngk2408.id.vn/assignment-03/)

---

## 1. Yêu cầu đề bài
Một lập trình viên đã dựng xong phần HTML (đúng cấu trúc nội dung và semantic) và viết CSS cho trang khuyến mãi Tết, nhưng đang có lỗi CSS.
Yêu cầu hiển thị đúng của trang web là:
1. Thanh menu trên cùng dính lại khi cuộn (`sticky`) và luôn nằm trên ảnh.
2. Ảnh hero phủ kín khung, tiêu đề nằm chính giữa ảnh.
3. Ba thẻ sản phẩm xếp một hàng ngang; mỗi thẻ có nhãn "-20%" ở góc trên bên phải của chính thẻ đó; ảnh và chữ nằm gọn trong thẻ.
4. Nút "↑" nổi cố định ở góc dưới bên phải màn hình khi cuộn.
5. **Không thay đổi phần HTML.**

---

## 2. Cấu trúc thư mục Assignment 3
```
assignment-03/
├── index.html                  # Dashboard tổng quan và bảng so sánh Assignment 3
├── README.md                   # Tài liệu báo cáo Assignment 3
│
├── bai-tap-1/                  # Bài tập 1: Tự sửa lỗi (không dùng AI)
│   ├── index.html              # Trang web chạy với CSS đã sửa
│   ├── trang.html              # File HTML gốc (giữ nguyên không sửa)
│   ├── style.css               # CSS đã sửa hoàn thiện
│   ├── style-loi.css           # CSS đã sửa (để trang.html tự ăn style)
│   ├── style-loi-goc.css       # Bản CSS gốc bị lỗi để đối chứng
│   ├── images/                 # Ảnh sản phẩm và hero
│   └── phan-tich-loi.md        # Báo cáo chi tiết phân tích lỗi
│
└── bai-tap-2/                  # Bài tập 2: Sửa lỗi dùng Prompt GenAI
    ├── index.html              # Trang web chạy với CSS đã sửa
    ├── trang.html              # File HTML gốc (giữ nguyên không sửa)
    ├── style.css               # CSS đã sửa theo kết quả GenAI
    ├── style-loi.css           # CSS đã sửa
    ├── style-loi-goc.css       # Bản CSS gốc bị lỗi để đối chứng
    ├── images/                 # Ảnh sản phẩm và hero
    └── prompt-ai.md            # Bộ Prompt chuyên gia & báo cáo giải trình
```

---

## 3. Liên kết nộp bài & Trải nghiệm trực tiếp
- **Hub tổng quan:** [https://dngk2408.id.vn/assignment-03/](https://dngk2408.id.vn/assignment-03/)
- **Bài tập 1 (Tự sửa lỗi):** [https://dngk2408.id.vn/assignment-03/bai-tap-1/](https://dngk2408.id.vn/assignment-03/bai-tap-1/)
  - [Báo cáo phân tích kỹ thuật Bài tập 1](./bai-tap-1/phan-tich-loi.md)
- **Bài tập 2 (Prompt GenAI):** [https://dngk2408.id.vn/assignment-03/bai-tap-2/](https://dngk2408.id.vn/assignment-03/bai-tap-2/)
  - [Bộ Prompt GenAI & Báo cáo kỹ thuật Bài tập 2](./bai-tap-2/prompt-ai.md)
