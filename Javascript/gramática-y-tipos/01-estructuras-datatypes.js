// Symbol
// Crear un Symbol
const id = Symbol("id");
console.log(id);

// Crear otro Symbol con la misma descripción
const id2 = Symbol("id");
console.log(id2);

console.log(id === id2); // false (son únicos)

// Redefinición con diferentes tipos de variables
var answer = 37;
console.log(answer);
answer = "Para configurar tus snippets...";
console.log(answer);

// Operador '+'
x = "La respuesta es " + 37;
y = 37 + " es la respuesta";
z = "37" + 5;
console.log(x);
console.log(y);
console.log(z);

// Demás operadores

console.log("37" - 7);
console.log("37" * 2.71828182);
console.log("37" / 3.14159265);
console.log("37" % 5);
console.log("37" ** 2);

// Desconcantenación

console.log("1.1" + "1.1");
console.log(+"1.1" + +"1.1");
console.log(+"1.1" + +"1.1");
