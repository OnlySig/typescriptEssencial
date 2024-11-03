export class Negociacao {
  // private _date: Date;
  // private _qtd: number;
  // private _value: number;
  constructor(
    private _date: Date, 
    public readonly qtd: number, 
    public readonly value: number
  ) {
    // this._date = date;
    // this._qtd = qtd;
    // this._value = value;
  };

  get date(): Date {
    return new Date(this._date.getTime());
  }
  // get qtd(): number {
  //   return this._qtd;
  // }
  // get value(): number {
  //   return this._value;
  // }

  get volume() {
    return this.qtd * this.value;
  }
};
