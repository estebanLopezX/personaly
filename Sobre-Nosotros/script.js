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
