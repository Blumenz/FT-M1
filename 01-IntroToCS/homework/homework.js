'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var num = "10101101"
  let total = 0;
  for(let i =0; i < num.length; i++){
    total = total + num[i] * Math.pow(2, num.length -1 -i); 
  }
  return console.log(total);

}

function DecimalABinario(num) {
  // tu codigo aca
  let numero = 0;
  var invertido = num.split('').reverse().join('')

  for(let i = 0; i < invertido.length; i++){
    numero += invertido[i] * 2 ** i
  }
  return numero

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}