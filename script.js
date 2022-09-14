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


document.getElementById('submit-btn').disabled = true;
document.getElementById('agreement').addEventListener('click', function(event) {
  let conteudo = document.getElementById("agreement").value;
  if (conteudo !== null && conteudo !== '') {
    document.getElementById("submit-btn").disabled = false;
  } else { 
    document.getElementById("submit-btn").disabled = true;
  }
});

buttonLogin.addEventListener('click', login);