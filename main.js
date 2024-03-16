function Persona(nombre, apellido, añoNacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 2024 - añoNacimiento; 
}

let valorPorAños = 350;

console.log("Bienvenido al Cotizador de Seguros de Matias Espince");

let nombre = prompt("Ingrese su nombre");
while (nombre === "" || nombre === ".") {
    nombre = prompt("POR FAVOR INGRESE SU NOMBRE")
}
let apellido = prompt("Ingrese su apellido");
while (apellido === "" || apellido === ".") {
    apellido = prompt("POR FAVOR INGRESE SU APELLIDO AHORA")
}

let añoNacimiento;
while (true) {
    añoNacimiento = prompt("Por favor ingrese su año de Nacimiento");
    if (añoNacimiento.trim() !== "" && !isNaN(añoNacimiento)) {
        añoNacimiento = parseInt(añoNacimiento);
        break;
    } else {
        alert("ERROR! Ingrese un año numérico.");
    }
}
const persona1 = new Persona(nombre, apellido, añoNacimiento);

console.log("Información de Persona:");
console.log(persona1);

const cotizacion = persona1.edad * valorPorAños;
const cotiIva = cotizacion * 1.21;

function Ejemplos(nombreEj, edadEj) {
    this.nombreEj = nombreEj;
    this.edadEj = edadEj;
    this.cotizacionEj = edadEj * 350;
}

const ejemplo1 = new Ejemplos("Juan", 18);
const ejemplo2 = new Ejemplos("Pedro", 25);
const ejemplo3 = new Ejemplos("Alberto", 30);

const arrayEjemplos = [ejemplo1, ejemplo2, ejemplo3];

console.log("Información de Ejemplos:");
arrayEjemplos.forEach(ejemplo => {
    console.log("Nombre: ", ejemplo.nombreEj);
    console.log("Edad: ", ejemplo.edadEj);
    console.log("Cotización: $", ejemplo.cotizacionEj);
    console.log("-----------------------------");
});

let mensajePlanilla = `Hola ${nombre} tu edad es ${persona1.edad} años, por , por lo cual tendrás un seguro de valor $${cotizacion} pero al contar con IVA dicho valor sería de $ ${cotiIva}`

if (persona1.edad <= 17) {
    alert("Usted es menor de edad y no puede realizarse una cotización");
} else {
    alert(mensajePlanilla);
    console.log("Información de Persona:");
    console.log("Nombre: ", persona1.nombre);
    console.log("Apellido: ", persona1.apellido);
    console.log("Edad: ", persona1.edad);
    console.log("Cotización: $", cotizacion);
    console.log("Tenga en cuenta que la cotizacion inicial es sin IVA")
    console.log("Cotizacion con IVA: $", cotiIva);
    console.log("-----------------------------");
    document.write("<h2>Información de Persona:</h2>");
    document.write("<p><u>Nombre:</u> " + persona1.nombre + "</p>");
    document.write("<p><u>Apellido:</u> " + persona1.apellido + "</p>");
    document.write("<p><u>Edad:</u> " + persona1.edad + "</p>");
    document.write("<p><u>Cotización:</u> $" + cotizacion + "</p>");
    document.write("<p>Tenga en cuenta que la cotización inicial es sin IVA</p>");
    document.write("<p><u>Cotización con IVA:</u> $" + cotiIva + "</p>");
    document.write("<hr>");


}

alert("Gracias por confiar en nosotros.");