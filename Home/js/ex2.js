//button onclick
function action(){
    var input = document.getElementById("userInput").value;
    //check if input is only numbers
    if (input.match(/^[0-9]+$/) != null){
        //only numbers
        document.getElementById("result").innerHTML = checkIt(input);
    } else {
        //have letters
        alert("You naughty! Only numbers!");
        document.getElementById("result").innerHTML = "Let's do it again!"
    }
}

//sort input
function checkIt(string){
    //vars
    var array=string.split("");
    var output="";
    var i;
    //order
    for (i = 0; i < array.length-1; i++){
        if(parseInt(array[i]) % 2 == 0 && parseInt(array[i+1]) % 2 == 0){
            array[i] = array[i]+"-"
        }
        if(parseInt(array[i]) % 2 !== 0 && parseInt(array[i+1]) % 2 !== 0){
            array[i] = array[i]+"#"
        }
    }
    //prepare for submission
    for (x=0; x < array.length; x++){
        output += array[x];
    }
    return output;
}