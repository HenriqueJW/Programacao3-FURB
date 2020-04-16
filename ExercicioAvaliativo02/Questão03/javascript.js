



function criaLista(){
    var itens = [1,2,3,4];
    var titulo = document.createElement("h1");
    titulo.innerHTML = "<strong> Lista de Arrays <strong>";
    var lista = document.createElement("ul");
    var corpo = document.getElementsByTagName('body');
    corpo[0].appendChild(titulo)
    for(var i = 0; i < itens.length; i++){
        var itemLista = document.createElement("li");
        
        corpo[0].appendChild(lista);
        lista.appendChild(itemLista)
        itemLista.innerHTML = itens[i];
    }
}