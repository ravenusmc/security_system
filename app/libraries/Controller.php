<?php 

	/*
	* Base controller - loads the models and views. 
	*/ 
	class Controller {

		// load model 
		public function model($model) {

			// Require model file 
			require_once '../app/models/' . $model . '.php';

			// Instantiate model 
			return new $model();

		}

		// Load view 
		public function view($view, $data = []) {
			// Check for the view file 
			if (file_exists('../app/views/' . $view . '.php')) {
				require_once '../app/views/' . $view . '.php';
			}else {
				// View does not exists 
				die('View Does not exist');
			}
		}
	}