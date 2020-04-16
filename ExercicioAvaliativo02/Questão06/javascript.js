

function fatorial(numero) {

    var resposta = fatorialAux(numero);

    document.getElementById("Resposta").innerHTML = "Resposta: " + resposta;



    function fatorialAux(numero) {

        if (numero == 0) {
            return 1;
        }
        else {
            return numero * fatorialAux(numero - 1);
        }

    }


}