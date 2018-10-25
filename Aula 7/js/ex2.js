/**
 * GLOBAL VARS
 * @check first time use
 * @group of all information
 * @count clicks
 */

var totalStudents = "";
var allStudents=[];
var count=0;

/**
 * SUBMITION BUTTON
 * @
 * @
 * @
 */
function userClick(){
    var input = $("#userInput").val();
    checkInput(count,input);
    count++;
    console.log(allStudents);
    console.log(totalStudents);
}

function checkInput(count,input){
    if (count==0){
        totalStudents = input;
        $("#result").html("Give me the grade of the student Nº "+(count+1));
        $("#userInput").val("");
    }else if (count <= parseInt(totalStudents)){
        drawTable(count,input);
        if (count == parseInt(totalStudents)){
            $("#result").html("Refresh the page to do it again!");
        } else {
            $("#result").html("Give me the grade of the student Nº "+(count+1));
        }
    } else if (count > parseInt(totalStudents)){
        alert("The End");
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