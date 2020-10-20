'use strict'

/*
Hacer un programa que muestre todos los nueros entre dos nueros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce el primero numero", 0));
var numero2 = parseInt(prompt("Introdusca el segundo numero", 0));

document.write("<h1>De " +numero1+" a "+numero2+" están estos numeros:</h1>")
for(var i = numero1; i <= numero2; i++){
 document.write(i+"<br/>");
}
