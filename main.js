const numeroSenha = document.querySelector(parametro-senha__botao)
numeroSenha.textContent = tamanhoSenha;
let tamanhoSenha = 12;

const botoes = document.querySelectorAll(parametro-senha__botao)
botoes[0].onclick = diminuiTamanho;

console.log(botoes);

function diminuiTamanho (){
    if (tamanhoSenha > 1)
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho (){
    if (tamanhoSenha < 20)
    tamanhoSenha = tamanhoSenha + 1;
    numeroSenha.textContext = tamanhoSenha;
}


