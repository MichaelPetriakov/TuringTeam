var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log("URL:" + req.url); 
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	var myReadShort = fs.createReadStream('../MainPage/MainPage.html', 'utf8');
	myReadShort.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("Port: 3000")