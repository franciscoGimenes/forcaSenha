const inputSenha = document.getElementById('senha');
const regrasDiv = document.getElementById('regras');
const h3Final = document.getElementById('h3');
const botaodiv = document.getElementById('botao')
const textBotao = document.getElementById('text')

const btnCopiar = document.getElementById('btnCopiar');

btnCopiar.addEventListener('click', () => {


    // Copia o conteúdo para a área de transferência
    navigator.clipboard.writeText(inputSenha.value)
        .then(() => console.log('Texto copiado com sucesso'))
        .catch(err => console.error('Erro ao copiar texto:', err));


    textBotao.innerHTML = 'Copiado!'
});

botaodiv.style.display = 'none'


let senhaEscolhida = '';
let arrayRegras = [];
let regrasPre = [
    senha => senha.length >= 5,
    senha => /\d/.test(senha),
    senha => /[!@#$%¨&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha),
    senha => /[A-Z]/.test(senha),
    senha => senha.includes('cat'),
    senha => senha.includes(35),
    senha => senha.includes('XXXVII'),
    senha => senha.includes('k9') || senha.includes('K9'),
    senha => senha.includes('2015'),
    senha => senha.includes('easymoneysniper')
];

for (let i = 0; i < regrasPre.length; i++) {
    arrayRegras.push(`regra${i + 1}`);
}

let index = 0;
let showedQuestion = 0;

inputSenha.addEventListener('input', () => {
    let senhaEscolhida = inputSenha.value;
    let senhaEscolhidaMin = senhaEscolhida.toLowerCase()

    console.log(index)
    let regras = [
        senha => senha.length >= 5,
        senha => /\d/.test(senha),
        senha => /[!@#$%¨&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha),
        senha => /[A-Z]/.test(senha),
        senha => senha.includes('cat'),
        senha => senha.includes(35),
        senha => senha.includes('XXXVII'),
        senha => senha.includes('k9') ,
        senha => senha.includes('2015'),
        senha => senha.includes('easymoneysniper')
    ];

    if (showedQuestion === 0) {
        criarDivRegra(index);
    }
    if (index == 4 || index == 7 || index == 9){
        tempIndex = verificar(senhaEscolhidaMin, index, regras)
        if (tempIndex == undefined) {
            return
        }else{
            index = tempIndex
        }
    }else{
        tempIndex = verificar(senhaEscolhida, index, regras)
        if (tempIndex == undefined) {
            return
        }else{
            index = tempIndex
        }
    }
    
});

function verificar(senhaUsada, index, regras){
    if (regras[index](senhaUsada)) {
        index++;
        console.log(index)
        if (index < arrayRegras.length){
            criarDivRegra(index);
            if (index > 0) {
                // Se alguma regra anterior não for cumprida, não avance para a próxima
                if (!regrasPre[index - 1](senhaUsada)) {
                    return;
                }
        
                // Se a regra anterior foi cumprida, torna a caixa de título verde
                regrasDiv.children[index - 1].querySelector('.titulo').classList.add('cumprida');
            }
            console.log(index)
            return(index)
        }else{
            alert('cabo')
            h3Final.innerHTML = 'Parabens :) <br>Sua Senha final é:'
            inputSenha.disabled = 'true'
            regrasDiv.style.display = 'none'
            botaodiv.style.display = 'block'
        }
    }
}

function criarDivRegra(index) {
    const divRegra = document.createElement('div');
    divRegra.classList.add('regra');
    const divTitulo = document.createElement('div');
    divTitulo.classList.add('titulo');
    const divTexto = document.createElement('div');
    divTexto.classList.add('textoRegra');
    const regraH4 = document.createElement('h4');
    const regraP = document.createElement('p');
    divTitulo.appendChild(regraH4);
    divTexto.appendChild(regraP);
    divRegra.appendChild(divTitulo);
    divRegra.appendChild(divTexto);
    regraH4.textContent = `regra ${index + 1}`;

    fetch(`regras.json`)
        .then(resposta => resposta.json())
        .then(texto => {
            regraP.innerHTML = texto[arrayRegras[index]];
        })
        .catch(error => console.error('Erro buscando textos:', error));

    regrasDiv.appendChild(divRegra);
    showedQuestion++;
}
