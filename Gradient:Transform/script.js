



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



});