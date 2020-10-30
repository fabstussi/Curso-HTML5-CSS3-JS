function gerar() {
  var num = document.getElementById('txtN')
  var res = document.getElementById('res')
  res.innerHTML = ''
  var n = Number(num.value)
  if (num.value.length == 0) {
    alert('A caixa de texto não pode ficar vazia!')
  } else {
    for (var mult = 1; mult <= 10; mult++) {
      res.innerHTML += `${mult} x ${n} = ${mult * n}<br />`
    }
  }
}