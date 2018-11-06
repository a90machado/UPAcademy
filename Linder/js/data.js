//GET DATA FROM API
function getData(){
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q="+(generateTerm())+"&maxResults=40&startIndex="+(startIndex),
        type: 'GET',
        contentType: 'aplication/json',
        success: function (data) {
            console.log(data);
            firstBook(data);
            organizeData(data);
            startIndex += 40;
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

//GETTING THE FIRST BOOK
function firstBook(data){
    if (startIndex==1){

        //VERIFICAR TITULO
        if (data.items[0].volumeInfo.title.length>45 && data.items[0].volumeInfo.title.toUpperCase()===data.items[0].volumeInfo.title){
            $("#stackOne .card-title").text(data.items[0].volumeInfo.title.slice(0,42)+"...");
        } else if (data.items[0].volumeInfo.title.length>55 && data.items[0].volumeInfo.title.toUpperCase()!==data.items[0].volumeInfo.title){
            $("#stackOne .card-title").text(data.items[0].volumeInfo.title.slice(0,52)+"...");
        }else{
            $("#stackOne .card-title").text(data.items[0].volumeInfo.title);
        }
        console.log(data.items[0].volumeInfo.description);

        //VERIFICAR DESCRIÇÃO
        if(data.items[0].volumeInfo.description.length>120){
            $("#stackOne .card-text").text(data.items[0].volumeInfo.description.slice(0,100)+"...");
        }else if(data.items[0].volumeInfo.description == undefined){
            console.log("CA DENTRO")
            $("#stackOne .card-text").text("Sem descrição...");
        }else{
            $("#stackOne .card-text").text(data.items[0].volumeInfo.description);
        }

        //VERIFICAR IMAGEM
        if(data.items[0].volumeInfo.imageLinks == undefined){
            $("#stackOne > .card-img-top").attr("src", "https://ufo.com.br/uploads/blo_441.jpg");
        } else {
            $("#stackOne > .card-img-top").attr("src", data.items[0].volumeInfo.imageLinks.smallThumbnail);
        }


        $("#stackOne .card a").attr("href", data.items[0].volumeInfo.infoLink)
    }
}
//----------------------------

//ORGANIZE DATA AND PUSH TO ARRAY OF BOOK
function organizeData(data){
    for (let index = 0; index < data.items.length; index++) {
        const element = data.items[index];
        if (element.volumeInfo.imageLinks == undefined){
            let book = new Book (element.id, element.volumeInfo.title, element.volumeInfo.description, "https://ufo.com.br/uploads/blo_441.jpg", element.volumeInfo.infoLink);
            books.push(book);
        } else {
            let book = new Book (element.id, element.volumeInfo.title, element.volumeInfo.description, element.volumeInfo.imageLinks.smallThumbnail, element.volumeInfo.infoLink);
            books.push(book);
        }
    }
}
//----------------------------