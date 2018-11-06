var startIndex = 0;
var books = [];
var booksLiked = [];

$(document).ready(function () {
        getData();
});

//CHECK CLICK NAVBAR GO TO LIST
$("goToList").click(function(){
    goToList = true;

    for (let index = 0; index < booksLiked.length; index++) {
        const element = booksLiked[index];

        $("tbody").append(drawTable(element));
    }
});

//ACTION SHOW TABLE
function showTable(){
    $(".hideContainer").hide();
    $(".controls").hide();

    $(".tableShow").css("visibility","visible");

    for (let index = 0; index < booksLiked.length; index++) {
        const element = booksLiked[index];
        
        $(".tbody").append(drawTable(element));
    }

}

//ACTION LIKE
function like(){
    books[0].addLikes();
    booksLiked.push(books[0]);
    books.shift();
    showInfo();

    //Check End Array Books
    if (books.length==5){
        getData();
    }

}

//ACTION DISLIKE
function dislike(){
    books.shift();
    showInfo();
}

//SHOW INFO ON THE PAGE
function showInfo(){
    book = books[0];

    //Set image
    $(".card-img-top").attr("src", book.imageURL);

    //Set title
    $(".card-title").text(book.title);

    //Set description
    $(".card-text").text(book.description);

    //Set info link
    $(".infoURL").attr("href", book.infoURL);

    //Set sample link
    $(".sampleURL").attr("href", book.sampleURL);

    //Set buy link
    if(book.buyURL == "NotForSale"){
        $(".fas fa-shopping-cart").hide();
    } else {
        $(".buyURL").attr("href", book.buyURL);
    }
    
    //Set number likes
    if(book.likes>0){
        $(".icon-text").text(book.likes);
    }
        
}