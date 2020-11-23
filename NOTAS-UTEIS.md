# Anotações úteis do curso.

O HTML é uma linguagem de marcação, utilizando TAGs, as TAGs são identificadas pelos sinais <></>.

* Principais TAGs:
	* <!DOCTYPE html> - indica para o navegador que será utilizada a tecnologia HTML5.
	* <html></html> - indica o inicio e final dos códigos da pagina.
		* <head></head> - Onde são carregadas as informações importantes antes da exibição do conteúdo da pagina, exemplo o CSS.
		* <body></body> - Onde fica o conteúdo do site e é feita a interação com o usuário usando o JS.

**Existem TAGs que precisam de abertura e fechamento, pois são TAGs que contem blocos de textos ou outras TAGs dentro delas, já as TAGs que não necessitam de fechamento, são os que se resolvem apenas com parâmetros**.

Hierarquia de títulos
# Título de primeiro nível -> h1
## - Título de segundo nível -> h2
### -- Título de terceiro nível -> h3
#### --- Título de quarto nível -> h4
##### ---- Título de quinto nível -> h5
###### ----- Título de sexto nível -> h6
~~~HTML
<!--- Estrutura básica para iniciar uma pagina HTML --->
<!DOCTYPE html> <!--- abertura do código --->
<html lang="pt-BR"> <!--- Abertura do HTML e informa ao navegador que a linguagem usada é o português do Brasil --->

