$(document).ready(function () {
    var data = getData();
    

    
});

function getData(){
    $.ajax({
        url: "http://192.168.0.122:3000/api/orders",
        type: 'GET',
        contentType: 'aplication/json',
        success: function (data) {
            console.log(data);
            return data;
        },
        error: function (data) {
            console.log("Error", data);
        }
    });
}

