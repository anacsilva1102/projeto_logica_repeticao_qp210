//ESTRTURA DE REPETIÇÃO FOR
const divFor = document.querySelector('#div-for')

for(i = 0; i < 10; i++ ){
    console.log(i, 'Amor')
    divFor.innerHTML += `${i} - Amor <br>`
}

//CONTADOR/ACUMULADOR
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0

btnNum.addEventListener('click' , (evet)=>{
    let nmuDigitado = Number(inputNum.value)

    cont++
    acum += nmuDigitado

    divContAcum.innerHTML = `TOTAL DE NÚMEROS DIGITADOS É: ${cont} <br>
    A SOMA DOS NÚMEROS É: ${acum}`

    inputNum.value = ''

})

//CONTROLADOR FOR
const inputFrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnFrase = document.querySelector('#btn-frase')
const divFrase = document.querySelector('#div-frase')

btnFrase.addEventListener('click' , (evt) => {
    let numRepeti = Number(inputNumRepeticao.value)
    let frase = inputFrase.value

    for (i = 0;i < numRepeti; i++){
        divFrase.innerHTML += `${i + 1} - ${frase} <br>`
    }
})

//COLEÇÃO DE DADOS - ARRAY
const presentes = ['Bicicleta', 'Celular', 'Camisa do Mengão', 'Doleira', 'tênis Adidas']

const divArray = document.querySelector('#div-array')

//divArray.innerHtml = presentes[6]

for(i = 0;i < 5;i++ ){
    divArray.innerHTML += `${presentes[i]} <br>`
}

//FOR IN
const divForIn = document.querySelector('#div-forin')

for(let posicao in presentes){
 divForIn.innerHTML += `${presentes[posicao]} <br>`
}

//FOR OF
const divForOf = document.querySelector('#div-forof')

for (let elemento of presentes){
    divForOf.innerHTML += `${elemento} <br>`
}

//FOREACH
const divForeach = document.querySelector('#div-foreach')

presentes.forEach((elemento, posicao)=>{
    divForeach.innerHTML += `${posicao + 1} - ${elemento} <br>`
})

//COLEÇÃO DE OBJETOS LITERAIS - ARRAY
const pessoas = [
    {nome: 'Maria Flor', idade: 25, renda:8500},
    {nome: 'Joerdson Souza', idade: 75, renda:5000},
    {nome: 'Taoca', idade: 28, renda:500},
    {nome: 'Chicó', idade: 36, renda:100},
    {nome: 'Chicó', idade: 36, renda:100},
    {nome: 'João Grilo', idade: 32, renda:80},
]

//LISTA OBJETO LITERAL PELO FOR
const divlistaObjFor = document.querySelector('#div-listaobj-for')

for(i = 0; i < pessoas.length;i++){
    divlistaObjFor.innerHTML += `${pessoas[i].nome}, ${pessoas[i].idade} R$ ${pessoas[i].renda.toFixed(2).replace('.', ',')} <br>`}

//LISTANDO OBJETO LITERAL PELO FOR/IN
const divlistaobjForIn = document.querySelector('#div-listaobj-forin')

for(let indice in pessoas){
  divlistaobjForIn.innerHTML += `${indice} - ${pessoas[indice].nome}, ${pessoas[indice].idade}, R$ ${pessoas[indice].renda.toFixed(2).replace('.', ',')} <br>`
}

//LISTANDO OBJETO LITERAL PELO FOR/OF
const divlistaObjForOf = document.querySelector ('#div-listaobj-forof')

let contForOf = 0

for(let elem of pessoas){
  contForOf++

  divlistaObjForOf.innerHTML += `${contForOf} -${elem.nome}, ${elem.idade}, R${elem.renda.toFixed(2).replace('.',',')}<br>`
}

//LISTANDO OBJETO LITERAL PELO FOREACH
const divlistaForeach = document.querySelector ('#div-lista-foreach')

pessoas.forEach((elem, i)=>{
  divlistaForeach.innerHTML += `${elem.nome}, ${elem.idade} R$ ${elem.renda.toFixed(2).replace('.',',')} <br>`
})