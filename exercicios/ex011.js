function contar() {
  var contI = document.getElementById('txtI')
  var contF = document.getElementById('txtF')
  var contP = document.getElementById('txtP')
  var res = document.getElementById('resultado')
  res.innerText = 'Contando: '
  if (contI.value.length == 0 || contF.value.length == 0 || contP.value.length == 0) {
    res.innerText += 'Não foi possível iniciar a contagem'
    alert('Por favor verifique se deixou alguma caixa de texto fazia')
  } else {
    var inicio = Number(contI.value)
    var final = Number(contF.value)
    var passo = Number(contP.value)
    if (passo <= 0) {
      alert('O passo invalido, será usado o valor 1')
      passo = 1
    }
    if (inicio < final) {
      for (var c = inicio; c <= final; c += passo) {
        res.innerText += ` ${c} \u{1F449} `
      }
    } else {
      for (var c = inicio; c >= final; c -= passo) {
        res.innerText += ` ${c} \u{1F449} `
      }
    }
    res.innerText += ' \u{1F3C1}'
  }
}