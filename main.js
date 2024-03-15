console.log("Bienvenido al Cotizador de Seguros de Matias Espince")

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
let valorPorAños = 350;



let nombre = prompt("Ingrese su nombre");
while (nombre === "" || nombre === "."){
    nombre = prompt("POR FAVOR INGRESE SU NOMBRE")
}
let apellido = prompt("Ingrese su apellido");
while (apellido === "" || apellido === "."){
    apellido = prompt("POR FAVOR INGRESE SU APELLIDO AHORA")
}
let año = parseFloat(prompt("Ingrese su año de nacimiento"));
let edad = 2024 - año

const Persona1 = new Persona (nombre, apellido, año)
console.log(Persona1)

const cotizacion = ( edad * valorPorAños); 
const cotiIva = (cotizacion * 1.21)

if(edad <=17){
    alert ("Usted es menor de edad y no puede realizarse una cotizacion");
}
else{
    console.log("hola " + nombre + " tu edad es " + edad + ", por lo cual tendras un seguro de valor $" + cotizacion + " pero al contar con IVA dicho valor seria de $" + cotiIva);
}





alert ("Gracias por confiar en nosotros.");