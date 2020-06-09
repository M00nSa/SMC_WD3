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

    $('.carousel #myCarousel').carousel({
        interval: 5000,
        pause: false,
        ride: "carousel"
    });



    /* styling border bottom of nav link*/
    $('.js-track-underline').mouseenter(
        function (e) {
            var x = e.pageX - this.offsetLeft;
            var thisW = $(this).outerWidth();
            var originPercent = 100 * (x / thisW) + "%";
            $('#underline').html('.link--underline-slide:after{transform-origin:' + originPercent + ' 50% 0px;}');
        }
    ).mouseleave(
        function (e) {
            var x = e.pageX - this.offsetLeft;
            var thisW = $(this).outerWidth();
            var originPercent = 100 * (x / thisW) + "%";
            $('#underline').html('.link--underline-slide:after{transform-origin:' + originPercent + ' 50% 0px;}');
        }
    );



    $('#same_shipping').click(function () {

        if ($('#same_shipping').is(":checked")) {
            $('#billing_name').val($('#shipping_name').val());
            $('#billing_lastname ').val($('#shipping_lastname').val());
            $('#billing_address').val($('#shipping_address').val());
            $('#billing_apartment').val($('#shipping_apartment').val());
            $('#billing_city').val($('#shipping_city').val());
            $('#billing_state').val($('#shipping_state').val());
            $('#billing_zip').val($('#shipping_zip').val());
            //var country = $('#exampleFormControlSelect2 option:selected').val();
            // $('#country_billing option[value=' + country + ']').attr('selected','selected');
        } else { //Clear on uncheck
            $('#billing_name').val("");
            $('#billing_lastname').val("");
            $('#billing_address').val("");
            $('#billing_apartment').val("");
            $('#billing_city').val("");
            $('#billing_state').val("");
            $('#billing_zip').val("");
            //$('#country_billing option[value=""]').attr('selected','selected');
        };
    });




    /* cart*/
    $(".cart-icon").css("display", "none");
    $(".Circle-md").css("display", "none");
    $(".Circle").css("display", "none");
    $('.add-cart').click(function () {

        if ($(window).width() < 767) {
            $(".cart-icon").css("display", "block");
            $(".Circle").css("display", "block");
            $(".count").css('top', '14px');
            $(".count").css('left', '39px');
            $(".count").css('color', '#002366');
            $(".count").css("position", "fixed");
        } else {
            $(".cart-icon").css("display", "block");
            $(".Circle-md").css("display", "block");
            $(".count").css('top', '90px');
            $(".count").css('right', '52px');
            $(".count").css('color', 'white');
        }

        if ($('html:has(h3.count)').length > 0) {
            var number = parseInt($('h3.count').text()) + 1;
            $('h3.count').text(number);
        } else {
            $('html').prepend("<h3 class='count'>1</h3>");
        }
    })

    

})







/* Scroll to Top*/
window.onscroll = function () {
    scrollFunction()
};

$("#mybtn").css("display", "none");

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 && $(window).width() > 767) {
        document.getElementById("mybtn").style.display = "block";
    } else {
        document.getElementById("mybtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




/* Shipping same as Billing*/

$("#Billing-Address-Section").css ('display', 'none');
$("#same_shipping").click(function(event){
    $("#Billing-Address-Section").css ('display', 'block');
})




/* form validation*/

var form = $("form.needs-validation").get(0);

$("input").keypress(function () {
    console.log(document.getElementById("myForm").checkValidity());

    if (form.checkValidity()) {
        $("[type=submit]").prop("disabled", false);
        form.classList.add("was-validated");
    } else {
        if ($(".valid-charachter-number").val().length < 2) {
            $(".valid-charachter-number") 
                .get(0)
                .setCustomValidity("You must enter at least two characters");
            form.reportValidity();
        } else {
            $(".valid-charachter-number").get(0).setCustomValidity("");
        }
    }
});





/* form functionality*/

$('input#invalidCheck').blur(function () {
    console.log(form.checkValidity());
    if (form.checkValidity()) {
        $("[type=submit]").prop("disabled", false);
    }
    form.classList.add("was-validated");
});

$('[type="submit"]').click(function (event) {
    console.log(event);
    if (form.checkValidity()) {
        event.preventDefault();
        console.log("Not submitting! Alert!");
        $("#Checkout-Page").css ('display', 'none');
        $("#goodForm").addClass("show").alert();
    }
});






/* magnify glass functionality*/


function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    /*create magnifier glass:*/
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /*set the position of the magnifier glass:*/
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

  /* Initiate Magnify Function
with the id of the image, and the strength of the magnifier glass:*/
magnify("myimage", 3);

$('.img-magnifier-container').mouseover(function(){

    if($(window).width() > 991){
        $('.img-magnifier-glass').show();
        $('#myimage').css({ opacity: 0.3 });
        $('#myimage').css({ 'filter': 'blur(1px)' });
      }
  });
  
  $('.img-magnifier-container').mouseout(function(){

    if($(window).width() > 991){
    $('.img-magnifier-glass').hide();
    $('#myimage').css({ 'filter': 'blur(0px)'});
    $('#myimage').css({ opacity: 1 });
    }
  });



  
  