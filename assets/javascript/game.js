$(document).ready(function(){
    var counter = 0;
    var winScore = "";
    var losseScore = "";
    var targetScore = "";

    // generate target score
    function start(){
        targetScore = Math.round(Math.random()*120)+1;
        $(".target-score").text(targetScore);
        console.log(targetScore);    
    }
     // generate data-value for images
    function randomValue(){
        var numArray = [];
        for(var i = 0; i < 4; i++){
            var randomNumber = Math.round(Math.random()*12)+1;
            numArray.push(randomNumber); 
            var value = $(".vl")[i];
            $("#pictures").find(value).attr("data-value", numArray[i]);
        }; 
    }

    
    // how to clean total-score?
    function reset(){
        $(".target-score").empty();
        $(".total-score").empty();
        start();
        randomValue();
    }
    
    
    // GAME
    start();
    randomValue();
    // on cliclk game
    $(".vl").on("click", function(){
        var item = ($(this).attr("data-value"));
        item = parseInt(item);
        counter += item;
        if(counter === targetScore){
            winScore++; 
            $(".wins").text(winScore);
            $(".win-lose").text("You Win!");
            alert("you win");
            reset();
        } else if (counter > targetScore) {
            losseScore++;
            $(".losses").text(losseScore);
            $(".win-lose").text("You Lose!");
            alert("You lose!!");
            reset();
        }
        $(".total-score").text(counter);
    });
    
});

