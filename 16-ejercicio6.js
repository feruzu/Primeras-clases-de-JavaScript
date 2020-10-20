'use strict'

/*
Que nos diga si un numero es par o impart.
1. Ventana prompt
2. Si no rd valido que nos pida denuevo el numero
*/

var number = parseInt(prompt('Introduce un numero', 0));

while(isNaN(number)){
    var number = parseInt(prompt('Introduce un numero', 0));
}

if(number % 2 == 0){
    alert("Es un numero par");
}else{
    alert("Es impar");
}