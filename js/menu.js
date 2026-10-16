// Menu burger : ouvre / ferme le menu sur téléphone
const bouton = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

bouton.addEventListener("click", function () {
  const ouvert = menu.classList.toggle("ouvert");
  bouton.setAttribute("aria-expanded", ouvert);
  bouton.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
});
