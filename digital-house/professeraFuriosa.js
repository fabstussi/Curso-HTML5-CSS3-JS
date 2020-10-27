function acontece(alunosDoDia,nAlunos) {
    var qntAlunos = 0;
    for (var i = 0; i < alunosDoDia.length; i++) {
        if (alunosDoDia[i] <= 0) {
            qntAlunos++;
        }
    }
    return nAlunos <= qntAlunos;
}

function aberturas(diasDaSemana,minimoDeAlunos) {
    var aconteceuAula = [];
    for (var i = 0; i < diasDaSemana.length; i++) {
        aconteceuAula.push(acontece(diasDaSemana[i], minimoDeAlunos));
    }
    return aconteceuAula
}

var segunda = [10, 0, 10, 0, 10, 10, 0]
var terca = [0, 0, 5, 0, 5, 0, 0]
var quarta = [10, 0, 10, 0, 10, 0, 10]
var quinta = [0, 5, 0, 5, 0, 5, 0]
var sexta = [5, 5, 0, 5, 0, 0, 0]

console.log(aberturas([segunda, terca, quarta, quinta, sexta], 4))