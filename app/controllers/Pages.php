<?php 
	class Pages extends Controller {
		public function __construct() {
			// echo 'PAges Loaded';
		}

		public function index() {

			$data = [
				'title' => 'The Security System',
				'description' => 'A simple security site',
			];

			$this->view('pages/index', $data);
		}

		public function about() {
			$data = ['title' => 'About'];
			$this->view('pages/about', $data);
		}
	}