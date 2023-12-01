// var entradaSenha = document.getElementById('entradaSenha');
// var medidorPoder = document.getElementById('medidorPoder');
// var requisitoComprimento = document.getElementById('requisitoComprimento');
// var requisitoMinuscula = document.getElementById('requisitoMinuscula');
// var requisitoMaiuscula = document.getElementById('requisitoMaiuscula');
// var requisitoNumero = document.getElementById('requisitoNumero');
// var requisitoSimbolo = document.getElementById('requisitoSimbolo');
// var textoPoder = document.getElementById('textoPoder');
// var mostrarSenha = document.getElementById('mostrarSenha');

// entradaSenha.addEventListener('input', function() {
//     var senha = entradaSenha.value
//     var poder = verificarPoder(senha)

//     var cor = poder < 50 ? 'red' : poder < 80 ? 'yellow' : 'green'

//     medidorPoder.style.width = poder + '%'
//     medidorPoder.style.backgroundColor = cor
//     textoPoder.textContent = 'Força da senha: ' + poder + '%'
//     atualizar(senha)
// })

// mostrarSenha.addEventListener('click', function () {
//     entradaSenha.type = entradaSenha.type === 'password' ? 'text' : 'password'
// })

// function verificarPoder(senha){
//     var comprimentoMinimo = 8
//     var possuiMaiusculo = /[A-Z]/.test(senha)
//     var possuiMinuscula = /[a-z]/.test(senha)
//     var possuiNumero = /\d/.test(senha)
//     var possuiSimbolo = /[!@#$%¨&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha)

//     var poder = 0

//     if (senha.length >= comprimentoMinimo) {
//         poder += 25
//         requisitoComprimento.classList.remove('vermelho')
//         requisitoComprimento.classList.add('verde')
//     }else{
//         requisitoComprimento.classList.remove('verde')
//         requisitoComprimento.classList.add('vermelho')
//     }

//     if (possuiMinuscula) {
//         poder += 25
//         requisitoMinuscula.classList.remove('vermelho')
//         requisitoMinuscula.classList.add('verde')
//     }else{
//         requisitoMinuscula.classList.remove('verde')
//         requisitoMinuscula.classList.add('vermelho')
//     }

//     if (possuiMaiusculo) {
//         poder += 25
//         requisitoMaiuscula.classList.remove('vermelho')
//         requisitoMaiuscula.classList.add('verde')
//     }else{
//         requisitoMaiuscula.classList.remove('verde')
//         requisitoMaiuscula.classList.add('vermelho')
//     }

//     if (possuiNumero) {
//         poder += 25
//         requisitoNumero.classList.remove('vermelho')
//         requisitoNumero.classList.add('verde')
//     }else{
//         requisitoNumero.classList.remove('verde')
//         requisitoNumero.classList.add('vermelho')
//     }

//     if (possuiSimbolo) {
//         poder += 25
//         requisitoSimbolo.classList.remove('vermelho')
//         requisitoSimbolo.classList.add('verde')
//     }else{
//         requisitoSimbolo.classList.remove('verde')
//         requisitoSimbolo.classList.add('vermelho')
//     }

//     return Math.min(100, poder)
// }

// function atualizar(senha){
//     verificarPoder(senha)
// }
let senha = 'batata35AK47'
let regra1 = senhaEscolhida.length >= 5

console.log(senha.includes('at'))