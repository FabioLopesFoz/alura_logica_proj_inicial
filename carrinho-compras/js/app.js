let totalGeral = 0;
limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let qtdProduto = document.getElementById('quantidade').value;
    let subTotal = qtdProduto * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + (`<section class="carrinho__produtos__produto"><span class="texto-azul">${qtdProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span></section>`);
    totalGeral = totalGeral + subTotal;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = 0;
}