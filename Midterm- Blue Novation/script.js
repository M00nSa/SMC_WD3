
$(document).ready(function () {
    $('.toggle').click(function () {
        $('nav').toggleClass('active')
    })
})

$(window).scroll(function(){
    $('.scrolling-navbar').toggleClass('.scrolled', $(this).scrollTop() > 450);
    });

$(document).ready(function(){
    setTimeout(function(){
$('#exampleModal').modal('show');
    }, 2000);
});

$(document).ready(function(){
    $(".Subscribe").click(function(){
      alert("Welcome to the unlimited Blue world!");
    });
  });



  //Service carousel and btns:

  $(document).ready(function(){
    //we write everything here

    $('#myCarousel').carousel({
        interval: 500
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
});