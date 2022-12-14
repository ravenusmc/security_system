// setInterval(
// 	function(){
// 			let randomNumber = Math.floor((Math.random() * 3) + 1);
// 			console.log(randomNumber)
// 			if (randomNumber === 1){
// 				let element = document.getElementById("building-one");
// 				element.style.backgroundColor = "#FF0000";
// 			}else if (randomNumber ===2){
// 				let element = document.getElementById("building-two");
// 				element.style.backgroundColor = "#FF0000";
// 			} else {
// 				let element = document.getElementById("building-three");
// 				element.style.backgroundColor = "#FF0000";
// 			}
// 	}, 3000);


function turnOffAlarm(value) {
	let currentColor = element.style.backgroundColor.slice(0, 5)
	console.log(currentColor)
	if (value === "one") {
		let element = document.getElementById("building-one");
		// console.log(element.style.backgroundColor[0])			
		element.style.backgroundColor = "#FFFFFF";
	}else if (value === "two") {
		let element = document.getElementById("building-two");			
		element.style.backgroundColor = "#FFFFFF";
	}else {
		let element = document.getElementById("building-three");			
		element.style.backgroundColor = "#FFFFFF";
	}
}