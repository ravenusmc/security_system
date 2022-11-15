<?php 
	class Pages extends Controller {
		public function __construct() {
			// echo 'PAges Loaded';
		}

		public function index() {
			$data = ['title' => 'Welcome'];
			$this->view('pages/index', $data);
		}

		public function about() {
			$this->view('pages/about');
		}
	}