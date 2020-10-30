function gerar() {
  let num = document.getElementById('txtN')
  let res = document.getElementById('tab')
  res.innerHTML = ''
  if (num.value.length == 0) {
    alert('A caixa de texto não pode ficar vazia!')
  } else {
    let n = Number(num.value)
    for (let mult = 1; mult <= 10; mult++) {
      let item = document.createElement('option')
      item.text = `${n} x ${mult} = ${n*mult}`
      res.appendChild(item)
    }
  }
}