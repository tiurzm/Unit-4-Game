$(document).ready(function(){
    var counter = 0;
    var winScore = "";
    var losseScore = "";
    var targetScore = "";

    // generate target score
    function start(){
        targetScore = Math.floor(Math.random()*120)+1;
        $(".target-score").text(targetScore);   
    }
     // generate data-value for images
    function randomValue(){
        $(".vl").each(function() {
            var randomNum = Math.floor(Math.random()*12)+1;
            $(this).attr('data-value', randomNum);
        });
    }
    // reset
    function reset(){
        $(".target-score").empty();
        counter = 0;
        start();
        randomValue();
    }
    
    // GAME
    start();
    randomValue();
    // on cliclk game
    $(".vl").on("click", function(){
        var item = ($(this).attr("data-value"));
        console.log($(this).data("value"));
        item = parseInt(item);
        counter += item;
        if(counter === targetScore){
            winScore++; 
            $(".wins").text(winScore);
            $(".win-lose").css("color", "blue");
            $(".win-lose").text("You Win!");

            reset();
        } else if (counter > targetScore) {
            losseScore++;
            $(".losses").text(losseScore);
            $(".win-lose").css("color", "red");
            $(".win-lose").text("You Lose!");
            reset();
        }
        $(".total-score").text(counter);
    });
    
});

