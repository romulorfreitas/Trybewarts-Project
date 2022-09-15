const email = document.getElementById('email');
console.log(email);
const password = document.getElementById('password');

const buttonLogin = document.querySelector('.buttonEntrar');

function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', login);

const btnSubmit = document.getElementById('submit-btn');
btnSubmit.disabled = true;
const chec = document.getElementById('agreement').value;
const agR = document.getElementById('agreement');

function apply() {
  if (chec !== null && chec !== '') {
    document.getElementById('submit-btn').disabled = false;
  }
}
agR.addEventListener('click', apply);
