const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit',(event) => {

    event.preventDefault();

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const formData = {
        name: nameInput.Value,
        phone: phoneInput.Value,
        email: emailInput.Value,
        password: passwordInput.Value,
    }

    const errors = {
        name: false,
        phone: false,
        email: false,
        password: false,
    }

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    nameError.style.display = 'none';
    phoneError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    if (!formData.name || !formData.phone || !formData.email || !formData.password) {
        const nameRegex = /^[a-z0-9]{2,50}$/i;
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/

        if (!formData.name || !nameRegex.test(formData.name)) {
            errors.name = true;
            nameError.style.display = 'block';
        }
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            errors.phone = true;
            phoneError.style.display = 'block';
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = true;
            emailError.style.display = 'block';
        }
        if (!formData.password || !nameRegex.test(formData.password)) {
            errors.password = true;
            passwordError.style.display = 'block';
        }
    }
    if (!Object.values(errors).includes(true)) {
        console.log(formData)
    }
})