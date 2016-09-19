"use strict";

let log = require('logger')(module);
let db = require('db');
db.connect();

let User = require ('./user');

let run = () => {
	let Vasua = new User("Vasua");
	let Dima = new User("Dima");

	Dima.hello(Vasua);

	log(db.getPhrase("run succesfull"));
}

if(module.parent) { exports.run = run }
else { run() }

//console.log(module);