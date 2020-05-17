class DateHelper {
    
    constructor(){
        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    
    static textoParaData(texto) {

        //Expressão regular - 4 números-2 número- 2 número
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)){ 
            throw new Error('Deve estar no formato aaaa-mm-dd');}
        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
    }

}

