// Aguarda o carregamento completo do HTML
document.addEventListener("DOMContentLoaded", function () {

  // Contador de itens no carrinho
    let contadorCarrinho = 0;

  // Seleciona todos os botões "Adicionar ao Carrinho"
    document.querySelectorAll(".produtos button").forEach(botao => {

    // Evento de clique
    botao.addEventListener("click", function () {
      contadorCarrinho++;      // Incrementa o contador
      atualizarCarrinho();     // Atualiza o valor exibido
    });

    });

  // Atualiza o número exibido no carrinho
    function atualizarCarrinho() {
    document.getElementById("numero_carrinho").innerText = contadorCarrinho;
    }
});