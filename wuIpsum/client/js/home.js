

$(document).ready(function() {

  $(".pullText").click(function(){
    console.log("log it all!!");
    $.get("/lyrics", function(data) {
    // console.log(data);
    $(".contentText").append(data);
});

  });

  $(".clearText").click( function(){
    console.log("clear it all!!");
  });
});
