let dogFood = document.getElementById('dog'),
	catFood = document.getElementById('cat');

var petFood = new XMLHttpRequest(),
	petCat = new XMLHttpRequest();

petFood.addEventListener('load', petLoad);
petFood.addEventListener('error', petFail);

petCat.addEventListener('load', catLoad);
petCat.addEventListener('error', petFail);

function petLoad(event) {
	console.log('success');
	let food = JSON.parse(event.target.responseText);
	showFood(food);
}

function petFail(event) {
	console.log('FAILURE');
}

function showFood(stuff) {
	let arr = stuff.dog_brands;

	arr.forEach(function(obj) {
		dogFood.innerHTML += `<tr id="${obj.name}">
								<td>${obj.name}</td>
							</tr>`;
		let types = obj.types,
			brand = document.getElementById(`${obj.name}`);

		var str = `<td>`;

		types.forEach(function(obj2) {
			let type = obj2.type,
				volumes = obj2.volumes;
			for (prop in volumes){
				let volume = volumes[prop].name,
					price = volumes[prop].price;

				str += `&nbsp; ${type}: ${volume} - ${price}. `;
			}
		});
		str += `</td>`;
		brand.innerHTML += str;
	})
}

function catLoad(event) {
	console.log('success');
	let food = JSON.parse(event.target.responseText);
	showCat(food);
}

function showCat(stuff) {
	let arr = stuff.cat_brands;

	arr.forEach(function(obj) {
		catFood.innerHTML += `<tr id="${obj.name}">
								<td>${obj.name}</td>
							</tr>`;
		let types = obj.types,
			breeds = obj.breeds,
			brand = document.getElementById(`${obj.name}`);

		var str = `<td>`;

		breeds.forEach(function(breed) {
			console.log(breed);
			str += `${breed}, `;
		});

		str = str.slice(0, -2);
		str += `</td>
				<td>`

		types.forEach(function(obj2) {
			let type = obj2.type,
				volumes = obj2.volumes;
			for (prop in volumes){
				let volume = volumes[prop].name,
					price = volumes[prop].price;

				str += `&nbsp; ${type}: ${volume} - ${price}. `;
			}
		});
		str += `</td>`;
		brand.innerHTML += str;
	})
}

petFood.open('GET','food.json');
petFood.send();

petCat.open('GET','cat.json');
petCat.send();