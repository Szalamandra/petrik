<?php


function doTheThing() {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        return [
            'error' => 'Must use POST',
        ];
    }
    $newUserStr = file_get_contents('php://input');
    $newUser = json_decode($newUserStr);
    if (empty($newUser)) {
        http_response_code(400);
        return [
            'error' => 'Invalid JSON',
        ];
    }
    if (empty($newUser->name)) {
        http_response_code(400);
        return [
            'error' => 'Invalid user',
        ];
    }
    if (empty($newUser->age) || !is_numeric($newUser->age)) {
        http_response_code(400);
        return [
            'error' => 'Invalid age',
        ];
    }

    $allUsers = json_decode(file_get_contents('data.json'));
    $allUsers->users[] = $newUser;
    file_put_contents('data.json', json_encode($allUsers));
    return [
        'status' => 'OK',
    ];
}

header('Content-Type: application/json');

echo json_encode(doTheThing());
