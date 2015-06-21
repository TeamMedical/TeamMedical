<?php

header('Content-Type: application/json');

$_horror= file_get_contents('horror_books.json');
echo $_horror;



?>