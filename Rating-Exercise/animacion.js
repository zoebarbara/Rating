var value = ""; //Define value vacío
var iconos = document.getElementById('iconGroup'); // Recoge el div de iconos -> click fuera div

function rate(value) { // Declara función rate, parámetro value que recoge en función onClick
    cleanIcons(); //Limpia la clase active de todos los iconos, para poder volver a darles valor infinidad de veces
    paintIcons(value); //Pinta los iconos con value recogida en on click
}

function cleanIcons() { //Declara función       
    for (let i = 1; i <= 5; i++) { //itera los iconos del 1-5
        var element = document.getElementById("icono" + i); //Declara var element = icono1,icono2...
        element.classList.remove("active"); //Borra la clase active en aquellos que está activa
    }
}

function paintIcons(value) { //Pinta iconos, parñametro value recogido on click
    for (let i = 1; i <= value; i++) { //Itera hasta value
        var element = document.getElementById("icono" + i); //Selecciona icono1,icono2... hasta value
        element.classList.add("active"); // Añade class active a cada uno de ellos
    }
}

window.addEventListener('click', function (event) { //Recoge un click en la ventana
    var isClickInside = iconos.contains(event.target); //isClickInside = zona iconos, que recogemos en la segunda línea
    if (!isClickInside) { //Si el click no está dentro, limpiar iconos
        cleanIcons();
    }
});