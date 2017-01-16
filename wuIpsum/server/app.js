var express = require('express');
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var fs = require('fs');
var parse = require('./lyricsParse.js');
var cors = require('cors');


app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));

app.use('/', express.static('../client'));

app.get('/lyrics', function (req, res) {

  var lyrics = "";
  var pulledLyrics = new Promise (function (resolve, reject){
    fs.readFile('triumph.txt', 'utf-8', function(err, data) {
      if (err) throw err;

      resolve(
        lyrics = parse.getVerses(1, data),
        res.send(lyrics)

    );
    });

  });

    });

// server
var port = process.env.PORT || 3000;
var server = http.createServer(app);
server.listen(port);
console.log('WuIpsum listening on: ', port);
