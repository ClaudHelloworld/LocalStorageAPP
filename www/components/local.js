var valor =0;

$(document).on("click","#salvar",function(){

var dados = {nome: $("#nome").val(),end:$("#endereco").val(),
ped:$("#pedido").val()};
localStorage.setItem(valor,JSON.stringify(dados));
valor++;
});

$(document).on("click","#buscar", function(){
  var pessoa = JSON.parse(localStorage.getItem($("#identificador").val()));
  $("#nomeBusca").val(pessoa,nome,pedido);
  $("#enderecoBusca").val(pessoa,end);
});

$(document).on("click","#limpar", function(){
  var pessoa = localStorage.clear($("#identificador").val());
  LimparCampos();
});

$(document).on("click","#limpar", function(){
  var pessoa = localStorage.removeItem($("#identificador").val());
  $("#nome","#pedido").val("");
  $("#identificador").val("");
  $("#nomeBusca").val("");
});

function LimparCampos(){

  $("#nome","#pedido").val("");
  $("#identificador").val("");
  $("#nomeBusca").val("");

}