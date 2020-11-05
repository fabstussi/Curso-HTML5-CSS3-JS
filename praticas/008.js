// Pratica 1
let num = [8, 4, 1, 0, 9] // criando o vetor
console.log(`O vetor é ${num}`)
num[5] = 6 // add valor direto na posição 5 do vetor
console.log(`O vetor agora é ${num}`)
num.push(7) // add valor na ultima posição do vetor
console.log(`O vetor agora é ${num}`)
console.log(`Nosso vetor tem ${num.length} elementos`)
num.sort() // ordena o vetor
console.log(`Nosso vetor ordenado agora é ${num}`)

// Prática 2
let num = [8, 4, 1, 0, 9]
console.log(num)
for (let i = 0; i < num.length; i++) {
    console.log(`num[${i}] = ${num[i]}`)
}

// forma resumida que percorre todos os elementos do vetor
for (let i in num) { 
    console.log(`num[${i}] = ${num[i]}`)
}
 
let num = [8, 4, 1, 0, 9]
console.log(num)
console.log(`O valor 1 se encontra no indice ${num.indexOf(1)}`)
console.log(`O valor 5 se encontra no indice ${num.indexOf(5)} -> -1 significa que o valor não existe no vetor`)
let procurado = 4
console.log(`O valor ${procurado}  ${num.indexOf(procurado) == -1 ? 'não foi localizado no vetor' : 'se encontra no indice ' + num.indexOf(procurado)}`)