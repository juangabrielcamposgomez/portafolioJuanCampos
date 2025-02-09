// JavaScript para activar la animación al aparecer la sección
const sectionText = document.querySelector('.appearing-text');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sectionText.classList.add('appear');
            observer.unobserve(sectionText); // Detener la observación una vez que aparece
        }
    });
});

observer.observe(sectionText);