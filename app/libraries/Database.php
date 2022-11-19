<?php 
	 /* 
	 *  PDO Database Class 
	 *  conntect to Database 
	 * 	Create prepared statements
	 * 	Bind Values 
	 *  Return Rows and Results 
	 */
	 
	class Database {
		
		private $host =  DB_HOST;
		private $user = DB_USER;
		private $pass = DB_PASS;
		private $dbname = DB_NAME; 

		private $dbh; 
		private $stmt; 
		private $error;

		public function __construct() {

			//set DSN 
			$dsn = $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbname;
			$options = array(
				PDO::ATTR_PERSISTENT => true, 
				PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
			);

			// Create PDO instance
			try {
				$this->dbh = new PDO($dsn, $this->user, $this->pass, $options);
			} catch (PDOException $e) {
				$this->error = $e->getMessage();
				echo $this->error;
			}
		}

	}