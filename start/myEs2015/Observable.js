class Observable{
	constructor(iterableObj){
		this.iterableObj = iterableObj;
		this.result = this.iterableObj.split("");
	}

	subscribe(letter){
		for(let l of this.result){
			console.log(l);
		}
	}

	map(callback){
		this.result = this.result.map(callback);
		return this;
	}

	filter(callback){
		this.result = this.result.filter(callback);
		return this;
	}
}

new Observable("Dimon@Champion")
	.map( letter => letter.toUpperCase() )
	.filter( letter => letter === "@" )
	.subscribe( (letter) => console.log(letter) )