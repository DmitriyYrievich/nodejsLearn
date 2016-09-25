"use strict";
let http = require('http');

let server = new http.Server(); //EventEmitter
server.listen(1111, '127.0.0.2');

let emit = server.emit;

server.emit = function(...params){
	console.log(params[0]);

	emit.apply(server, params);
}

let count = 0;
server.on('request', function(req, res){
	res.end(`Dimon@Champion!!! ${++count}`);
})
console.log("server running_1");

