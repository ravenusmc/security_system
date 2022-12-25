// Need to make button flashing turn off

// Declaring Variables
let alarmSystemActive = true;
let intervalTimer = '';
let flashingButtonTimer = '';

// Functions 
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

function blinkOne(targetButton) {
	targetButton.classList.remove("button-look");
	targetButton.classList.add("button-armed");
	setTimeout(function () { blinkTwo(targetButton); }, 1000);
}

function blinkTwo(targetButton) {
	targetButton.classList.remove("button-armed");
	targetButton.classList.add("button-look");
	setTimeout(function () { blinkOne(targetButton); }, 1000);
}

function showFlashingButton(element) {
	if (element.id === 'building-one') {
		let textElement = document.getElementById("alarm-text-one");
		textElement.style.display = 'none';
		let targetButton = document.getElementById('button-one');
		blinkOne(targetButton)
	} else if (element.id === 'building-two') {
		let textElement = document.getElementById("alarm-text-two");
		textElement.style.display = 'none';
		let targetButton = document.getElementById('button-two');
		blinkOne(targetButton)
	} else {
		let textElement = document.getElementById("alarm-text-three");
		textElement.style.display = 'none';
		let targetButton = document.getElementById('button-three');
		blinkOne(targetButton)
	}
	
}

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

