// Función que se activa al hacer clic en cada servicio
function toggleService(serviceNumber) {
    // Identificamos la sección desplegable y la imagen correspondiente
    var serviceContent = document.getElementById("service-" + serviceNumber);
    var serviceImage = document.getElementById("img-" + serviceNumber);
    var mainImage = document.getElementById("main-image");

    // Verificamos si el contenido ya está visible
    if (serviceContent.style.display === "none" || serviceContent.style.display === "") {
        // Mostramos el contenido
        serviceContent.style.display = "block";

        // Cambiar la imagen principal dependiendo del servicio seleccionado
        if (serviceNumber === 1) {
            mainImage.src = "./IMG/SERVICIO-1.PNG "; // Cambiar imagen para el servicio 1
        } else if (serviceNumber === 2) {
            mainImage.src = "./IMG/SERVICIO-2.PNG"; // Cambiar imagen para el servicio 2
        } else if (serviceNumber === 3) {
            mainImage.src = "./IMG/SERVICIO-3.PNG"; // Cambiar imagen para el servicio 3
        }
    } else {
        // Ocultamos el contenido
        serviceContent.style.display = "none";
    }
}


/*-----------------------*/
/*       HAMBURGUESA     */

function menu() {
    let cuerpoPagina = document.querySelector('body');

    // Verificar si el menú ya existe para alternarlo
    let menuNav = document.getElementById('menu-nav');
    if (menuNav) {
        menuNav.remove(); // Si ya existe, lo elimina para cerrar el menú
        return;
    }

    // Crear un contenedor para el menú
    let nuevoMenu = document.createElement('nav');
    nuevoMenu.id = "menu-nav"; // Asignar un ID
    nuevoMenu.innerHTML = `
            <a href="#header">INICIO</a>
            <a href="./Sobre-Nosotros/about.html">SOBRE NOSOTROS</a>
            <a href="#servicios">SERVICIOS</a>
            <a href="./Portafolio/portafolio.html">PORTAFOLIO</a>
            <a href="#footer">CONTACTO</a>
    `;

    // Aplicar estilos al menú vertical
    nuevoMenu.style.position = "fixed";
    nuevoMenu.style.top = "0";
    nuevoMenu.style.left = "0"; // Menú aparece desde la derecha
    nuevoMenu.style.width = "50vw"; // Ocupar la mitad de la pantalla (50% del viewport)
    nuevoMenu.style.height = "100%"; // Ocupar toda la altura
    nuevoMenu.style.background = "#00AAFF"; // Azul semi-transparente
    nuevoMenu.style.display = "flex";
    nuevoMenu.style.flexDirection = "column"; // Apilar elementos verticalmente
    nuevoMenu.style.justifyContent = "center"; // Centrar los enlaces verticalmente
    nuevoMenu.style.alignItems = "center"; // Centrar horizontalmente
    nuevoMenu.style.gap = "20px"; // Separación entre enlaces
    nuevoMenu.style.zIndex = "1000"; // Poner el menú sobre todo

    // Aplicar estilos a los enlaces dentro del menú
    let enlaces = nuevoMenu.querySelectorAll("a");
    enlaces.forEach(enlace => {
        enlace.style.color = "white";
        enlace.style.fontSize = "20px";
        enlace.style.textDecoration = "none";
        enlace.style.padding = "5px 15px";
        enlace.style.borderRadius = "5px";
        enlace.style.transition = "background 0.3s";
        enlace.style.width = "100%";
        enlace.style.display = "flex";
        enlace.style.justifyContent = "center";
        
        enlace.addEventListener("mouseover", () => {
            enlace.style.background = "rgba(255, 255, 255, 0.3)";
        });

        enlace.addEventListener("mouseout", () => {
            enlace.style.background = "transparent";
        });
    });

    // Añadir el menú al body
    cuerpoPagina.appendChild(nuevoMenu);
}



