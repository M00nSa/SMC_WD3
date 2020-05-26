$(document).ready(function () {

    $('.toggle').click(function () {
        $('nav').toggleClass('active')
    })



    $('#carouselControl').click(function () {

        if ($('#carouselControl').hasClass('paused')) {
            $('#myCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        } else {
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


    /*var $item = $('.carousel-item');
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight);
    $item.addClass('full-screen');

  

    $(window).on('resize', function () {
        $wHeight = $(window).height();
        $item.height($wHeight);
    });*/



    
/* styling border bottom of nav link*/
    $('.js-track-underline').mouseenter( 
        function(e){
          var x = e.pageX - this.offsetLeft;
          var thisW = $(this).outerWidth();
          var originPercent = 100*(x/thisW) + "%";
          $('#underline').html('.link--underline-slide:after{transform-origin:' + originPercent + ' 50% 0px;}');
        }  
      ).mouseleave(
        function(e){
          var x = e.pageX - this.offsetLeft;
          var thisW = $(this).outerWidth();
          var originPercent = 100*(x/thisW) + "%";
          $('#underline').html('.link--underline-slide:after{transform-origin:' + originPercent + ' 50% 0px;}');
        }  
      );

})