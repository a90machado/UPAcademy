var startIndex = 0;
var books = [];
var booksLiked = [];
var flip = false;

$(document).ready(function () {
    getData();
});


//ACTION SHOW APP
function showAPP() {
    $(".tableShow").css("visibility", "hidden");
    $(".hideContainer").show();
    $(".controls").show();
}

//ACTION SHOW TABLE
function showTable() {
    $("td").remove();
    $(".hideContainer").hide();
    $(".controls").hide();
    $(".tableShow").css("visibility", "visible");
    for (let index = 0; index < booksLiked.length; index++) {
        const element = booksLiked[index];
        $("tbody").append(drawTable(element));
    }

}

//ACTION SEARCH
function search() {
    books = [];
    startIndex = 0;
    getData();
}

//ACTION LIKE
function like() {

    //Check if allready stored
    var checkIfExist = false;
    for (let index = 0; index < booksLiked.length; index++) {
        const element = booksLiked[index];

        if (element.id === books[0].id) {
            checkIfExist = true;
            booksLiked[index].likes++;
        }
    }
    if (checkIfExist == false) {
        books[0].addLikes();
        booksLiked.push(books[0]);
    }

    $("#card").flip('toggle');
    books.shift();
    flip = flip ? false : true;
    showInfo();

    //Check End Array Books
    if (books.length == 5) {
        getData();
    }

}


//ACTION DISLIKE
function dislike() {
    $("#card").flip('toggle');
    books.shift();
    flip = flip ? false : true;
    showInfo();
}

//SHOW INFO ON THE PAGE
function showInfo() {
    bookStackOne = books[0];
    bookStackTwo = books[1];

    if (flip==false){
        //stackOne
        //Set image
        $("#stackOne .card-img-top").attr("src", bookStackTwo.imageURL);
        //Set title
        $("#stackOne .card-title").text(bookStackTwo.title);
        //Set description
        $("#stackOne .card-text").text(bookStackTwo.description);
        //Set info link
        $("#stackOne .infoURL").attr("href", bookStackTwo.infoURL);
        //Set sample link
        $("#stackOne .sampleURL").attr("href", bookStackTwo.sampleURL);
        //Set buy link
        if (bookStackTwo.buyURL === "NotForSale") {
            $("#stackOne .fa-shopping-cart").hide();
        } else {
            $("#stackOne .fa-shopping-cart").show();
            $("#stackOne .buyURL").attr("href", bookStackTwo.buyURL);
        }
        //Set number likes
        if (bookStackTwo.likes > 0) {
            $("#stackOne .icon-text").text(bookStackTwo.likes);
        }
        
    } else {
        //stackTwo
        //Set image
        $("#stackTwo .card-img-top").attr("src", bookStackTwo.imageURL);
        //Set title
        $("#stackTwo .card-title").text(bookStackTwo.title);
        //Set description
        $("#stackTwo .card-text").text(bookStackTwo.description);
        //Set info link
        $("#stackTwo .infoURL").attr("href", bookStackTwo.infoURL);
        //Set sample link
        $("#stackTwo .sampleURL").attr("href", bookStackTwo.sampleURL);
        //Set buy link
        if (bookStackTwo.buyURL === "NotForSale") {
            $("#stackTwo .fa-shopping-cart").hide();
        } else {
            $("#stackTwo .fa-shopping-cart").show();
            $("#stackTwo .buyURL").attr("href", bookStackTwo.buyURL);
        }
        //Set number likes
        if (bookStackTwo.likes > 0) {
            $("#stackTwo .icon-text").text(bookStackTwo.likes);
        }
    }

    if (startIndex == 0) {
        //stackOne
        //Set image
        $("#stackOne .card-img-top").attr("src", bookStackOne.imageURL);
        //Set title
        $("#stackOne .card-title").text(bookStackOne.title);
        //Set description
        $("#stackOne .card-text").text(bookStackOne.description);
        //Set info link
        $("#stackOne .infoURL").attr("href", bookStackOne.infoURL);
        //Set sample link
        $("#stackOne .sampleURL").attr("href", bookStackOne.sampleURL);
        //Set buy link
        if (bookStackOne.buyURL === "NotForSale") {
            $("#stackOne .fa-shopping-cart").hide();
        } else {
            $("#stackOne .fa-shopping-cart").show();
            $("#stackOne .buyURL").attr("href", bookStackOne.buyURL);
        }
        //Set number likes
        if (bookStackOne.likes > 0) {
            $("#stackOne .icon-text").text(bookStackOne.likes);
        }
        //stackTwo
        //Set image
        $("#stackTwo .card-img-top").attr("src", bookStackTwo.imageURL);
        //Set title
        $("#stackTwo .card-title").text(bookStackTwo.title);
        //Set description
        $("#stackTwo .card-text").text(bookStackTwo.description);
        //Set info link
        $("#stackTwo .infoURL").attr("href", bookStackTwo.infoURL);
        //Set sample link
        $("#stackTwo .sampleURL").attr("href", bookStackTwo.sampleURL);
        //Set buy link
        if (bookStackTwo.buyURL === "NotForSale") {
            $("#stackTwo .fa-shopping-cart").hide();
        } else {
            $("#stackTwo .fa-shopping-cart").show();
            $("#stackTwo .buyURL").attr("href", bookStackTwo.buyURL);
        }
        //Set number likes
        if (bookStackTwo.likes > 0) {
            $("#stackTwo .icon-text").text(bookStackTwo.likes);
        }
    }
}