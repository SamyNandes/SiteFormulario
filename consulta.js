  var arrayDoLocalStorage = JSON.parse(localStorage.campos); /*o metodo parse retorna como um objeto*/
  var tabela = document.getElementById("tabela") ;

  // Iterar sobre os campos salvos no localStorage e adicionar uma linha para cada um na tabela
  arrayDoLocalStorage.forEach(function(objeto) {
    var novaLinha = document.createElement("tr");

    var Data = document.createElement("td");
    var Tipo = document.createElement("td");
    var Descricao = document.createElement("td");
    var Valor = document.createElement("td");

    var dadoData = document.createTextNode(`${objeto.dia}/${objeto.mes}/${objeto.ano}`);
    var dadoTipo = document.createTextNode(`${objeto.tipo}`);
    var dadoDescricao = document.createTextNode(`${objeto.descricao}`);
    var dadoValor = document.createTextNode(`${objeto.valor}`);

    Data.appendChild(dadoData);
    Tipo.appendChild(dadoTipo);
    Descricao.appendChild(dadoDescricao);
    Valor.appendChild(dadoValor);

    novaLinha.appendChild(Data);
    novaLinha.appendChild(Tipo);
    novaLinha.appendChild(Descricao);
    novaLinha.appendChild(Valor);

    tabela.appendChild(novaLinha);
  });;


/*Filtro*/
function consultar(){
    var valoresAConsultar = []
    valoresAConsultar.push(document.getElementById('ano').value)
    valoresAConsultar.push(document.getElementById('mes').value)
    valoresAConsultar.push(document.getElementById('dia').value)
    valoresAConsultar.push(document.getElementById('tipo').value)
    valoresAConsultar.push(document.getElementById('descricao').value)
    valoresAConsultar.push(document.getElementById('valor').value)
    var keysArrays = Object.values(arrayDoLocalStorage)
    if(valoresAConsultar[0] != ""){
      var a = keysArrays.filter(b => b == valoresAConsultar[0])
    }
    if(valoresAConsultar[1] != ""){
      var a = keysArrays.filter(b => b == valoresAConsultar[1]) 
    }
    if(valoresAConsultar[2] != ""){
      var a = keysArrays.filter(b => b == valoresAConsultar[2])
    }
    if(valoresAConsultar[3] != ""){
      var a = keysArrays.filter(b => b == valoresAConsultar[3])
    }
    if(valoresAConsultar[4] != ""){
      var a = keysArrays.filter(b => b == valoresAConsultar[4])
    }
    if(valoresAConsultar[5] != ""){
      var a = keysArrays.filter(b => b == valoresAConsultar[5])
      console.log(a)
    }
    console.log(a)
}





/*var campoAFiltrar = []
  function consultar(){
    var tamanho = arrayDoLocalStorage.length
    for (i = 0; i < tamanho; i++) {
      var keysArray = Object.values(arrayDoLocalStorage[i])
      console.log(keysArray[1])
      console.log(campoAFiltrar[1])
      campoAFiltrar.push(document.getElementById('ano').value)
      campoAFiltrar.push(document.getElementById('mes').value)
      campoAFiltrar.push(document.getElementById('dia').value)
      campoAFiltrar.push(document.getElementById('tipo').value)
      campoAFiltrar.push(document.getElementById('descricao').value)
      campoAFiltrar.push(document.getElementById('valor').value)
      for(x = 0; x < 5; x++){
        if (keysArray[x] == campoAFiltrar[x]){
          var tabela = document.getElementById("tabela") ;
          tabela.remove()
          var table = document.getElementById("tabela2");
          let novaLinha = table.insertRow();
          var celula1 = novaLinha.insertCell(0);
          var celula2 = novaLinha.insertCell(1);
          var celula3 = novaLinha.insertCell(2);
          var celula4 = novaLinha.insertCell(3);
          celula1.innerHTML = keysArray[2]+ "/"+keysArray[1] + "/" + keysArray[0]
          celula2.innerHTML = keysArray[3]
          celula3.innerHTML = keysArray[4]
          celula4.innerHTML = keysArray[5]
          break
        } else {
          console.log("fez nada")
        }
      }
  }
campoAFiltrar = [] 
        if (campoAFiltrar[x] == keysArray[x]){
          var table = document.getElementById("tabela");
          let novaLinha = table.insertRow();
          var celula1 = novaLinha.insertCell(0);
          var celula2 = novaLinha.insertCell(1);
          var celula3 = novaLinha.insertCell(2);
          var celula4 = novaLinha.insertCell(3);
          celula1.innerHTML = campoAFiltrar[0]
          celula2.innerHTML = campoAFiltrar[1]
          celula3.innerHTML = campoAFiltrar[2]
          celula4.innerHTML = campoAFiltrar[3]
          console.log("teve match")
        } else {
          console.log("nao teve match")
        } */