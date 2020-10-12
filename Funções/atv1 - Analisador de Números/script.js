var numeroRecebido = document.getElementById('numero') //input numero que usuário vai digitar
var telaInformacao = document.getElementById('tela') // select para exibir os valores
var exibicao = document.getElementById('info') // div para mostrar as informações dos valores
var valoresRecebidos = []  // transformando os valores em array


function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}


function add() {


  if (isNumero(numeroRecebido.value) && !inLista(numeroRecebido.value, valoresRecebidos)) { //se o numero ja se encontra na lista
    valoresRecebidos.push(Number(numeroRecebido.value))

    var item = document.createElement('option')
    item.text = `O valor adicionado foi: ${numeroRecebido.value} `
    telaInformacao.appendChild(item)
    exibicao.innerHTML = '' // para quando eu for colocar outro numero apagar a exibição




  } else {
    alert("Por favor digite um numero entre 1 e 100 ou o numero digitado já se encontra na lista")
  }
  numeroRecebido.value = '' // para apagar as informações que estão no input
  numeroRecebido.focus() // qunado apagar voltar para o input
}
function retorno() {
  if (valoresRecebidos == 0) {
    alert('Adicione valores antes de finalizar!')
  } else {
    var total = valoresRecebidos.length
    var maior = valoresRecebidos[0]
    var menor = valoresRecebidos[0]
    var soma = 0
    var media = 0

    for (var posicao in valoresRecebidos) {
      soma += valoresRecebidos[posicao]

      if (valoresRecebidos[posicao] > maior)
        maior = valoresRecebidos[posicao]
      if (valoresRecebidos[posicao] < menor)
        menor = valoresRecebidos[posicao]
    }




    media = soma / total
    exibicao.innerHTML = ''
    exibicao.innerHTML += `<p>O vetor tem ${total} números cadastrados</p>`
    exibicao.innerHTML += `<p> O maior valor é: ${maior} </p>`
    exibicao.innerHTML += `<p>O menor valor é: ${menor} </p>`
    exibicao.innerHTML += `<p>A soma dos valores é: ${soma} </p>`
    exibicao.innerHTML += `<p>A media dos valores é: ${media} </p>`
  }
}

