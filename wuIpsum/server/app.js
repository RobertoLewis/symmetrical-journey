var express = require('express');
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var router = require('router');
var rapgeniusClient = require("rapgenius-js");
var cors = require('cors');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
app.use('/', express.static('../client'));
router(app);

// server
var port = process.env.PORT || 3000;
var server = http.createServer(app);
server.listen(port);
console.log('WuIpsum listening on: ', port);
