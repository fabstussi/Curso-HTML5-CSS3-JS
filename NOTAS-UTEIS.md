# Anotações úteis do curso.

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