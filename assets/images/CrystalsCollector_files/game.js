$(document).ready(function(){
// set target score
var targetScore = [42, 50, 66];
var randomScore = targetScore[Math.round(Math.random())];
$("#target-score").text(randomScore);
console.log(randomScore);

// game
    var counter = 0;
    var winScore = [];
    var losseScore = [];
    var numArray = [9, 12, 5, 10];
    for(var i = 0; i < numArray.length; i++){
        var crystal = $("<img>");
        crystal.addClass("image");
        crystal.attr("src", "./assets/images/1.jpg");
        crystal.attr("data-value", numArray[i]);
        $("#pictures").append(crystal);
    };
    
    $(".image").first().attr("src", "./assets/images/2.jpg");
    $(".image").last().attr("src", "./assets/images/3.jpg");

    $(".image").on("click", function(){
        var value = ($(this).attr("data-value"));
        value = parseInt(value);
        counter = counter + value;
        if(counter === randomScore){
            alert("you win");
            winScore++; 
            $("#wins").text(winScore);
        } else if (counter > randomScore) {
            alert("You lose!!");
            console.log(losseScore);
            losseScore++;
            $("#losses").text(losseScore);
        }
        $("#total-score").text(counter);
    
    });
});

