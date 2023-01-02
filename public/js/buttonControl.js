// This file deals with the buttons that turn off the alarms on for each 
// of the buildings. 

function blinkOne(targetButton) {
	if (targetButton.id == 'button-one') {
		targetButton.classList.remove("button-look");
		targetButton.classList.add("button-armed");
		flashingButtonTimerOne = setTimeout(function () { blinkTwo(targetButton); }, 1000);
	} else if (targetButton.id == 'button-two') {
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
	} else if (targetButton.id == 'button-two') {
		targetButton.classList.remove("button-armed");
		targetButton.classList.add("button-look");
		flashingButtonTimerTwoB = setTimeout(function () { blinkOne(targetButton); }, 1000);
	} else {
		targetButton.classList.remove("button-armed");
		targetButton.classList.add("button-look");
		flashingButtonTimerThreeB = setTimeout(function () { blinkOne(targetButton); }, 1000);
	}
}

function stopFlashingButton(element) {
	if (element.id === 'building-one') {
		let targetButton = document.getElementById('button-one');
		targetButton.classList.remove("button-armed");
		targetButton.classList.add("button-look");
		clearTimeout(flashingButtonTimerOne);
		clearTimeout(flashingButtonTimerOneB);
	} else if (element.id === 'building-two') {
		let targetButton = document.getElementById('button-two');
		targetButton.classList.remove("button-armed");
		targetButton.classList.add("button-look");
		clearTimeout(flashingButtonTimerTwo);
		clearTimeout(flashingButtonTimerTwoB);
	} else {
		let targetButton = document.getElementById('button-three');
		targetButton.classList.remove("button-armed");
		targetButton.classList.add("button-look");
		clearTimeout(flashingButtonTimerThree);
		clearTimeout(flashingButtonTimerThreeB);
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