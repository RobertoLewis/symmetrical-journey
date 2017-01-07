$(document).ready(function() {
  $(".pullText").click(function(){
    $.get("localhost:3000/lyrics", function( data, status ) {
      console.log("ergh");
      $("#contentText")
      .append(data);
    });

  });
});
