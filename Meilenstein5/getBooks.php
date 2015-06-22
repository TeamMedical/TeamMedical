<?php

header('Content-Type: application/json');

$_datei = $_GET["datei"];
$_dateiname = $_datei.'books.json';
$_buchArt = file_get_contents($_dateiname);

echo $_buchArt;



?>