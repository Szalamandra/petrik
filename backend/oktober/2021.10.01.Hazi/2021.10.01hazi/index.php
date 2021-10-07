
<?php
/*header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
*/

include("html/index.html");
include("db_class.php");



$owners = new adatbazis();
$owners->connect();
$owners->select();
//$owners->db_select_json();
$owners->disconnect();


if (isset($_POST["action"]) and $_POST["action"] == "add") {
    $owners = new adatbazis();
    $owners->connect();
    $owners->owner_insert(
        $_POST["vNev"],
        $_POST["kNev"],
        $_POST["telSzam"],
        $_POST["email"],
        $_POST["cim_varos"],
        $_POST["iranyitoSzam"],
        $_POST["cim_utca"],
        $_POST["cim_szam"]
    );
    $owners->disconnect();
}
