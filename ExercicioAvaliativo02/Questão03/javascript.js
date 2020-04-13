



function criaLista(){
    var itens = [1,2,3,4];
    var lista = document.createElement("ul");
    var corpo = document.getElementsByTagName('body');
    for(var i = 0; i < itens.length; i++){
        var itemLista = document.createElement("li");
        
        corpo[0].appendChild(lista);
        lista.appendChild(itemLista)
        itemLista.innerHTML = itens[i];
    }
}