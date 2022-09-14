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
