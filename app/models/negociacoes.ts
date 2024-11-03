import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = []

  adicionar(negociacao: Negociacao):void {
    this.negociacoes.push(negociacao);
  }
  listar(): readonly Negociacao[] {
    return [...this.negociacoes];
  }
  /*  
    ! se vc não quiser usar o spread operator existe um Type do typescript que pode te ajudar.
    ! ReadonlyArray <-- isso faz que QUALQUER METODO que faça "efeito colateral" não possa ser usado.
    listar(): ReadonlyArray<Negociacao> {
      return this.negociacoes;
    }
  */
}