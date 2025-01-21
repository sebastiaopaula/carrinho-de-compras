let totalGeral;
limpar();

//let carrinho = [];

//let resultado = document.getElementById('lista-produtos');
//resultado.innerHTML = `<section class="carrinho__produtos__produto">`

function adicionar(){
    //Recuperar valores do produot, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    if (produto && quantidade>0 ){
        let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;   
    //Calcular preço do subtotal
    let preco = quantidade * valorUnitario;
    //Adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul"> ${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
          </section>`
    //Atualizar valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
    }else{
        alert(`Quantidade invalida: ${quantidade} `);
    }
    
}

function limpar(){
    totalGeral=0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}

/*
function adicionar(){
    const {produto, quantidade, preco} = pegarProdutoEPreco();

    if(produto && quantidade && preco){
        //Adicionar o produto ao carrinho
        carrinho.push({ produto , quantidade, preco});
        alert(`Produto "${produto}" de preço R$${preco} adicionado ao carrinho!`);
        console.log("Carrinho Atual:", carrinho);
    } else {
        alert("Por favor, selecione um produto válido.");
    }
    return{produto, quantidade, preco};
}
//pegarProdutoEPreco();

function pegarProdutoEPreco(){       
    //Obter o elemento do select
    let listBox = document.getElementById('produto');   
    let itemSelecionado = listBox.options[listBox.selectedIndex].value   

    //Verificar se algum item foi selecionado
    if (itemSelecionado){
        //separa o nome do valor
        let [pegarProduto, pegarPreco] = itemSelecionado.split(' - R$');
        console.log("Produto:", pegarProduto);
        console.log("Quantidade:", pegarQuantidade);
        console.log("Preço:", pegarPreco);

        //retornar o produto e o preço
        return{produto:pegarProduto,preco:parseFloat(pegarPreco)};
    }
}*/

