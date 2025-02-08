$(document).ready(function () {
    alert("¡Cargando Reporte del Clima!");

    $("#bot").click(function () {
        $("footer").fadeOut();
    });

    $("#lista li").click(function () {
        var ciudadSeleccionada = $(this).text();
        $("#ciudad").text(ciudadSeleccionada);

        if (climaCiudades[ciudadSeleccionada]) {
            var tarjetasHTML = "";

            $.each(climaCiudades[ciudadSeleccionada], function (index, clima) {
                tarjetasHTML += '<div class="tarjeta">' +
                    '<img class="poster" src="' + clima.img + '" alt="' + clima.estado + '">' +
                    '<h2>' + clima.dia + '</h2>' +
                    '<span>' + clima.estado + '</span>' +
                    '<span class="temp" data-celsius-max="' + clima.tempMax + '" data-celsius-min="' + clima.tempMin + '">' + clima.tempMax + '°C ' + clima.tempMin + '°C</span>' +
                    '</div>';
            });

            $("section").html(tarjetasHTML);

            actualizarTemperaturas($('#temperatura').val());
        }
    });

    $('#temperatura').change(function () {
        var unidad = $(this).val();
        actualizarTemperaturas(unidad);
    });

    function actualizarTemperaturas(unidad) {
        $('.temp').each(function () {
            var tempMax = $(this).data('celsius-max');
            var tempMin = $(this).data('celsius-min');

            if (unidad === 'C') {
                $(this).text(tempMax + '°C ' + tempMin + '°C');
            } else {
                var tempMaxF = (tempMax * 9 / 5) + 32;
                var tempMinF = (tempMin * 9 / 5) + 32;
                $(this).text(tempMaxF.toFixed(1) + '°F ' + tempMinF.toFixed(1) + '°F');
            }
        });
    }

    const climaCiudades = {
        "Buenos Aires": [
            { dia: "Hoy", estado: "Nublado", img: "img/nublado.png", tempMax: 23, tempMin: 12 },
            { dia: "Mañana", estado: "Lluvioso", img: "img/lluvioso.png", tempMax: 20, tempMin: 15 },
            { dia: "Miércoles", estado: "Tormentoso", img: "img/tormenta.png", tempMax: 15, tempMin: 12 },
            { dia: "Jueves", estado: "Parc. Nublado", img: "img/par nublado.png", tempMax: 23, tempMin: 16 },
            { dia: "Viernes", estado: "Soleado", img: "img/sol.png", tempMax: 27, tempMin: 17 }
        ],
        "Ciudad de Mexico": [
            { dia: "Hoy", estado: "Soleado", img: "img/sol.png", tempMax: 28, tempMin: 18 },
            { dia: "Mañana", estado: "Parc. Nublado", img: "img/par nublado.png", tempMax: 25, tempMin: 20 },
            { dia: "Miércoles", estado: "Nublado", img: "img/nublado.png", tempMax: 22, tempMin: 18 },
            { dia: "Jueves", estado: "Lluvioso", img: "img/lluvioso.png", tempMax: 21, tempMin: 19 },
            { dia: "Viernes", estado: "Tormentoso", img: "img/tormenta.png", tempMax: 20, tempMin: 18 }
        ],
        "Santiago": [
            { dia: "Hoy", estado: "Lluvioso", img: "img/lluvioso.png", tempMax: 18, tempMin: 12 },
            { dia: "Mañana", estado: "Nublado", img: "img/nublado.png", tempMax: 19, tempMin: 15 },
            { dia: "Miércoles", estado: "Tormentoso", img: "img/tormenta.png", tempMax: 20, tempMin: 16 },
            { dia: "Jueves", estado: "Parc. Nublado", img: "img/par nublado.png", tempMax: 22, tempMin: 17 },
            { dia: "Viernes", estado: "Soleado", img: "img/sol.png", tempMax: 24, tempMin: 18 }
        ],
        "San Paulo": [
            { dia: "Hoy", estado: "Soleado", img: "img/sol.png", tempMax: 30, tempMin: 22 },
            { dia: "Mañana", estado: "Lluvioso", img: "img/lluvioso.png", tempMax: 26, tempMin: 20 },
            { dia: "Miércoles", estado: "Parc. Nublado", img: "img/par nublado.png", tempMax: 27, tempMin: 21 },
            { dia: "Jueves", estado: "Nublado", img: "img/nublado.png", tempMax: 25, tempMin: 19 },
            { dia: "Viernes", estado: "Tormentoso", img: "img/tormenta.png", tempMax: 24, tempMin: 18 }
        ],
        "Quito": [
            { dia: "Hoy", estado: "Lluvioso", img: "img/lluvioso.png", tempMax: 20, tempMin: 10 },
            { dia: "Mañana", estado: "Nublado", img: "img/nublado.png", tempMax: 21, tempMin: 11 },
            { dia: "Miércoles", estado: "Soleado", img: "img/sol.png", tempMax: 22, tempMin: 12 },
            { dia: "Jueves", estado: "Parc. Nublado", img: "img/par nublado.png", tempMax: 21, tempMin: 13 },
            { dia: "Viernes", estado: "Lluvioso", img: "img/lluvioso.png", tempMax: 19, tempMin: 11 }
        ]
    };
});