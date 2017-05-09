var petFood = new XMLHttpRequest();

petFood.addEventListener('load', petLoad);
petFood.addEventListener('error', petFail);

function petLoad(event) {
	console.log('success');
	let food = JSON.parse(event.target.responseText);
	console.log("food.json", food);
	showFood(food);
}

function petFail(event) {
	console.log('FAILURE');
}

function showFood(stuff) {
	//console.log("stuff", stuff.dog_brands);
	let arr = stuff.dog_brands;
	console.log(arr);

	arr.forEach(function(obj) {
		console.log("brand", obj.name)
		let types = obj.types;

		types.forEach(function(obj2) {
			let type = obj2.type,
				volume = obj2.volumes;
			console.log("types", type, "volume", volume);

			// for(obj2 in types) {
			// 	console.log("props", types[obj2]);
			// }
		});
	})


}

petFood.open('GET','food.json');
petFood.send();