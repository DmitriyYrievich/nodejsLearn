"use strict";

//exports - system variable for export;
//global - global variable

let phrases = require("./ru");

class User{
  constructor(name){
    this.name = name;
  }
  hello(user){
    console.log(this.name + " sayed: "+ phrases.hello +" => " + user.name)
  }
}

console.log("user.js is init");

exports.User = User;
//global.User = User;