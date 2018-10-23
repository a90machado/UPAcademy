function checkInput(){
    // var input = document.getElementById("input1").value;
    var input = [1,2,3];
    //document.getElementById("result").innerHTML = sortArray(input);
    console.log(sortArray(input));
}
var testeFim = 0;
function sortArray(userInput){
    testeFim++;
    if (testeFim === 5) return 'deu merda';
    
    
    var swap=0;
    console.log("dentro da func");
    for (i=0; i < userInput.length; i++){
        console.log("dentro da for");

        for (j=0; j < userInput.length-1; j++){

        if (userInput[i+1] > userInput[i]){
            console.log("dentro da if");
            swap = userInput[i];
            // console.log(swap);
            // userInput[i] = userInput[i+1];
            // console.log('atum');
            // userInput[i+1] = swap;
            
            userInput[i] = userInput[i+1];
            userInput[i+1]=swap;
        }
    }
        //if (userInput[i])
    
    }
    return sortArray(userInput);
}