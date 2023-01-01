// This file handles the turning on and off of the alarm system

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

function showFlashingButton(element) {
	if (element.id === 'building-one') {
		let textElement = document.getElementById("alarm-text-one");
		let targetButton = document.getElementById('button-one');
		blinkOne(targetButton)
	} else if (element.id === 'building-two') {
		let textElement = document.getElementById("alarm-text-two");
		let targetButton = document.getElementById('button-two');
		blinkOne(targetButton)
	} else {
		let textElement = document.getElementById("alarm-text-three");
		let targetButton = document.getElementById('button-three');
		blinkOne(targetButton)
	}
}

function intervalFunction() {
	let randomNumber = Math.floor((Math.random() * 3) + 1);
	if (randomNumber === 1) {
		let element = document.getElementById("building-one");
		showAlarmText(element)
		showFlashingButton(element)
		element.style.backgroundColor = "#FF0000";
	} else if (randomNumber === 2) {
		let element = document.getElementById("building-two");
		showAlarmText(element)
		showFlashingButton(element)
		element.style.backgroundColor = "#FF0000";
	} else {
		let element = document.getElementById("building-three");
		showAlarmText(element)
		showFlashingButton(element)
		element.style.backgroundColor = "#FF0000";
	}
}

function ActivateAlarmSystem() {
	if (alarmSystemActive) {
		intervalTimer = setInterval(intervalFunction, 2000);
		document.getElementById("activateAlarmButton").innerHTML = "Turn Off Alarm";
		alarmSystemActive = false;
	} else {
		clearInterval(intervalTimer);
		document.getElementById("activateAlarmButton").innerHTML = "Turn On Alarm";
		alarmSystemActive = true;
	}
}


