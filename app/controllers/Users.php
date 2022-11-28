<?php 

	class Users extends Controller {

		public function __construct(){

		}

		public function register() {
			// Check for post
			if ($_SERVER['REQUEST_METHOD'] == 'POST'){
				// Process the form

				// Sanitize Post data 
				$_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

				$data = [
          'name' => trim($_POST['name']),
          'email' => trim($_POST['email']),
          'password' => trim($_POST['password']),
          'confirm_password' => trim($_POST['confirm_password']),
          'name_err' => '',
          'email_err' => '',
          'password_err' => '',
          'confirm_password_err' => '',
				];

			// Validate Email 
			if (empty($data['email'])) {
				$data['email_err'] = "Please enter email";
			}else {
				// Check email 
				if($this->userModel->findUserByEmail($data['email'])) {
					$data['email_err'] = "Email is already taken";
					echo $data['email_err'];
				}
			}
				
			} else {
				// Init Data
				$data = [
					'name' => '',
					'email' => '',
					'password' => '',
					'confirm_password' => '',
					'name_err' => '',
					'email_err' => '',
					'password_err' => '',
					'confirm_password_err' => '',
				];

				// Load View 
				$this->view('users/register', $data);
			}
		}

		public function login() {

			if ($_SERVER['REQUEST_METHOD'] == 'POST'){
				// Process Form 
			} else {
				// Init Data 
				$data = [
					'email' => '',
					'password' => '',
					'email_err' => '',
					'password_err' => '',
				];

				// Load View 
				$this->view('users/login', $data);
			}


		}

	}