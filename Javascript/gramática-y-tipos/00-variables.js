//VARIABLES
//para definir variables, se usar lowerCamelCase

//var
//usado actualmente para casos muy particulares
var helloWorld = "¡Hello, JavaScript!";
console.log(helloWorld);

//redeclarar una variable
helloWorld = "¡I want keke!";
console.log(helloWorld);

//let
let helloWorld2 = "¡Hello, ECMAScript!";
console.log(helloWorld2);

//const
const helloWorld3 = 5;
console.log(helloWorld3);

//undefined
var a;
console.log(a);

//NaN
var b;
console.log(b + 2);

//undefined --> determinar valor de una variable
var input;
if (input === undefined) {
    console.log("undefined");
} else {
    console.log("SIUUUU");
}

//undefined --> false en booleano
var myArray = [];
if (!myArray[0]) console.log(false);

//null
var n = null;
console.log(n * 32);

//hoisting
console.log(x === undefined);
var x = 3;

(function () {
    console.log(myVar);
    var myVar = "valor local";
})();

// Declaración de función

foo(); // "bar"

function foo() {
    console.log("bar");
}

// NO PROTEGIDAS POR CONSTANTES
// Propiedades de objetos

const MY_OBJECT = { key: "value" };
console.log(MY_OBJECT.key);
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT.key);

// Contenido de arrays
const MY_ARRAY = ["HTML", "CSS"];
console.log(MY_ARRAY);
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // registra ['HTML','CSS','JAVASCRIPT'];
