<?php

class adatbazis{
    public $servername = "localhost";
    public $username = "root";
    public $password = "";
    public $dbname = "";    
    public $sql = "";
    public $result = "";
    public $row = "";
    public $conn = "";
    public $rows = [];

    public function __construct($db){ 
        $this->dbname = $db;
        self::db_connect(); 
    }
    public function __destruct(){ self::db_close(); }

    public function db_connect(){
        // Create connection
        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        // Check connection
        if ($this->conn->connect_error) {
        die("Connection failed: " . $this->conn->connect_error);
        }    
		$this->conn->query("SET NAMES 'UTF8';");		
    }

    public function db_close(){
        $this->conn->close();
    }


    public function db_select_json(){
        $this->sql = "SELECT blog_id, blog_title, blog_content, blog_author, blog_createdate FROM blog";
        $this->result = $this->conn->query($this->sql);
        if ($this->result->num_rows > 0) {
            // output data of each row
            while($this->row = $this->result->fetch_assoc()) {
               //var_dump($this->row);
               $this->rows[] = $this->row;
            }
        } else {
            //echo "0 results";
        }   
		echo json_encode(["success"=>1,"allblogs"=>$this->rows]);
        
    }

    public function db_insert($user_name, $user_password){
        $this->sql = "INSERT INTO users
                        (user_name, user_password)
                      VALUES
                        ('$user_name', '$user_password')
                     ;";
        if($this->conn->query($this->sql)) return TRUE; else return FALSE;
    }

    public function db_update($user_name, $user_password,$id){
        $this->sql = "UPDATE 
                        users
                      SET
                        user_name = '$user_name',
                        user_password = '$user_password'
                      WHERE
                        user_id = $id
                     ;";
        if($this->conn->query($this->sql)) return TRUE; else return FALSE;
    }

    public function db_delete($id){
        $this->sql = "DELETE FROM users WHERE user_id = $id;";
        if($this->conn->query($this->sql)) return TRUE; else return FALSE;        
    }
}




?>