let currentIndex = 0; // Certifique-se de que esta variável esteja no topo do arquivo

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
    document.getElementById("authModal").style.display = "block";
}

function hideModal() {
    document.getElementById("authModal").style.display = "none";
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

// Função para rolar à direita no contêiner de "Ofertas"
function scrollToRightOfertas() {
    const ofertasContainer = document.getElementById("ofertas-container");

    // Rolar com suavidade
    ofertasContainer.scrollBy({ left: 200, behavior: 'smooth' });

    // Verificar se atingiu o final e voltar ao início
    setTimeout(() => {
        if (ofertasContainer.scrollLeft + ofertasContainer.clientWidth >= ofertasContainer.scrollWidth) {
            ofertasContainer.scrollLeft = 0;
        }
    }, 300); // Aguarde um tempo para que a rolagem termine
}

// Função para rolar à esquerda no contêiner de "Ofertas"
function scrollToLeftOfertas() {
    const ofertasContainer = document.getElementById("ofertas-container");

    // Rolar com suavidade
    ofertasContainer.scrollBy({ left: -200, behavior: 'smooth' });

    // Verificar se atingiu o início e rolar para o final
    setTimeout(() => {
        if (ofertasContainer.scrollLeft <= 0) {
            ofertasContainer.scrollLeft = ofertasContainer.scrollWidth - ofertasContainer.clientWidth;
        }
    }, 300);
}

// Função para rolar à direita no contêiner de "Home"
function scrollToRightHome() {
    const homeContainer = document.getElementById("home-container");

    // Rolar com suavidade
    homeContainer.scrollBy({ left: 200, behavior: 'smooth' });

    // Verificar se atingiu o final e voltar ao início
    setTimeout(() => {
        if (homeContainer.scrollLeft + homeContainer.clientWidth >= homeContainer.scrollWidth) {
            homeContainer.scrollLeft = 0;
        }
    }, 300);
}

// Função para rolar à esquerda no contêiner de "Home"
function scrollToLeftHome() {
    const homeContainer = document.getElementById("home-container");

    // Rolar com suavidade
    homeContainer.scrollBy({ left: -200, behavior: 'smooth' });

    // Verificar se atingiu o início e rolar para o final
    setTimeout(() => {
        if (homeContainer.scrollLeft <= 0) {
            homeContainer.scrollLeft = homeContainer.scrollWidth - homeContainer.clientWidth;
        }
    }, 300);
}



// Função para avançar para o próximo slide
function nextSlide() {
    console.log("Avançando para o próximo slide");  // Verificação
    const slides = document.querySelectorAll('.carousel-item2');
    if (slides.length === 0) return;

    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
}

// Função para voltar ao slide anterior
function previousSlide() {
    const slides = document.querySelectorAll('.carousel-item2');
    if (slides.length === 0) return;

    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
}

// Função para definir um slide específico
function setSlide(index) {
    currentIndex = index;
    updateSlidePosition();
}

// Função para atualizar a posição dos slides e indicadores
function updateSlidePosition() {
    const slideContainer = document.getElementById('carouselSlide2');
    const indicators = document.querySelectorAll('.carousel-indicators2 button');

    // Atualiza a posição dos slides
    if (slideContainer) {
        slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        console.log("Movendo slide para:", currentIndex); // Verificação
    }

    // Atualiza os indicadores
    indicators.forEach((button, index) => {
        button.classList.toggle('active', index === currentIndex);
    });
}

// Função para iniciar o carrossel automático
function autoSlide() {
    setInterval(() => {
        nextSlide();
    }, 3000); // Muda a cada 3 segundos
}

// Espera o DOM carregar e adiciona os eventos de navegação
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona eventos para navegação manual
    const leftArrow = document.querySelector('.carousel-arrow2.left2');
    const rightArrow = document.querySelector('.carousel-arrow2.right2');
    if (leftArrow) leftArrow.addEventListener('click', previousSlide);
    if (rightArrow) rightArrow.addEventListener('click', nextSlide);

    // Inicia o carrossel automático
    autoSlide();

    // Inicializa o carrossel na posição correta ao carregar a página
    updateSlidePosition();
});


// Funções para abrir e fechar o chatbot
function toggleChatbot() {
    const chatbotBox = document.getElementById("chatbot-box");
    chatbotBox.style.display = chatbotBox.style.display === "flex" ? "none" : "flex";
}

// Função para enviar mensagem do usuário
function sendMessage() {
    const inputField = document.getElementById("chatbot-input");
    const message = inputField.value.trim();
    if (message) {
        const chatContent = document.getElementById("chatbot-content");
        
        // Adiciona a mensagem do usuário com as classes
        chatContent.innerHTML += `<div class="message user"><strong>Você:</strong> ${message}</div>`;
        
        // Limpa o campo de entrada e rola para o final
        inputField.value = "";
        chatContent.scrollTop = chatContent.scrollHeight;

        // Resposta automática do bot (opcional, você pode personalizar)
        setTimeout(() => {
            botReply("Obrigado por sua mensagem! Em breve responderemos.");
        }, 1000);
    }
}

// Função para exibir a resposta do bot
function botReply(response) {
    const chatContent = document.getElementById("chatbot-content");
    
    // Adiciona a resposta do bot com as classes
    chatContent.innerHTML += `<div class="message bot"><strong>Bot:</strong> ${response}</div>`;
    
    // Rola para o final
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Adiciona evento para enviar mensagem ao pressionar "Enter"
document.getElementById("chatbot-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Inicializa o chat como escondido ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("chatbot-box").style.display = "none";
});