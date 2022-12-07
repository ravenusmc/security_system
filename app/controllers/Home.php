<?php 

	class Home extends Controller {

		public function __construct() {
			// echo 'PAges Loaded';
		}

		public function index() {

			$data = [
				'title' => 'Home',
			];

			$this->view('home/index', $data);
		}

	}