let vetor = []

function preencheTela(selecionado, primo, parimp, fat, maior, menor, soma, média) {
  let dados = document.getElementById('dir')

  dados.innerHTML = ''
  if (selecionado != undefined) {
    dados.innerHTML = `<p>O número selecionado foi ${selecionado}</p>`
    dados.innerHTML += `<p>O número ${selecionado} ${primo} um número primo</p>`
    dados.innerHTML += `<p>O número ${selecionado} é ${parimp} </p>`
    dados.innerHTML += `<p>${selecionado}! é ${fat} </p>`
  }
  dados.innerHTML += `<p>O maior número digitado foi o ${maior}</p>`
  dados.innerHTML += `<p>O menor número digitado foi o ${menor}</p>`
  dados.innerHTML += `<p>A soma dos números é ${soma}</p>`
  dados.innerHTML += `<p>A média entre os números é ${média}</p>`
}

function ePrimo(valor) {
  if (valor == 1) {
    return 'não é'
  } else {
    let cont = 1
    for (let i = 2; i <= valor; i++) {
      if (valor % i == 0) {
        cont++
      }
    }
    if (cont != 2) {
      return 'não é'
    } else {
      return 'é '
    }
  }
}

function fator(valor) {
  if (valor == 1 || valor == 0) {
    return 1
  } else {
    return valor * fator(valor - 1)
  }
}

function manipulaVetor(valor) {
  let dados = document.getElementById('lst')
  let item = document.createElement('option')
  if (vetor.length == 0) {
    dados.innerHTML = ''
    vetor.push(valor)
    item.text = `O valor ${valor} foi adicionado`
    item.value = valor
    dados.appendChild(item)
  } else if (vetor.indexOf(valor) == -1) {
    vetor.push(valor)
    item.text = `O valor ${valor} foi adicionado`
    item.value = valor
    dados.appendChild(item)
  } else {
    alert(`O número ${valor} já foi adicionado.`)
  }
  let maior = Math.max.apply(null, vetor)
  let menor = Math.min.apply(null, vetor)
  let soma = vetor.reduce(function (somador, n) { return somador + n })
  let media = vetor.reduce(function (somador, n) { return somador + n }) / vetor.length
  preencheTela(undefined, 0, 0, 0, maior, menor, soma, media)
}

function adicionar() {
  let n = document.getElementById('num')
  let valor = Number(n.value)
  if (n.length == 0) {
    alert('[ERRO] Caixa de texto não pode ficar vazia')
  } else if (valor < 0 || valor > 100) {
    alert('[ERRO] Número digitado não esta entre 0 e 100')
  } else {
    manipulaVetor(valor)
  }
  n.value = ''
  n.focus()
}

function verificar() {
  if (vetor.length == 0) {
    alert('é preciso adicionar um valor antes de verificar')
  } else {
    let dados = document.getElementById('lst')
    let primo = ePrimo(dados.value)
    let parImp = dados.value % 2 == 0 ? 'par' : 'impar'
    let fat = fator(dados.value)
    let maior = Math.max.apply(null, vetor)
    let menor = Math.min.apply(null, vetor)
    let soma = vetor.reduce(function (somador, n) { return somador + n })
    let media = vetor.reduce(function (somador, n) { return somador + n }) / vetor.length
    preencheTela(dados.value, primo, parImp, fat, maior, menor, soma, media)
  }
}