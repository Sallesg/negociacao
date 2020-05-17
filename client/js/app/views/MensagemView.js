class MensagemView extends View {

    constructor(elemento) {
        super(elemento);

    }

     template(model) {
        //if ternario - se é verdadeira devolve o template senão não mostra
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }    
}