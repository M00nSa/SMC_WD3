$('.nav__toggle-btn').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu button");
    $("#mainListDiv").toggleClass("nav__wrapper--visible");
    $("#mainListDiv").fadeIn();

});

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('highlight');
        console.log("OK");
    } else {
        $('.nav').removeClass('highlight');
    }
});


var hamburger = document.querySelector(".hamburger");
var navbarNav = document.querySelector(".navbar-nav");
var links = document.querySelectorAll(".navbar-nav li");

hamburger.addEventListener('click', function(){
    //Animate Links
    navbarNav.classList.toggle("open");
   
    links.forEach(link => {
        link.classList.toggle("fade");
    });
//Hamburger Animation
    hamburger.classList.toggle("toggle");
});




  $(".hero-btn").click(function () {
    if (!$(".hero-btn").parent().hasClass("active")) {
      $(this).parent().addClass("active");
      setTimeout(function () {
        $(".hero-btn").parent().removeClass("active");
      }, 2000);
    }
  });