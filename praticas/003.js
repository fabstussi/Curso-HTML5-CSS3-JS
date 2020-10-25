// necessário ter instalado no computador o NODE.JS
// necessário ter instalada a extensão node exec

console.log('Exemplo de desvio de condição simples')
let vel = 60
console.log(`A sua velocidade atual é ${vel}km/h`)
if (vel > 60) {
    console.log(`${vel}km/h é acima do limite de velocidade permitida de 60km/h, você receberá uma multa :'(`)
}
console.log('Dirija sempre com sinto de segurança')
console.log('========================================')
console.log('Exemplo de desvio de condição composta')
let pais = 'EUA'
console.log(`Vivendo em ${pais} `)
if (pais == 'Brasil') {
    console.log('Você é brasileiro!')
} else {
    console.log('Você é estrangeiro!')
}