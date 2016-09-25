let util = require("util");

const phrases = {
	"name": "Dimon",
	"age": 25
}

class PhraseError extends Error{
	
	constructor(message){
		super()
		this.message = message;
		this.name = "PhraseError";

		Error.captureStackTrace(this);
	}
}

class HttpError extends Error{
	
	constructor(status, message){
		super()
		this.message = message;
		this.status = status;
		this.name = "HttpError";
	}
}

function getPhrase(phrase){
	if(!phrases[phrase]){
		throw new PhraseError("Нет такой фразы => " + phrase);
	}

	return phrases[phrase];
}

function makePage(page){
	if(page !== "index.html"){
		throw new HttpError(404, "Нет такой страници => " + page);
	}

	return util.format("%s, %s!", getPhrase("name"), getPhrase("age"));
}

try{
	let page = makePage("index.html");
	console.log(page);
}catch(e){
	if(e.name == "HttpError") {
		console.log(e.status, e.message)
	}else{
		console.error("Ошибка %s\n сообщение %s \n стек: %s", e.name, e.message, e.stack);
	}
}