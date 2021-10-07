<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require './../db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if(    isset($data->blog_title) 
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

        $insertBlog = mysqli_query($db_conn,"INSERT INTO `blog`(`blog_title`,`blog_content`,`blog_author`,`blog_createdate`) VALUES('$blog_title','$blog_content','$blog_author','$blog_createdate')");
        if($insertBlog){
            $last_id = mysqli_insert_id($db_conn);
            echo json_encode(["success"=>1,"msg"=>"Blog Inserted.","id"=>$last_id]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"Blog Not Inserted!"]);
        }

}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}