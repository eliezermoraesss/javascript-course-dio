// tipos primitivos

// boolean
var vOuF = false;
console.log(typeof(vOuF))

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'Eliezer'
console.log(typeof(nome));


/*
var – escopo global e local, pode ter seu valor alterado, se não
tiver um valor inicial será tratada como null;

let – escopo local de bloco, pode ter seu valor alterado, se não
tiver um valor inicial será tratada como null;

const – escopo local de bloco, somente leitura, o valor inicial é
obrigatório e não pode ser alterado.*/

//como declarar
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