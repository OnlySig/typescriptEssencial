import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
  private inputDate: HTMLInputElement;
  private inputQtd: HTMLInputElement;
  private inputValue: HTMLInputElement;

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputQtd = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");
  }
  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.limpaForm();
    console.log(negociacao)
  }
  criaNegociacao(): Negociacao {
    const date = new Date(this.inputDate.value)
    return new Negociacao(
      date, 
      Number(this.inputQtd.value), 
      Number(this.inputValue.value)
    );
  }
  limpaForm(): void {
    this.inputDate.value = ""
    this.inputQtd.value = ""
    this.inputValue.value = ""
    this.inputDate.focus();
  }
}