var fs = require('fs');
var parse = require('./lyricsParse.js');


module.exports = function(app) {

  console.log("inside router");
  var lyrics = '';

  app.get('/', function (req, res) {

    res.send({"yo"});
  });


  app.get('/lyrics', function (req, res) {
    console.log("let's get some lyrics!!");

    fs.readFile('triumph.txt', 'utf-8', function(err, data) {
      if (err) throw err;

      lyrics = parse.getVerses(1, data);
    });

    res.send(lyrics);
  });
//   app.post('/', function (req, res) {
//     console.log("blaaah");
//   res.send('Got a POST request');
// });
};
