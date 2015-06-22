<?php 
 $autor=$_GET['autor']; 
 $titel=$_GET['titel']; 
 $kapitel=$_GET['kapitel']; 
 $art=$_GET['art']; 
 $isbn=$_GET['isbn']; 
 $jahr=$_GET['jahr']; 
 $auflage=$_GET['auflage']; 
 
$ausgabe=$autor.", ".$titel.", ".$kapitel.", ".$art.", ".$isbn.", ".$jahr.", ".$auflage."; \r\n" ;

$datei=fopen("books.txt","a"); 
$output=fwrite($datei,$ausgabe);
fclose($datei);

?>

