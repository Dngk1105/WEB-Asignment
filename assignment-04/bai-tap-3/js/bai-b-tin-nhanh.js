/* BÀI B — VIẾT CODE: Lọc tin và đăng tin nhanh (news.html)
   Viết code theo đặc tả.
   Không sửa news.html, không sửa css; chỉ viết JavaScript trong file này. */

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
