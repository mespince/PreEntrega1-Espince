document.addEventListener('DOMContentLoaded', function() {
    console.log("Bienvenido al Cotizador de Matias E. Espince");

    // Función para obtener los datos del localStorage
    function obtenerDatosLocalStorage() {
        const datos = localStorage.getItem('cotizadorDatos');
        return datos ? JSON.parse(datos) : null;
    }

    // Función para guardar los datos en el localStorage
    function guardarDatosLocalStorage(datos) {
        localStorage.setItem('cotizadorDatos', JSON.stringify(datos));
    }

    // Constructor Persona
    function Persona(nombre, apellido, añoNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = 2024 - añoNacimiento; 
    }

    // Valor por años para cotización
    let valorPorAños = 350;

    // Obtener el elemento select de año de nacimiento
    const selectAñoNacimiento = document.getElementById('añoNacimiento');

    // Obtener el año actual
    const añoActual = new Date().getFullYear();

    // Generar opciones desde 1954 hasta el año actual
    for (let año = 1954; año <= añoActual; año++) {
        const option = document.createElement('option');
        option.value = año;
        option.textContent = año;
        selectAñoNacimiento.appendChild(option);
    }

    // Obtener los datos del localStorage al cargar la página
    const datosGuardados = obtenerDatosLocalStorage();
    if (datosGuardados) {
        // Llenar el formulario con los datos guardados
        document.getElementById('nombre').value = datosGuardados.nombre;
        document.getElementById('apellido').value = datosGuardados.apellido;
        selectAñoNacimiento.value = datosGuardados.añoNacimiento;
    }

    // El submit
    document.getElementById('formularioDatos').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario

        // Formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const añoNacimiento = parseInt(selectAñoNacimiento.value); // Obtener el año seleccionado del select

        // Guardar los datos en localStorage
        guardarDatosLocalStorage({ nombre, apellido, añoNacimiento });

        // Persona
        const persona = new Persona(nombre, apellido, añoNacimiento);

        // Calcular cotización y cotización con IVA
        const cotizacion = persona.edad * valorPorAños;
        const cotiIva = cotizacion * 1.21;

        // Ocultar el formulario
        document.getElementById('formularioDatos').style.display = 'none'; // Corregido el ID aquí

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
            // Mostrar la información de la persona
            document.getElementById('informacionPersona').innerHTML = `
            <section class="container">
            <div class="card1">
            <div class="content">
            <p class="logo">Cotizacion con Exito</p>
                <div class="h6">Informacion de la Persona</div>
                <div class="hover_content">
                <p><u>Nombre:</u> ${persona.nombre}</p>
                        <p><u>Apellido:</u> ${persona.apellido}</p>
                        <p><u>Edad:</u> ${persona.edad}</p>
                        <p><u>Cotización:</u> $${cotizacion}</p>
                        <p>Tenga en cuenta que la cotización inicial es sin IVA</p>
                        <p><u>Cotización con IVA:</u> $${cotiIva}</p>
                </div>
            </div>
            </div>       
        </section>`;
            document.getElementById('informacionPersona').style.display = 'block'; // Mostrar el contenedor de información

            // Mostrar el botón "Realizar Otra Cotización"
            const botonReiniciarDiv = document.getElementById('botonReiniciarDiv');
            botonReiniciarDiv.style.display = 'block';

            // Mostrar la sección de notificaciones
            document.querySelector('.notifications-container').style.display = 'block';

            // Mostrar los ejemplos en el DOM
            mostrarEjemplos();
        }
    });

    // Función para mostrar ejemplos en el DOM
    function mostrarEjemplos() {
        const arrayEjemplos = [
            { nombreEj: "Juan", edadEj: 18 },
            { nombreEj: "Pedro", edadEj: 25 },
            { nombreEj: "Alberto", edadEj: 30 }
        ];
    
        const ejemplosDiv = document.getElementById('ejemplosDiv');
        ejemplosDiv.innerHTML = ""; // Limpiar el contenido anterior
    
        // Crear un contenedor para los ejemplos
        const ejemplosContainer = document.createElement('div');
        ejemplosContainer.classList.add('ejemplos-container');
    
        arrayEjemplos.forEach(ejemplo => {
            const card = document.createElement("div");
            card.classList.add("card");
    
            const nombreP = document.createElement('p');
            nombreP.innerHTML = `<u>Nombre:</u> ${ejemplo.nombreEj}`;
            card.appendChild(nombreP);
    
            const edadP = document.createElement('p');
            edadP.innerHTML = `<u>Edad:</u> ${ejemplo.edadEj}`;
            card.appendChild(edadP);
    
            const cotizacionP = document.createElement('p');
            cotizacionP.innerHTML = `<u>Cotización:</u> $${ejemplo.edadEj * 350}`;
            card.appendChild(cotizacionP);
    
            const cotizacionIvaP = document.createElement('p');
            cotizacionIvaP.innerHTML = `<u>Cotización con IVA:</u> $${(ejemplo.edadEj * 350 * 1.21).toFixed(2)}`;
            card.appendChild(cotizacionIvaP);
    
            // Agregar cada tarjeta al contenedor de ejemplos
            ejemplosContainer.appendChild(card);
        });
    
        // Agregar el contenedor de ejemplos al div ejemplosDiv
        ejemplosDiv.appendChild(ejemplosContainer);
    
        // Mostrar el contenedor de ejemplos
        ejemplosDiv.style.display = 'block';
    }
    

    // Botón "Realizar Otra Cotización"
    document.getElementById('botonReiniciar').addEventListener('click', function() {
        // Limpiar los valores del formulario
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        selectAñoNacimiento.value = ''; // Restablecer el valor del select de año de nacimiento

        // Borrar los datos guardados del localStorage
        localStorage.removeItem('cotizadorDatos');

        // Mostrar el formulario y ocultar la información y los ejemplos
        document.getElementById('formularioDatos').style.display = 'block'; 
        document.getElementById('informacionPersona').style.display = 'none';
        document.getElementById('ejemplosDiv').style.display = 'none';
        document.getElementById('botonReiniciarDiv').style.display = 'none';
        // Ocultar la sección de notificaciones
        document.querySelector('.notifications-container').style.display = 'none';
    });
});



