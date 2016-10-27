var http = require('http');
var fs = require('fs');
var chat = require('./chat');

http.createServer(function(req, res){
	switch(req.url){
		case "/" : 
		sendFile('index.html', res); 
		break;

		case "/subscribe" : 
		chat.subscribe(req, res);
		break;

		case "/publish" :
		chat.publish("text_test");
		break;

		default: 
			res.statusCode = 404;
			res.end("not found");
	}
}).listen(8888);

function sendFile(fileName, res){
	
};