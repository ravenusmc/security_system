<?php

  // Starting the session
  // session_start();
  // $name = $_SESSION["username"];
  // $id = $_SESSION["user_id"];
  // if (!empty($name)){
  //   $allowed = True;
  // }

  //Pulling in the databases
  // require('../model/database.php');


	//Setting a default action
  $action = filter_input(INPUT_POST, 'action');
  if ($action == NULL) {
      $action = filter_input(INPUT_GET, 'action');
      if ($action == NULL) {
          $action = 'login';
      }
	}

  echo $action;
	//Switch statment to determine which page to go to. 
switch ($action) {
	//This case will bring the user to the page that shows all of the prisoners
  case 'login':
		include('login.php');
		break;
  case 'signup':
    include('user_signup.php');
    break;
}

  // if ($allowed) {
  //   switch ($action) {
  //     //This case will bring the user to the homepage once the user is logged in
  //     case 'login':
	// 		  include('user_signup.php');
  //       break;
  //   }
  // }else {
  //   include('notAllowed.php');
  // }

?>