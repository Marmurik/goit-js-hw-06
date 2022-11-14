const loginFormEl = document.querySelector('.login-form');
loginFormEl.addEventListener('submit', onSubmitChange);

function onSubmitChange(event) {
event.preventDefault();

const elements = event.currentTarget.elements;
const email = elements.email.value;
const password = elements.password.value;

if (elements.email.value === '' || elements.password.value === '') {
    return alert ('всі поля повинні бути заповнені');
} 

    const formData = {
        email,
        password,
    };
    
    console.log(formData);
    loginFormEl.reset();
}
