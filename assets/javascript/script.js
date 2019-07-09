$(document).ready(function () {

    $('.contwo').hide()
    $('.conthree').hide()
    $('#buttons').fadeOut().fadeIn(1000).fadeOut(500).fadeIn(1000)

 

    $(".start").on("click", function () {
        start();
        $('.contwo').toggle(1000)


    });


    var timeRunning = false;
    var timeleft = 10;
    var correct = 0;
    var incorrect = 0;



    function result() {
        $('.conthree').toggle()
        $('.contwo').hide()
        $('.correcto').text('Correct Answers: ' + correct)
        $('.incorrecto').text('Incorrect Answers: ' + incorrect)
    }



    function start() {

        




        if (!timeRunning) {

            clockRunning = true;



            var startTimer = setInterval(function () {


                $(".countdown").text("Time Remaining: " + timeleft + " seconds")

                timeleft--;






                if (timeleft <= 0) {

                    

                    clearInterval(startTimer);
                    



                    $(".countdown").text("Finished!!")
                    result()

                    


                }


               

            }, 1000);

            timeRunning = true;


            qone()

        }

        ///Q1

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


            })
            $('.btf').on('click', function () {

                correct++
                console.log(correct)


            })

            ///Q3
            $('.btnf').on('click', function () {

                correct++
                console.log(correct)


            })
            $('.btns').on('click', function () {
                incorrect++
                console.log(incorrect)


            })



            ///Q4

            $('.bts').on('click', function () {
                incorrect++
                console.log(incorrect)


            })
            $('.bte').on('click', function () {

                correct++
                console.log(correct)


            })

            ///Q5

            $('.btnn').on('click', function () {

                correct++
                console.log(correct)




            })
            $('.btt').on('click', function () {
                incorrect++
                console.log(incorrect)


            })

            ///Q6

            $('.btnee').on('click', function () {

                correct++
                console.log(correct)




            })
            $('.bttt').on('click', function () {
                incorrect++
                console.log(incorrect)


            })

            ///Q7

            $('.btnff').on('click', function () {


                correct++
                console.log(correct)
                result()




            })
            $('.btff').on('click', function () {


                incorrect++
                console.log(incorrect)
                result()


            })




        }

        function result() {
            $('.conthree').toggle()
            $('.contwo').hide()
            $('.correcto').text('Correct Answers: ' + correct)
            $('.incorrecto').text('Incorrect Answers: ' + incorrect)
        }


    }



})



