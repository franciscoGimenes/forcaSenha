const inputSenha = document.getElementById('senha')
const regrasDiv = document.getElementById('regras')
let senhaEscolhida = ''
let arrayRegras = []
let regras = [
    regra = senhaEscolhida.length >= 5,
    regra = /\d/.test(senhaEscolhida),
    regra = /[!@#$%¨&*()_+{}\[\]:;<>,.?~\\/-]/.test(senhaEscolhida),
    regra = /[A-Z]/.test(senhaEscolhida),
    regra = senhaEscolhida.includes('cat'),
    regra = senhaEscolhida.includes((5*9*7)/5),
    regra = senhaEscolhida.includes('XXXVII'),
    regra = senhaEscolhida.includes('k9') || senhaEscolhida.includes('K9'),
    regra = senhaEscolhida.includes('2015'),
    regra = senhaEscolhida.includes('easymoneysniper')
]
for (let i = 0; i < regras.length; i++) {
    regraNum = `regra${i+1}`
    arrayRegras.push(regraNum)
}
let index = 0
let showedQuestion = 0

inputSenha.addEventListener('input', () => {
    let senhaEscolhida = inputSenha.value
    let regras = [
        regra = senhaEscolhida.length >= 5,
        regra = /\d/.test(senhaEscolhida),
        regra = /[!@#$%¨&*()_+{}\[\]:;<>,.?~\\/-]/.test(senhaEscolhida),
        regra = /[A-Z]/.test(senhaEscolhida),
        regra = senhaEscolhida.includes('cat'),
        regra = senhaEscolhida.includes(35),
        regra = senhaEscolhida.includes('XXXVII'),
        regra = senhaEscolhida.includes('k9') || senhaEscolhida.includes('K9'),
        regra = senhaEscolhida.includes('2015'),
        regra = senhaEscolhida.includes('easymoneysniper')
    ]
    
    
    console.log(regras)
    console.log(index)
    if(showedQuestion == 0){
        criarDivRegra(index)
    }
    
    if (regras[index]){
        let boxes = document.getElementsByClassName('titulo')
        console.log(boxes)
        for (let i = 0; i < boxes.length; i++){
            console.log('oi')
            boxes[i].computedStyleMap.backgroundColor = 'green'
        }

        index++
        criarDivRegra(index)
        return(index)
    }
})

function criarDivRegra(index){
   divRegra = document.createElement('div')
   divRegra.classList.add('regra')
   divTitulo = document.createElement('div')
   divTitulo.classList.add('titulo')
   divTexto = document.createElement('div')
   divTexto.classList.add('textoRegra')
   regraH4 = document.createElement('h4')
   regraP = document.createElement('p')
   divTitulo.appendChild(regraH4)
   divTexto.appendChild(regraP)
   divRegra.appendChild(divTitulo)
   divRegra.appendChild(divTexto)
   regraH4.textContent = `regra ${index + 1}`
   fetch(`regras.json`)
    .then(resposta => resposta.json())
    .then(texto => {
        // const element = titulos[i];
        regraP.innerHTML = texto[arrayRegras[index]];
    
    })
    .catch(error => console.error('Erro bucando textos:', error));
    regrasDiv.appendChild(divRegra)

    showedQuestion++
}