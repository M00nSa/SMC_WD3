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

        if (username_length < 3 && pattern.test($("#ModalEmail").val())) {
            $("form.needs-validation").removeClass('needs-validation').addClass(
                'was-validated');
        }

        /* $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
  event.preventDefault();*/
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



    /* $('.Subscribe').click(function () {
         if ($('form.was-validated:has(input:invalid)')) {
             $('.alert').addClass('hidden');
         } else {
             if ($('form.was-validated:has(input:valid)')) {
                 $('.alert').show();

             }
         }

     });*/

    /* $('.Subscribe').click(function () {
         if ($('form.was-validated:has(input:invalid)')) {
             $('.alert').hide();
         } else {
             $('.alert').show();
         }
     });*/

    



    /*$(function () {
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
    });*/


    






    /* $('.Subscribe').attr('disabled', true);
     $('.Subscribe').on('click', function() {
         if ($('form.was-validated:has(input:valid)')) {
             $('.Subscribe').removeAttr('disabled');
             $('.alert').show();
         } else {
             $('.Subscribe').attr('disabled', true);

         }
     });*/





    /*New script for button*/

    $("#name_error_message").hide();
    $("#email_error_message").hide();

    var error_name = false;
    var error_email = false;

    
    $("#ModalName").focusout(function() {

		check_name();
		
    });
    
    function check_name() {
	
		var username_length = $("#ModalName").val().length;
		
		if(username_length < 3 || username_length > 15) {
			$("#name_error_message").html("Name should be between 3-15 characters");
			$("#name_error_message").show();
			error_name = true;
		} else {
			$("#name_error_message").hide();
		}
	
    }
    


    $("#ModalEmail").focusout(function() {

		check_email();
		
    });

    function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#ModalEmail").val())) {
			$("#email_error_message").hide();
		} else {
			$("#email_error_message").html("Invalid email address");
			$("#email_error_message").show();
			error_email = true;
		}
	
	}
  

    
    $("#newModalForm").submit(function() {
											
		error_name = false;
		error_email = false;
											
		check_name();
		check_email();
		
		if(error_name == false && error_email == false) {
            return true;
		} else {
            return false;	
		}

    });
    



    $('.Subscribe').click(function () {
        console.log($('input.form-control').val().length);
        if ($('input.form-control').val().length > 3 && $('form.was-validated:has(input:valid)')){
            $('.alert').show();
        } else {
            $('.alert').hide();
        }
    });



    $('input').on('click', function () {
        if ($('form.was-validated:has(input:valid)')) {
            $('.Subscribe').prop('disabled', false);
        } else {
            $('.Subscribe').prop('disabled', 'disabled');
        }
    });


});

