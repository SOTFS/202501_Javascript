




document.addEventListener("DOMContentLoaded", function () {
    var botonEditar = document.getElementById("cambiar");
    var nombreH1 = document.getElementById("nombre");

    botonEditar.addEventListener("click", function () {
        nombreH1.textContent = "Lisa Mackensie";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var botonesAceptar = document.querySelectorAll(".success");
    var spanRestar = document.getElementById("restar");
    var spanSumar = document.getElementById("suma");

    botonesAceptar.forEach(function (boton) {
        boton.addEventListener("click", function () {
            var contadorRestar = parseInt(spanRestar.textContent.replace("(", "").replace(")", ""));
            contadorRestar--;
            spanRestar.textContent = "(" + contadorRestar + ")";

            var contadorSumar = parseInt(spanSumar.textContent.replace("(", "").replace(")", ""));
            contadorSumar++;
            spanSumar.textContent = "(" + contadorSumar + ")";

            var li = this.closest("li");
            li.remove();
        });
    });
});
