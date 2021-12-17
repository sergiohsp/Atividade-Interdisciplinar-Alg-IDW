var btn =document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    var inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else {
        inputSenha.setAttribute('type', 'password')
    }
})


function entrar(){
    var email = document.querySelector('#email')
    var labelEmail = document.querySelector('#labelEmail')

    var senha = document.querySelector('#senha')
    var labelSenha = document.querySelector('#labelSenha')

    var MensagemErro = document.querySelector('#MensagemErro')

    var listaUsuario = []

    var usuarioValid = {
        nome: '',
        email: '',
        senha: '',
    }

    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))


    listaUsuario.forEach((item) => {
        if(email.value == item.EmailCad && senha.value == item.SenhaCad){
            usuarioValid = {
                nome: item.NomeCad,
                email: item.EmailCad,
                senha: item.SenhaCad,
            }
        }
    })
    
    if(email.value == usuarioValid.email && senha.value == usuarioValid.senha){
        window.location.href = '../HTML/Home.html'

        var token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('ChaveLogin', token)

    } else{
        labelEmail.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        MensagemErro.setAttribute('style', 'display: block')
        MensagemErro.innerHTML = 'E-MAIL ou SENHA incorretos'
        email.focus()
    }


}