$(document).ready(function() {
// Pulls and appends paragraph of lyrics
  $(".pullText").click(function(){

    $.get("/lyrics", function(data) {
      var paragraph = "<p>" + data + "</p>";

    $(".contentText").append(paragraph);
});

  });
 // Clears lyrics from page
  $(".clearText").click( function(){
    $(".contentText").empty();
  });
});
