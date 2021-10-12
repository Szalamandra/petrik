
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: text/html; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$vNev= "";
 $kNev="";
  $telSzam="";
  $email="";
   $cim_varos="";
   $iranyitoSzam="";
   $cim_utca="";
   $cim_szam="";
   $id="";
include("db_class.php");
include("html/index.html");




$owners = new adatbazis();
$owners->connect();
$owners->select();
//$owners->db_select_json();
$owners->disconnect();




if (isset($_POST["action"]) and $_POST["action"] == "add") {
    $owners = new adatbazis();
    $owners->connect();
    $owners->connect();
    $siker=$owners->owner_insert(
        $_POST["vNev"],
        $_POST["kNev"],
        $_POST["telSzam"],
        $_POST["email"],
        $_POST["cim_varos"],
        $_POST["iranyitoSzam"],
        $_POST["cim_utca"],
        $_POST["cim_szam"]
    );
    if($siker){
        $owners->select();

    };
    /*if (
        isset($owners->vNev)
        && isset($owners->kNev)
        && isset($owners->telSzam)
        && isset($owners->email)
    ) {
        $insertOwners = $owners->owner_insert(
            $_POST["vNev"],
            $_POST["kNev"],
            $_POST["telSzam"],
            $_POST["email"],
            $_POST["cim_varos"],
            $_POST["iranyitoSzam"],
            $_POST["cim_utca"],
            $_POST["cim_szam"]
        );
        if ($insertOwners) {
            $last_id = mysqli_insert_id($db_conn);
            echo json_encode(["success" => 1, "msg" => "Blog Inserted.", "id" => $last_id]);
        } else {
            echo json_encode(["success" => 0, "msg" => "Blog Not Inserted!"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
    }
    */
    
    $owners->disconnect();
}
