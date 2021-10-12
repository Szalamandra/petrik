<?php
//include("db_conn.php");

class adatbazis
{
    public $servername = "localhost";
    public $username = "root";
    public $password = "";
    public $dbname = "petdatas";
    public $sql = "";
    public $result = "";
    public $row = "";
    public $conn;
    public $rows = [];
    public $vNev= "";
  public $kNev="";
  public $telSzam="";
  public $email="";
  public $cim_varos="";
  public $iranyitoSzam="";
  public $cim_utca="";
  public $cim_szam="";
  public $id="";

  
	public function json_ownerlist()
	{
		$this->sql =
        "SELECT id, 
                            vNev,
                            kNev,
                            telSzam,
                            email,
                            cim_varos,
                            iranyitoSzam,
                            cim_utca,
                            cim_szam
                      FROM 
                            owners";
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
		$this->sql = "SELECT vNev,kNev,telSzam,email,cim_varos,iranyitoSzam, cim_utca, cim_szam FROM owners";
		$this->result = $this->conn->query($this->sql);

		if ($this->result->num_rows > 0) {
		  // output data of each row
		  echo "<table border='2'>";
		  while($this->row = $this->result->fetch_assoc()) {

				echo "<tr>";
					echo "<td>" . $this->row["vNev"]. "</td>";
					echo "<td>" . $this->row["kNev"]."</td>";
					echo "<td>" . $this->row["telSzam"]. "</td>";
                echo "<td>" . $this->row["email"] . "</td>";
                echo "<td>" . $this->row["cim_varos"] . "</td>";
                echo "<td>" . $this->row["iranyitoSzam"] . "</td>";
                echo "<td>" . $this->row["cim_utca"] . "</td>";
                echo "<td>" . $this->row["cim_szam"] . "</td>";
				echo "</tr>";
		  }
		 echo "</table>";
		} else {
		  echo "0 results";
		}		
	}
	public function owner_insert($vNev,
                            $kNev,
                            $telSzam,
                            $email,
                            $cim_varos,
                            $iranyitoSzam,
                            $cim_utca,
                            $cim_szam)
	{
		$this->sql = "INSERT INTO owners (vNev,kNev,telSzam,email,cim_varos,iranyitoSzam, cim_utca, cim_szam) VALUES
					  ('$vNev', '$kNev','$telSzam', '$email','$cim_varos', '$iranyitoSzam','$cim_utca', '$cim_szam); ";
    if ($this->conn->query($this->sql)) return TRUE;
    else return FALSE;
	}
  public function db_update($vNev,
                            $kNev,
                            $telSzam,
                            $email,
                            $cim_varos,
                            $iranyitoSzam,
                            $cim_utca,
                            $cim_szam, $id)
  {
    $this->sql = "UPDATE 
                        owners
                      SET
                        (vNev=$vNev,
                        kNev=$kNev,
                        telSzam  =$telSzam,
                           email =$email,
                          cim_varos  =$cim_varos,
                           iranyitoSzam =$iranyitoSzam,
                          cim_utca  =$cim_utca,
                            cim_szam=$cim_szam)
                      WHERE
                        user_id = $id
                     ;";
    if ($this->conn->query($this->sql)) return TRUE;
    else return FALSE;
  }
 
  public function db_delete($id)
  {
    $this->sql = "DELETE FROM owners WHERE id = $id;";
    if ($this->conn->query($this->sql)) return TRUE;
    else return FALSE;
  }


    public function db_select_json()
    {
        $this->sql = "SELECT id, 
                            vNev,
                            kNev,
                            telSzam,
                            email,
                            cim_varos,
                            iranyitoSzam,
                            cim_utca,
                            cim_szam
                      FROM 
                            owners";
        $this->result = $this->conn->query($this->sql);

        if ($this->result->num_rows > 0) {
            // output data of each row
            while ($this->row = $this->result->fetch_assoc()) {
                //var_dump($this->row);
                $this->rows[] = $this->row;
            }
        } else {
            //echo "0 results";
        }
        echo json_encode($this->rows);
    }



    /*public function db_insert($user_name, $user_password)
    {
        $this->sql = "INSERT INTO users
                        (user_name, user_password)
                      VALUES
                        ('$user_name', '$user_password')
                     ;";
        if ($this->conn->query($this->sql)) return TRUE;
        else return FALSE;
    }

    */
} //db_class
