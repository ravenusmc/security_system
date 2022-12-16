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


function checkAlarmOnOff(element) {
	let currentColor = parseInt(element.style.backgroundColor.slice(8, 12))
	if (currentColor === 255) {
		alert('No Alarm at building')
	} else {
		element.style.backgroundColor = "#FFFFFF";
	}
}


function turnOffAlarm(value) {
	if (value === "one") {
		let element = document.getElementById("building-one");
		checkAlarmOnOff(element)
	} else if (value === "two") {
		let element = document.getElementById("building-two");
		checkAlarmOnOff(element)
	} else {
		let element = document.getElementById("building-three");
		checkAlarmOnOff(element)
	}
}