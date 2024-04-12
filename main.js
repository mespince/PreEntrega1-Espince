document.addEventListener('DOMContentLoaded', function() {
    console.log("Bienvenido al Cotizador de Matias E. Espince");

    // Constructor Persona
    function Persona(nombre, apellido, añoNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = 2024 - añoNacimiento; 
    }

    // Valor por años para cotización
    let valorPorAños = 350;

    // El submit
    document.getElementById('formularioDatos').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario

        // Formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const añoNacimiento = parseInt(document.getElementById('añoNacimiento').value);

        // Persona
        const persona = new Persona(nombre, apellido, añoNacimiento);

        // Calcular cotización y cotización con IVA
        const cotizacion = persona.edad * valorPorAños;
        const cotiIva = cotizacion * 1.21;

        // Ocultar el formulario
        document.getElementById('formularioDiv').style.display = 'none';

        // Mostrar la info en Consola
        if (persona.edad > 17 && persona.edad < 71) {
            console.log("Información de Persona:");
            console.log("Nombre: ", persona.nombre);
            console.log("Apellido: ", persona.apellido);
            console.log("Edad: ", persona.edad);
            console.log("Cotización: $", cotizacion);
            console.log("Tenga en cuenta que la cotización inicial es sin IVA");
            console.log("Cotización con IVA: $", cotiIva);
            console.log("-----------------------------");
        } else {
            console.log("La persona es menor de 17 años o mayor de 70 años, por lo que no se puede realizar la cotización.");
        }

        // Mostrar la info en DOM
        if (persona.edad <= 17 || persona.edad >= 71) {
            // Mostrar mensaje de error si la persona es menor de 17 años o mayor de 70 años
            document.getElementById('informacionPersona').innerHTML = `<p>Usted es menor de edad o mayor de 70 años y no puede realizarse una cotización.</p>`;
        } else {
            // Mostrar la información de la persona ta ok
            document.getElementById('informacionPersona').innerHTML = `
                <h2>Información de Persona:</h2>
                <p><u>Nombre:</u> ${persona.nombre}</p>
                <p><u>Apellido:</u> ${persona.apellido}</p>
                <p><u>Edad:</u> ${persona.edad}</p>
                <p><u>Cotización:</u> $${cotizacion}</p>
                <p>Tenga en cuenta que la cotización inicial es sin IVA</p>
                <p><u>Cotización con IVA:</u> $${cotiIva}</p>
                <hr>`;
        }
        document.getElementById('informacionPersona').style.display = 'block'; // Mostrar el contenedor de información

        // Mostrar el botón "Realizar Otra Cotización"
        const botonReiniciarDiv = document.getElementById('botonReiniciarDiv');
        botonReiniciarDiv.style.display = 'block';

        // Mostrar los ejemplos en el DOM
        mostrarEjemplos();
    });

    // Función para mostrar ejemplos en el DOM
    function mostrarEjemplos() {
        const ejemplosDiv = document.getElementById('ejemplosDiv');
        ejemplosDiv.innerHTML = ""; // Limpiar el contenido anterior

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
            ejemplosDiv.appendChild(div);
        });

        // Mostrar el contenedor de ejemplos
        ejemplosDiv.style.display = 'block';
    }

    // Constructor para los ejemplos
    function Ejemplos(nombreEj, edadEj) {
        this.nombreEj = nombreEj;
        this.edadEj = edadEj;
        this.cotizacionEj = edadEj * 350;
    }

    // Ejemplos iniciales
    const ejemplo1 = new Ejemplos("Juan", 18);
    const ejemplo2 = new Ejemplos("Pedro", 25);
    const ejemplo3 = new Ejemplos("Alberto", 30);
    const arrayEjemplos = [ejemplo1, ejemplo2, ejemplo3];

    // Botón "Realizar Otra Cotización"
    document.getElementById('botonReiniciar').addEventListener('click', function() {
        // Limpiar los valores del formulario
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('añoNacimiento').value = '';

        // Mostrar el formulario y ocultar la información y los ejemplos
        document.getElementById('formularioDiv').style.display = 'block';
        document.getElementById('informacionPersona').style.display = 'none';
        document.getElementById('ejemplosDiv').style.display = 'none';
        document.getElementById('botonReiniciarDiv').style.display = 'none';
    });
});
