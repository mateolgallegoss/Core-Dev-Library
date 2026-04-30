# Sintáxis de Javascript
## Declarar variables

1. Javascript distingue entre mayúsculas y minúsculas, y permite utilizar a los identificadores la mayoría de letras Unicode.También permite usar `Secuencias de escape Unicode`. En JavaScript se recomienda para la mayoría de los casos definir las variables con lowerCamelCase.
---
2. Para declarar variables, existen dos formas.
   1. Para declarar variables locales y globales, se usa la palabra clave `var`.
   2. En cambio, para variables de uso local con ámbito de bloque se usa `let` y `const`.
   3. Si no se da ninguna clave, la variable se le considera como una variable `global no declarada`. ***No se recomienda su uso bajo ningún contexto***.

## Evaluar variables
Si se declara unna variable `var` o o `let` sin darle un valor asignado tiene el valo de `undefined`.
~~~
var a;
console.log("El valor de a es" + a) //El valor de a es undefined
~~~
Un intento de acceder a una variable no declarada da como resultado la excepción `ReferenceError`.
~~~
console.log("El valor de b es" + b) //Error de referencia no detectado: c no está definida
~~~

### Undefined
Se puede usar `undefined` para determinar si una variable tiene un valor:
~~~
var input;
if (input === undefined) {
    doThis();
} else {
    doThat();
}
~~~
El valor `undefined` se comporta como `false` en un contexto booleano:
~~~
var myArray = [];
if (!myArray[0]) myFunction();
~~~
El valor `undefined` se convierte en NaN cuando se lo usa para operar o en un contexto numérico.
### Null
Cuando se evalúa una variable `null`, el valor nulo se comporta como `0` en contexto númericos y como `false` en contextos booleanos:
~~~
var n = null;
console.log(n * 32); // Registrará 0 en la consola
~~~

### Hoisting
Algo inusual en la variables en JavaScript es la elevación de variables (`hoisting`), que consiste en que puedes hacer referencia a una variable declarada más tarde, sin obtener un excepción.

Este fenómeno ocurre porqué las variables en JavaScript son izadas a la parte superior de la función/declaración. No obstante, las variables elevadas devuelven un valor de `undefined`.

**Ejemplo 1:**
~~~
console.log(x === undefined); // retorna true
var x = 3;

//Esto es igual que lo anterior
var x;
console.log(x === undefined); // true
x = 3;
~~~
**Ejemplo 2:**
~~~
(function () {
    console.log(myVar); // retorna undefined
    var myVar = "valor local";
})();

//Esto es igual que lo anterior
(function () {
    var myVar;
    console.log(myVar); // undefined
    myVar = "valor local";
})();
~~~
En el caso de `let` y `const`, se pueden elevar pero no se inician. Hacer referencia a la variable en el bloque antes de la declaración de la variable da como resultado un `ReferenceError`, porque la variable está en una "zona muerta temporal" desde el inicio del bloque hasta que se procesa la declaración.

Por ejemplo, aquí no encuentra a la variable, que está en una zona muerta durante la ejecución del `console.log`:
~~~
console.log(x); // ReferenceError
let x = 3;
~~~

En el caso de las funciones, el `hoisting` solo se incluye en las *declaraciones* de función, mas no en las *expresiones* de la función:
~~~
/* Declaración de función */

foo(); // "bar"

function foo() {
  console.log("bar");
}

/* Expresión de función */

baz(); // TypeError: baz no es una función

var baz = function () {
  console.log("bar2");
};
~~~
