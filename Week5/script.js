$(document).ready(function(){
    //we write everything here

    $('#myCarousel').carousel({
        interval: 500
      });

      $('#carouselControl').click(function(){
        
        if($('#carouselControl').hasClass('paused')){
            $('#myCarousel').carousel('cycle');
            $('#carouselControl').text('pause');
        }
        else{
            $('#myCarousel').carousel('pause');
            $('#carouselControl').text('play');
        }
        $('#carouselControl').toggleClass('paused');
      });

      $('#modalLauncher').click(function(){
          $('#modalLauncher').modal({
              backdrop:false
          });
      });
});
