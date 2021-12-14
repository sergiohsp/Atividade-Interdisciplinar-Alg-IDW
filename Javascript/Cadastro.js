var olho = document.querySelector('#olho1');
var eye = document.querySelector('#olho2');

var nome = document.querySelector('#nome');
var labelNome = document.querySelector('#labelNome');
var email = document.querySelector('#email');
var labelEmail = document.querySelector('#labelEmail');
var senha = document.querySelector('#senha');
var labelSenha = document.querySelector('#labelSenha');
var ConfirmSenha = document.querySelector('#ConfirmSenha');
var labelConfirmSenha = document.querySelector('#labelConfirmSenha');

var validacaoNome = false
var validacaoSenha = false
var validacaoConfirmSenha = false

var msErro =  document.querySelector('#MensagemErro')
var msSucess =  document.querySelector('#MensagemSucesso')


nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = '<strong>Nome (Insira no mínimo 3 caracteres)</strong>'
        nome.setAttribute('style', 'border-color: red')
        validacaoNome = false
    }else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = '<strong>Nome</strong>'
        nome.setAttribute('style', 'border-color: green')
        validacaoNome = true
    }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 7){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = '<strong>Senha (Insira no mínimo 8 caracteres)</strong>'
        senha.setAttribute('style', 'border-color: red')
        validacaoSenha = false
    }else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = '<strong>Senha</strong>'
        senha.setAttribute('style', 'border-color: green')
        validacaoSenha = true
    }
})

ConfirmSenha.addEventListener('keyup', ()=>{
    if(senha.value != ConfirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = '<strong>Confirmar Senha (As senhas não conferem)</strong>'
        ConfirmSenha.setAttribute('style', 'border-color: red')
        validacaoConfirmSenha = false
    }else{
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = '<strong>Confirmar Senha</strong>'
        ConfirmSenha.setAttribute('style', 'border-color: green')
        validacaoConfirmSenha = true
    }
})



function cadastrar(){
    if(validacaoNome && validacaoSenha && validacaoConfirmSenha){
        var listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]')

        listaUsuario.push(
            {
                Nome: nome.value,
                Email: email.value,
                Senha: senha.value
            }
        )

        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))


        msSucess.setAttribute('style', 'display: block')
        msSucess.innerHTML = '<strong>Cadastrado com Sucesso"</strong>'
        msErro.innerHTML = ''
        msErro.setAttribute('style', 'display: none')
        
        setTimeout(()=>{
            window.location.href = '../HTML/Login.html'
        },3000
        )


    } else{
        msErro.setAttribute('style', 'display: block')
        msErro.innerHTML = '<strong>Por favor, preencha tosos os campos corretamente:</strong>'
        msSucess.innerHTML = ''
        msSucess.setAttribute('style', 'display: none')

        setTimeout(()=>{
            window.location.href = '../HTML/Cadastro.html'
        },3000
        )
    }
}



olho.addEventListener('click', ()=>{
    var inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else {
        inputSenha.setAttribute('type', 'password')
    }
})



eye.addEventListener('click', ()=>{
    var inputSenha = document.querySelector('#ConfirmSenha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else {
        inputSenha.setAttribute('type', 'password')
    }
})

