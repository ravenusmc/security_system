<?php 
  
  //All the code in this file will deal with the signup page 

  // Start a session
  // if (!isset($_SESSION)) {
  //   session_start();
  // }

  //Pulling in the databases
  // require('../model/database.php');
  // global $db;

  // $message = "";


//start viewable page
include '../view/header.php'; 
?>

<main class="page" id="signUpPageContainer">
<h2 class="pageHeading">User Sign up</h2>
  

<section class='container userForm'>
  
  <!-- Start of error handling -->
  <!-- <?php 
    if (isset($message)){
      echo $message;
    }
  ?> -->
  <!-- End of error handling -->

  <!-- Instructions -->
  <span class="companyName"><em>Charity Connection</em></span></p>

  <!-- Start of bootstrap form -->
  <form method="post" id="signUpForm">

    <div class="form-group">
      <label for="firstname">First Name</label>
      <input type="text" name='firstname' class="form-control" id="firstname" placeholder="Enter First Name">
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" name='lastName' class="form-control" id="lastName" placeholder="Enter Last Name">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" name='email' class="form-control" id="email" placeholder="Enter Email">
    </div>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" name='username' class="form-control" id="username" placeholder="Enter Username">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" name='password' class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword2">Confirm Password</label>
      <input type="password" name='password2' class="form-control" id="exampleInputPassword2" placeholder="Confirm Password">
    </div>

    <button type="submit" name="login" class="btn btn-primary form-submit-btn">Submit</button>

  </form>
  <!-- End of Bootstrap form -->

  <div class='login_anchor center' id='loginAnchor'>
    <a href="login.php">Already a registered user? Login</a>
  </div>

</section>

</main>

<?php include '../view/footer.php';?>