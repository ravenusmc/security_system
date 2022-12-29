<?php require APPROOT . "/views/inc/header.php"; ?>
<link rel='stylesheet' href="<?php echo URLROOT; ?>/css/generic.css">
<link rel='stylesheet' href="<?php echo URLROOT; ?>/css/system.css">
<link rel='stylesheet' href="<?php echo URLROOT; ?>/css/button.css">

<section>
	<div class='title-div'>
		<h1 class='system-page-title'>The Buildings</h1>
		<button id='activateAlarmButton' class='button-look' onclick="ActivateAlarmSystem()">Turn On Alarm</button>
	</div>
</section>

<section class='building-section'>
	<div id='building-one' class='building-one center-text'>
		<h5>Building One</h5>
		<h6 id='alarm-text-one' class='alarm-text'>Alarm Active</h6>
	</div>
	<div id='building-two' class='building-two center-text'>
		<h5>Building Two</h5>
		<h6 id='alarm-text-two' class='alarm-text'>Alarm Active</h6>
	</div>
	<div id='building-three' class='building-three center-text'>
		<h5>Building Three</h5>
		<h6 id='alarm-text-three' class='alarm-text'>Alarm Active</h6>
	</div>
</section>

<section class='button-section'>
	<div>
		<button id='button-one' class='button-look' onclick="turnOffAlarm('one')">Turn Off Alarm - 1</button>
	</div>
	<div>
		<button id='button-two' class='button-look' onclick="turnOffAlarm('two')">Turn Off Alarm - 2</button>
	</div>
	<div>
		<button id='button-three' class='button-look' onclick="turnOffAlarm('three')">Turn Off Alarm - 3</button>
	</div>
</section>

<?php require APPROOT . "/views/inc/footer.php"; ?>
<script src="<?php echo URLROOT; ?>/js/global.js"></script>
<script src="<?php echo URLROOT; ?>/js/alarmControl.js"></script>
<script src="<?php echo URLROOT; ?>/js/buttonControl.js"></script>
