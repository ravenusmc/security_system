<?php 
	/*
	* App Core Class
	* Create URL and loads core controller
	* URL FORMAT: /controller/method/params 
	*/

	class Core {
		
		protected $currentController = 'Pages';
		protected $currentMethod = 'index';
		protected $params = [];

		public function __construct() {
			// print_r($this->getUrl());
			$url = $this->getUrl();

			// Look into controllers for first index in url array
			if (isset($url[0]) && file_exists('../app/controllers/' . ucwords($url[0]) . '.php')) {
				// If exists, set as controller 
				$this->currentController = ucwords($url[0]);
				// unset 0 index 
				unset($url[0]);
			}

			// Require the controller 
			require_once '../app/controllers/' . $this->currentController . '.php';

			// Instantiate Controller 
			$this->currentController = new $this->currentController;

			// Check for second part of URL 
			if (isset($url[1])) {
				// Check to see if method exists in controller 
				if (method_exists($this->currentController, $url[1])) {
					$this->currentMethod = $url[1];
					// Uset 1 index
					unset($url[1]);
				}
			}

			// Get Params 
			$this->params = $url ? array_values($url) : [];

			// call a callback with an array of params 
			call_user_func_array([$this->currentController, 
			$this->currentMethod], $this->params);

		}

		public function getUrl() {

			if (isset($_GET['url'])) {
				$url = rtrim($_GET['url'], '/');
				$url = filter_var($url, FILTER_SANITIZE_URL);
				$url = explode('/', $url);
				return $url;
			}
		}

	}
