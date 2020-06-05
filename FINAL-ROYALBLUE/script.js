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


    /*form validation*/
   /* $("form.needs-validation").submit(function (event) {
        event.preventDefault();

        if ($("input.form-control").val() === "") {
            $("form.needs-validation").removeClass('needs-validation').addClass('was-validated');
        }
    })*/


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



    $(".cart-icon").css("display", "none");
    $(".Circle").css("display", "none");
    $('.add-cart').click(function () {
        $(".cart-icon").css("display", "block");
        $(".Circle").css("display", "block");

        if ($('body:has(h3.count)').length > 0) {
            var number = parseInt($('h3.count').text()) + 1;
            $('h3.count').text(number);
        } else {
            $('body').prepend("<h3 class='count'>1</h3>");
        }
    })






    


})

/* scroll to top button*/

// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
   
    scrollTop: 0
  }, 800);
  return false;
});


/* form validation*/ 

var form = $("form.needs-validation").get(0);

        $("input").keypress(function () {
            console.log(document.getElementById("myForm").checkValidity());

            if (form.checkValidity()) {
                $("[type=submit]").prop("disabled", false);
                form.classList.add("was-validated");
            } else {
                if ($("#shipping_name").val().length < 2) {
                    $("#shipping_name")
                        .get(0)
                        .setCustomValidity("Name must have at least two characters");
                    form.reportValidity();
                } else {
                    $("#shipping_name").get(0).setCustomValidity("");
                }
            }
        });

        $('input[type="email"]').blur(function () {
            console.log(form.checkValidity());
            if (form.checkValidity()) {
                $("[type=submit]").prop("disabled", false);
            }
            form.classList.add("was-validated");
        });

        $('[type="submit"]').click(function (event) {
            if (form.checkValidity()) {
                event.preventDefault();
                $("#goodForm").addClass("show").alert();
            }
        });