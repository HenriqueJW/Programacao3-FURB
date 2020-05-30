function preparaLogin() {

    $('#Login_Label').click(function () {
        if ($('#Login_Label').text() == 'Login ↑') {
            $('#Login_Label').text('Login ↓')
            $('#cabecalho').removeClass('headerCL')
            $('#cabecalho').addClass('headerSL')
        } else {
            $('#Login_Label').text('Login ↑')
            $('#cabecalho').removeClass('headerSL')
            $('#cabecalho').addClass('headerCL')
        }
        $('#Secao_Login').toggle(300)


    })
}


function limparCampos() {
    $('#Formulario_Envio').find('input').val("");
    $('#Formulario_Envio2').find('input').val("");


}

function mostrarMenu() {
    var x = document.getElementById("menuPequeno");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }