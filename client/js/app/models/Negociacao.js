class Negociacao {


    constructor(data, quantidade, valor, descricao) { 

        this._data = new Date(data.getTime());
        this._descricao = descricao;
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    } 

    get data(){ 
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get descricao() {
        return this._descricao;
    }
}