function getData(){
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q="+(generateTerm())+"&maxResults=40&startIndex="+(startIndex),
        type: 'GET',
        contentType: 'aplication/json',
        success: function (data) {
            console.log(data);
            firstBook(data);
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
        console.log(data.items[0].volumeInfo.imageLinks.thumbnail);
        $(".card-title").text(data.items[0].volumeInfo.title);
        $(".card-text").text(data.items[0].volumeInfo.description);
        $(".card-img-top").attr("src", data.items[0].volumeInfo.imageLinks.thumbnail);
    }
}
