var firstUse = true;

var totalStudents = "";
var count=0;
var index=0;
var allStudents=[];

function userClick(){
    var input = $("#userInput").val();
    
    count++;
    
    doIT(count,input);
    
    console.log(allStudents);

    console.log(totalStudents);
}

function doIT(count,input){
    if (firstUse==true){

        totalStudents = input;
        firstUse = false;

    } else if (parseInt(count) <= parseInt(totalStudents) && parseInt(count)>0){
        
        addStudent(index,input);
        index++;
    }
}

function addStudent(index,inputValue){
    var student = {};
    student.number = "Nº "+(index+1);
    student.grade = inputValue;
    allStudents.push(student);
    
}
