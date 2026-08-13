const modal = document.getElementById("modalZoom");
const imagemAmpliada = document.getElementById("imagemAmpliada");
const fechar = document.querySelector(".fechar");

// Função para ativar o zoom nas imagens dos produtos
document.addEventListener("click", function(event) {
  if (event.target.tagName === 'IMG' && event.target.closest('#catalog')) {
    modal.style.display = "flex";
    imagemAmpliada.src = event.target.src;
  }
});

fechar.onclick = () => { modal.style.display = "none"; }
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }
