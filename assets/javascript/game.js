$(document).ready(function(){
    var targetScore = "";
    var randomScore = Math.round(Math.random()*120)+1;
    targetScore = randomScore;
    console.log(typeof targetScore);
    $("#target-score").text(targetScore);
    // console.log(targetScore);

    for(var i = 0; i < 4; i++){
        var numArray = "";
        var randomNumber= Math.round(Math.random()*11)+1;
        numArray = randomNumber; 
        console.log(typeof numArray);
        $(".vl").attr("data-value", numArray);
    }; 

    


    // var counter = 0;
    // var winScore = [];
    // var losseScore = [];
    // $(".image").on("click", function(){
    //     var value = ($(this).attr("data-value"));
    //     value = parseInt(value);
    //     counter = counter + value;
    //     if(counter === targetScore){
    //         alert("you win");
    //         winScore++; 
    //         $("#wins").text(winScore);
    //     } else if (counter > targetScore) {
    //         alert("You lose!!");
    //         console.log(losseScore);
    //         losseScore++;
    //         $("#losses").text(losseScore);
    //     }
    //     $("#total-score").text(counter);
    // });


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