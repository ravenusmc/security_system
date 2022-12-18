function showAlarmText(element) {
	let selectedBuilding = element.id
	if (selectedBuilding === 'building-one') {
		let textElement = document.getElementById("alarm-text-one");
		textElement.style.display = 'block';
	} else if (selectedBuilding === 'building-two') {
		let textElement = document.getElementById("alarm-text-two");
		textElement.style.display = 'block';
	} else {
		let textElement = document.getElementById("alarm-text-three");
		textElement.style.display = 'block';
	}
};

// setInterval(
// 	function(){
// 			let randomNumber = Math.floor((Math.random() * 3) + 1);
// 			if (randomNumber === 1){
// 				let element = document.getElementById("building-one");
// 				showAlarmText(element)
// 				element.style.backgroundColor = "#FF0000";
// 			}else if (randomNumber ===2){
// 				let element = document.getElementById("building-two");
// 				showAlarmText(element)
// 				element.style.backgroundColor = "#FF0000";
// 			} else {
// 				let element = document.getElementById("building-three");
// 				showAlarmText(element)
// 				element.style.backgroundColor = "#FF0000";
// 			}
// 	}, 5000);

function hideAlarmText(element) {
	let selectedBuilding = element.id
	if (selectedBuilding === 'building-one') {
		let textElement = document.getElementById("alarm-text-one");
		textElement.style.display = 'none';
	} else if (selectedBuilding === 'building-two') {
		let textElement = document.getElementById("alarm-text-two");
		textElement.style.display = 'none';
	} else {
		let textElement = document.getElementById("alarm-text-three");
		textElement.style.display = 'none';
	}
}

function checkAlarmOnOff(element) {
	let currentColor = parseInt(element.style.backgroundColor.slice(8, 12))
	if (currentColor === 255) {
		alert('No Alarm at building')
	} else {
		element.style.backgroundColor = "#FFFFFF";
	}
};

function turnOffAlarm(value) {
	if (value === "one") {
		let element = document.getElementById("building-one");
		checkAlarmOnOff(element)
		hideAlarmText(element)
	} else if (value === "two") {
		let element = document.getElementById("building-two");
		checkAlarmOnOff(element)
		hideAlarmText(element)
	} else {
		let element = document.getElementById("building-three");
		checkAlarmOnOff(element)
				hideAlarmText(element)
	}
}