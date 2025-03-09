
// Variáveis
const username = document.getElementById('nome')
const email = document.getElementById('email')
const password1 = document.getElementById('senha')
const password2 = document.getElementById('confirmar-senha')
const infos = document.getElementsByClassName('info')
const erro = document.getElementById('erro')

// Funções de validação
function usernameValidate(){
    if(username.value.length < 4) {
        document.getElementById('info1').style.color = 'red'
        infos[0].textContent = '❌ Seu nome é muito curto...'
        return false
    } else{
        document.getElementById('info1').style.color = '#0fc400'
        infos[0].textContent = '✔️ Seu nome é válido!'
        return true
    }
}
function emailValidate(){
    if(email.value.endsWith('@gmail.com') || email.value.endsWith('@email.com') || email.value.endsWith('@hotmail.com') == true) {
        document.getElementById('info2').style.color = '#0fc400'
        infos[1].textContent = '✔️ Seu email é válido!'
        return true
    } else{
        document.getElementById('info2').style.color = 'red'
        infos[1].textContent = '❌ Esse email é inválido...'
        return false
    }
}
function password1Validate(){
    if(password1.value.length <= 7) {
        document.getElementById('info3').style.color = 'red'
        infos[2].textContent = '❌ Sua senha é muito curta...'
        return false
    } else{
        document.getElementById('info3').style.color = '#0fc400'
        infos[2].textContent = '✔️ Sua senha é válida!'
        return true
    }
}
function password2Validate(){
    if(password2.value == password1.value && password2.value.length >= 8) {
        document.getElementById('info4').style.color = '#0fc400'
        infos[3].textContent = '✔️ Sua senha é válida!'
        return true
    } else{
        document.getElementById('info4').style.color = 'red'
        infos[3].textContent = '❌ A senha está errada...'
        return false
    }
}
function validação(){
    if(usernameValidate(), emailValidate(), password1Validate(), password2Validate() == true) {
        const usernameValue = username.value
        const emailValue = email.value
        localStorage.setItem('username', usernameValue)
        localStorage.setItem('email', emailValue)
        location.href = 'pag002.html'
    } else {
        erro.textContent = 'Formulário incorreto!'
    }
}
function mentira(){
    erro.textContent = 'Não temos nenhum membro ainda!'
}

// Função de evento
document.getElementById('botão1').addEventListener('click', function() {
    erro.classList.add('fade')
    setTimeout(function() {
        erro.classList.remove('fade')
    }, 5000)
})
document.getElementById('botão2').addEventListener('click', function() {
    erro.classList.add('fade')
    setTimeout(function() {
        erro.classList.remove('fade')
    }, 5000)
})

