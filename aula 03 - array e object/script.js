// o que sao vetores ou arrays

// como declarar um array
//let array = ['string', 1, true];
//console.log(array);

// pode guardar vários tipo de dados
let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array2[3]);

/*
Manipulando Arrays

Ao ser declarado, o Array traz consigo uma série de métodos para
manipulá-lo.

• forEach() – itera um array;
• push() – add item no final do array;
• pop() – remove item no final do array;
• shift() – remove item no início do array;
• unshift() – add item no início do array;
• indexOf() – retorna o índice de um valor;

Manipulando Arrays

• splice() – remove ou substitui um item pelo índice;
• slice() – retorna uma parte de um array existente;
*/

// forEach
array2.forEach(function (item, index) { console.log(item, index); })

// push
array2.push('novo item');
console.log(array2);

array2.pop();
console.log(array2);

array2.shift();
console.log(array2);

array2.unshift('novo item no inicio');
console.log(array2);

console.log(array2.indexOf(1));

//array2.splice(0, 3);
console.log(array2);

let novoArray = array2.slice(0, 3);
console.log(novoArray);

/*
Objetos

Dados que possuem propriedades e valores que definem suas
características. Deve ser declarado entre chaves “{}”.

Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários
tamanhos e funções(quero cafééé). Pode ser declarada assim:
var xicara = {
cor: ‘azul’,
tamanho: ‘p’,
funcao: tomarCafe()
}

Manipulando objetos

As propriedades de ojbetos podem ser atribuídas à variáveis,
facilitando a manipulação do objeto. Chamamos isso de
desestruturação.

Ex.: var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}

var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tomarCafe();

Manipulando objetos

Outra forma de fazer a desestruturação é utilizando chaves ao
declarar a variável:

Ex.: var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}

var { cor, tamanho, funcao } = xicara;
*/

let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['array'],
    objectInterno: {
        objectInterno: 'objeto interno'
    }
}

console.log(object.objectInterno);

// Desestruturação
// 1º MODO
// var string = object.string;
// console.log(string);

// var arrayInterno = object.array;
// console.log(arrayInterno);

// 2º MODO
var {string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);