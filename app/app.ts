import { NegociacaoController } from "./controllers/negociacao.js";
const form = document.querySelector(".form");
const controller = new NegociacaoController();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  controller.adiciona();
});