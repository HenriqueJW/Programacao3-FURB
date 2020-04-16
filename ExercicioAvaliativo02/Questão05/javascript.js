

function calculaSoma() {
    var soma = 0;
    var listaInputs = document.getElementsByTagName("input");
    for(var i = 0; i < listaInputs.length; i++){
        if(isNaN(parseInt(listaInputs[i].value))){

        }else{
            soma += parseInt(listaInputs[i].value);
        }
        
    }
    var par = soma % 2;
    alert("A soma dos números é: " + soma + "\n Que é um número " +  (par ? 'ímpar' : 'par'));
}


