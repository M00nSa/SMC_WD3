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





/* Scroll to Top*/
window.onscroll = function () {
    scrollFunction()
};
document.getElementById("mybtn").style.display = "none";

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
        $("#goodForm").addClass("show").alert();
    }
});