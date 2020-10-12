function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var saudacao = window.document.getElementById('saudacao')
  var data = new Date()
  var hora = data.getHours()
  // var hora = 22
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    img.src = "./imagens/bomdia.jpeg"
    document.body.style.background = '#e2cd9f'
    saudacao.innerHTML = "Bom dia!"

  } else if (hora >= 12 && hora < 18) {
    img.src = "./imagens/boatarde.jpg"
    document.body.style.background = '#b9846f'
    saudacao.innerHTML = "Boa tarde!"

  } else {
    img.src = "./imagens/boanoite.jpeg"
    document.body.style.background = '#515154'
    saudacao.innerHTML = "Boa noite!"
  }

}