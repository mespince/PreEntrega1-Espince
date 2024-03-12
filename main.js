console.log("Bienvenido al Cotizador de Seguros de Matias Espince")

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}


let nombre = prompt("Bienvenid@ ingrese su nombre");
let apellido = prompt("Ingrese su Apellido");
let edad = 2024 - parseFloat(prompt("Ingrese su año de nacimiento"));
let valorPorAños = 350;

const Persona1 = new Persona (nombre, apellido, edad)
console.log(Persona1)

alert ("Gracias por confiar en nosotros.");

const cotizacion = ( edad * valorPorAños); 
const cotiIva = (cotizacion * 1.21)


console.log("hola " + nombre + " tu edad es " + edad + ", por lo cual tendras un seguro de valor $" + cotizacion + " pero al contar con IVA dicho valor seria de $" + cotiIva)

for (let i = 0; i <= 10; i++){
    console.log(i);
}

while (nombre != "Matias"){
    console.log(nombre);
}