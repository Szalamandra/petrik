<form method="POST">
	Username:<br />
	<input type="text" name="input_username"><br />
	Password:<br />
	<input type="password" name="input_password"><br />
	<input type="hidden" name="action" value="cmd_insert">
	<input type="submit" value="Add">
</form>

<?php

include("server.php");

if (isset($_POST["action"]) and $_POST["action"]=="cmd_insert")
{
	$user = new db();
	$user->connect();
		$user->user_insert($_POST["input_username"],
						   $_POST["input_password"]);
	$user->disconnect();
}

$user = new db(); 
$user->connect();
	$user->select();
$user->disconnect();
?>
