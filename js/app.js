let carrinho = [];

function adicionar(){
    const {produto, preco} = pegarProdutoEPreco();

    if(produto && preco){
        //Adicionar o produto ao carrinho
        carrinho.push({ produto , preco});
        alert(`Produto "${produto}" de preço R$${preco} adicionado ao carrinho!`);
        console.log("Carrinho Atual:", carrinho);
    } else {
        alert("Por favor, selecione um produto válido.");
    }
    return{produto,preco};
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
        console.log("Preço:", pegarPreco);

        //retornar o produto e o preço
        return{produto:pegarProduto,preco:parseFloat(pegarPreco)};
    }
}
