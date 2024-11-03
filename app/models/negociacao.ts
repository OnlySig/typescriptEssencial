export class Negociacao {
  private _date: Date;
  private _qtd: number;
  private _value: number;
  constructor(date: Date, qtd: number, value: number) {
    this._date = date;
    this._qtd = qtd;
    this._value = value;
  };
  get date(): Date{
    return this._date;
  }

  get qtd(): number {
    return this._qtd;
  }

  get value(): number {
    return this._value;
  }
};