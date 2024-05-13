// Función principal que se ejecuta al cargar el DOM
function iniciarCotizador() {
    console.log("Bienvenido al Cotizador de Matias E. Espince");

    // Asociar eventos y configurar la página
    configurarPagina();
}

// Función para asociar eventos y configurar la página
function configurarPagina() {
    // Obtener el formulario y asociar el evento submit
    const formulario = document.getElementById('formularioDatos');
    formulario.addEventListener('submit', handleSubmit);

    // Rellenar el select de año de nacimiento
    llenarSelectAño();
    
    // Obtener los datos guardados del localStorage y llenar el formulario si existen
    const datosGuardados = obtenerDatosLocalStorage();
    if (datosGuardados) {
        llenarFormulario(datosGuardados);
    }
    
    // Asociar evento click al botón de reiniciar
    const botonReiniciar = document.getElementById('botonReiniciar');
    botonReiniciar.addEventListener('click', reiniciarCotizacion);
}

// Función para manejar el evento submit del formulario
async function handleSubmit(event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

    // Obtener datos del formulario
    const datosPersona = obtenerDatosFormulario();

    // Guardar datos en localStorage
    guardarDatosLocalStorage(datosPersona);

    // Realizar cotización
    const cotizacion = await calcularCotizacion(datosPersona);

    // Mostrar resultados
    mostrarResultados(datosPersona, cotizacion);
}

// Función para obtener los datos del formulario
function obtenerDatosFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const añoNacimiento = parseInt(document.getElementById('añoNacimiento').value);

    return { nombre, apellido, añoNacimiento };
}

// Función para calcular la cotización del seguro
async function calcularCotizacion(datosPersona) {
    // Calcular edad de la persona
    const edad = 2024 - datosPersona.añoNacimiento;

    // Calcular cotización y cotización con IVA
    let cotizacion = edad * 350;
    let cotiIva = cotizacion * 1.21;

    // Obtener valor del dólar oficial y ajustar la cotización
    try {
        const dolarOficial = await obtenerDolarOficial();
        cotizacion *= dolarOficial;
        cotiIva *= dolarOficial;
    } catch (error) {
        console.error('Error al obtener el valor del dólar oficial:', error);
    }

    return { cotizacion, cotiIva };
}

// Función para obtener el valor del dólar oficial
async function obtenerDolarOficial() {
    try {
        const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        const data = await response.json();
        const dolarOficial = parseFloat(data[0].casa.compra.replace(',', '.'));
        return dolarOficial;
    } catch (error) {
        console.error('Error al obtener el valor del dólar oficial:', error);
        throw error; // Propagar el error para manejarlo en la función que lo llama
    }
}

// Función para llenar el select de año de nacimiento
function llenarSelectAño() {
    const selectAñoNacimiento = document.getElementById('añoNacimiento');
    const añoActual = new Date().getFullYear();

    for (let año = 1954; año <= añoActual; año++) {
        const option = document.createElement('option');
        option.value = año;
        option.textContent = año;
        selectAñoNacimiento.appendChild(option);
    }
}

// Función para llenar el formulario con datos guardados
function llenarFormulario(datos) {
    document.getElementById('nombre').value = datos.nombre;
    document.getElementById('apellido').value = datos.apellido;
    document.getElementById('añoNacimiento').value = datos.añoNacimiento;
}

// Función para guardar datos en localStorage
function guardarDatosLocalStorage(datos) {
    localStorage.setItem('cotizadorDatos', JSON.stringify(datos));
}

// Función para reiniciar la cotización
function reiniciarCotizacion() {
    // Limpiar los valores del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('añoNacimiento').value = '';

    // Borrar los datos guardados del localStorage
    localStorage.removeItem('cotizadorDatos');

    // Mostrar el formulario y ocultar la información y los ejemplos
    document.getElementById('formularioDatos').style.display = 'block';
    document.getElementById('informacionPersona').style.display = 'none';
    document.getElementById('ejemplosDiv').style.display = 'none';
    document.getElementById('botonReiniciarDiv').style.display = 'none';
    // Ocultar la sección de notificaciones
    document.querySelector('.notifications-container').style.display = 'none';
}

// Evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', iniciarCotizador);

