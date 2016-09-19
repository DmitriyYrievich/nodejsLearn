"use strict";

let phrases;

module.exports.connect = () => phrases = require("./ru");

module.exports.getPhrase = (name) => {

	if(!phrases[name]) throw new Error("В базе - Нет такой фразы => " + name);

	return phrases[name];
}