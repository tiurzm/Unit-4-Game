$(document).ready(function(){
    // generate target score number
    var targetScore = [];
    var randomScore = Math.round(Math.random()*120)+1;
    targetScore.push(randomScore);
    $("#target-score").text(targetScore);
    console.log(targetScore);
    
    // generate data-value for images
    var numArray = [];
    for(var i = 0; i < 4; i++){
        var randomNumber = Math.round(Math.random()*6);
        numArray.push(randomNumber); 
        var value = $(".vl")[i];
        $("#pictures").find(value).attr("data-value", numArray[i]);
        console.log(numArray[i]);
    }; 

    // on cliclk game
    var counter = 0;
    var winScore = [];
    var losseScore = [];
    $(".vl").on("click", function(){
        var item = ($(this).attr("data-value"));
        item = parseInt(item);
        counter = counter + item;
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