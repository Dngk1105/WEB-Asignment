/**
 * Form Validation & Handling for register.html
 * Blakletterpress - Báo chí & Tin tức
 */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    if (!form) return;

    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const phoneInput = document.getElementById('phone');
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');
    const termsInput = document.getElementById('terms');
    const messageBox = document.getElementById('formAlert');

    // Tự động tính độ tuổi khi chọn ngày sinh (nếu người dùng chưa điền)
    if (dobInput && ageInput) {
        dobInput.addEventListener('change', function () {
            if (this.value) {
                const birthDate = new Date(this.value);
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                if (age >= 0 && age <= 120) {
                    ageInput.value = age;
                    clearError(ageInput);
                }
            }
        });
    }

    // Xóa lỗi khi người dùng gõ
    [fullnameInput, emailInput, passwordInput, phoneInput, dobInput, ageInput, termsInput].forEach(function (input) {
        if (!input) return;
        input.addEventListener('input', function () {
            clearError(input);
            if (messageBox) messageBox.style.display = 'none';
        });
    });

    // Xử lý sự kiện submit form
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;
        let firstInvalidInput = null;

        // 1. Kiểm tra Họ và tên
        const fullnameVal = fullnameInput.value.trim();
        if (fullnameVal.length < 2) {
            showError(fullnameInput, 'Vui lòng nhập họ và tên (tối thiểu 2 ký tự)');
            isValid = false;
            if (!firstInvalidInput) firstInvalidInput = fullnameInput;
        } else {
            clearError(fullnameInput);
        }

        // 2. Kiểm tra Email
        const emailVal = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
            showError(emailInput, 'Email không đúng định dạng (ví dụ: ban@example.com)');
            isValid = false;
            if (!firstInvalidInput) firstInvalidInput = emailInput;
        } else {
            clearError(emailInput);
        }

        // 3. Kiểm tra Mật khẩu (tối thiểu 8 ký tự)
        const passwordVal = passwordInput.value;
        if (passwordVal.length < 8) {
            showError(passwordInput, 'Mật khẩu phải chứa ít nhất 8 ký tự');
            isValid = false;
            if (!firstInvalidInput) firstInvalidInput = passwordInput;
        } else {
            clearError(passwordInput);
        }

        // 4. Kiểm tra Số điện thoại (10 chữ số, bắt đầu bằng 0)
        const phoneVal = phoneInput.value.trim();
        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(phoneVal)) {
            showError(phoneInput, 'Số điện thoại phải gồm đúng 10 số và bắt đầu bằng số 0');
            isValid = false;
            if (!firstInvalidInput) firstInvalidInput = phoneInput;
        } else {
            clearError(phoneInput);
        }

        // 5. Kiểm tra Ngày sinh
        const dobVal = dobInput.value;
        if (!dobVal) {
            showError(dobInput, 'Vui lòng chọn ngày sinh');
            isValid = false;
            if (!firstInvalidInput) firstInvalidInput = dobInput;
        } else {
            const birthDate = new Date(dobVal);
            const today = new Date();
            if (birthDate > today) {
                showError(dobInput, 'Ngày sinh không thể lớn hơn ngày hiện tại');
                isValid = false;
                if (!firstInvalidInput) firstInvalidInput = dobInput;
            } else {
                clearError(dobInput);
            }
        }

        // 6. Kiểm tra Độ tuổi (1 - 120)
        const ageVal = parseInt(ageInput.value, 10);
        if (isNaN(ageVal) || ageVal < 1 || ageVal > 120) {
            showError(ageInput, 'Độ tuổi hợp lệ từ 1 đến 120');
            isValid = false;
            if (!firstInvalidInput) firstInvalidInput = ageInput;
        } else {
            clearError(ageInput);
        }

        // 7. Kiểm tra checkbox Điều khoản sử dụng
        if (!termsInput.checked) {
            showError(termsInput, 'Bạn phải đồng ý với điều khoản sử dụng');
            isValid = false;
            if (!firstInvalidInput) firstInvalidInput = termsInput;
        } else {
            clearError(termsInput);
        }

        if (!isValid) {
            if (firstInvalidInput) firstInvalidInput.focus();
            return;
        }

        // Nếu tất cả hợp lệ, hiển thị thông báo thành công
        const selectedTopics = Array.from(document.querySelectorAll('input[name="topics"]:checked')).map(cb => cb.value);
        const region = document.getElementById('region').value;

        // Lưu thông tin đăng ký mẫu vào localStorage (nếu có hỗ trợ)
        try {
            const registrationData = {
                fullname: fullnameVal,
                email: emailVal,
                phone: phoneVal,
                dob: dobVal,
                age: ageVal,
                gender: document.querySelector('input[name="gender"]:checked')?.value || 'Nam',
                topics: selectedTopics,
                region: region,
                message: document.getElementById('message').value.trim(),
                registeredAt: new Date().toISOString()
            };
            localStorage.setItem('last_registration', JSON.stringify(registrationData));
        } catch (e) {
            console.warn('LocalStorage error:', e);
        }

        // Hiển thị thông báo thành công đẹp mắt
        if (messageBox) {
            messageBox.className = 'form-alert success';
            messageBox.innerHTML = `<strong>Đăng ký thành công!</strong> Cảm ơn bạn <strong>${escapeHtml(fullnameVal)}</strong> đã đăng ký nhận bản tin định kỳ từ Blakletterpress.`;
            messageBox.style.display = 'block';
            messageBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            alert(`Chúc mừng ${fullnameVal}! Bạn đã đăng ký nhận bản tin thành công.`);
        }

        // Reset form sau khi đăng ký thành công
        form.reset();
    });

    // Xử lý nút Nhập lại (Reset)
    form.addEventListener('reset', function () {
        document.querySelectorAll('.error-text').forEach(el => el.remove());
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        if (messageBox) {
            messageBox.style.display = 'none';
        }
    });

    function showError(inputElement, message) {
        inputElement.classList.add('is-invalid');
        const parent = inputElement.closest('.form-group') || inputElement.parentElement;
        let errorSpan = parent.querySelector('.error-text');
        if (!errorSpan) {
            errorSpan = document.createElement('span');
            errorSpan.className = 'error-text';
            parent.appendChild(errorSpan);
        }
        errorSpan.textContent = message;
    }

    function clearError(inputElement) {
        inputElement.classList.remove('is-invalid');
        const parent = inputElement.closest('.form-group') || inputElement.parentElement;
        const errorSpan = parent.querySelector('.error-text');
        if (errorSpan) {
            errorSpan.remove();
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
