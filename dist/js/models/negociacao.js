export class Negociacao {
    constructor(date, qtd, value) {
        this._date = date;
        this._qtd = qtd;
        this._value = value;
    }
    ;
    get date() {
        return this._date;
    }
    get qtd() {
        return this._qtd;
    }
    get value() {
        return this._value;
    }
}
;
