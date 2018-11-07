//DRAW TABLE
function drawTable(book) {

    var txt = `<tr>
            <td class="table-warning">${book.id}</td>
            <td class="table-warning">${book.title}</td>
            <td class="table-warning"><a href="${book.infoURL}">See more info</a></td>
            <td class="table-warning">${book.likes}</td>
        </tr>`;
    
    return txt;

}