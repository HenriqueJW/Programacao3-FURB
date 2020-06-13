function limparCampos() {

    $('#FormularioEnvio').find('input').val("");
    $("#AdicionarEmpregado").find("h1").text("Adicionando novo Empregado");
}

function atualizaTabela() {
    $.get("https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/employees", function (resp, status) {


        if (status == 'success') {
            desfazTabela();
            criaTabela(resp);
        }else{
            alert("Não foi possível se comunicar com a API")
        }





    });
}

function desfazTabela() {
    $("#TabelaEmpregados tbody .LinhaConteudo").empty();
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
        imagem.setAttribute("src", empregados[i].profile_imagem)
        imagem.setAttribute("alt", "Avatar do Empregado")
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

        $(excluir).click(function () { excluirEmpregado($(this).parent().siblings().first().text(), $(this).parent().siblings().eq(1).text()) });

        editar.classList.add("botaoEdicao");
        excluir.classList.add("botaoEdicao");
        colunaEditar.append(editar, divisor, excluir);
        linha.append(colunaEditar);
    }
}

function editarEmpregado(id) {
    $.get("https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/employee/" + id, function (resp, status) {


        if (status == 'success') {
            $("#AdicionarEmpregado").find("h1").text("Editando Empregado " + resp.data.employee_name);
            $("#Nome").val(resp.data.employee_name);


            $("#Salario").val(resp.data.employee_salary);
            $("#Idade").val(resp.data.employee_age);
            $("#Avatar").val(resp.data.profile_image);
            $("#IdCarregado").val(resp.data.id);
        }





    });
}

function excluirEmpregado(id, nome) {

    if (confirm("Deseja excluir o empregado " + nome + "?")) {
        $.ajax({
            url: "https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/delete/" + id, type: "DELETE"
            , success: function (result) {
                atualizaTabela();
            }
        });
    } else {

    }

}

function criaEdita() {

    if (validaCampos()) {
        var empregado = {
            "name": $("#Nome").val(),
            "salary": $("#Salario").val(),
            "age": $("#Idade").val(),
            "profile_image": $("#Avatar").val()
        }

        if ($("#AdicionarEmpregado").find("h1").text() == "Adicionando novo Empregado") {

            $.ajax({
                url: "https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/create", type: "POST", data:
                    JSON.stringify(empregado), success: function (result) {
    
                        atualizaTabela();
    
                    }, contentType: "application/json"
            });
        } else {
            $.ajax({
                url: "https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/update/" + $("#IdCarregado").val(), type: "PUT", data:
                    JSON.stringify(empregado)
                , success: function (result) {
                    atualizaTabela();
                }
                , contentType: "application/json"
            });
    
        }

    }else{
        alert("Preencha todos os campos");
    }
}





function validaCampos() {
    var a = document.forms["0"]["1"].value;
    var b = document.forms["0"]["2"].value;
    var c = document.forms["0"]["3"].value;

    if (a == null || a == "" || b == null || b == ""|| c == null || c == "") {
        return false;
    } else {
        return true;
    }

}