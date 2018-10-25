var totalStudents = "";
var allStudents=[];
var count=0;

function userClick(){
    var input = $("#userInput").val();

    if ($("#userInput").val().length > 0){
        //only numbers
        checkInput(count,input);
        count++;
        console.log(allStudents);
    } else {
        //have letters
        $("#result").html("Only numbers are accept!");
    }
    $("#userInput").val("");
    $("#userInput").focus();
}
function refreshPage(){
    location.reload();
}

function variacao(input){
    var variacao = (media()-input)/media()*100;

    return variacao;
}

function media(){
    var media = 0;
    for (var i = 0; i < allStudents.length; i++){
        media+=parseInt(allStudents[i].grade);
    }
    return (media/allStudents.length);
}

function checkInput(count,input){
    if (count==0){
        totalStudents = input;
        $("#result").html("Give me the grade of the student Nº "+(count+1));
        $("#userInput").val("");
    }else if (count <= parseInt(totalStudents)){
        drawTable(count,input);
        if (count == parseInt(totalStudents)){
            $("#result").html("Reference Grade");
            
        } else {
            $("#result").html("Give me the grade of the student Nº "+(count+1));
        }
    } 
    if (count == parseInt(totalStudents)+1){
        $("#hide").hide();
        $("#refreshButton").show();
        $("#lastResult").html("Media: "+media()+"Variacao "+variacao(parseInt(input)));
    } 
}

function drawTable(index,inputValue){
    var student = {};
    student.number = "Nº "+(index);
    student.grade = inputValue;
    allStudents.push(student);

    if (index==1){
        var header = Object.keys(student);
        for (var i = 0; i < header.length; i++){
            const element = header[i];
            $("#tableHead").append(`<th>${element}</th><br>`);
        }

        $("#tableBody").append(`<tr>
                                    <td>${student.number}</td>
                                    <td>${student.grade}</td>
                                </tr>`);
    } else if (index > 1){
        $("#tableBody").append(`<tr>
                                    <td>${student.number}</td>
                                    <td>${student.grade}</td>
                                </tr>`);
    }
}