var like1 = document.getElementById("like1");
var like2 = document.getElementById("like2");
var like3 = document.getElementById("like3");

var conteo1 = document.getElementById("conteo1");
var conteo2 = document.getElementById("conteo2");
var conteo3 = document.getElementById("conteo3");

like1.addEventListener("click", function () {
    incrementarLike(conteo1);
});

like2.addEventListener("click", function () {
    incrementarLike(conteo2);
});

like3.addEventListener("click", function () {
    incrementarLike(conteo3);
});

function incrementarLike(conteo) {
    var currentCount = parseInt(conteo.innerHTML);
    conteo.innerHTML = currentCount + 1;
}