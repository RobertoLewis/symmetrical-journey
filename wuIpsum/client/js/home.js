

$(document).ready(function() {

  // Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
  console.log("success!!");
} else {
  console.log('The File APIs are not fully supported in this browser.');
}

  $(".pullText").click(function(){
    console.log("log it all!!");
    $.get('"../sonnetCXXX.txt"', function(data) {
    console.log(data);
});

    // var reader = new FileReader();
    // var lyrics = '';
    // var newFile = new File([""], "../sonnetCXXX.txt");
    //
    // reader.onload = function(e) {
    //   lyrics = reader.result;
    // };
    //
    // var output = new Promise (function(resolve, reject){
    //
    //   reader.readAsText(newFile);
    //   resolve(console.log(lyrics, "yay"));
    // });

    // lyricFile = Parse.getVerses(2, lyrics);
    // console.log(lyricFile);



  });

  $(".clearText").click( function(){
    console.log("clear it all!!");
  });
});
