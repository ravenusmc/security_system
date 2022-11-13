<?php include '../view/header.php'; ?>

<!-- CSS for the landing page -->
<link rel="stylesheet" type="text/css" href="./css/landing.css">

<main>

	<div class='title-div'>
		<h1 class='title-font'>Security System</h1>
		<form method="post" class='form'>

<!-- Start of error handling -->
<div class='errorMessage'>
	<?php
		if (isset($message)){
			echo $message;
		}
	?>
</div>
<!-- End of error handling -->

<div class='form-item'>
	<input name='username' type='text' class='form-input' placeholder="Username" aria-label="Username">
</div>

<div class='form-item'>
	<input name='password' type='password' class='form-input' placeholder="Password" aria-label="Password">
</div>

<div class='button_div'>
	<button class='form-button' type='submit'>Submit</button>
</div>

</form>
	</div>
	
</main>

<?php include '../view/footer.php'; ?>