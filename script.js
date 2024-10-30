// Funções de acessibilidade
function openAccessibilityModal() {
    document.getElementById("accessibilityModal").classList.add("show");
}

function closeAccessibilityModal() {
    document.getElementById("accessibilityModal").classList.remove("show");
}

function toggleHighContrast() {
    document.body.classList.toggle("high-contrast");
    localStorage.setItem('highContrast', document.body.classList.contains("high-contrast"));
}

function toggleLargeFont() {
    document.body.classList.toggle("large-font");
    localStorage.setItem('largeFont', document.body.classList.contains("large-font"));
}

// Espera o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Recupera as preferências de acessibilidade ao carregar a página
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
    if (localStorage.getItem('largeFont') === 'true') {
        document.body.classList.add('large-font');
    }

    // Lazy loading de imagens usando IntersectionObserver
    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });
    images.forEach(img => observer.observe(img));
});
