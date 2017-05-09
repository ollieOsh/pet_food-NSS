var petFood = new XMLHttpRequest();
let dogFood = document.getElementById('dog');

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
	let arr = stuff.dog_brands;
	console.log(arr);

	arr.forEach(function(obj) {
		console.log("brand", obj.name);
		dogFood.innerHTML += `<tr id="${obj.name}">
								<td>${obj.name}</td>
							</tr>`;
		let types = obj.types,
			brand = document.getElementById(`${obj.name}`);

		console.log(brand);
		var str = `<td>`;

		types.forEach(function(obj2) {
			let type = obj2.type,
				volumes = obj2.volumes;
			for (prop in volumes){
				//console.log(type);
				let volume = volumes[prop].name,
					price = volumes[prop].price;

				console.log(brand, "type", type, "volume", volume, "price", price);
				str += `&nbsp; ${type}: ${volume} - ${price}. `;
			}
		});
		str += `</td>`;
		brand.innerHTML += str;
	})
}

petFood.open('GET','food.json');
petFood.send();