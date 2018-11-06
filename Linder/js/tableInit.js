//DRAW TABLE
function drawTable(book) {

    var txt = `<tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td><a href="${book.infoURL}">See more info</a></td>
            <td>${book.likes}</td>
        </tr>`;

    return txt;

}