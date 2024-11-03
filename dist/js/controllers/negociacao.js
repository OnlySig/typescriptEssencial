import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputDate = document.querySelector("#data");
        this.inputQtd = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adicionar(negociacao);
        console.log(this.negociacoes.listar());
        this.limpaForm();
    }
    criaNegociacao() {
        const date = new Date(this.inputDate.value);
        return new Negociacao(date, Number(this.inputQtd.value), Number(this.inputValue.value));
    }
    limpaForm() {
        this.inputDate.value = "";
        this.inputQtd.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
}
