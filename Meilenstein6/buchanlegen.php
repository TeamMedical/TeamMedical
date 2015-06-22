<?php
// Die mittels GET geschickten Daten des Anwenders werden in Variablen gespeichert.
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
// Hier nun Validierung der Daten des Anwenders!
$aktuellesJahr = date("Y");
if($jahr < -1 || $jahr > $aktuellesJahr){
    $jahr = null;
    echo $jahr;
}
// Ende der Validierung
if(isset($_GET["filmfavorit"])){
    $favorit = 1;
}else{
    $favorit = 0;
}
// Herstellung der Verbindung mit der Datenbank, die auf localhost, mit dem Nutzer root und ohne Passwort laeuft.
$datenbankVerbindung = mysql_connect("localhost", "root", "");
mysql_set_charset('UTF-8', $datenbankVerbindung);
// Die Datenbank "mybooks" wird gewaehlt.
mysql_select_db('mybooks') or die ("Fehler beim Zugriff auf die Datenbank!");
mysql_query("SET NAMES 'utf8'");
// String zur Eintragung in die Datenbank als MySQL-Befehl wird vorbereitet.
$insertBuch = "INSERT INTO buch (titel, autor, isbn, kapitel, jahr, auflage, art, genre) VALUES ('$titel', '$autor','$isbn', '$kapitel', '$jahr', '$auflage', '$art', '$genre');";
// Das Buch wird eingetragen.
$eintragung = mysql_query($insertBuch);
$selectBenutzer = "SELECT benutzerID FROM benutzer WHERE vorname = '".$vorname."' AND nachname = '". $nachname."';";
$abfrageBenutzer = mysql_query($selectBenutzer);
if(mysql_num_rows($abfrageBenutzer) == 0){
    $insertBenutzer = "INSERT INTO benutzer (vorname, nachname) VALUES ('$vorname','$nachname');";
    $eintragungBenutzer = mysql_query($insertBenutzer);
}else{
    $benutzer = mysql_fetch_object($abfrageBenutzer);
    $benutzerID = $benutzer->benutzerID;
}
?>