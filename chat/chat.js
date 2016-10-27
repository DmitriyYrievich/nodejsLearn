var clients = [];

exports.subscribe = function(req, res){
	console.log("subscribe");

	clients.push(res);
}

exports.publish = function(mess){
	console.log("publish => ", mess);

	clients.forEach(function(res){
		res.end(mess);
	});

	clients = [];
}