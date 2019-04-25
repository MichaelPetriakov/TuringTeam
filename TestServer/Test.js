var path = require('path');
var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/MainPage.html');
	console.log("Opened: 127.0.0.1:3000" + req.url);
});

app.get('/MainPage', function(req, res){
	res.sendFile('C:/Users/Home/Desktop/Sublime Text/Turing Team Code/TuringTeam/MainPage/MainPage.html');
	console.log("Opened: 127.0.0.1:3000" + req.url);
});

app.get('/forum', function(req, res){
	res.sendFile('C:/Users/Home/Desktop/Sublime Text/Turing Team Code/TuringTeam/Forum/Forum.html');
	console.log("Opened: 127.0.0.1:3000" + req.url);
});

app.get('/JavaScriptMap', function(req, res){
	res.sendFile('C:/Users/Home/Desktop/Sublime Text/Turing Team Code/TuringTeam/Maps/JavaScriptMap/JavaScriptMap.html');
	console.log("Opened: 127.0.0.1:3000" + req.url);
})

app.listen(3000);
console.log("Server opened");
