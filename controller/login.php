<?php include '../view/header.php'; ?>
<!-- CSS for the header -->
<link rel="stylesheet" type="text/css" href="./assets/css/generic.css">
<!-- CSS for the header -->
<link rel="stylesheet" type="text/css" href="./assets/css/login.css">

<main>

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

</main>