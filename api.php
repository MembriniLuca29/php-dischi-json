<?php

header("Access-Control-Allow-Origin: *");

$string = file_get_contents('database/brani.json');
$brani = json_decode($string, true);

header('Content-Type: application/json');
echo json_encode($brani);
?>