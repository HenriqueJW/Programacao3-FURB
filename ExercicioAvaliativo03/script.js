function limparCampos() {
    $('#FormularioEnvio').find('input').val("");
}


function criaTabela(resp) {
    var empregados = resp.data;
    for (var i = 0; i < empregados.length; i++) {

        var linha = document.createElement("tr");
        linha.classList.add("LinhaConteudo");
        $("#TabelaEmpregados").append(linha);

        var coluna = document.createElement("td")
        linha.append(coluna);
        coluna.innerHTML = empregados[i].id;

        coluna = document.createElement("td")
        linha.append(coluna);
        coluna.innerHTML = empregados[i].employee_name;

        coluna = document.createElement("td")
        linha.append(coluna);
        coluna.innerHTML = empregados[i].employee_salary;

        coluna = document.createElement("td")
        linha.append(coluna);
        coluna.innerHTML = empregados[i].employee_age;

        coluna = document.createElement("td")
        linha.append(coluna);
        imagem = document.createElement("img")
        imagem.setAttribute("src", empregados[i].profile_image)
        coluna.append(imagem)

        var colunaEditar = document.createElement("td");
        var editar = document.createElement("p");
        editar.innerHTML = "editar ";
        var divisor = document.createElement("p");
        divisor.innerHTML = "|";
        var excluir = document.createElement("p");
        excluir.innerHTML = " excluir";


        $(editar).click(function () {
            editarEmpregado($(this).parent().siblings().first().text())
        });

        $(excluir).click(function () { excluirEmpregado() });

        colunaEditar.append(editar, divisor, excluir);
        linha.append(colunaEditar);
    }
}

function editarEmpregado(id) {
    $.get("http://dummy.restapiexample.com/api/v1/employee/11", function (resp, status) {

    console.log(resp)
        if (status == 'success') {
            $("#AdicionarEmpregado").find("h1").text("Editando Empregado");
        }

        
        
        

    });
}

function excluirEmpregado() {
    console.log("a")
}