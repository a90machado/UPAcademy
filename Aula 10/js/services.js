function createFactura(nomeRequerente,artigo){
    return new Factura(nomeRequerente,artigo);
}

function saveFactura(factura){
    data.push(factura);
}

function showFacturaByID(id){
    for (let index = 0; index < data.length; index++) {
        const factura = orderData()[index];
        if (factura.id == id){
            return factura;
        }   
    }
    return "Nao existe!"; 
}

function removeFacturaByID(id){
    for (let index = 0; index < data.length; index++) {
        const factura = orderData()[index];
        if (factura.id == id) {
            data.splice(index,1);
        }
    }
    return "Nao existe!";
}

function orderData(){
    return data.sort();
}

//mostrar na tabela com e sem filtro