<?php

header('Content-type: application/json');

include("./../../../server.php");

$json_userlist = new db();
$json_userlist->connect();
$json_userlist->json_userlist();
$json_userlist->disconnect();

?>