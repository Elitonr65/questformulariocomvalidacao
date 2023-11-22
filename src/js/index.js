const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const campoObrigatorio = document.getElementsByClassName('campo-obrigatorio');


function validacao(){
        validarInputs()
        validarTextarea()
}

function validarInputs() {
    inputs.forEach(function(element, index){
        if(element.value === ""){
            element.classList.remove('borda-valida');
            element.classList.add('borda-invalida');
            campoObrigatorio[index].innerHTML = 'campo obrigatorio'
            campoObrigatorio[index].classList.add('campo-obrigatorio');
            campoObrigatorio[index].classList.add('margin-inputs')
        }else {
            campoObrigatorio[index].innerHTML = ''
            element.classList.remove('borda-invalida');
            element.classList.add('borda-valida')

        }
    })
}

function validarTextarea() {
    if(textArea.value === ""){
        textArea.classList.remove('borda-valida');
        textArea.classList.add('borda-invalida');
        campoObrigatorio[3].innerHTML = 'campo obrigatorio'
        campoObrigatorio[3].classList.add('campo-obrigatorio');
        campoObrigatorio[3].classList.add('margin-mensagem')
    }else {
        campoObrigatorio[3].innerHTML = ""
        textArea.classList.remove('borda-invalida');
        textArea.classList.add('borda-valida')
    }
}



