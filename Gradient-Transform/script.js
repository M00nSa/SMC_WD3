$(document).ready(function() {


    $("#Present").click(function() {
        $("#Content").toggle("slow")

    });



    var size = $("#header2").css("fontSize")
    $("#header2").hover(
        function() {
            $(this).css("fontSize", "2.5rem");
        },
        function() {
            $(this).css("fontSize", size);
        });


    var size = $("#header2-2").css("fontSize")
    $("#header2-2").hover(
        function() {
            $(this).css("fontSize", "2.5rem");
        },
        function() {
            $(this).css("fontSize", size);
        });




    $("form.needs-validation").submit(function(event) {
        event.preventDefault();

        if ($("input.form-control").val() === "") {
            $("form.needs-validation").removeClass('needs-validation').addClass(
                'was-validated');
        }
    });

    setTimeout(function() {
        $('#exampleModal').modal('show');
    }, 2000);




    /*newModalForm.addEventListener('input', () => {
        if ($('form.was-validated:has(input:valid)')) {
            $('.Subscribe').removeClass('disabled');
        } else {
            $('.Subscribe').setAttribute('disabled', 'disabled');
        }
    });*/


    /*$('.Subscribe').click(function() {
        if ($('form.was-validated:has(input:invalid)')) {

        } else {
            console.log("AlertNotWorking");
            $('.alert').show();

        }

    });*/




    $('.Subscribe').attr('disabled',true);
    $('.Subscribe').on('keyup',function(){
        if($('form.was-validated:has(input:valid)')){
            $('.Subscribe').attr('disabled',false);
            $('.alert').show();
        }
        else{
            $('.Subscribe').attr('disabled',true);
            
        }
    });




});




$("#Order").click(function() {
    var productId = $("#productId").val();
    var productName = $("#productName").val();
    var productQuantity = $("#productQuantity").val();
    var data = {
        'product_id': productId,
        'product_name': productName,
        'quantity': productQuantity
    };

    $.post("/cart/add", data, showDone);
});

var showDone = function() {
    /* Make something happen here*/
}