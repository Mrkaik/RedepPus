// JavaScript para controlar a adição e remoção das classes de carregamento

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