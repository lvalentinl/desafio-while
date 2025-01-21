/*
Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. 
Muestra cada número.

Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. 
Muestra cada número.

Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 
hasta ese número utilizando un bucle 'while' en la consola del navegador.

Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 
hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/
let contadorHasta10 = 1;
let contadorHastaCero = 10;
let contadorProgInicial = 0;
let contadorRegresivo;
let contadorProgresivo;

while (contadorHasta10 <= 10) {
    //console.log(contadorHasta10);
    alert(`el valor es: ${contadorHasta10}`);
    contadorHasta10++;
}

while (contadorHastaCero >= 0) {
    //console.log(contadorHastaCero);
    alert(`el valor es: ${contadorHastaCero}`);
    contadorHastaCero--;
}

contadorRegresivo = prompt("Ingrese un número positivo:");
while (contadorRegresivo >= 0 ) {
    console.log(contadorRegresivo);
    contadorRegresivo--;
}

contadorProgresivo = prompt("Ingrese un número positivo:");
while (contadorProgInicial <= contadorProgresivo) {
    console.log(contadorProgInicial);
    contadorProgInicial++;
}