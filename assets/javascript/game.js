$(document).ready(function(){
    var targetScore = "";
    for(var i = 0; i < 1; i++) {
        var randomScore = Math.round(Math.random()*120);
        targetScore = randomScore;
        $("#target-score").text(targetScore);
        console.log(targetScore);
    }

    var numArray = [4, 5, 6, 7];
    for(var j = 0; j < numArray.length; j++){
        var crystal = $("<img>");
        crystal.addClass("image");
        crystal.attr("src", "./assets/images/1.jpg");
        crystal.attr("data-value", numArray[j]);
        $("#pictures").append(crystal);
    };
    $(".image").first().attr("src", "./assets/images/2.jpg");
    $(".image").last().attr("src", "./assets/images/3.jpg");


    var counter = 0;
    var winScore = [];
    var losseScore = [];
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
            console.log(losseScore);
            losseScore++;
            $("#losses").text(losseScore);
        }
        $("#total-score").text(counter);
    });


});
   


// function clear() {
//     $("#target-score").empty();
//     $("#total-score").empty();
//     targetScore = [];
// };

// function reset() {
//     clear();
//     start();
//     game();
// }; 

// reset : new number to guess,
// 0 totalscore, keep point win and losses