//Überprüft die Eingaben des Users auf korrektheit und gibt dementsprechend einen boolean Wert zurück. 
function formularüberprüfung() {
    var überprüfung = true;
    
    //Ladet alle Input Felder
    var eingabe = document.getElementsByTagName("input");

    //Durchläuft alle Input Felder
    for (var i = 0; i < eingabe.length; i++) {
        var lokalüberprüfung = true;
        //Ignoriert Input Felder welche für die folgenden Überprüfungen nicht bernötigt werden,
		//da sie leer sind.
        if (eingabe[i] == "undefined" && eingabe[i].className == 'falscheFormularfelder' ) {
            lokalüberprüfung = false;
        } else {
            //Prüfe in Abhängigkeit der ID, mit Regex ob Eingabe stimmt
            switch (eingabe[i].id) {
                case 'vorname':
                    if (!eingabe[i].value.match('[A-Z|a-z]+')) {
                        lokalüberprüfung = false;
                    }
                    break;
                case 'name':
                    if (!eingabe[i].value.match('[A-Z|a-z]+')) {
                        lokalüberprüfung = false;
                    }
                    break;
                case 'buchtitel':
                    if (!eingabe[i].value.match('.+')) {
                        lokalüberprüfung = false;
                    }
                    break;
                case 'buchautor':
                    if (!eingabe[i].value.match('[A-Z|a-z]+')) {
                        lokalüberprüfung = false;
                    }
                    break;
                case 'jahr':
                   
                    if (!(eingabe[i].value.match('[0-9]{3,4}'))) {
                        lokalüberprüfung = false;
                    } else {
                        if(eingabe[i].value > 2015) {
                            lokalüberprüfung = false;
                        }
                    }
                    break;
                case 'isbn':
                    if (!eingabe[i].value.match('^[0-9]{1,13}$')) {

                        lokalüberprüfung = false;
                    }
                    break;
                case 'auflage':
                    if (!eingabe[i].value.match('[0-9][0-9]|[0-9]')) {
                        lokalüberprüfung = false;
                    }
                    break;
            }
            if (!lokalüberprüfung) {
                //Falls Eingabe nicht stimmt ändere CSS Klasse
                eingabe[i].className = 'falscheFormularfelder';
               

                if (überprüfung) {
                    //Fokussiere das falsche Element. Hierbei wird immer das erste falsche Element fokussiert
                    eingabe[i].focus();
                    überprüfung = lokalüberprüfung;
					
                }

            } else {
                //Setze ansonsten die alte CSS Klasse
                eingabe[i].className = "richtigeFormularfelder";
            }
        }
    }
    if (!überprüfung) {
        
        //Gebe eine FehlerNachricht aus.
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }
    return überprüfung;
}