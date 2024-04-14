var campoVerdadeiro = []
function verifSubmit(){
	class Campo{
		constructor(ano, mes, dia, tipo, descricao, valor){
		  	this.ano = ano;
	      this.mes = mes;
	      this.dia = dia;
	      this.tipo = tipo;
	      this.descricao = descricao;
	      this.valor = valor;
	}
}
var campoAVerificar = []
campoAVerificar.push(document.getElementById('ano').value)
campoAVerificar.push(document.getElementById('mes').value)
campoAVerificar.push(document.getElementById('dia').value)
campoAVerificar.push(document.getElementById('tipo').value)
campoAVerificar.push(document.getElementById('descricao').value)
campoAVerificar.push(document.getElementById('valor').value)
if (campoAVerificar.every(verifique) === true){
	var novoCampo = new Campo(...campoAVerificar)
	var campoExiste = campoVerdadeiro.some(function (campo) {
      return JSON.stringify(campo) === JSON.stringify(novoCampo);
    });

    if (!campoExiste) {
      campoVerdadeiro.push(novoCampo);
      localStorage.setItem('campos', JSON.stringify(campoVerdadeiro));
      console.log("Adicionado com sucesso");
    } else {
      console.log("Campo já existe");
    }
} else {
	console.log("Preencha os campos corretamente")
}
function verifique(valor){
	return valor != "" 
}
}




/*console.log(novoCampoLetrinha)
	var local = localStorage.novoDado
	var local2 = local.replace(/[{":}]/g, "")
	var local3 = local2.replace("[", "")
	var local4 = local3.replace("]", "")
	var local5 = local4.replace("ano", "")
	var local6 = local5.replace("mes", "")
	var local7 = local6.replace("valor", "")
	var local8 = local7.replace("dia", "")
	var local9 = local8.replace("descricao", "")
	var local10 = local9.replace("tipo", "")*/
/*	var tabela = document.getElementById("tabela")

	var novaLinha = document.createElement("tr");


	var Data = document.createElement("td");
	var Tipo = document.createElement("td");
	var Descricao = document.createElement("td");
	var Valor = document.createElement("td");

	var dadoData = document.createTextNode(`${campo[2]}/${campo[1]}/${campo[0]}`);
	var dadoTipo = document.createTextNode(campo[3]);
	var dadoDescricao = document.createTextNode(campo[4]);
	var dadoValor = document.createTextNode(campo[5]);

	Data.appendChild(dadoData)
	Tipo.appendChild(dadoTipo)
	Descricao.appendChild(dadoDescricao)
	Valor.appendChild(dadoValor)

	novaLinha.appendChild(Data)
	novaLinha.appendChild(Tipo)
	novaLinha.appendChild(Descricao)
	novaLinha.appendChild(Valor)

	tabela.appendChild(novaLinha)*/