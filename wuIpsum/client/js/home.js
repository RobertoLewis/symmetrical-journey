

$(document).ready(function() {

  $(".pullText").click(function(){

    $.get("/lyrics", function(data) {
      var paragraph = "<p>" + data + "</p>";

    $(".contentText").append(paragraph);
});

  });

  $(".clearText").click( function(){
    $(".contentText").empty();
    console.log("clear it all!!");
  });
});
