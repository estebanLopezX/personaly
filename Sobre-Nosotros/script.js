// Efecto de "exploración" del fondo parallax
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)'; // Fondo se mueve lentamente
});

// Intersección para hacer desaparecer el contenido
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("hidden");
        } else {
            entry.target.classList.add("hidden");
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    observer.observe(section);
});



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
        <a href="../index.html">INICIO</a>
        <a href="about.html">SOBRE NOSOTROS</a>
        <a href="../Servicios/servicios.html">SERVICIOS</a>
        <a href="../Portafolio/portafolio.html">PORTAFOLIO</a>
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


