
// Seleciona os elementos necessários
const comprarButton = document.getElementById('comprar');
const fecharButton = document.getElementById('fechar');
const aside = document.querySelector('aside');
const cestaTexto = document.getElementById('cestatexto');

// Inicializa o contador de itens na cesta
let itemCount = 0;


// Adiciona evento ao botão "Fechar"
fecharButton.addEventListener('click', () => {
    aside.style.display = 'none'; // Oculta o painel lateral
});




// Adiciona evento ao botão "Comprar"
comprarButton.addEventListener('click', () => {
    itemCount++;
    cestaTexto.textContent = `Cesta (${itemCount})`;
    aside.classList.add('show'); // Adiciona a classe para deslizar o aside
});

// Adiciona evento ao botão "Fechar"
fecharButton.addEventListener('click', () => {
    aside.classList.remove('show'); // Remove a classe para esconder o aside
});