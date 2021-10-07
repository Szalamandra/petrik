<?php 

if (isset($_GET["url"])){
    //echo $_GET["url"] . "<br />";
    //$url = explode('/',$_GET["url"]);
    if ($_GET["url"]=="api/get/user") {
        include("database_class.php");
        $users = new adatbazis("webapp");
        $users->db_select_json();
    }
    if ($_GET["url"]=="api/get/emp") {
        include("database_class.php");
        $emp = new adatbazis("oktat");
        $emp->db_select_emp_json();
    }    
}

// API/GET/USER > $users->db_select(); var_dump($users->rows);

/*

include("database_class.php");

$users = new adatbazis();

if(FALSE) { $users->db_insert("Tamás","12345"); }
if(FALSE) { $users->db_delete(17); }
if(FALSE) { $users->db_update("Béla","54321",11); }
if (FALSE) { $users->db_select(); var_dump($users->rows); }

*/