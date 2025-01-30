// Pares del 1 al 30
for (var i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// múltiplos de 4 en orden descendente
for (var i = 100; i >= 0; i--) {
    if (i % 4 === 0) {
        console.log(i);
    }
}

// la secuencia: 10, 7, 4, 1, -2, -5
for (var i = 10; i >= -5; i -= 3) {
    console.log(i);
}

// Sumas de los números pares del 1 al 50
var sum = 0;
for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log("la suma de todos los pares hasta el 50 es ", sum);

// factorial de 1 a 20
var f = 1;
for (var i = 1; i <= 20; i++) {
    f *= i;
}
console.log("el factorial del 1 al 20 es ", f);