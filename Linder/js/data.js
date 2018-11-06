//GET DATA FROM API
function getData(){
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q="+(generateTerm())+"&maxResults=40&startIndex="+(startIndex),
        type: 'GET',
        contentType: 'aplication/json',
        success: function (data) {
            console.log(data);
            organizeDataToPush(data);
            if (startIndex==0){
                showInfo()
            }
            startIndex += 41;
        },
        error: function (data) {
            console.log("Error", data);
        }
    });
}


//GENERATE A TERM FOR QUERY GET
function generateTerm(){
    var text = "";
    var lenghtText = 1;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghhijklmnopqrstuvwxyz";
    for (let index = 0; index < lenghtText; index++) {
        text += possible.charAt(Math.floor(Math.random()*possible.length));
    }
    return text;
}
//-----------------------------

//ORGANIZE DATA AND PUSH TO ARRAY OF BOOK
function organizeDataToPush(data){
    for (let index = 0; index < data.items.length; index++) {
        const element = data.items[index];

        var title, description, imageURL, infoURL, sampleURL, buyURL;

        //VERIFICAR IMAGEM
        if(element.volumeInfo.imageLinks == undefined){
            imageURL= "https://ufo.com.br/uploads/blo_441.jpg";
        } else {
            imageURL = (element.volumeInfo.imageLinks.smallThumbnail);
        }
        //--------------------

        //SET TITLE
        if (element.volumeInfo.title.length>45 && element.volumeInfo.title.toUpperCase()===element.volumeInfo.title){
            title = (element.volumeInfo.title.slice(0,42)+"...");
        } else if (element.volumeInfo.title.length>55 && element.volumeInfo.title.toUpperCase()!==element.volumeInfo.title){
            title = (element.volumeInfo.title.slice(0,45)+"...");
        }else{
            title = (element.volumeInfo.title);
        }
        //--------------------
        
        //VERIFICAR DESCRIÇÃO
        if(element.volumeInfo.description == undefined){
            description = "Sem descrição...";
        }else if(element.volumeInfo.description.length>120){
            description = (element.volumeInfo.description.slice(0,100)+"...");
        }else{
            description = (element.volumeInfo.description);
        }
        //--------------------

        //SET INFO LINK
        infoURL = element.volumeInfo.infoLink;

        //SET SAMPLE URL
        sampleURL = element.accessInfo.webReaderLink;

        //VERIFICAR BUYLINK
        if (element.saleInfo.buyLink == undefined){
            buyURL = "NotForSale"
        } else {
            buyURL = element.saleInfo.buyLink;
        }
        
        //PUSH TO ARRAY OF BOOK
        let book = new Book (element.id, title, description, imageURL, infoURL, sampleURL, buyURL);
        books.push(book);
        

    }
}
//----------------------------