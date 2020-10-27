function carregar() {
  var agora = new Date()
  var saudacao = document.getElementById('saudacao')
  if (agora.getHours() < 12) {
    saudacao.innerHTML = 'Bom dia' + saudacao.innerHTML
  } else if (agora.getHours() < 18) {
    saudacao.innerHTML = 'Boa tarde' + saudacao.innerHTML
  } else {
    saudacao.innerHTML = 'Boa noite' + saudacao.innerHTML
  }

}

function verificar() {
  var agora = new Date()
  var anoNasc = document.getElementById('txtAno')
  var sexo = document.getElementsByName('opcSex')
  var resp = document.getElementById('res')
  if (anoNasc.value.length == 0 || anoNasc.value > agora.getFullYear()) {
    alert('[ERRO: anoNasc] Favor verifique o ano de nascimento digitado, dados inválidos')
  } else {
    var idade = agora.getFullYear() - anoNasc.value
    var genero = sexo[0].checked ? 'Homem' : 'Mulher'
    var image = document.createElement('img')
    image.setAttribute('id', 'foto')
    image.setAttribute('width', '200px')
    //image.setAttribute('height', '225px')
    if (genero == 'Homem') {
      if (idade < 3) {
        image.setAttribute('src', '../img/0a2-m.jpg')
      } else if (idade < 11) {
        image.setAttribute('src', '../img/3a10-m.jpg')
      } else if (idade < 18) {
        image.setAttribute('src', '../img/10a17-m.jpg')
      } else if (idade < 36) {
        image.setAttribute('src', '../img/18a35-m.jpg')
      } else if (idade < 66) {
        image.setAttribute('src', '../img/36a65-m.jpg')
      } else {
        image.setAttribute('src', '../img/66-m.jpg')
      }
    } else {
      if (idade < 3) {
        image.setAttribute('src', '../img/0a2-f.jpg')
      } else if (idade < 11) {
        image.setAttribute('src', '../img/3a10-f.jpg')
      } else if (idade < 18) {
        image.setAttribute('src', '../img/10a17-f.jpg')
      } else if (idade < 36) {
        image.setAttribute('src', '../img/18a35-f.jpg')
      } else if (idade < 66) {
        image.setAttribute('src', '../img/36a65-f.jpg')
      } else {
        image.setAttribute('src', '../img/66-f.jpg')
      }
    }
    resp.style.textAlign = 'center'
    resp.innerHTML = `<p>Detectado: ${genero} com ${idade} anos</p>`
    resp.appendChild(image)
  }
}