// Como empezamo a trabaja rJs en nuestro proyecto interactivo
// siempre lo vamos a trabajar vinculaod a un html
// dos maneras de vincularlo.
// 1) Etiqueta JavaScript script:src.
//SIEMRPE COLOCO EL SCRIPT AL FINAL DEL HTML Y LE INSERTO LA RUTA AL .JS
/* cOMENTYARIO EN BLOque */
//comentario en  una linea

// em Js no tengo en cuento los espacios en blanco

// Case Sensitive: distinge entre Mayusc y Minus.

//let estoEsUnEjemplo
//let estoesunejemplo

// podemos terminar las lineas de codigo sin ";", pero por buena practica es necesario hacerlo


//hay palabras que son de tipo RESERVADAS.(estan en sintaxis)


//Tipos de Datos:

//PRIMITIVOS: 
//ej: 14525 => number => operaciones matematicas

//STRING:
//ej: "este es un tipo de dato string" => Dato en cadena de caracteres
//Los Strings van entre comillas.

//true/false => Tipo de dato booleando. Permite tomar solo uno de los valores
//null(nulo)
//undefined = es cuando el valor no esta definido
//variables: son espacios de memoria que resevamos para:
//almacenar informacion durante la ejecucion del Programa

//let nombreAlumno = "ruby";
//console.log(nombreAlumno);


//puedo cmabiar el nombre de esta variable?
//si, js me lo permite porque estoy usando la palabra reservada "let",
//Lo reasigno con el nombre de la variable (sin let)

//nombreAlumno = "Rubiuwu";
//console.log(nombreAlumno)

//const pi = 3.14945547578;
//console.log()


//ejemlo de const: dni, iva, dias de la semana, 

//calculo de promedio de notas
//alert ("Bienvenido a su promedio de notas")
//let ingreseNombre = prompt("ingrese su nombre")
//let notaPrimerParcial = parseFloat (prompt("ingrese la nota de su primer parcial para la materia"))
//let notaSegundoParcial = parseFloat (prompt("ingrese la nota de su segundo parcual para la materia"))
//let notaFinal = (notaPrimerParcial + notaSegundoParcial)/2;

//cocnatenar un mensaje con String y variables
//alert("El alumno: " + ingreseNombre + " a sacado en su primer parcial " + notaPrimerParcial + " y en  su segundo parcial a sacado " + notaSegundoParcial + " cuyo promedio es " + notaFinal)
// parse int enteros parse float decimales

/*let edad = parseInt(prompt ("Ingrese su edad"));

edad = Number(edad);

if ( edad >= 18){
    alert("pueder entrar a la aplicacion");
}   else{
    alert ("Acceso Denegado, espere a cumplir 18")
}*/

// let mostrar = true;
// if (mostrar) {
    // alert ("diga un numero del uno al seis")
// }

// let indentificacion = parseInt(prompt ("Ingrese DNI"));
// let carnetDeConducir = parseInt(prompt ("Ingrese su numero de Carnet de Conducir"));
// let edad = parseInt(prompt("Ingrese su edadxd"));

// if(((identificacion || carnetDeConducir) && edad>17 && edad<70)){
//     alert ("Puede continuar el acceso e identificarse");
// }  else{
//     alert ("No puede continuar");
// }

// Ciclos/Bucles/Iteraciones
// tipos de ciclos
// 1) por conteo
// 2) condicionales (while y do while)
// Conteo: For
// sintaxis:
// for ( desde , hasta, actualizacion)
// desde: primer valor que me pide el codigo
// hasta: va a ser el valor hasta donde va a iterar mi codigo
// actualizacion: 