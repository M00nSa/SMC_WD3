
$(document).ready(function () {


    $('.toggle').click(function () {
        $('nav').toggleClass('active')
    })

    setTimeout(function(){
        $('#exampleModal').modal('show');
            }, 2000);


          
                $('.Subscribe').click(function(){
                    $('.alert').show()
                }) 
           
           
    

    $('#carouselControl').click(function(){
        
        if( $('#carouselControl').hasClass('paused') ){
            $('#myCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        }
        else {
            $('#myCarousel').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });

    $('.carousel').carousel({
        interval: 5000,
        pause: false,
        ride: "carousel"
      });


   

});


function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

$("form.needs-validation").submit(function (event) {
    event.preventDefault();

    if ($("input.form-control").val() === "") {
        $("form.needs-validation").removeClass('needs-validation').addClass('was-validated');
    }
});

/*$(window).scroll(function(){
    var CarouselHeight = $("#myCarousel").height();
    if($(this).scrollTop() > CarouselHeight){
        $('.scrolling-navbar').addClass('scrolled');
    }
    else{
        $('.scrolling-navbar').removeClass('scrolled');
    }
    });*/


