$(document).ready(function() {
  $(".pullText").click(function(){
    console.log("log it all!!");

    // $.get("localhost:3000/lyrics", function(data){ console.log(data) },
    //   "text/html"
    //
    // );

    // I'm getting errors below
    var jqxhr = $.get( "localhost:3000/lyrics", function() {
  console.log( "success" );
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "finished" );
  });

  });

  $(".clearText").click( function(){
    console.log("clear it all!!");
  });
});
