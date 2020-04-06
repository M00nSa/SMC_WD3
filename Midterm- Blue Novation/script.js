
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

