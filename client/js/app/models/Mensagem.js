class Mensagem {

    constructor(texto = ''){ //ECMAScript6 permite atribuir um valor padrão para parametros do construtos de métodos

        this._texto = texto;
    }

    get texto() {
        
        return this._texto;
    }
    
    set texto(texto) {
        
        this._texto = texto;
    }
}