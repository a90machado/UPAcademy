// document ready for js

$(document).ready(function() {
    console.log( "ready!" );

    $("#target").click(function() {
        $('h1').css('color','red');
        $('.conteudo').html(getImage("http://sribasu.com/wp-content/uploads/2013/08/jquery-cheat.png","teste"));
      });


});

function getImage(srcImage, altImage){
    return `<img src="${srcImage}" alt="${altImage}">`;
}