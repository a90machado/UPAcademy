
function checkInput(){
    var ipt = "";
    ipt = document.getElementById("input1").value;
    console.log('str:',ipt,"length",ipt.length);
    console.log(charCount(ipt));

    document.getElementById("result").innerHTML = charCount(ipt);
}

function charCount(userInput){

    console.log(typeof userInput);
    
    var count=0;
    console.log('Oentrou str:', userInput,"length:",userInput.lenght);
    for (var x = 0; x < userInput.length; x++){
        console.log('Ola');
        if (userInput[x]==" "){
            console.log('IF');
            count++;
        }
    }
    return count;
}