console.log('Condicionais compostas aninhadas')
let idade = 17
if (idade < 16) {
    console.log(`Com ${idade} anos, não pode votar`)
} else if (idade < 18 || idade > 65) {
    console.log(`Com ${idade} anos, o voto é facultativo`)
} else {
    console.log(`Com ${idade} anos, o voto é obrigatório`)
}
console.log()
let agora = new Date
let hr = agora.getHours()
if (hr < 12) {
    console.log(`Bom dia! São ${hr} horas`)
} else if (hr < 18) {
    console.log(`Boa tarde! São ${hr} horas`)
} else {
    console.log(`Boa noite! São ${hr} horas`)
}