// Anfrage zum Transportieren der JSON-Dateien über das Webprotokoll HTTP wird als Variable Deklariert. 
        var request = new XMLHttpRequest();

        // Funktion wird erst dann aufgerufen wenn die Seite vollständig geladen ist.
		//Funktion zum Laden der JSON Dateien.
        window.onload = function () {
	
			// Verbindung mit der horror_books.json-Datei anhand der GET Methode und synchroner Transaktion.
            request.open("GET", "horror_books.json",false);
            // Übermittelt die Anfrage
            request.send();
			//parsen und speichern der JSON Datei in die variable horrorbook.
		   var horrorbook = JSON.parse(request.responseText);
		   //greift auf das Array der JSON Datei zu.
            horrorbook = horrorbook.horrordata;

            // Verbindung mit der roman_books.json-Datei anhand der GET Methode und synchroner Transaktion
            request.open("GET", "roman_books.json",false);
            // Übermittelt die Anfrage
            request.send();
			//parsen und speichern der JSON Datei in die variable romanbook.
            var romanbook = JSON.parse(request.responseText);
			//greift auf das Array der JSON Datei zu.
            romanbook = romanbook.romandata;

            // Aufruf der Methode tabellenAnlegen zur Erzeugung der Tabelle mit den Daten(Array) der Json Datei. 
            tabellenAnlegen(horrorbook, "horrorbook");
            tabellenAnlegen(romanbook, "romanbook");
			
		}

        /**
	   Funktion zur erzeugung von Tabellen
	   @json-Datei:Übergabe der JSON Datei mit den entsprechenden Daten
	   @buchArt: Zur Unterscheidung der JSON Dateien für die Tabellen
	   */
	   function tabellenAnlegen(jsondatei, buchArt) {
        
				//Alle Daten von der variable jsondatei(Datenobjekte der JSON Datei) werden einzeln durchlaufen und in die Tabelle eingetragen
            for (var i = 0; i < jsondatei.length; i++) {
              
				//Erstellt Element TR(Zeile)
				var tr = document.createElement("TR");

                
				// diese Zeile erhält eine Attribute um die Zeilen untereinander zu unterscheiden.Die Attribute ID wird auf den Wert tr gesetzt.
                tr.setAttribute("id", "tr" + i);

                // Unterscheidung der Zwei Tabellen.
                if (buchArt == "horrorbook") {
                    document.getElementById("tabelleZwei").appendChild(tr);
                } else if (buchArt == "romanbook") {
                    document.getElementById("tabelle").appendChild(tr);
                }

                // Erstellt Element TD(Spalte) in der die Autoren vergeben werden.
                var spalte1 = document.createElement("TD");
				//Inhalt der JSON Datei kommt in die Variable(Autor) 
                var spalte1Daten = document.createTextNode(jsondatei[i].autor);
                // Inhalt vom JSON Objekt kommt in die spalte
                spalte1.appendChild(spalte1Daten);
				//sucht ID der Tabellenzeile und fügt spalte in die tabellenzeile ein.
                document.getElementById("tr" + i).appendChild(spalte1);
				
				
				// Erstellt Element TD(Spalte) in der die titel vergeben werden.
                var spalte2 = document.createElement("TD");
                //Inhalt der JSON Datei kommt in die Variable(tite) 
                var spalte2Daten = document.createTextNode(jsondatei[i].titel);
                // Inhalt vom JSON Objekt kommt in die spalte
                spalte2.appendChild(spalte2Daten);
                //sucht ID der Tabellenzeile und fügt spalte in die tabellenzeile ein.
                document.getElementById("tr" + i).appendChild(spalte2);
				
				// Erstellt Element TD(Spalte) in der die kapitel vergeben werden.
                var spalte3 = document.createElement("TD");
                //Inhalt der JSON Datei kommt in die Variable(kapitel) 
                var spalte3Daten = document.createTextNode(jsondatei[i].kapitel);
                // Inhalt vom JSON Objekt kommt in die spalte
                spalte3.appendChild(spalte3Daten);
                //sucht ID der Tabellenzeile und fügt spalte in die tabellenzeile ein.
                document.getElementById("tr" + i).appendChild(spalte3);
				
				// Erstellt Element TD(Spalte) in der die bucharten vergeben werden.
                var spalte4 = document.createElement("TD");
                //Inhalt der JSON Datei kommt in die Variable(buchart) 
                var spalte4Daten = document.createTextNode(jsondatei[i].buchart);
                // Inhalt vom JSON Objekt kommt in die spalte
                spalte4.appendChild(spalte4Daten);
                //sucht ID der Tabellenzeile und fügt spalte in die tabellenzeile ein.
                document.getElementById("tr" + i).appendChild(spalte4);
				
				// Erstellt Element TD(Spalte) in der die ISBN vergeben werden.
                var spalte5 = document.createElement("TD");
                //Inhalt der JSON Datei kommt in die Variable(ISBN) 
                var spalte5Daten = document.createTextNode(jsondatei[i].ISBN);
                // Inhalt vom JSON Objekt kommt in die spalte
                spalte5.appendChild(spalte5Daten);
                //sucht ID der Tabellenzeile und fügt spalte in die tabellenzeile ein.
                document.getElementById("tr" + i).appendChild(spalte5);
				
				// Erstellt Element TD(Spalte) in der die erscheinungsjahre vergeben werden.
                var spalte6 = document.createElement("TD");
                //Inhalt der JSON Datei kommt in die Variable(Erscheinungsjahr) 
                var spalte6Daten = document.createTextNode(jsondatei[i].erscheinungsjahr);
                // Inhalt vom JSON Objekt kommt in die spalte
                spalte6.appendChild(spalte6Daten);
                //sucht ID der Tabellenzeile und fügt spalte in die tabellenzeile ein.
                document.getElementById("tr" + i).appendChild(spalte6);
				
				// Erstellt Element TD(Spalte) in der die auflage vergeben werden.
                var spalte7 = document.createElement("TD");
                //Inhalt der JSON Datei kommt in die Variable(auflage) 
                var spalte7Daten = document.createTextNode(jsondatei[i].auflage);
                // Inhalt vom JSON Objekt kommt in die spalte
                spalte7.appendChild(spalte7Daten);
                //sucht ID der Tabellenzeile und fügt spalte in die tabellenzeile ein.
                document.getElementById("tr" + i).appendChild(spalte7);
			}
        }
				//Buttton zeigt nur die Horrorbücher an und versteckt die Romanbücher.
				function ButtonsHorrorbooks(){
				document.getElementById("tabelle").style.visibility="hidden";
				document.getElementById("tabelleZwei").style.visibility="visible";				
				}
				
				//Button zeigt nur die Romanbücher an und versteckt die Romanbücher.
				function ButtonsRomanbooks(){
				document.getElementById("tabelleZwei").style.visibility="hidden";
				document.getElementById("tabelle").style.visibility="visible";
				
				}
