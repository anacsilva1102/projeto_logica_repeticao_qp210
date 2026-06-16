// ESTRUTURA DE REPETIÇÃO FOR
const divFlor = document.querySelector('#div-for')

for(i = 0;i < 10; i++ ){
    console.log(i, 'Amor')
    divFlor.innerHTML += `${i} - Amor <br> `
}
  //CONTADOR/ACUMULADOR
  const inputNum = document.querySelector('#num')
  const btnNUM = document.querySelector('#btn-num')
  const divContAcum = document.querySelector('#div-cont-acum')