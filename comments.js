// Create web server

var http = require('http');
var fs = require('fs'); 
var url = require('url');
var ROOT_DIR = "html/";
var MongoClient = require('mongodb').MongoClient;
var db;
var dbURL = 'mongodb://localhost:27017/test';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create server

http.createServer(function (req, res) {})


// Connect to the db

MongoClient.connect(dbURL, function(err, database) {
    if(err) throw err;
    
    db = database;
    
    // Start the application after the database connection is ready
    app.listen(8080);
    console.log("Listening on port 8080");
    });