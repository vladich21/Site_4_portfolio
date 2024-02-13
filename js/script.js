window.addEventListener('DOMContentLoaded', function() {
    var phoneInput = document.getElementById('phone-input');
    phoneInput.addEventListener('input', function() {
        var phone = this.value.replace(/\D/g, '');
        if (phone.length === 0) {
            this.value = '';
            return; 
        }
        if (phone.length < 2) {
            this.value = '+7';
        } else if (phone.length <= 10) {
            this.value = '+7 (' + phone.substring(1, 4);
            if (phone.length >= 5) {
                this.value += ') ' + phone.substring(4, 7);
            }
            if (phone.length >= 8) {
                this.value += '-' + phone.substring(7, 9);
            }
            if (phone.length >= 10) {
                this.value += '-' + phone.substring(9, 11);
            }
        } else {
            this.value = '+7 (' + phone.substring(1, 4) + ') ' + phone.substring(4, 7) + '-' + phone.substring(7, 9) + '-' + phone.substring(9, 11);
        }
    });
});

    // Сохраняем оригинальное значение placeholder
    var placeholderText = phoneInput.getAttribute('placeholder');
    
    // Добавляем класс при фокусе на поле ввода
    phoneInput.addEventListener('focus', function() {
        this.classList.add('placeholder-on-focus');
    });
    
    // Убираем класс при потере фокуса
    phoneInput.addEventListener('blur', function() {
        this.classList.remove('placeholder-on-focus');
    });
    
    // Сбрасываем placeholder при вводе символов
    phoneInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            this.setAttribute('placeholder', '');
        } else {
            this.setAttribute('placeholder', placeholderText);
        }
    });