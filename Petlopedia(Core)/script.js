

document.getElementById("Sesion").addEventListener("click", function () {
    cambiarTexto();
});

function cambiarTexto() {
    var boton = document.getElementById("Sesion");
    if (boton.innerHTML === "Iniciar Sesion") {
        boton.innerHTML = "Cerrar Sesion";
    } else {
        boton.innerHTML = "Iniciar Sesion";
    }
}
document.getElementById("definicion").addEventListener("click", function () {
    borrar();

});
function borrar() {
    var boton = document.getElementById("definicion");
    boton.style.display = "none";
}

document.getElementById("boton1").addEventListener("click", function () {
    like("conteo1");
});

document.getElementById("boton2").addEventListener("click", function () {
    like("conteo2");
});

function like(conteoId) {
    alert("Gracias por tu like");
    var conteo = document.getElementById(conteoId);
    var currentCount = parseInt(conteo.innerHTML);
    conteo.innerHTML = currentCount + 1;
}