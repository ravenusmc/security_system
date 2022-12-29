// This file handles the turning on and off of the alarm system

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


