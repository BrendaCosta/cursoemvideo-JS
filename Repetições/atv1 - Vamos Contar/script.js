function contar() {
  var inicio = document.getElementById('inicio')
  var fim = document.getElementById('fim')
  var passo = document.getElementById('passo')
  var res = document.querySelector('div#res')
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

    res.innerHTML = "Impossivel contar!"
  } else {
    res.innerHTML = "Contando: <br>"
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p <= 0) {
      window.alert("Passo inválido")
      p = 1
    }
    if (i < f) {
      //contagem crescente
      for (var contador = i; contador <= f; contador += p) {
        res.innerHTML += `${contador} \u{1F63A}`
      }

    } else {
      //contagem regressiva
      for (var contador = i; contador >= f; contador -= p) {
        res.innerHTML += `${contador} \u{1F63A}`
      }
    }
    res.innerHTML += `\u{1F3C1}`

  }

}