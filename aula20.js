


var valores = [56, 2, 3, 78, 364, 63]


// for (var posicao = 0; posicao < valores.length; posicao++) {
//   console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
// }

for (var posicao in valores) {
  console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}

console.log(`O valor desejado está na posição: ${valores.indexOf(364)} `)


var pos = valores.indexOf(50)
//console.log(`O elemento está na posição: ${pos} `)
if (pos == -1) {
  console.log("O elemento não existe")
}