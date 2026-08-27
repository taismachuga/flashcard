// Ativa o clique nos cards (útil para funcionar perfeitamente em celulares)
document.addEventListener("DOMContentLoaded", () => {
  const cartoes = document.querySelectorAll(".cartao");

  cartoes.forEach((cartao) => {
    cartao.addEventListener("click", () => {
      cartao.classList.toggle("virado");
    });
  });
});