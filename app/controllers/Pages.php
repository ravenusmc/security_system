<?php 
	class Pages extends Controller {
		public function __construct() {
			// echo 'PAges Loaded';
		}

		public function index() {

		}

		public function about($id) {
			echo $id;
		}
	}