var Parse = (function (){

  var publicApi = {
    getVerses: getVerses
  };

  var paragraphStorage = {};

  //picks random number
 function getRandomIntInclusive (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // picks a random start point in verseArray, builds a sentence with 1-4 clauses
  function createSentences (verseArray){
    //console.log("createSentences is running");

    //variable declarations - chooses random start point between zero and length -4
    //calls getRandomIntInclusive
    var sentence = "";
    var verseStartIndex = getRandomIntInclusive(0,
      verseArray.length - 4);

    //variable declarations - creates short array
    var currentVerses = verseArray.slice(verseStartIndex, verseArray.length - 1);
    var sentenceArray = [];

    //sets number of clauses, picks verses to form a sentence
    //calls getRandomIntInclusive
    var numberOfClauses = getRandomIntInclusive(2, 4);
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
function createParagraphs (textArray){
    console.log("createParagraphs is running");

    var paragraph = "", i = 0;

    while (i <= 7){
      paragraph += createSentences(textArray) + " ";

      i++;
    }

    return paragraph;

  }

  //pushes appropriate number of paragraphs into an array
  //calls createParagraphs
  function createParagraphArray (number, textArray){
    console.log("createParagraphArray is running");

    var i = 0, results = [];
    while(i <= number){
      results.push(createParagraphs(textArray));
      i++;

    }
    return results;
  }

  function getVerses (numberOfParagraphs, data){
    var builtParagraphs, text = '', lyricData = '', graphs;
    //reads lyrics source file

    //splits read text into lines via line breaks
    paragraphStorage.lines = data.split('\n');


    //breaks data into array of paragraphs
    graphs = createParagraphArray(numberOfParagraphs, paragraphStorage.lines);


    //converts array into paragraphs
    builtParagraphs = graphs.join();

    return builtParagraphs;

  }

  return publicApi;



})();
