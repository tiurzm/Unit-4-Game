// set target score
var targetScore = 60;
$("#target-score").text(targetScore);

// game
var counter = 0;
var winScore = [];
var losseScore = [];
var totalScore = [];
var numArray = [9, 12, 5, 10];
for(var i = 0; i < numArray.length; i++){
    var crystal = $("<img>");
    crystal.addClass("image");
    crystal.attr("src", "./assets/images/1.jpg");
    crystal.attr("data-value", numArray[i]);
    $("#pictures").append(crystal);
};

$(".image").on("click", function(){
    var value = ($(this).attr("data-value"));
    value = parseInt(value);
    counter = counter + value;
    if(counter === targetScore){
        alert("you win");
        winScore++; 
        $("#wins").text(winScore);
    } else if (counter > targetScore) {
        alert("You lose!!");
        losseScore++;
        $("#losses").text(losseScore);

    }
    $("#total-score").text(counter);
});