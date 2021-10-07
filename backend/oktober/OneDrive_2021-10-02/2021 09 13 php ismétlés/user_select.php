<?php
header('Content-type: application/json');
$json_userlist = new db();
$json_userlist->connect();
	$json_userlist->json_userlist();
$json_userlist->disconnect();
class db
{
	public function json_userlist()
	{
		$this->sql = "SELECT user_id, user_name, user_password FROM users";
		$this->result = $this->conn->query($this->sql);
		if ($this->result->num_rows > 0) {
		  while($this->row = $this->result->fetch_assoc()){
			$array[] = $this->row;
		  }
		} else {
			//
		}	
		echo json_encode($array);
	}
	// ...


	
	public $servername = "localhost";
	public $username = "root"; // !!!
	public $password = ""; // !!!
	public $dbname = "webapp"; // !!!

	public function connect()
	{
		$this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
		if ($this->conn->connect_error) {
		  die("Connection failed: " . $this->conn->connect_error);
		}		
	}
	public function disconnect()
	{
		$this->conn->close();
	}
	public function select()
	{
		$this->sql = "SELECT user_id, user_name, user_password FROM users";
		$this->result = $this->conn->query($this->sql);

		if ($this->result->num_rows > 0) {
		  // output data of each row
		  echo "<table border='2'>";
		  while($this->row = $this->result->fetch_assoc()) {

				echo "<tr>";
					echo "<td>" . $this->row["user_id"]. "</td>";
					echo "<td>" . $this->row["user_name"]."</td>";
					echo "<td>" . $this->row["user_password"]. "</td>";
				echo "</tr>";
		  }
		 echo "</table>";
		} else {
		  echo "0 results";
		}		
	}
	public function user_insert($username,$password)
	{
		$this->sql = "INSERT INTO users (user_name, user_password) VALUES
					  ('$username', '$password'); ";
		if($this->conn->query($this->sql)){
			echo "Sikeres adatfelvétel!<br />";
		} else {
			echo "Sikertelen adatfelvétel!<br />";
		}
	}

}

?>