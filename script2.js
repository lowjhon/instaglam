// Variáveis
const username = localStorage.getItem('username')
const email = localStorage.getItem('email')
const seunome = document.getElementById('seuNome')
const seuemail = document.getElementById('seuEmail')
const seuemail2 = document.getElementById('seuEmail2')


// Código texto
seunome.textContent = 'Olá, '+username
seuemail.textContent = 'Acabei de pegar seu email:'
seuemail2.textContent = email
