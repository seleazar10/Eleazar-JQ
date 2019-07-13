$(document).ready(function () {

    $('.contwo').hide()
    $('.conthree').hide()
    $('#buttons').fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(1000)

 

    $(".start").on("click", function () {
        start();
        $('.contwo').toggle(1000)
        $('.start').attr('disabled', true)
        $('.direct').hide()


    });


    var timeRunning = false;
    var timeleft = 20;
    var correct = 0;
    var incorrect = 0;





    function start() {

        




        if (!timeRunning) {

            clockRunning = true;



            var startTimer = setInterval(function () {


                $(".countdown").text("Time Remaining: " + timeleft + " seconds")

                timeleft--;






                if (timeleft < 0) {

                    

                    clearInterval(startTimer);
                
                    result()

                    


                }


               

            }, 1000);

            timeRunning = true;


            qone()

        }

        /////////////////////////better ways to CRY

        

        function qone() {

            ///Q1
            $('.btno').on('click', function () {
                correct++
                console.log(correct)
                $(this).attr('disabled', true)
                $('.btd').attr('disabled', true)


            })
            $('.btd').on('click', function () {
                incorrect++
                console.log(incorrect)
                $(this).attr('disabled', true)
                $('.btno').attr('disabled', true)



            })

            ///Q2
            $('.btnt').on('click', function () {
                incorrect++
                console.log(incorrect)
                $('.btnt').attr('disabled', true)
                $('.btf').attr('disabled', true)



            })
            $('.btf').on('click', function () {

                correct++
                console.log(correct)
                $('.btnt').attr('disabled', true)
                $('.btf').attr('disabled', true)


            })

            ///Q3
            $('.btnf').on('click', function () {

                correct++
                console.log(correct)
                $('.three').attr('disabled', true)


            })
            $('.btns').on('click', function () {
                incorrect++
                console.log(incorrect)
                $('.three').attr('disabled', true)


            })



            ///Q4

            $('.bts').on('click', function () {
                incorrect++
                console.log(incorrect)
                $('.quatre').attr('disabled', true)


            })
            $('.bte').on('click', function () {

                correct++
                console.log(correct)
                $('.quatre').attr('disabled', true)



            })

            ///Q5

            $('.btnn').on('click', function () {

                correct++
                console.log(correct)
                $('.cinq').attr('disabled', true)






            })
            $('.btt').on('click', function () {
                incorrect++
                console.log(incorrect)
                $('.cinq').attr('disabled', true)



            })

            ///Q6

            $('.btnee').on('click', function () {

                correct++
                console.log(correct)
                $('.six').attr('disabled', true)





            })
            $('.bttt').on('click', function () {
                incorrect++
                console.log(incorrect)
                $('.six').attr('disabled', true)


            })

            ///Q7

            $('.btnff').on('click', function () {


                correct++
                console.log(correct)
                result()
                $('.seven').attr('disabled', true)





            })
            $('.btff').on('click', function () {


                incorrect++
                console.log(incorrect)
                result()
                $('.seven').attr('disabled', true)



            })




        }

        function result() {
           
            $('.conthree').toggle()
            $('.contwo').hide()
            // $(".countdown").hide();
            $('.direction').hide()

            $(".time").text('Finished');
            $('.correcto').text('Correct Answers: ' + correct)
            $('.incorrecto').text('Incorrect Answers: ' + incorrect)
            clearInterval(startTimer)
            
            
               
           
        }

         
        

        


    }



})



