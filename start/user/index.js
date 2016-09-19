"use strict";

//exports - system variable for export;
//global - global variable
//module.exports === exports === this - меняя ссылку
// ...на обект меняются все обекты, заменяя ссылку полностью - обект не меняется
// NODE_PATH=. - поиск в текущей директории



let db = require("db");
let log = require("logger")(module);

class User{
  constructor(name){
    this.name = name;
  }
  hello(user){
    log(this.name + " sayed: "+ db.getPhrase('hello') +" => " + user.name)
  }
}

console.log("user.js is init");


module.exports = User;
//exports.User = User;
//global.User = User;
//console.log(module);