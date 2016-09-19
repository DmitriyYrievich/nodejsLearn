"use strict";

module.exports = (module) => {
	return (cacheId) => {
		let args = [module.filename].concat( [].slice.call(cacheId) );
		console.log.apply(console, args);
	}
}