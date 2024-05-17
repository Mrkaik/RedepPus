document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});

// Função para rolar a página para o topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

// Evento que é acionado quando a página é carregada completamente
window.addEventListener('load', function () {
    scrollToTop(); 
});

// Evento que é acionado quando a página é recarregada (refresh)
window.addEventListener('beforeunload', function () {
    scrollToTop(); 
});

// Adicionar classe 'active' ao clicar no ícone de hambúrguer
document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
});

// Função para alternar a visibilidade do painel esquerdo
function toggleLeftPanel() {
    var leftPanel = document.querySelector('.left-panel');
    leftPanel.classList.toggle('open');
    updateButtonPosition(); // Atualiza a posição do botão ao abrir ou fechar o painel
}

// Adiciona um ouvinte de eventos ao botão para alternar a visibilidade do painel quando clicado
document.querySelector('.center-button').addEventListener('click', function() {
    toggleLeftPanel();
});

// Função para atualizar a posição do botão
function updateButtonPosition() {
    var button = document.querySelector('.center-button');
    var leftPanel = document.querySelector('.left-panel');
    var panelWidth = leftPanel.offsetWidth;
    var buttonWidth = button.offsetWidth;
    var buttonMargin = 10; // Ajuste de margem

    if (leftPanel.classList.contains('open')) {
        button.style.left = (panelWidth + buttonMargin) + 'px';
    } else {
        button.style.left = buttonMargin + 'px';
    }
}


// Seleciona a caixa de título e a janela de links
const panelTitle = document.getElementById('panelTitle');
const linkWindow = document.getElementById('linkWindow');

// Adiciona um ouvinte de eventos de clique à caixa de título
panelTitle.addEventListener('click', () => {
    // Alterna a classe 'show' na janela de links quando a caixa de título é clicada
    linkWindow.classList.toggle('show');
});



