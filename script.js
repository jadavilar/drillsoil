// ==========================================
// LÓGICA DEL SLIDER DE PROYECTOS
// ==========================================
let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    
    // Validar existencia del slider en la página actual
    if (!slider || slides.length === 0) return;
    
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    
    // Desplaza el contenedor en base al índice
    slider.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlide(step) {
    slideIndex += step;
    showSlides(slideIndex);
}

// ==========================================
// LÓGICA DEL MENÚ RESPONSIVE (HAMBURGUESA)
// ==========================================
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    if (mobileMenu && navLinks) {
        mobileMenu.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    }
}

// Inicializadores cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar el slider
    showSlides(slideIndex);
    
    // Evento para abrir/cerrar el menú en móviles
    if (mobileMenu) {
        mobileMenu.addEventListener('click', toggleMenu);
    }

    // Cerrar el menú automáticamente al hacer clic en un enlace (útil en móviles)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('is-active')) {
                toggleMenu();
            }
        });
    });
});