



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



    $('.Subscribe').click(function () {
        $('.alert').show()
    })
    
});





$("#Order").click(function () {
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

var showDone = function () {
    /* Make something happen here*/
}