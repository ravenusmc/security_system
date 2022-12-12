// console.log('hi')
// let buildingOne = document.getElementById("building-one"); 

// buildingOne.onclick = function() { //asign a function
// //code
// console.log('Work');
// }



setInterval(
	function(){
			let randomNumber = Math.floor((Math.random() * 3) + 1);
			console.log(randomNumber)
			if (randomNumber === 1){
				let element = document.getElementById("building-one");
				element.style.backgroundColor = "#00FF00";
			}else if (randomNumber ===2){
				let element = document.getElementById("building-two");
				element.style.backgroundColor = "#00FF00";
			} else {
				let element = document.getElementById("building-three");
				element.style.backgroundColor = "#00FF00";
			}
	},3000);


function turnOffAlarm(value) {
	if (value === "one") {
		let element = document.getElementById("building-one");			
		element.style.backgroundColor = "#FFFFFF";
	}else if (value === "two") {
		let element = document.getElementById("building-two");			
		element.style.backgroundColor = "#FFFFFF";
	}else {
		let element = document.getElementById("building-three");			
		element.style.backgroundColor = "#FFFFFF";
	}
}