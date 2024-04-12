function Persona(nombre, apellido, añoNacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 2024 - añoNacimiento; 
}
let valorPorAños = 350;


// Begin of the code, ahre porque en ingle

console.log("Bienvenido al Cotizador de Seguros de Matias Espince");


//Peticion de Datos

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

//Creacion de la persona

const persona1 = new Persona(nombre, apellido, añoNacimiento);

//Cotizacion

const cotizacion = persona1.edad * valorPorAños;
const cotiIva = cotizacion * 1.21;

//Ejemplos

function Ejemplos(nombreEj, edadEj) {
    this.nombreEj = nombreEj;
    this.edadEj = edadEj;
    this.cotizacionEj = edadEj * 350;
}

const ejemplo1 = new Ejemplos("Juan", 18);
const ejemplo2 = new Ejemplos("Pedro", 25);
const ejemplo3 = new Ejemplos("Alberto", 30);

const arrayEjemplos = [ejemplo1, ejemplo2, ejemplo3];

//Si todo es correcto continua aca

let mensajePlanilla = `Hola ${nombre} tu edad es ${persona1.edad} años, por lo cual tendrás un seguro de valor $${cotizacion} pero al contar con IVA dicho valor sería de $ ${cotiIva}`

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

    // Aca quise flashear porque Nacho uso Document y lo busque y me gusto xD
    document.write("<h2>Información de Persona:</h2>");
    document.write("<p><u>Nombre:</u> " + persona1.nombre + "</p>");
    document.write("<p><u>Apellido:</u> " + persona1.apellido + "</p>");
    document.write("<p><u>Edad:</u> " + persona1.edad + "</p>");
    document.write("<p><u>Cotización:</u> $" + cotizacion + "</p>");
    document.write("<p>Tenga en cuenta que la cotización inicial es sin IVA</p>");
    document.write("<p><u>Cotización con IVA:</u> $" + cotiIva + "</p>");
    document.write("<hr>");
}

//Consolea el Find en Ejemplos

const ejemploBuscado = arrayEjemplos.find(ejemplo => ejemplo.nombreEj === "Juan"); 

if (ejemploBuscado) {
    console.log("Información del Ejemplo:");
    console.log("Nombre: ", ejemploBuscado.nombreEj);
    console.log("Edad: ", ejemploBuscado.edadEj);
    console.log("Cotización: $", ejemploBuscado.cotizacionEj);
    console.log("-------------------------------");
} else {
    console.log("Error no hay ningun Juan Loco, media pila");
}


// Intentar hacer un Lord DOMinick + 40% Armor Pen

arrayEjemplos.forEach(ejemplo => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h2>Información del Ejemplo:</h2>
        <p><u>Nombre:</u> ${ejemplo.nombreEj}</p>
        <p><u>Edad:</u> ${ejemplo.edadEj}</p>
        <p><u>Cotización:</u> $${ejemplo.cotizacionEj}</p>
        <p>Tenga en cuenta que la cotización inicial es sin IVA</p>
        <p><u>Cotización con IVA:</u> $${ejemplo.cotizacionEj * 1.21}</p>
        <hr>`;
    document.body.appendChild(div);
});


//Finaliza con un ALERT 

alert("☺ Gracias por confiar en nosotros. ♥");