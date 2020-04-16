
class Filme {
    constructor(titulo, ano, genero){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
    }
}



function criaListaFilmes() {
    return [new Filme("O silêncio dos inocentes",1991,"drama/suspense"),new Filme("Sociedade dos poetas mortos", 1995, "drama"),new Filme("Donnie Darko", 1992,"drama/mistério")];
}


