var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/MainPage.html');
	console.log("URL: 127.0.0.1:3000" + req.url);
});

app.get('/MainPage', function(req, res){
	res.sendFile(__dirname + '/MainPage.html');
	console.log("URL: 127.0.0.1:3000" + req.url);
});

app.get('/Forum', function(req, res){
	res.sendFile(__dirname + '/Forum.html');
	console.log("URL: 127.0.0.1:3000" + req.url);
});

app.get('/JavaScriptMap', function(req, res){
	res.sendFile(__dirname + '/JavaScriptMap.html');
	console.log("URL: 127.0.0.1:3000" + req.url);
});

app.get('/HTMLMap', function(req, res){
	res.sendFile(__dirname + '/HtmlMap.html');
	console.log("URL: 127.0.0.1:3000" + req.url);
});

app.get('/Courses', function(req, res){
	res.sendFile(__dirname + '/Courses.html');
	console.log("URL: 127.0.0.1:3000" + req.url);
});

app.listen(3000);
console.log("Server opened on port: 3000");