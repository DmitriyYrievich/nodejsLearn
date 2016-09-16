"use strict";

let user = require ('./user');

let Vasua = new user.User("Vasua");
let Dima = new user.User("Dima");

Dima.hello(Vasua);