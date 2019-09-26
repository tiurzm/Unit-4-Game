$(document).ready(function(){
    // generate target score number
    var targetScore = "";
    targetScore = Math.round(Math.random()*120)+1;
    $("#target-score").text(targetScore);
    console.log(targetScore);
    
    // generate data-value for images
    var numArray = [];
    for(var i = 0; i < 4; i++){
        var randomNumber = Math.round(Math.random()*12)+1;
        numArray.push(randomNumber); 
        var value = $(".vl")[i];
        $("#pictures").find(value).attr("data-value", numArray[i]);
    }; 
    
    // on cliclk game
    var counter = 0;
    var winScore = "";
    var losseScore = "";
    $(".vl").on("click", function(){
        var item = ($(this).attr("data-value"));
        item = parseInt(item);
        counter += item;
        if(counter === targetScore){
            winScore++; 
            $("#wins").text(winScore);
            alert("you win");
        } else if (counter > targetScore) {
            losseScore++;
            $("#losses").text(losseScore);
            alert("You lose!!");
        }
        $("#total-score").text(counter);
    });
    // reset

});
   