<head> <!--- Abertura do Cabeçalho --->
	<meta charset="UTF-8"> <!--- Informa ao navegador que será usada a acentuação do português Brasil --->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>repl.it</title> <!--- Título da página (o que fica na aba do navegador--->
	<link href="style.css" rel="stylesheet" /> <!--- Usado para referenciar onde está o arquivo css de estilo da pagina --->
</head> <!--- Fechamento da TAG do Cabeçalho --->

<!---
	As TAGs tem que ter abertura e fechamento <TAG></TAG>
	As TAGs órfãs (sem </>) são simbolizadas com o "/" no final <TAG />
--->

<body> <!--- Abertura da tag do corpo da página --->
	<script src="script.js"></script> <!--- TAG de uso do JavaScript quando é usado arquivo externo --->

	<footer> <!--- Abertura da TAG de rodapé --->
			<a href="index.html" title="Retorna para a pagina inicial">Inicio</a> <!--- Usado para criar um link para outra pagina --->
	</footer> <!--- Fechamento da TAG do rodapé --->
	
</body> <!--- Fechamento da TAG do corpo --->

</html> <!--- Finaliza se a página com o fechamento da TAG do HTML --->
~~~

### Exemplo de uso de evento que manipula elemento iniciando no HTML
~~~HTML
<div id="area" onclick="clicar()" onmouseenter="entrar()" onmouseout="saiu()">
<!--
	id é a identificação única em um elemênto
		onclick é o evento de clique na area demarcada para a div
		onmouseenter é o evento de entrada do ponteiro do mouse na area demarcada da div
		onmouseout é o evento de saída do ponteiro do mouse na área demarcada da div
		a chamada das função sempre tem que ter os parênteses ()
-->
	Interaja...
</div>

<script>
	// function é a declaração da função, deve ser nomeada
	function clicar() { // As chaves marcam o bloco de código
		let area = document.getElementById('area');
		area.innerHTML = 'Clicou!';
		area.style.backgroundColor = 'rgb(220, 50, 0)';
	}

	function entrar() {
		let area = document.getElementById('area');
		area.innerHTML = 'Dentro da área';
	}

	function saiu() {
		let area = document.getElementById('area');
		area.innerHTML = 'Saiu da área';
		area.style.backgroundColor = 'rgb(6, 155, 26)';
	}
</script>
~~~

### Exemplo de uso de evento que manipula elemento iniciando no JavaScript
~~~HTML
<div id="area">
	Interaja...
</div>

<script>
	let area = document.getElementById('area');
	area.addEventListener('click', clicar)
	area.addEventListener('mouseenter', entrar)
	area.addEventListener('mouseout', saiu)

	function clicar() {
		area.innerHTML = 'Clicou!';
		area.style.backgroundColor = 'rgb(220, 50, 0)';
	}

	function entrar() {
		area.innerHTML = 'Dentro da área';
	}

	function saiu() {
		area.innerHTML = 'Saiu da área';
		area.style.backgroundColor = 'rgb(6, 155, 26)';
	}
</script>
~~~

* Guia rápido de comandos do JavaScript
	* As variáveis em JavaScript não são tipificadas na declaração e sim quando lhe é atribuído algum conteúdo
	* Os tipos podem ser:
		* Number
		* Strings
		* boolean
		* NaN (não é um número)
		* Null
		* Function
	* typeof = exibe o tipo da variável
	* Para mudar o tipo do conteúdo da variável pode se usar:
		* Number.parseInt = para transformar obrigatóriamente a variável em um tipo inteiro
		* Number.parseFloat = para transformar obrigatóriamente a variável em um tipo real
		* Number(variável) = o JavaScript interpreta o conteúdo da variável e a converte no que se melhor adapte
		* variável.toString() ou String(variável) para transformar a variável em um tipo String
	* var ou let = declaração de variáveis o uso depende do escopo
	* const = declaração de constante
	* As strings podem ser declaradas com **"aspas duplas", 'aspas simples (apóstrofos)' ou `crases** **`**
	* O sinal de + pode servir para:
		* Number + Number -> o mais serve para fazer uma adição
		* Number + String ou String + Number -> o mais serve para concatenar
		* String + String -> o mais serve para concatenar
	* Uma forma de ter uma String formatada já tendo a concatenação com as variáveis podemos usar o template string
	~~~JavaScript
	`Eu estou aprendendo ${variável}` \\ só funciona com crases, não pode usar aspas nem simples nem duplas
	~~~
	* As Strings tem os métodos:
		* variável.length = tamanho em caracteres da string
		* variável.toUpperCase() = colocar tudo em MAIúSCULAS
		* variável.toLowerCase() = COLOCA TUDO EM minúscula
	* Os Numbers também tem métodos:
		* variável.toFixed(n) = fixa as casas decimais em "n" casas depois da virgula
		* variável.replace('**.**', '**,**') = para exibir virgula no lugar de ponto na separação das casas decimais
		* variável.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
	* O comando window cria uma caixa de comando em frente ao navegador que podem ser:
		* window.alert -> Caixa de alerta (só tem um OK)
		* window.confirm -> Caixa de confirmação (com OK e Cancel)
		* window.prompt -> Caixa interativa que aguarda entrada de dados
	* Operadores Matemáticos: Adição(+), Subtração(-), Multiplicação(*), Divisão(/), Resto da divisão(%), potencia(**)
	* Precedência dos operadores:
		* (){}[]: Na ordem que aparecerem da esquerda para a direita.
		* (**) ou sqr: Na ordem que aparecerem da esquerda para a direita.
		* (*), / ou %: Na ordem que aparecerem da esquerda para a direita.
		* (+) ou -: Na ordem que aparecerem da esquerda para a direita.
		* Operadores Aritméticos => Relacionais => Lógico
		* Operadores lógicos ! => && => ||
	* Operadores relacionais: >, <, >=, <=, ==, !=
	* Sinal de =:
		* = -> Atribuição para variáveis
		* == -> Operador de igualdade
		* === -> Restritamente igual,  operador identidade (igualdade no valor e no tipo)
	* Operadores lógicos: !(negação), &&(e lógico) e ||(ou lógico):
	* Operador ternário: [teste lógico]?[true]:[false]
	* Document Object Model -> Ajuda na manipulação dos elementos do HTML5
		* Ascendente ou parent
		* Descendente ou child
	* Navegando entre os elementos.
		* Tipos de acessos aos elementos:
			* Por marca -> variável = window.document.getElementsByTagName('tag') "se tiver mais de uma das tag
			selecionada pode usar o fatiamento com [] iniciando de 0"
				~~~JavaScript
				let p1 = window.document.getElementsByTagName('p')[0]
				~~~
			* Por ID -> variável = window.document.getElementById('id')
			* Por Nome -> variável = window.document.getElementsByName('nome') "se tiver mais de um elemento com o mesmo
			nome pode usar o fatiamento com [] iniciando de 0
			* Por Classe -> variável = window.document.getElementsByClassName('nome')
			* Por Seletor -> variável = windows.document.querySelector()
				* (tag#id) quando a tag tem um id usa-se # na separação
				* (tag.class) quando a tag usa uma class usa-se . na separação
	* Estrutura de uma função:
		* function -> declaração da função
		* nomeFunção() ou nome_Função() -> nome para a função usado para chamá-la, podendo ter ou não parâmetros
    	* o uso das chaves é obrigatório para marcar o bloco de código
	* console.log() -> para exibir mensagem na tela do console
	* Desvio de condições:
		* Desvio de condição simples: if (condição) {bloco de comandos executado caso a condição seja verdadeira} 
		* Desvio de condição composta: if (condição) {bloco de comandos executado caso a condição seja verdadeira} else 
	{ bloco de comandos executados caso a condição seja falsa}
		* Condições aninhadas: if (condição) {bloco de comandos executado caso a condição seja verdadeira} else if {bloco
		de comando executado caso as opção anteriores sejam falsas e a segunda seja verdadeira} else {bloco de comando
		executado caso todas as opções anteriores sejam falsas}
		* Condições múltipla: switch (expressão) {bloco de código com opções - case opção_01: código break- case opção_02: código break - case opção_03 código break- default: código caso nenhuma das opções acima seja satisfeita break}
	* variável = new Date() -> para pegar data e hora do sistema