let pista = parseInt(document.getElementById('qtd-pista').textContent);
let cadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let cadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar(){
    let escolha = document.getElementById('tipo-ingresso').value;
    let qtdComprada = document.getElementById('qtd').value;
    if(escolha == 'pista'){
        comprarPista(qtdComprada);
        
    }else if(escolha == 'superior'){
            comprarSuperior(qtdComprada);
            
    }else{
        comprarInferior(qtdComprada);
    }
}

function comprarPista(qtd){
    if(qtd <= pista){
        pista = pista - qtd;
        document.getElementById('qtd-pista').textContent = pista;
    }else{
        alert(`Quantidade indisponivel para pista`);
    }
}

function comprarSuperior(qtd){
    if(qtd <= cadeiraSuperior){
        cadeiraSuperior = cadeiraSuperior - qtd;
        document.getElementById('qtd-superior').textContent = cadeiraSuperior;
    }else{
        alert(`Quantidade indisponivel para cadeira superior`);
    }
}

function comprarInferior(qtd){
    if(qtd <= cadeiraInferior){
        cadeiraInferior = cadeiraInferior - qtd;
        document.getElementById('qtd-inferior').textContent = cadeiraInferior;
    }else{
        alert(`Quantidade indisponivel para cadeira inferior`);
    }
}