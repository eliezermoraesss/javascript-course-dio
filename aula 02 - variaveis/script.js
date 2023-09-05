// tipos primitivos

// boolean
var vOuF = false;
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = 'Eliezer'
console.log(typeof(nome));


/*
var – escopo global e local, pode ter seu valor alterado, se não
tiver um valor inicial será tratada como null;

let – escopo local de bloco, pode ter seu valor alterado, se não
tiver um valor inicial será tratada como null;

const – escopo local de bloco, somente leitura, o valor inicial é
obrigatório e não pode ser alterado.*/

// como declarar
var variavel = 'Eliezer';
variavel = 'Nádia';
console.log(variavel);

let variavel2 = 'Eliezer';
variavel2 = 'Moraes';
console.log(variavel2);

const constante = 'Noopy'
console.log(constante);

/*
O escopo em JavaScript define a limitação e visibilidade de um
bloco de código.

Escopo global – quando a variável é declarada fora de qualquer
bloco, sua visibilidade fica disponível em todo o código.

Escopo local – quando a variável é declarada dentro de um bloco,
sua visibilidade pode ficar disponível ou não.
*/

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno)
}

escopoLocal();

/*
Atribuição

O sinal de igualdade “=“ em JavaScript, significa atribuição.

Ex.:
como declarar: var nome = “meu nome”;
como ler: variável nome recebe o valor meunome;
*/

// atribuição
var atribuicao = 'Eliezer';


/*
Para fazermos uma comparação de valores em JavaScript usamos
“==“.

Ex.:
como declarar: "0" == 0; ;
como ler: “0” tem o valor igual a 0?

// nesse caso retorna true
*/
// comparação
var comparacao = '0' == 0;
console.log(comparacao);

/*
Para fazermos uma comparação de valores e tipos em JavaScript
usamos “===“.

Ex.:
como declarar: "0" === 0; ;
como ler: “0” tem o valor e o tipo idêntico a 0?

// nesse caso retorna false
*/

// comparação idêntica
var comparacaoIdentica = '0' === 0
console.log(comparacaoIdentica)

/*
Operadores aritméticos
São tipos de operadores matemáticos com valor numérico:

• + adição;
• - subtração;
• * multiplicação;
• / divisão real;
• % divisão inteira;
• ** potenciação;
*/

// adicao
var adicao = 1 + 1;
console.log(adicao);

// subtracao
var subtracao = 1 - 1;
console.log(subtracao);

// multiplicao
var multiplicao = 2 * 3;
console.log(multiplicao);

// multiplicao
var divisao = 6 / 2;
console.log(divisao);

// divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// potenciacao
var potenciacao = 2 ** 10;
console.log(potenciacao);

/*
Operadores relacionais

São tipos de operadores que consultam a relação entre valores:

• > maior que;
• < menor que;
• >= maior ou igual a;
• <= menor ou igual a;
*/

// maior que
var maiorQue = 5 > 3;
console.log(maiorQue);

// menor que
var menorQue = 6 < 10;
console.log(menorQue);

// maior ou igual que
var maiorOuIgualQue = 5 >= 6;
console.log(maiorOuIgualQue);

// menor ou igual que
var menorOuIgualQue = 6 <= 1;
console.log(menorOuIgualQue);

/*
Operadores lógicos

São tipos de operadores que consultam valores lógicos:

• && - “e” – considera que todos os valores sejam true;
• || - “ou” – considera que qualquer valor seja true;
• ! - “não” – inverte o valor de true para false ou vice-versa;
*/

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);