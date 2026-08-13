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
