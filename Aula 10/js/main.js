var control = false;
var fatura;
//
$(document).ready(function (){
    

    $("#btnAdicionar").click(function (){
        var cliente = $(iptNome).val();
        var menu = $(iptMenu).val();
        var extra =$(iptExtra).val();
        if (control == false){
            fatura = createFactura(cliente,new Artigo(menu,extra));
            control = true;
            console.log(data)
        } else {
            fatura.addArtigo(new Artigo(menu,extra));
            console.log(data)
        }
    })

    $("#btnFaturar").click(function (){
        control = false;
        saveFactura(fatura);
        console.log(data)
    })

    console.log(data);
})

function drawHeaderTable(divID,headers){
     
    for (let index = 0; index < headers.length; index++) {
        const element = headers[index];
        $(divID).append(`<>`);
        
    }


    console.log(header);

}