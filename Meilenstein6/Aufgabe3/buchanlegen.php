<?php 
 
 /*
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
*/



$dbhost="localhost";
$dbname="myBooks";
$dbuser="sena";
$dbpass="teammedical";
$dbconnection= mysql_connect($dbhost, $dbuser, $dbpass);
mysql_set_charset('utf8');

	$vorname = utf8_decode($_GET ['vorname']);
	$name = utf8_decode($_GET ['nachname']);
	$autor = utf8_decode($_GET ['autor']);
	$titel = utf8_decode($_GET ['titel']);
	$kapitel = $_GET ['kapitel'];
	$buchart = $_GET ['art'];
	$isbn = $_GET ['isbn'];
	$erscheinungsjahr = $_GET ['jahr'];
	$auflage = $_GET ['auflage'];
	$genre = utf8_decode($_GET ['genre']);
	
	
	$überprüfung = false;

	//favorit???
	//stimmt Datenbank?
	//Datentypen in datenbak überprüfen zb checkbox oder favorit oder dropdwown
	
	
?>



