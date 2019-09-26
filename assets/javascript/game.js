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
    start();

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
    randomValue();

    function reset(){
        $(".target-score").empty();
        start();
        randomValue();
    }
    // how to clean total-score?
    function clear(){
        $(".total-score").empty();
    }
        
    // on cliclk game
    $(".vl").on("click", function(){
        var item = ($(this).attr("data-value"));
        item = parseInt(item);
        counter += item;
        if(counter === targetScore){
            winScore++; 
            $(".wins").text(winScore);
            alert("you win");
            reset();
        } else if (counter > targetScore) {
            losseScore++;
            $(".losses").text(losseScore);
             
            alert("You lose!!");
            reset();
        }
        $(".total-score").text(counter);
    });
    
});

