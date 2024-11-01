function openAccessibilityModal() {
    const modal = document.getElementById("accessibilityModal");
    modal.classList.add("show");
}

function closeAccessibilityModal() {
    const modal = document.getElementById("accessibilityModal");
    modal.classList.remove("show");
}

function toggleHighContrast() {
    document.body.classList.toggle("high-contrast");
    localStorage.setItem('highContrast', document.body.classList.contains("high-contrast"));
}

function toggleLargeFont() {
    document.body.classList.toggle("large-font");
    localStorage.setItem('largeFont', document.body.classList.contains("large-font"));
}

// Espera o DOM carregar e adiciona o evento ao botão de acessibilidade
document.addEventListener('DOMContentLoaded', () => {
    const accessibilityButton = document.getElementById('accessibilityButton');
    accessibilityButton.addEventListener('click', openAccessibilityModal);

    // Recupera as preferências de acessibilidade ao carregar a página
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
    if (localStorage.getItem('largeFont') === 'true') {
        document.body.classList.add('large-font');
    }

    // Eventos para o botão de departamentos
    const departmentsButton = document.getElementById('departmentsButton');
    const departmentsDropdown = document.getElementById('departmentsDropdown');

    // Adiciona eventos de mouse para mostrar e esconder o dropdown
    departmentsButton.addEventListener('mouseenter', () => {
        departmentsDropdown.style.display = 'block';
    });

    departmentsDropdown.addEventListener('mouseenter', () => {
        departmentsDropdown.style.display = 'block';
    });

    // Esconde o dropdown ao sair do mouse
    departmentsButton.addEventListener('mouseleave', () => {
        departmentsDropdown.style.display = 'none';
    });

    departmentsDropdown.addEventListener('mouseleave', () => {
        departmentsDropdown.style.display = 'none';
    });

    // Para cada categoria, adicione eventos de mouse para mostrar e esconder os filtros
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        const filters = category.querySelector('.filters');

        category.addEventListener('mouseenter', () => {
            filters.style.display = 'block'; // Mostra os filtros apenas da categoria atual
        });

        category.addEventListener('mouseleave', () => {
            filters.style.display = 'none'; // Esconde os filtros ao sair
        });
    });
});

// Fecha todos os submenus ao clicar fora
document.addEventListener("click", (event) => {
    const isClickInside = document.querySelector(".dropdown").contains(event.target);
    if (!isClickInside) {
        document.querySelectorAll(".filters").forEach((f) => f.style.display = 'none');
    }
});

const authButton = document.querySelector(".auth-buttons button");
const authModal = document.getElementById("authModal");

function showModal() {
    authModal.style.display = "block";
}

function hideModal() {
    authModal.style.display = "none";
}

// Abre o modal ao clicar ou focar no botão
authButton.addEventListener("mousedown", showModal);
authButton.addEventListener("focus", showModal);

// Fecha o modal quando o foco sai do botão e do modal
authButton.addEventListener("blur", function () {
    setTimeout(function () {
        if (!authModal.contains(document.activeElement)) {
            hideModal();
        }
    }, 200); // Pequena espera para permitir a interação com o modal
});

const scrollAmount = 100; // Defina o valor de rolagem que preferir

function scrollToLeft() { 
    const container = document.querySelector('.product-container');
    container.scrollBy({
        left: -scrollAmount, // Rola para a esquerda
        behavior: 'smooth'
    });

    // Garantir que o botão de rolagem funcione ao atingir o limite da esquerda
    if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth;
    }
}

function scrollToRight() {
    const container = document.querySelector('.product-container');
    container.scrollBy({
        left: scrollAmount, // Rola para a direita
        behavior: 'smooth'
    });

    // Garantir que o botão de rolagem funcione ao atingir o limite da direita
    if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
        container.scrollLeft = 0;
    }
}

