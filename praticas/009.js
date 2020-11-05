function parimpar(num) {
    return `${num} é ${num % 2 ==0 ? 'par': 'impar'}`
}

function soma(n1=0, n2) {
    return `${n1} + ${n2} = ${n1 + n2}`
}

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

function fator(n){
    if (n == 1 || n == 0) {
        return 1
    } else {
        return n * fator(n - 1)
    }
}
let x
console.log(parimpar(5))
console.log(soma(n2=2, n1=1))
console.log(fatorial(5))
console.log(fator(5))

let f = function(n) {
    return n*2
}

console.log(f(5))