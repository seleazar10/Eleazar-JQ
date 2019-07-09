$(document).ready(function(){

    $(".start").on("click", start);


    var timeRunning = false;
    var timeleft = 30;





    function start() {

        if (!timeRunning) {
            
            clockRunning = true;
        
         

    var startTimer = setInterval(function(){


    $(".countdown").text("Time Remaining: "+ timeleft + " seconds")

     timeleft--;

    if(timeleft <= 0){

    clearInterval(startTimer);
 

    $(".countdown").text("Finished!!")


    }
    }, 1000);

    timeRunning = true;


    }

}



})



