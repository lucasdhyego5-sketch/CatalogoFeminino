const phoneNumber = "5581991588566";
const products = [
    {
        "name": "Body Vermelho com Flor",
        "description": "Body elegante na cor vermelha com detalhe de flor",
        "image": "images/produto_1.jpg"
    },
    {
        "name": "Body Rosa Ombro Só",
        "description": "Body rosa estilo um ombro só com detalhe de argola",
        "image": "images/produto_2.jpg"
    },
    {
        "name": "Vestido Manga Longa Marrom",
        "description": "Vestido curto de manga longa com recorte na cintura",
        "image": "images/produto_3.jpg"
    },
    {
        "name": "Top Bege Drapeado",
        "description": "Top cropped bege drapeado com alças grossas e detalhe central",
        "image": "images/produto_4.jpg"
    },
    {
        "name": "Top Faixa Vermelho",
        "description": "Top faixa estruturado na cor vermelha",
        "image": "images/produto_5.jpg"
    },
    {
        "name": "Cropped Preto com Nó",
        "description": "Cropped preto de mangas curtas com detalhe de nó e decote",
        "image": "images/produto_6.jpg"
    },
    {
        "name": "Short Alfaiataria Branco",
        "description": "Short de alfaiataria branco com cinto e fivela dourada",
        "image": "images/produto_7.jpg"
    },
    {
        "name": "Short Alfaiataria Caramelo",
        "description": "Short de alfaiataria caramelo/marrom com pregas",
        "image": "images/produto_8.jpg"
    },
    {
        "name": "Macaquinho Caramelo",
        "description": "Macaquinho transpassado versátil na cor caramelo",
        "image": "images/produto_9.jpg"
    },
    {
        "name": "Vestido Justo Ombro Só Bege",
        "description": "Vestido curto de manga longa em um ombro só na cor bege",
        "image": "images/produto_10.jpg"
    }
];

const catalogElement = document.getElementById('catalog');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'item-card';

    const whatsappMessage = encodeURIComponent(`Olá! Gostaria de pedir o produto: ${product.name} por R$ 35,00.`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    card.innerHTML = `
        <div class="item-image-wrapper">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="item-info">
            <h3>${product.name}</h3>
            <p class="description">${product.description}</p>
            <div class="item-footer">
                <span class="price">R$ 35,00</span>
                <a href="${whatsappUrl}" class="btn-whatsapp" target="_blank">Pedir no WhatsApp</a>
            </div>
        </div>
    `;

    catalogElement.appendChild(card);
});
const modal = document.getElementById("modalZoom");
const imagemAmpliada = document.getElementById("imagemAmpliada");
const fechar = document.querySelector(".fechar");

// Fecha o modal ao clicar no X ou fora da imagem
fechar.onclick = () => { modal.style.display = "none"; }
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// Função que cria os produtos na tela e já deixa as fotos clicáveis
function carregarCatalogo() {
  const catalogoDiv = document.getElementById("catalog");
  
  // Se o seu catálogo usa dados de produtos, eles entram aqui. 
  // Mas como as fotos somiram, vamos garantir que o clique funcione em qualquer imagem gerada:
  document.addEventListener("click", function(event) {
    if (event.target.tagName === 'IMG' && event.target.closest('#catalog')) {
      modal.style.display = "flex";
      imagemAmpliada.src = event.target.src;
    }
  });
}

carregarCatalogo();
