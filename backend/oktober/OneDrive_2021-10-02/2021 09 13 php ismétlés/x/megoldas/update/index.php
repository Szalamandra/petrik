<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require './../db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(    isset($data->id) 
	&& is_numeric($data->id) 
	&& isset($data->blog_title) 
	&& isset($data->blog_content) 
	&& isset($data->blog_author) 
	&& isset($data->blog_createdate) 
	&& !empty(trim($data->blog_title)) 
	&& !empty(trim($data->blog_content))
	&& !empty(trim($data->blog_author))
	&& !empty(trim($data->blog_createdate))
	){
    $blog_title = mysqli_real_escape_string($db_conn, trim($data->blog_title));
    $blog_content = mysqli_real_escape_string($db_conn, trim($data->blog_content));
    $blog_author = mysqli_real_escape_string($db_conn, trim($data->blog_author));
    $blog_createdate = mysqli_real_escape_string($db_conn, trim($data->blog_createdate));

        $updateBlog = mysqli_query($db_conn,"UPDATE `blog` SET `blog_title` = '$blog_title', `blog_content` = '$blog_content', `blog_author` = 'blog_author', `blog_createdate` = '$blog_createdate' WHERE `blog_id`='$data->id'");
        if($updateBlog){
            echo json_encode(["success"=>1,"msg"=>"Blog Updated."]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"Blog Not Updated!"]);
        }

}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}