# BÁO CÁO BÀI TẬP ASSIGNMENT 04: JAVASCRIPT CƠ BẢN

- **Học phần:** IT4409 — Công nghệ Web và Dịch vụ trực tuyến (Lập trình Web)
- **Sinh viên:** Hà Tuấn Dũng
- **MSSV:** 20235299
- **Repository:** [https://github.com/Dngk1105/WEB-Asignment](https://github.com/Dngk1105/WEB-Asignment)
- **Live Deployment:** [https://dngk2408.id.vn/assignment-04/](https://dngk2408.id.vn/assignment-04/)

---

# BÀI TẬP 1: LẬP PHIẾU BÁO GIÁ VÀ XÁC NHẬN ĐƠN IN

## 1a. Điền vào chỗ trống trong file `js/bai-a-bao-gia.js`

| STT | Vị trí | Đáp án điền | Giải thích chi tiết |
| :---: | :---: | :--- | :--- |
| 1 | `___(1)___` | `const` | Khai báo hằng số `TEN_XUONG` không bao giờ được gán lại giá trị. |
| 2 | `___(2)___` | `let` | Biến `soLuong` có phạm vi khối (block scope) và được cập nhật lại giá trị ở phần sau. |
| 3 | `___(3)___` | `300200` | Toán tử `+` giữa số (`300`) và chuỗi (`"200"`) kích hoạt ép kiểu nối chuỗi (coercion). |
| 4 | `___(4)___` | `true` | So sánh lỏng `==` tự động ép kiểu chuỗi `"200"` thành số `200` trước khi so sánh giá trị. |
| 5 | `___(5)___` | `false` | So sánh nghiêm ngặt `===` kiểm tra cả kiểu dữ liệu (`string` khác `number`). |
| 6 | `___(6)___` | `let` | Biến `giamGia` được gán lại trong khối `if` và phải truy cập được sau khối `if`. |
| 7 | `___(7)___` | `ReferenceError` | `lyDo` khai báo bằng `const` trong khối `if` nên ra ngoài block sẽ không tồn tại. |
| 8 | `___(8)___` | `undefined` | Biến `var` được hoisted lên đầu phạm vi và tự động gán giá trị khởi tạo `undefined`. |
| 9 | `___(9)___` | `báo lỗi ReferenceError (Cannot access 'maDon' before initialization)` | Biến `let` được hoisted nhưng rơi vào Temporal Dead Zone (TDZ), truy cập trước khi gán sẽ ném lỗi `ReferenceError`. |
| 10 | `___(10)___` | `==` | Trong JS, biểu thức `ghiChu == null` kiểm tra đúng cả 2 trường hợp `null` và `undefined`, đồng thời trả về `false` với `""` và `0`. |
| 11 | `___(11)___` | `500` | Object là kiểu tham chiếu; `donKhach` và `donMau` cùng trỏ đến 1 vùng nhớ, sửa thuộc tính qua biến này sẽ làm biến kia đổi theo. |
| 12 | `___(12)___` | `true` | Cả hai biến cùng trỏ vào cùng một tham chiếu bộ nhớ. |
| 13 | `___(13)___` | `(B)` | `donMau` khai báo `const`, cho phép sửa thuộc tính bên trong (`(A)`) nhưng cấm gán lại object mới (`(B)` ném `TypeError`). |
| 14 | `___(14)___` | `{` | Dấu mở ngoặc `{` phải đặt ngay sau `return` để tránh cơ chế ASI (Automatic Semicolon Insertion). |
| 15 | `___(15)___` | `undefined` | Nếu đặt `return` riêng một dòng, JS tự chèn dấu `;` thành `return;`, hàm trả về `undefined`. |
| 16 | `___(16)___` | `` ` `` (dấu backtick) | Dấu bao chuỗi Template Literal cho phép xuống dòng và chèn biểu thức. |
| 17 | `___(17)___` | `${soLuong}` | Cú pháp nội suy biến `soLuong` vào trong template literal. |
| 18 | `___(18)___` | `log` | Hàm `console.log()` in văn bản ra tab Console. |
| 19 | `___(19)___` | `table` | Hàm `console.table()` hiển thị danh sách object trực quan dưới dạng bảng. |

---

## 1b. Viết code 4 hàm trong file `js/bai-b-phieu-in.js`

### Đoạn mã hoàn chỉnh:

```javascript
// 1. Trả về tổng tiền (kiểu number) = soLuong × donGia + VAT + phiGiao.
function tinhTong(soLuong, donGia, phiGiao) {
	const sl = Number(soLuong);
	const dg = Number(donGia);
	const pg = Number(phiGiao);
	const tienHang = sl * dg;
	const vat = (tienHang * VAT_PHAN_TRAM) / 100;
	return tienHang + vat + pg;
}

// 2. Trả về chuỗi mô tả số lần in lại.
function moTaInLai(soLan) {
	if (soLan == null) {
		return "Chưa rõ";
	}
	if (soLan === 0) {
		return "In lần đầu";
	}
	if (soLan > 0) {
		return `In lại lần ${soLan}`;
	}
	return "Chưa rõ";
}

// 3. Trả về chuỗi phiếu xác nhận gồm đúng 5 dòng.
function inPhieu(don) {
	const tongTien = tinhTong(don.soLuong, don.donGia, don.phiGiao);
	const ghiChu = moTaInLai(don.soLanIn);
	return `=== ${TEN_XUONG.toUpperCase()} ===
Mã đơn : ${don.ma}
Khách  : ${don.khach.ten} (${don.khach.sdt})
Tổng   : ${tongTien} đ
Ghi chú: ${ghiChu}`;
}

// 4. Trả về một đơn MỚI để in lại; đơn cũ không được thay đổi.
function taoDonInLai(donCu, sdtMoi) {
	return {
		...donCu,
		khach: {
			...donCu.khach,
			sdt: sdtMoi
		},
		soLanIn: (typeof donCu.soLanIn === "number" ? donCu.soLanIn : Number(donCu.soLanIn) || 0) + 1
	};
}
```

### Giải thích kỹ thuật:
- **`tinhTong`:** Ép kiểu các đối số đầu vào (chuỗi số form) sang kiểu số thông qua `Number()`, tính tiền hàng, thuế VAT theo hằng `VAT_PHAN_TRAM = 10` và cộng phí giao, trả về kết quả kiểu `number`.
- **`moTaInLai`:** Dùng so sánh lỏng `soLan == null` để bắt chính xác cả `null` và `undefined`, phân biệt rạch ròi với giá trị `0` ("In lần đầu") và số dương `n` ("In lại lần n").
- **`inPhieu`:** Sử dụng Template Literal ghép 5 dòng chính xác từng khoảng trắng căn lề của các dấu `:`, gọi `TEN_XUONG.toUpperCase()`, `tinhTong(...)` và `moTaInLai(don.soLanIn)`.
- **`taoDonInLai`:** Áp dụng nguyên lý bất biến (Immutability) với toán tử Spread (`...`) để sao chép sâu (deep copy) đối tượng con `khach`, cập nhật số điện thoại mới và tăng `soLanIn` lên 1 mà không làm thay đổi hay phụ thuộc vào `donCu`.

### Kết quả kiểm thử: **12/12 Testcases Đạt (100%)**

---

# BÀI TẬP 2: TRANG TIN TỨC JSON VÀ GIỎ HÀNG OOP

## 2a. Điền vào chỗ trống trong file `js/bai-a-tin-tuc.js`

| STT | Vị trí | Đáp án điền | Giải thích chi tiết |
| :---: | :---: | :--- | :--- |
| 1 | `___(1)___` | `parse` | `JSON.parse()` phân tích cú pháp chuỗi JSON thành mảng đối tượng JavaScript. |
| 2 | `___(2)___` | `push` | Thêm phần tử mới vào cuối mảng (`id: 6`). |
| 3 | `___(3)___` | `unshift` | Thêm phần tử mới vào đầu mảng (`id: 0`). |
| 4 | `___(4)___` | `pop` | Xóa và lấy ra phần tử nằm ở cuối mảng (`id: 6`). |
| 5 | `___(5)___` | `6` | Thuộc tính `id` của bài viết vừa bị lấy ra bằng `pop()`. |
| 6 | `___(6)___` | `shift` | Xóa và lấy ra phần tử nằm ở đầu mảng (`id: 0`). |
| 7 | `___(7)___` | `5` | Độ dài mảng sau khi xóa phần tử đầu và cuối (về lại 5 bài ban đầu). |
| 8 | `___(8)___` | `["tac gia"]` | Dùng cú pháp ngoặc vuông để tạo thuộc tính có dấu cách trong tên khóa. |
| 9 | `___(9)___` | `delete` | Toán tử `delete` dùng để xóa một thuộc tính ra khỏi object. |
| 10 | `___(10)___` | `undefined` | Thuộc tính đã bị xóa hoàn toàn nên truy cập vào trả về `undefined`. |
| 11 | `___(11)___` | `[GHIM] Mẫu thiệp cưới mùa thu` | `baiGhim` và `dsBai[1]` cùng trỏ đến 1 object, sửa tiêu đề qua biến này thì mảng đổi theo. |
| 12 | `___(12)___` | `filter` | Lọc các bài viết đã đăng (`bai.draft === false`). |
| 13 | `___(13)___` | `4` | Có đúng 4 bài viết đã đăng (`id`: 1, 2, 3, 5; bài 4 là bản nháp `draft: true`). |
| 14 | `___(14)___` | `map` | Ánh xạ mảng đối tượng thành mảng chuỗi tiêu đề mới. |
| 15 | `___(15)___` | `toUpperCase` | Chuyển đổi toàn bộ ký tự tiêu đề sang chữ in hoa. |
| 16 | `___(16)___` | `bai.views` | Thuộc tính lượt xem được cộng dồn vào biến tích lũy `tong`. |
| 17 | `___(17)___` | `0` | Giá trị ban đầu của biến tích lũy trong phương thức `reduce`. |
| 18 | `___(18)___` | `2600` | Tổng lượt xem của 4 bài đã đăng: $320 + 870 + 540 + 870 = 2600$. |
| 19 | `___(19)___` | `(B)` | Nếu bỏ `0`, phần tử đầu tiên (Object) bị ép sang chuỗi thành `"[object Object]870..."`. |
| 20 | `___(20)___` | `>` | So sánh `bai.views > max.views`: chỉ lấy bài sau nếu lượt xem lớn hơn hẳn, bằng nhau giữ bài trước. |
| 21 | `___(21)___` | `2` | Cả bài #2 và #5 đều đạt 870 views, nhưng bài #2 đứng trước nên được giữ lại. |
| 22 | `___(22)___` | `undefined` | Thân hàm arrow có cặp ngoặc nhọn `{ ... }` nhưng thiếu `return`, mặc định trả về `undefined`. |
| 23 | `___(23)___` | `of` | Cú pháp `for...of` lặp qua các giá trị phần tử trong mảng thẻ `bai.tags`. |
| 24 | `___(24)___` | `the` | Tên biến chứa giá trị tag hiện tại làm khóa tra cứu trong object `demThe`. |
| 25 | `___(25)___` | `2` | Tag `"mau moi"` xuất hiện 2 lần (ở bài viết #2 và #5). |
| 26 | `___(26)___` | `constructor` | Phương thức khởi tạo instance của class trong ES6. |
| 27 | `___(27)___` | `this` | Từ khóa `this` tham chiếu đến đối tượng hiện hành của class `BaiViet`. |
| 28 | `___(28)___` | `new` | Toán tử tạo đối tượng mới từ class `BaiViet`. |
| 29 | `___(29)___` | `stringify` | `JSON.stringify()` chuyển đổi đối tượng JavaScript thành chuỗi định dạng JSON. |
| 30 | `___(30)___` | `không` | `JSON.stringify()` loại bỏ tất cả các hàm/phương thức, chỉ giữ lại dữ liệu thuộc tính. |

---

## 2b. Viết code `class GioHang` và hàm `napGioHang` trong `js/bai-b-gio-hang.js`

### Đoạn mã hoàn chỉnh:

```javascript
class GioHang {
	constructor() {
		// Mỗi dòng của giỏ là một object { id, ten, loai, gia, soLuong }.
		this.dsDong = [];
	}

	// 1. Thêm sản phẩm; trả về true nếu thêm được, false nếu soLuong không hợp lệ.
	them(sanPham, soLuong) {
		if (typeof soLuong !== "number" || !Number.isInteger(soLuong) || soLuong <= 0) {
			return false;
		}
		const dong = this.dsDong.find(d => d.id === sanPham.id);
		if (dong) {
			dong.soLuong += soLuong;
		} else {
			this.dsDong.push({
				id: sanPham.id,
				ten: sanPham.ten,
				loai: sanPham.loai,
				gia: sanPham.gia,
				soLuong: soLuong
			});
		}
		return true;
	}

	// 2. Xoá dòng có id tương ứng; trả về true nếu có xoá, false nếu không tìm thấy.
	xoa(id) {
		const viTri = this.dsDong.findIndex(d => d.id === id);
		if (viTri !== -1) {
			this.dsDong.splice(viTri, 1);
			return true;
		}
		return false;
	}

	// 3. Tổng tiền cả giỏ.
	tongTien() {
		return this.dsDong.reduce((tong, d) => tong + d.gia * d.soLuong, 0);
	}

	// 4. Object thống kê: { "<loai>": tổng tiền của loại đó, ... }.
	thongKeTheoLoai() {
		const tk = {};
		for (const d of this.dsDong) {
			tk[d.loai] = (tk[d.loai] || 0) + d.gia * d.soLuong;
		}
		return tk;
	}

	// 5. Dòng có thành tiền lớn nhất (bản sao, có thêm thanhTien); null nếu giỏ rỗng.
	dongDatNhat() {
		if (this.dsDong.length === 0) {
			return null;
		}
		let maxDong = this.dsDong[0];
		let maxTien = maxDong.gia * maxDong.soLuong;
		for (let i = 1; i < this.dsDong.length; i++) {
			const tien = this.dsDong[i].gia * this.dsDong[i].soLuong;
			if (tien > maxTien) {
				maxTien = tien;
				maxDong = this.dsDong[i];
			}
		}
		return {
			id: maxDong.id,
			ten: maxDong.ten,
			loai: maxDong.loai,
			gia: maxDong.gia,
			soLuong: maxDong.soLuong,
			thanhTien: maxTien
		};
	}

	// 6. Mảng BẢN SAO các dòng, mỗi dòng có thêm thuộc tính thanhTien.
	layDanhSach() {
		return this.dsDong.map(d => ({
			id: d.id,
			ten: d.ten,
			loai: d.loai,
			gia: d.gia,
			soLuong: d.soLuong,
			thanhTien: d.gia * d.soLuong
		}));
	}

	// 7. Chuỗi JSON của mảng các dòng.
	xuatJSON() {
		const mang = this.dsDong.map(d => ({
			id: d.id,
			ten: d.ten,
			loai: d.loai,
			gia: d.gia,
			soLuong: d.soLuong
		}));
		return JSON.stringify(mang);
	}
}

// 8. Tạo lại một GioHang từ chuỗi JSON do xuatJSON() sinh ra.
function napGioHang(chuoiJSON) {
	const gioMoi = new GioHang();
	const mang = JSON.parse(chuoiJSON);
	if (Array.isArray(mang)) {
		gioMoi.dsDong = mang.map(d => ({
			id: d.id,
			ten: d.ten,
			loai: d.loai,
			gia: d.gia,
			soLuong: d.soLuong
		}));
	}
	return gioMoi;
}
```

### Giải thích kỹ thuật:
- **`them`:** Kiểm tra nghiêm ngặt `typeof soLuong === "number" && Number.isInteger(soLuong) && soLuong > 0`. Trả về `false` nếu dữ liệu chuỗi (như `"50"`), số âm, số thập phân hoặc `null`/`undefined`. Tạo object độc lập tránh tham chiếu trực tiếp đến `sanPham`.
- **`xoa`:** Sử dụng `findIndex` và `splice` để xóa đúng phần tử theo `id`.
- **`thongKeTheoLoai` & `tongTien`:** Duyệt mảng tính tổng tiền theo phân loại và toàn giỏ.
- **`dongDatNhat` & `layDanhSach`:** Luôn tạo bản sao (deep clone đối tượng) kèm trường `thanhTien`, đảm bảo bên ngoài sửa chữa không làm biến đổi dữ liệu lưu trong giỏ hàng.
- **`xuatJSON` & `napGioHang`:** Tuần tự hóa và giải tuần tự hóa mảng đúng 5 trường thông tin theo hợp đồng JSON.

### Kết quả kiểm thử: **20/20 Testcases Đạt (100%)**, ô Giỏ hàng hiển thị `Tổng: 325000 đ`.

---

# BÀI TẬP 3: THƯ VIỆN ẢNH TƯƠNG TÁC VÀ ĐĂNG TIN NHANH

## 3a. Điền vào chỗ trống trong file `js/bai-a-gallery.js`

| STT | Vị trí | Đáp án điền | Giải thích chi tiết |
| :---: | :---: | :--- | :--- |
| 1 | `___(1)___` | `querySelector` | Lấy phần tử DOM đầu tiên khớp selector `#gallery > div > img`. |
| 2 | `___(2)___` | `querySelectorAll` | Lấy danh sách NodeList tất cả 6 ảnh nhỏ bên trong `#gallery ul li img`. |
| 3 | `___(3)___` | `getElementById` | Lấy phần tử ô tìm kiếm theo ID `"o-tim-kiem"`. |
| 4 | `___(4)___` | `6` | Số lượng phần tử `img` nhỏ trong gallery. |
| 5 | `___(5)___` | `3` | `firstChild` của thẻ `ul` là Text node (ký tự xuống dòng thụt lề), có `nodeType = 3`. |
| 6 | `___(6)___` | `13` | Tổng `childNodes` gồm 6 thẻ `<li>` và 7 Text nodes xen giữa. |
| 7 | `___(7)___` | `parentNode` | Phần tử cha trực tiếp của thẻ `img` là thẻ `li` (`nodeName` là `"LI"`). |
| 8 | `___(8)___` | `createElement` | Tạo mới phần tử đoạn văn `<p>` trong DOM. |
| 9 | `___(9)___` | `textContent` | Gán văn bản thuần an toàn, ngăn trình duyệt hiểu nhầm thẻ HTML. |
| 10 | `___(10)___` | `appendChild` | Gắn phần tử chú thích vào cuối khối `div` chứa ảnh lớn. |
| 11 | `___(11)___` | `!==` | Kiểm tra nếu click không trúng thẻ ảnh `IMG` thì bỏ qua. |
| 12 | `___(12)___` | `return` | Dừng thực thi hàm khi click ra ngoài ảnh. |
| 13 | `___(13)___` | `target` | `e.target` trỏ đến chính xác phần tử `img` nhận sự kiện click. |
| 14 | `___(14)___` | `of` | Lặp qua từng phần tử ảnh nhỏ bằng vòng lặp `for...of`. |
| 15 | `___(15)___` | `className` | Gán class `"dang-chon"` cho thẻ `li` cha để tạo viền xanh nổi bật. |
| 16 | `___(16)___` | `addEventListener` | Đăng ký 1 listener duy nhất trên thẻ `ul` (Kỹ thuật Event Delegation). |
| 17 | `___(17)___` | `doiAnh` | Truyền tham chiếu hàm xử lý sự kiện. |
| 18 | `___(18)___` | `(B)` | Gọi `doiAnh()` sẽ kích hoạt hàm ngay lập tức khi nạp trang với `e === undefined` và ném `TypeError`. |
| 19 | `___(19)___` | `focus` | Sự kiện xảy ra khi người dùng nhấp chuột hoặc focus vào ô tìm kiếm. |
| 20 | `___(20)___` | `removeEventListener` | Gỡ bỏ trình lắng nghe sự kiện đã đăng ký trên `khungAnhNho`. |
| 21 | `___(21)___` | `doiAnh` | Hàm callback cần gỡ bỏ. |
| 22 | `___(22)___` | `click` | Tên kiểu sự kiện (`e.type`). |
| 23 | `___(23)___` | `nut-khoa` | ID của nút được bấm (`e.target.id`). |
| 24 | `___(24)___` | `không` | Hàm mũi tên ẩn danh tạo ra tham chiếu bộ nhớ mới, nên `removeEventListener` không thể khớp để gỡ. |
| 25 | `___(25)___` | `prepend` | Chèn phần tử mới vào vị trí đầu tiên của danh sách bài viết. |
| 26 | `___(26)___` | `hiện NGUYÊN cả cặp thẻ <b>…</b>` | Vì dùng `textContent`, cặp thẻ `<b>` không được render thành chữ đậm mà hiển thị dạng text thô. |
| 27 | `___(27)___` | `3` | Ban đầu có 2 bài, sau khi `prepend` thêm 1 bài thì danh sách có 3 bài. |

---

## 3b. Viết code F1 – F5 trong file `js/bai-b-tin-nhanh.js`

### Đoạn mã hoàn chỉnh:

```javascript
// ---------- ĐÃ CHO SẴN (không sửa) ----------
// Chặn việc gửi form tìm kiếm khi nhấn Enter, để trang không bị tải lại.
document.querySelector("#searchbar form").addEventListener("submit", (e) => e.preventDefault());

// ---------- PHẦN BẠN VIẾT ----------

const oTimKiem = document.getElementById("o-tim-kiem");
const listTin = document.getElementById("list");
const boDem = document.getElementById("bo-dem");
const khongThay = document.getElementById("khong-thay");
const tinTieuDe = document.getElementById("tin-tieu-de");
const tinNoiDung = document.getElementById("tin-noi-dung");
const nutDang = document.getElementById("nut-dang");
const baoLoi = document.getElementById("bao-loi");

// Hàm lọc tin và cập nhật bộ đếm (F1, F2, F3)
function capNhatLocVaBoDem() {
	const tuKhoa = oTimKiem.value;
	const tuKhoaLower = tuKhoa.toLowerCase();
	const cacTin = Array.from(listTin.querySelectorAll("li"));
	let soHien = 0;

	for (const tin of cacTin) {
		const h3Text = tin.querySelector("h3") ? tin.querySelector("h3").textContent : "";
		const pText = tin.querySelector("p") ? tin.querySelector("p").textContent : "";
		const vanBan = (h3Text + " " + pText).toLowerCase();

		if (tuKhoa === "" || vanBan.includes(tuKhoaLower)) {
			tin.classList.remove("an");
			soHien++;
		} else {
			tin.classList.add("an");
		}
	}

	boDem.textContent = `Đang hiển thị ${soHien}/${cacTin.length} tin`;

	if (soHien === 0) {
		khongThay.classList.remove("an");
		khongThay.textContent = `Không tìm thấy tin nào cho "${tuKhoa}"`;
	} else {
		khongThay.classList.add("an");
	}
}

// F2: Sự kiện keyup trên #o-tim-kiem
oTimKiem.addEventListener("keyup", capNhatLocVaBoDem);

// F4: Nút "Read more >>" / "Thu gọn <<" — MỘT trình lắng nghe đặt trên #list
listTin.addEventListener("click", (e) => {
	if (e.target.tagName === "BUTTON" && e.target.classList.contains("more")) {
		const nut = e.target;
		const doanVan = nut.parentElement.querySelector("p");
		if (doanVan) {
			if (doanVan.classList.contains("day-du")) {
				doanVan.classList.remove("day-du");
				nut.textContent = "Read more >>";
			} else {
				doanVan.classList.add("day-du");
				nut.textContent = "Thu gọn <<";
			}
		}
	}
});

// F5: Nút #nut-dang: kiểm tra dữ liệu, tạo <li> mới, chèn vào đầu #list
nutDang.addEventListener("click", () => {
	const tieuDe = tinTieuDe.value.trim();
	const noiDung = tinNoiDung.value.trim();

	if (tieuDe === "" || noiDung === "") {
		baoLoi.textContent = "Vui lòng nhập đủ tiêu đề và nội dung.";
		return;
	}

	baoLoi.textContent = "";

	const li = document.createElement("li");

	const span = document.createElement("span");
	span.className = "time";
	span.textContent = homNay();

	const h3 = document.createElement("h3");
	h3.textContent = tinTieuDe.value;

	const p = document.createElement("p");
	p.textContent = tinNoiDung.value;

	const btn = document.createElement("button");
	btn.type = "button";
	btn.className = "more";
	btn.textContent = "Read more >>";

	li.append(span, h3, p, btn);
	listTin.prepend(li);

	tinTieuDe.value = "";
	tinNoiDung.value = "";

	capNhatLocVaBoDem();
});

// Chạy khởi tạo ngay khi tải trang (F1)
capNhatLocVaBoDem();
```

### Giải thích kỹ thuật:
- **F1 (Bộ đếm) & F2 (Lọc tin):** Lắng nghe sự kiện `keyup` trên `#o-tim-kiem`. So sánh chuỗi không phân biệt hoa thường (`toLowerCase()`) đối với nội dung trong cả thẻ `h3` và `p`. Gán hoặc bỏ class `an` cho thẻ `li` tương ứng, đồng thời cập nhật dòng chữ `Đang hiển thị x/y tin` trên thẻ `#bo-dem`.
- **F3 (Thông báo không tìm thấy):** Khi không có tin nào khớp (`soHien === 0`), gỡ bỏ class `an` trên thẻ `#khong-thay` và gán nội dung bằng `textContent` để giữ nguyên văn các ký tự đặc biệt (kể cả thẻ HTML như `<b>x</b>`).
- **F4 (Mở rộng / Thu gọn):** Đăng ký đúng 1 sự kiện `click` duy nhất trên `#list` (Event Delegation). Kiểm tra nếu phần tử click là `button.more` thì toggle class `day-du` trên thẻ `<p>` anh em và chuyển đổi văn bản nút giữa `"Read more >>"` và `"Thu gọn <<"`. Click vào tiêu đề hay đoạn văn không gây ảnh hưởng.
- **F5 (Đăng tin nhanh):** Kiểm tra form rỗng (báo lỗi vào `#bao-loi`). Tạo cấu trúc thẻ `li` đầy đủ gồm `span.time` (lấy ngày qua hàm `homNay()`), `h3`, `p`, `button.more`. Sử dụng `textContent` để chống chèn mã độc XSS. Chèn vào đầu `#list` bằng `prepend`, xóa form và đồng bộ lại bộ lọc ngay lập tức.

### Kết quả kiểm thử: **18/18 Testcases Đạt (100%)**.

---

# BẢNG TỔNG KẾT TOÀN BỘ KẾT QUẢ KIỂM THỬ ASSIGNMENT 04

| Bài tập | Mô tả | File kiểm tra | Số testcases | Kết quả |
| :--- | :--- | :--- | :---: | :---: |
| **Bài tập 1** | Phiếu báo giá & Phiếu in | `assignment-04/bai-tap-1/js/kiem-tra.js` | 12 / 12 | ✅ 100% Đạt |
| **Bài tập 2** | Tin tức JSON & Giỏ hàng OOP | `assignment-04/bai-tap-2/js/kiem-tra.js` | 20 / 20 | ✅ 100% Đạt |
| **Bài tập 3** | Gallery ảnh & Đăng tin nhanh | `assignment-04/bai-tap-3/js/kiem-tra.js` | 18 / 18 | ✅ 100% Đạt |
| **TỔNG CỘNG** | **Toàn bộ Assignment 04** | **3 bài tập** | **50 / 50** | **✅ 100% Đạt** |
