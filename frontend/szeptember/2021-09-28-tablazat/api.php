<?php

$adatok = [
    'items' => [
        'Film1',
        'Film2',
        'Film3',
        'Film4',
        'Film5',
        'Film6',
        'Film7',
    ],
    'error' => false,
];

header('Content-type: application/json');
echo json_encode($adatok);

