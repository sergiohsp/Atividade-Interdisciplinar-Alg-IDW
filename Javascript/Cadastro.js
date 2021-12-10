var olho =document.querySelector('#olho1')

olho.addEventListener('click', ()=>{
    var inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else {
        inputSenha.setAttribute('type', 'password')
    }
})


var eye =document.querySelector('#olho2')

eye.addEventListener('click', ()=>{
    var inputSenha = document.querySelector('#ConfirmSenha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else {
        inputSenha.setAttribute('type', 'password')
    }
})
