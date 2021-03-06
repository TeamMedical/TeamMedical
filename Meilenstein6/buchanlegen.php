<?php

// Speichern der Daten in die Variablen
$titel = $_GET["titel"];
$autor = $_GET["autor"];
$kapitel = $_GET["kapitel"];
$art = $_GET["art"];
$isbn = $_GET["isbn"];
$jahr = $_GET["jahr"];
$auflage = $_GET["auflage"];
$genre = $_GET["genre"];
$vorname = $_GET["vorname"];
$nachname = $_GET["name"];
$favorit;

$jahreszeit = date("Y");
if($jahr < 0 || $jahr > $jahreszeit){
    $jahr = null;
}
if(!preg_match("/^[A-Z][a-z]+$/",$vorname)){
    $vorname = null;
}
if(!preg_match("^[A-Z][a-z]+$^",$nachname)){
    $nachname = null;
}
if(!preg_match("/^[0-9]{1,13}$/",$isbn)){
    $isbn = null;
}
if(!preg_match("/^[0-9]{1,3}$/",$auflage)){
    $auflage = null;
}

if(!preg_match("/^[A-Z][a-z]+[\s]*[A-Z][a-z]*$/",$autor)){
    $autor = "null";
}

if(isset($_GET["filmfavorit"])){
    $favorit = 1;
}else{
    $favorit = 0;
}

// Herstellung der DB Verbindung
$dbVerbindung = mysql_connect("localhost", "sena", "teammedical");
mysql_set_charset('UTF-8', $dbVerbindung);
// Wahl der mybooks Datenbank
mysql_select_db('mybooks') or die ("Fehler beim Zugriff auf die Datenbank!");
mysql_query("SET NAMES 'utf8'");

//String zur Eintragung in die DB
$insertbook = "INSERT INTO book (titel, autor, isbn, kapitel, jahr, auflage, art, genre) VALUES ('$titel', '$autor','$isbn', '$kapitel', '$jahr', '$auflage', '$art', '$genre');";
// eintragen in die DB
$eintragung = mysql_query($insertbook);

$selectuser = "SELECT benutzerID FROM user WHERE vorname = '".$vorname."' AND nachname = '". $nachname."';";
$abfrageuser = mysql_query($selectuser);

if(mysql_num_rows($abfrageBenutzer) == 0){
    $insertuser= "INSERT INTO user (vorname, nachname) VALUES ('$vorname','$nachname');";
    $eintragunguser = mysql_query($insertuser);
    $abfrageuser = mysql_query($selectuser);
    $user = mysql_fetch_object($abfrageuser);
    $benutzerID = $user->benutzerID;
}else{
    $user = mysql_fetch_object($abfrageuser);
    $benutzerID = $user->benutzerID;
}

$abfrageBuchID = "SELECT buchID from buch order by buchID desc limit 1;";
$ergebnisBuchID = mysql_query($abfrageBuchID);
$book = mysql_fetch_object($ergebnisBuchID);
$buchID = $book->buchID;

$insertBenutzerBuch = "INSERT INTO userbooks (benutzerID, buchID, favorit) VALUES ('$benutzerID','$buchID',$favorit)";


?>