var fs = require('fs');
var exports = module.exports = {};
var paragraphStorage = {};

//picks random number
exports.getRandomIntInclusive = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// picks a random start point in verseArray, builds a sentence with 1-4 clauses
exports.createSentences = function (verseArray){
  //console.log("createSentences is running");

  //variable declarations - chooses random start point between zero
  //and length -4
  //calls getRandomIntInclusive
  var sentence = "";
  var verseStartIndex = exports.getRandomIntInclusive(0,
    verseArray.length - 4);

  //variable declarations - creates short array
  var currentVerses = verseArray.slice(verseStartIndex, verseArray.length - 1);
  var sentenceArray = [];

  //console.log("currentVerses: ", currentVerses);

  //sets number of clauses, picks verses to form a sentence
  //calls getRandomIntInclusive
  var numberOfClauses = exports.getRandomIntInclusive(2, 4);
  var chosenVerses = currentVerses.slice(0, numberOfClauses);

  //console.log("numberOfClauses: ", numberOfClauses);

  //builds a sentence
  for (var i = 0;i <= chosenVerses.length - 1; i++){
    sentence += chosenVerses[i] + "," + " ";

  }
  return sentence.slice(0, sentence.length - 2) + ".";

}

//builds a paragraph with seven sentences
//calls createSentences
exports.createParagraphs = function (textArray){
  console.log("createParagraphs is running");

  var paragraph = "", i = 0;

  while (i <= 7){
    paragraph += exports.createSentences(textArray) + " ";
    //console.log("paragraph: ", paragraph);
    i++;
  }

  return paragraph;

};

//pushes appropriate number of paragraphs into an array
//calls createParagraphs
exports.createParagraphArray = function (number, textArray){
  console.log("createParagraphArray is running");

  var i = 0, results = [];
  while(i <= number){
    results.push(exports.createParagraphs(textArray));
    i++;

  }
  return results;
}

exports.getVerses = function (numberOfParagraphs, data){
  var builtParagraphs, text = '', lyricData = '', graphs;
  //reads lyrics source file
  // lyricData = fs.readFile('triumph.txt', 'utf-8', function(err, data) {
  //   if (err) throw err;
  //   lyricData = data;
  //
  // });

  //splits read text into lines via line breaks
  paragraphStorage.lines = data.split('\n');

  //console.log("lines:", paragraphStorage.lines);
  //breaks data into array of paragraphs
  graphs = exports.createParagraphArray(numberOfParagraphs, paragraphStorage.lines);
  //console.log("graphs: ", graphs);

  //converts array into paragraphs
  builtParagraphs = graphs.join();
  //console.log("builtParagraphs: ", builtParagraphs);
  return builtParagraphs;


  // console.log("lyricData:", lyricData);

  // lyricData = text.toString();



}
