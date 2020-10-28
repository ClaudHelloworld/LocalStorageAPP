var valor =0;

$(document).on("click","#salvar",function(){

localStorage.setItem(valor,$("#nome","#pedido").val());
valor++;
});

$(document).on("click","#buscar", function(){
  var pessoa = localStorage.getItem($("#identificador").val());
  $("#nomeBusca").val(pessoa);

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