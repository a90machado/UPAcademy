
function checkInput(){
    var ipt1, ipt2 = "";
    ipt1 = document.getElementById("input1").value;
    ipt2 = document.getElementById("input2").value;
    var count1 =charCount(ipt1);
    var count2 =charCount(ipt2);

    document.getElementById("result").innerHTML = getConteudo(count1,count2);
}

function charCount(userInput){

    //console.log(typeof userInput);
    
    var count=0;
    for (var x = 0; x < userInput.length; x++){
        if (userInput[x]==" "){
            count++;
        }
    }
    return count;
}


function getConteudo(count1,count2){

    return `<p>No primeiro estavam ${count1} espacos<br>No segundo estavam ${count2} espacos </p>`
}
