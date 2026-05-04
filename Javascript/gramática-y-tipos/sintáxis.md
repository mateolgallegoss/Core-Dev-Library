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

### Ámbito de Bloque
Las variables por ámbito de bloque, se limitan a un bloque entre llaves `{}`, siempre cuando se use `let` o `const`, puesto que var es una variable de ámbito local/global.
Una variable por ámbito de bloque puede ser local cuando se limita al cuerpo de una función o si es privada a un módulo específico.

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

### Variables globales
Son propiedades del objeto global. En las páginas web el objeto global es `window`. La forma de establecer y acceder a variables globales es utilizando la sintaxis `window.variable`.

Puedes acceder a las variables globales de una ventana o marco desde otra ventana o marco especificando el nombre de la `window` o el `frame`. Por ejemplo, si declaras una variable llamada `phoneNumber` en un documento, desde un `iframe` puedes hacer referencia a esta como `parent.phoneNumber`.

### Constantes
Puedes crear una constante de solo lectura con nombre con la palabra clave `const` siendo una constante.

La constante no puede cambiar el valor a través de la asignación o volver a declararla mientras ejecuta el script. Se debe iniciar a un valor que no se va a cambiar.
~~~
const PI = 3.14;
~~~

No se debe declarar una constante con el mismo nombre que una función o variable en el mismo ámbito de bloque, tal que así:
~~~
// AMBAS EXPRESIONES CAUSARÁN UN ERROR

function f() {}
const f = 5;

function f() {
  const g = 5;
  var g;
}
~~~

Sin embargo, hay dos cosas que no está protegidas por las constantes:
1. Las propiedades asignadas a objetos.
    ~~~
    const MY_OBJECT = { key: "value" };
    MY_OBJECT.key = "otherValue";
    ~~~
2. El contenido de arreglos.
    ~~~
    const MY_ARRAY = ["HTML", "CSS"];
    MY_ARRAY.push("JAVASCRIPT");
    console.log(MY_ARRAY); // registra ['HTML','CSS','JAVASCRIPT'];
    ~~~

# Estructuras y tipos de datos
## Tipos de datos
Existen 8 tipos de datos deifinidos en el último estándar ECMAScript.

### Datos primitivos
1. Booleano: `true` y `false`.
2. null: una palabra clave que denota un valor nulo (`null` no es lo mismo que `Null` o `NULL`).
3. undefined: propiedad de alto nivel cuyo valor no esta definido.
4. Number: un número entero o un número con coma flotante, tales como `67` o `2.71828182`.
5. BigInt: número entero con precisión arbitraria, por ejemplo el `903480170522n`.
6. String: es una secuencia de caracteres que representan un valor de texto, por ejemplo "script".
7. Symbol: Apareció con la versión ECMAScript 6. Es un tipo de dato cuyas instancias son únicas e inmutables. Permite evitar colisiones de nombres, al convertirse automáticamente a string.
~~~
// Crear un Symbol
const id = Symbol("id");

// Crear otro Symbol con la misma descripción
const id2 = Symbol("id");

console.log(id === id2); // false (son únicos)
~~~
### Object
Son como contenedores con nombre para los valores, y las funciones como procedimientos que puedes programar en tu aplicación.

## Conversión de tipos de datos
JavaScript es un lenguaje tipado dinámicamente, significa que no debes especificar el tipo de dato de una variable cuando la declaras. También significa que los tipos de datos se convierten automáticamente según sea necesario durante la ejecución del script.

Así, estoy permite redefinir una variable con un nuevo tipo de dato, sin generar un mensaje de error.
~~~
var answer = 37;
answer = "Para configurar tus snippets...";
~~~

## Números y el operador '+'
El uso de valores numéricos y de cadena con el operador `+` convierte los valroes numéricos en cadenas. A este proceso  se lo conoce como concatenación, aquí unos ejemplos:
~~~
x = "La respuesta es " + 37;  //"La respuesta es 37"
y = 37 + " es la respuesta";  //"37 es la respuesta"
z = "37" + 505;  //"37505"
~~~
Para el resto de operadores, los valores numéricos no se convierten a cadenas. Por ejemplo:
~~~
console.log("37" - 7);
console.log("37" * 2.71828182);
console.log("37" / 3.14159265);
console.log("37" % 5);
console.log("37" ** 2);
~~~
### Convertir texto a números 
Si un un valor númerico está en memoria como texto, existen tres métodos para realizar la conversión:
1. `parseInt()`. Solo devuelve números enteros. ***Se recomienda usar el parámetro `radix` para especificar el sistema numérico que se utilizará.***
    **`Radix`**:
    ~~~
    parseInt("101", 2); // 5
    ~~~
2. `parseFloat()`. Devuelve enteros y décimales.
3. Usar el operador `+`(más unario) en ambos términos, así haremos una desconcatenación:
    ~~~
    "1.1" + "1.1"; // '1.11.1'

    (+"1.1") + (+"1.1"); // 2.2
    +"1.1" + +"1.1"; // 2.2
    ~~~

# Literales
Los literales representan valores en JavaScript, los cuales pueden ser valores fijos, no variables, que literalmente proporcionas en tu script. Esta sección describe los siguientes tipos de literales:
- [Arreglos literales](#literales-1)
- [Booleanos literales](#literales-2)
- [Literales de coma flotante](#literales-3)
- [Literales numéricos](#literales-4)
- [Objetos literales](#literales-5)
- [RegExp literales](#literales-6)
- [Cadenas literales](#literales-7)

## Arreglos literales {#literales-1}
Es una lista de cero o más expresiones, con cada una presente como un elemento del arreglo. Se delimita entre corchetes (`[]`) y su `length` se establece en el número de argumentos especificado. Por ejemplo:
~~~
let favSongs = ["Stay here 4 life", "911/Mr.Lonely", "Jigsaw Falling into Place", "No TRESPASSING"];
~~~

## Booleanos literales {#literales-2}

## Literales de coma flotante {#literales-3}

## Literales numéricos {#literales-4}

## Objetos literales {#literales-5}

## RegExp literales {#literales-6}

## Cadenas literales {#literales-7}