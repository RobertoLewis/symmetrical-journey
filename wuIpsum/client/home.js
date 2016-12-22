$(document).ready(function() {
  $("#action").click(function(){
    $.get("lyrics", function( data, status ) {
      console.log("ergh");
      $("#content")
      .append(data);
    });

  });
});
