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
    $(".Circle-sm").css("display", "none");
    $(".Circle-md").css("display", "none");
    $(".black-cart-icon").css("display", "none");

    $('.add-cart').click(function () {
       

        if ($(window).width() < 767) {
            $(".Circle-sm").css("display", "block");
        } else {
           
             $(".Circle-md").css("display", "block");
            $(".black-cart-icon").css("display", "block");

        }

        if ($('html:has(h3.count)').length > 0) {
            var number = parseInt($('h3.count').text()) + 1;
            var number = parseInt($('h3.count-sm').text()) + 1;
            $('h3.count').text(number);
            $('h3.count-sm').text(number);
        } else {
            $('.Circle-md').prepend("<h3 class='count'>1</h3>");
            $('.Circle-sm').prepend("<h3 class='count-sm'>1</h3>");
        }
    })


    /* Modal*/
    setTimeout(function () {
        $('#exampleModal').modal('show');
    }, 2000);



    $('.Subscribe').click(function () {
        $('.alert').show()
    })


    /* Added phone number to the logo on small screen*/
    $(".Accordin-header").click(function () {
        $(this).toggleClass('active');
    });


});







 /* Modal*/

$('#ModalEmail').blur(function () {
    console.log(form.checkValidity());
    if (form.checkValidity()) {
        $("[type=submit]").prop("disabled", false);
    }
    form.classList.add("was-validated");
});

$('[type="submit"]').click(function (event) {
    if (form.checkValidity()) {
        event.preventDefault();
        $("#SubscribeAlert").addClass("show").alert();
    }
});





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

$("#Billing-Address-Section").css('display', 'none');
$("#same_shipping").click(function (event) {
    $("#Billing-Address-Section").css('display', 'block');
})




/* checkout-form validation*/

var form = $("form.needs-validation").get(0);

$("input").keypress(function () {
    /*console.log(document.getElementById("myForm").checkValidity());*/

    if (form.checkValidity()) {
        $("[type=submit]").prop("disabled", false);
        form.classList.add("was-validated");
    } else {

        $(".valid-charachter-number").each(function () {
            if ($(this).val().length < 2) {
                this.setCustomValidity("You must enter at least two characters");
                form.reportValidity();
            } else {
                this.setCustomValidity("");
            }
        })

    }
});






/*  checkout-form functionality*/

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
        $("#Checkout-Page").css('display', 'none');
        $("#goodForm").addClass("show").alert();
        
    }
});




/* contact-form validation*/



$("input").keypress(function () {
    console.log(document.getElementById("Contact-Form").checkValidity());

    if (form.checkValidity()) {
        $("[type=submit]").prop("disabled", false);
        form.classList.add("was-validated");
    } else {

        $(".valid-charachter-number").each(function () {
            if ($(this).val().length < 3) {
                this.setCustomValidity("Please enter your full Name/Lastname (at least 3 characters)");
                form.reportValidity();
            } else {
                this.setCustomValidity("");
            }
        })

    }
});




/* contact-form functionality*/

$('input#Terms-Conditions').blur(function () {
    console.log(form.checkValidity());
    if (form.checkValidity()) {
        $('[type="submit"]').prop("disabled", false);
    }
   
    form.classList.add("was-validated");
    
});

$('[type="submit"]').click(function (event) {
    console.log(event);
    if (form.checkValidity()) {
      
        $("#disapper-alert").css('display', 'none');
        $("#contactform").addClass("show").alert();
        
    }
});
