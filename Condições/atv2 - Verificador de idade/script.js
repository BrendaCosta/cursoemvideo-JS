function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente")
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var sexo = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      sexo = 'homem'
      if (idade >= 0 && idade < 10) {
        //criança
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
        img.setAttribute('src', 'homemCrianca.jpg')


      } else if (idade < 21) {
        //jovem
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
        img.setAttribute('src', 'homemJovem.jpeg')
      } else if (idade < 50) {
        //adulto
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
        img.setAttribute('src', 'homemAdulto.jpg')
      } else {
        //idoso
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
        img.setAttribute('src', 'homemIdoso.jpg')
      }



    } else if (fsex[1].checked) {
      sexo = 'mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
        img.setAttribute('src', 'mulherCrianca.jpeg')
      } else if (idade < 21) {
        //jovem
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
        img.setAttribute('src', 'mulherjovem.jpg')
      } else if (idade < 50) {
        //adulto
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
        img.setAttribute('src', 'mulherAdulta.jpeg')
      } else {
        //idoso
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
        img.setAttribute('src', 'mulherIdosa.jpg')
      }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Você é ${sexo} com ${idade} anos <br> `
    res.appendChild(img)




  }
}