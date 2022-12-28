// Need to set ID for different buttons on settimeout 
// Reference: https://www.w3schools.com/jsref/met_win_cleartimeout.asp

// Declaring Global Variables
let alarmSystemActive = true;
let intervalTimer = '';
let flashingButtonTimerOne = '';
let flashingButtonTimerOneB  = '';
let flashingButtonTimerTwo = '';
let flashingButtonTimerTwoB = '';
let flashingButtonTimerThree = '';
let flashingButtonTimerThreeB = '';

// Functions 
function intervalFunction() {
	let randomNumber = Math.floor((Math.random() * 3) + 1);
	// let randomNumber = 1;
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
	// targetButton.classList.remove("button-look");
	// targetButton.classList.add("button-armed");
	if (targetButton.id == 'button-one') {
		targetButton.classList.remove("button-look");
		targetButton.classList.add("button-armed");
		flashingButtonTimerOne = setTimeout(function () { blinkTwo(targetButton); }, 1000); 
	}	else if (targetButton.id == 'button-two') {
		targetButton.classList.remove("button-look");
		targetButton.classList.add("button-armed");
		flashingButtonTimerTwo = setTimeout(function () { blinkTwo(targetButton); }, 1000); 
	} else {
		targetButton.classList.remove("button-look");
		targetButton.classList.add("button-armed");
		flashingButtonTimerThree = setTimeout(function () { blinkTwo(targetButton); }, 1000);
	}
}

function blinkTwo(targetButton) {
	if (targetButton.id == 'button-one') {
		targetButton.classList.remove("button-armed");
		targetButton.classList.add("button-look");
		flashingButtonTimerOneB = setTimeout(function () { blinkOne(targetButton); }, 1000); 
	}	else if (targetButton.id == 'button-two') {
		targetButton.classList.remove("button-armed");
		targetButton.classList.add("button-look");
		flashingButtonTimerTwoB = setTimeout(function () { blinkOne(targetButton); }, 1000); 
	} else {
		targetButton.classList.remove("button-armed");
		targetButton.classList.add("button-look");
		flashingButtonTimerThreeB = setTimeout(function () { blinkOne(targetButton); }, 1000);
	}
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

function stopFlashingButton(element) {
	if (element.id === 'building-one') {
		let targetButton = document.getElementById('button-one');
		targetButton.classList.remove("button-armed");
		targetButton.classList.add("button-look");
		// debugger;
		clearTimeout(flashingButtonTimerOne);
		clearTimeout(flashingButtonTimerOneB);
		flashingButtonTimerOne = '';
		flashingButtonTimerOneB = '';
	} else if (element.id === 'building-two') {
		let targetButton = document.getElementById('button-two');
		targetButton.classList.remove("button-armed");
		targetButton.classList.add("button-look");
		clearTimeout(flashingButtonTimerTwo);
		clearTimeout(flashingButtonTimerTwoB);
		// flashingButtonTimerTwo = '';
	} else {
		let targetButton = document.getElementById('button-three');
		targetButton.classList.remove("button-armed");
		targetButton.classList.add("button-look");
		clearTimeout(flashingButtonTimerThree);
		clearTimeout(flashingButtonTimerThreeB);
		// flashingButtonTimerThree = '';
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
		stopFlashingButton(element)
	} else if (value === "two") {
		let element = document.getElementById("building-two");
		checkAlarmOnOff(element)
		hideAlarmText(element)
		stopFlashingButton(element)
	} else {
		let element = document.getElementById("building-three");
		checkAlarmOnOff(element)
		hideAlarmText(element)
		stopFlashingButton(element)
	}
}

