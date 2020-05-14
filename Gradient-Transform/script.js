$(document).ready(function () {


    $("#Present").click(function () {
        $("#Content").toggle("slow")

    });



    var size = $("#header2").css("fontSize")
    $("#header2").hover(
        function () {
            $(this).css("fontSize", "2.5rem");
        },
        function () {
            $(this).css("fontSize", size);
        });


    var size = $("#header2-2").css("fontSize")
    $("#header2-2").hover(
        function () {
            $(this).css("fontSize", "2.5rem");
        },
        function () {
            $(this).css("fontSize", size);
        });


    $("#Longan-Btn").click(function () {

        if ($('body:has(h1.count)').length > 0) {
            var number = parseInt($('h1.count').text()) + 1;
            $('h1.count').text(number);
        } else {
            $('body').prepend("<h1 class='count'>1</h1>");
        }
    });




    $("form.needs-validation").submit(function (event) {
        event.preventDefault();

        if ($("input.form-control").val() === "") {
            $("form.needs-validation").removeClass('needs-validation').addClass(
                'was-validated');
        }
    });

    setTimeout(function () {
        $('#exampleModal').modal('show');
    }, 2000);


    $(".Circle").css({
        display: "none"
    });
    $(".order").click(function () {
        $(".Circle").css({
            display: "block"
        });
    })


    /*newModalForm.addEventListener('input', () => {
        if ($('form.was-validated:has(input:valid)')) {
            $('.Subscribe').removeClass('disabled');
        } else {
            $('.Subscribe').setAttribute('disabled', 'disabled');
        }
    });*/



    $('.Subscribe').click(function () {
        if ($('form.was-validated:has(input:invalid)')) {
            $('.alert').addClass('hidden');
        } else {
            if ($('form.was-validated:has(input:valid)')) {
                $('.alert').show();

            }
        }

    });


    $('input').on('click', function () {
        if ($('form.was-validated:has(input:valid)')) {
            $('.Subscribe').prop('disabled', false);
        } else {
            $('.Subscribe').prop('disabled', 'disabled');
        }
    });

    $("#newModalForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            }
        }
    });







    /* $('.Subscribe').attr('disabled', true);
     $('.Subscribe').on('click', function() {
         if ($('form.was-validated:has(input:valid)')) {
             $('.Subscribe').removeAttr('disabled');
             $('.alert').show();
         } else {
             $('.Subscribe').attr('disabled', true);

         }
     });*/




});