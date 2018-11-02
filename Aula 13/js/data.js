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

function generateTerm(){
    var text = "";
    var lenghtText = 1;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghhijklmnopqrstuvwxyz";
    for (let index = 0; index < lenghtText; index++) {
        text += possible.charAt(Math.floor(Math.random()*possible.length));
    }
    return text;
}

function firstBook(data){
    if (startIndex==1){
        $(".card-title").text(data.items[0].volumeInfo.title);
        $(".card-text").text(data.items[0].volumeInfo.description);
        $(".card-img-top").attr("src", data.items[0].volumeInfo.imageLinks.smallThumbnail);
        $(".card a").attr("href", data.items[0].volumeInfo.infoLink)
    }
}

function organizeData(data){
    for (let index = 0; index < data.items.length; index++) {
        const element = data.items[index];
        if (element.volumeInfo.imageLinks == undefined){
            let book = new Book (element.id, element.volumeInfo.title, element.volumeInfo.description, "naoexiste.png", element.volumeInfo.infoLink);
            books.push(book);
        } else {
            let book = new Book (element.id, element.volumeInfo.title, element.volumeInfo.description, element.volumeInfo.imageLinks.smallThumbnail, element.volumeInfo.infoLink);
            books.push(book);
        }
    }
}
