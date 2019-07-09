$(document).ready(function(){

    $(".start").on("click", start);


    var timeRunning = false;
    var timeleft = 30;
    var correct = 0;
    var incorrect = 0;







    function start() {

        if (!timeRunning) {
            
            clockRunning = true;
        
         

    var startTimer = setInterval(function(){


    $(".countdown").text("Time Remaining: "+ timeleft + " seconds")

     timeleft--;

     
     

    if(timeleft <= 0){

    clearInterval(startTimer);
 

    $(".countdown").text("Finished!!")
    result()


    }
    }, 1000);

    timeRunning = true;

    
    qone()

    }

    ///Q1

    function qone(){

         ///Q1
        $('.btno').on('click',function(){
            correct++
            console.log(correct)
            $(this).attr('disabled', true)
            $('.btd').attr('disabled', true)


        })
        $('.btd').on('click',function(){
            incorrect++
            console.log(incorrect)
            $(this).attr('disabled', true)
            $('.btno').attr('disabled', true)



        })

         ///Q2
        $('.btnt').on('click',function(){
            incorrect++
            console.log(incorrect)          


        })
        $('.btf').on('click',function(){
            
            correct++
            console.log(correct)


        })

         ///Q3
        $('.btnf').on('click',function(){
            
            correct++
            console.log(correct)


        })
        $('.btns').on('click',function(){
            incorrect++
            console.log(incorrect)          


        })



         ///Q4

         $('.bts').on('click',function(){
            incorrect++
            console.log(incorrect)          


        })
        $('.bte').on('click',function(){
            
            correct++
            console.log(correct)


        })

         ///Q5

         $('.btnn').on('click',function(){

            correct++
            console.log(correct)

               


        })
        $('.btt').on('click',function(){
            incorrect++
            console.log(incorrect)       
            

        })

         ///Q6

         $('.btnee').on('click',function(){

            correct++
            console.log(correct)

               


        })
        $('.bttt').on('click',function(){
            incorrect++
            console.log(incorrect)       
            

        })

         ///Q7

         $('.btnff').on('click',function(){
            result()

            correct++
            console.log(correct)

               


        })
        $('.btff').on('click',function(){

            result()
            incorrect++
            console.log(incorrect)       
            

        })




    }

    function result(){
        $('.correcto').text('Correct Answers: ' + correct)
        $('.incorrecto').text('Incorrect Answers: ' + incorrect)
    }
    

}



})



