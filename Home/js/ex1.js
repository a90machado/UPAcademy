//button onclick
function action(){

    var input = document.getElementById("userInput").value;

    //check if input is only numbers
    if (input.match(/^[0-9]+$/) != null){
        //only numbers
        document.getElementById("result").innerHTML = sortArray(input);
    } else {
        //have letters
        alert("You naughty! Only numbers!");
        document.getElementById("result").innerHTML = "Let's do it again!"
    }

}

//sort input
function sortArray(string){

    //vars
    var array=string.split("");
    var output="";
    var temp, x, y;

    //order
    for (x = 0; x < array.length-1; x++){

        for (y = 0; y < array.length-1; y++){

            if(array[y] < array[y+1]){

                temp = array[y];
                array[y] = array[y+1];
                array[y+1] = temp;
            }
        }
    }

    //prepare for submission
    for (x=0; x < array.length; x++){
        output += array[x];
    }

    return output;
}