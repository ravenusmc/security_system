<?php require APPROOT . "/views/inc/header.php"; ?>
<link rel='stylesheet' href="<?php echo URLROOT; ?>/css/generic.css">
<link rel='stylesheet' href="<?php echo URLROOT; ?>/css/system.css">
<link rel='stylesheet' href="<?php echo URLROOT; ?>/css/button.css">

<section class='building-section'>
	<div id='building-one' class='building-one center-text'>
		<h6>Building One</h6>
	</div>
	<div id='building-two' class='building-two center-text'>
		<h6>Building Two</h6>
	</div>
	<div id='building-three' class='building-three center-text'>
		<h6>Building Three</h6>
	</div>
</section>

<section class='button-section'>
	<div>
		<button class='button-look' onclick="turnOffAlarm('one')">Turn Off Alarm - 1</button>
	</div>
	<div>
		<button class='button-look' onclick="turnOffAlarm('two')">Turn Off Alarm - 2</button>
	</div>
	<div>
		<button class='button-look' onclick="turnOffAlarm('three')">Turn Off Alarm - 3</button>
	</div>
</section>

<?php require APPROOT . "/views/inc/footer.php"; ?>
<script src="<?php echo URLROOT; ?>/js/main.js"></script>
