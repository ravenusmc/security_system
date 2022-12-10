<?php 

	class Home extends Controller {

		public function __construct() {

			// This ensures that the person has to be logged in. 
			if(!isLoggedIn()) {
				redirect('users/login');
			}
			
		}

		public function index() {

			$data = [
				'title' => 'Home',
			];

			$this->view('home/index', $data);
		}

	}