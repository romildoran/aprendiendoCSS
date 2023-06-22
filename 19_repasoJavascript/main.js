// imprimir datos en pantalla
var nombre = "Ronald Duarte";
var altura = 170;
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `

<h1>Soy la caja de datos</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>mido: ${altura} cm</h3>

`;

// estructuras de control
if (altura >= 170) {
    datos.innerHTML += `<h1>Eres una persona alta</h1>`;
} else {
    datos.innerHTML += `<h1>Eres una persona baja</h1>`;
}

// bucles

for (var i = 2000; i <= 2023; i++) {
    // bloque de instruccion
    datos.innerHTML += "<h2>Estamos en el año: " + i;
}

// funciones

function muestraMiNombre(nombre, altura) {
    var misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>mido: ${altura} cm</h3>
        `;
    return misDatos;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = muestraMiNombre("Orlando Valero", 169);
}

imprimir();

// arrays

var nombres= ["Victor", "Jose", "Raul", "Eduardo", "Regina", "Laura", "Cristina"];
document.write("<h1>Listado de nombres</h1>");
for(i=0; i<nombres.length; i++){
    document.write(nombres[i]+"<br/>");
}

nombres.forEach(function(nombre){
    document.write(nombre +"<br/>");
});

nombres.forEach((nombre) => {
    document.write(nombre +"<br/>");
});