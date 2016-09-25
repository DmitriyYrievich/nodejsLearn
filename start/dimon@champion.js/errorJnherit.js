"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var util=require("util");var phrases={"name":"Dimon","age":25};var PhraseError=function(_Error){_inherits(PhraseError,_Error);function PhraseError(message){_classCallCheck(this,PhraseError);var _this=_possibleConstructorReturn(this,(PhraseError.__proto__||Object.getPrototypeOf(PhraseError)).call(this));_this.message=message;_this.name="PhraseError";Error.captureStackTrace(_this);return _this}return PhraseError}(Error);var HttpError=function(_Error2){_inherits(HttpError,_Error2);function HttpError(status,message){_classCallCheck(this,HttpError);var _this2=_possibleConstructorReturn(this,(HttpError.__proto__||Object.getPrototypeOf(HttpError)).call(this));_this2.message=message;_this2.status=status;_this2.name="HttpError";return _this2}return HttpError}(Error);function getPhrase(phrase){if(!phrases[phrase]){throw new PhraseError("Нет такой фразы => "+phrase)}return phrases[phrase]}function makePage(page){if(page!=="index.html"){throw new HttpError(404,"Нет такой страници => "+page)}return util.format("%s, %s!",getPhrase("name"),getPhrase("age"))}try{var page=makePage("index.html");console.log(page)}catch(e){if(e.name=="HttpError"){console.log(e.status,e.message)}else{console.error("Ошибка %s\n сообщение %s \n стек: %s",e.name,e.message,e.stack)}}