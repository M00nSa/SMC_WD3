
$(document).ready(function () {


    $('.toggle').click(function () {
        $('nav').toggleClass('active')
    })

    setTimeout(function(){
        $('#exampleModal').modal('show');
            }, 2000);

    $(".Subscribe").click(function(){
        alert("Welcome to the unlimited Blue world!");
    });

    $(".Subscribe").click(function(){
        alert("Welcome to the unlimited Blue world!");
      });

      $('#myCarousel').carousel({
        interval: 2000,
        cycle: true,
        pause: null
    });

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

})




$(window).scroll(function(){
    var CarouselHeight = $("#myCarousel").height();
    if($(this).scrollTop() > CarouselHeight){
        $('.scrolling-navbar').addClass('scrolled');
    }
    else{
        $('.scrolling-navbar').removeClass('scrolled');
    }
    });

    $(window).scroll(function(){
        var CarouselHeight = $("#MyJumbo").height();
        if($(this).scrollTop() > CarouselHeight){
            $('.scrolling-navbar').addClass('scrolled');
        }
        else{
            $('.scrolling-navbar').removeClass('scrolled');
        }
        });



       

        $(window).scroll(function(){
            var CarouselHeight = $("#TeamContainer").height();
            if($(this).scrollTop() > CarouselHeight){
                $('.scrolling-navbar').addClass('scrolled');
            }
            else{
                $('.scrolling-navbar').removeClass('scrolled');
            }
            });