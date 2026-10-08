# Prüfbericht: Chemie Oberstufe Niedersachsen

Stand: 7. Oktober 2026. Genau **1.500 Aufgaben**, je 150 in zehn Themengebieten.

| Themengebiet | Anzahl |
|---|---:|
| Nanopartikel & Naturstoffe | 150 |
| Stoffmengen & Lösungen | 150 |
| Organische Verbindungen | 150 |
| Organische Reaktionswege | 150 |
| Chemisches Gleichgewicht | 150 |
| Energetik | 150 |
| Reaktionsgeschwindigkeit | 150 |
| Säuren & Basen | 150 |
| Redox & Elektrochemie | 150 |
| Makromoleküle & Analytik | 150 |

Niveaus: Grundlagen (intern E) 177, gA 909, eA 414. gA-Auswahl in der App schließt E ein.

761 Verständnis-/Strukturfragen; 739 Rechenvarianten. Die Zahl bezeichnet Aufgaben einschließlich systematischer Varianten, keine 1.500 verschiedenen Fachkonzepte. Aufgabenfamilien: 534, wobei einzelne Verständnisfragen eigene Familien sind.

## Inhalts- und Datenprüfungen

- 1500 eindeutige IDs und Fragetexte
- 4 unterschiedliche Optionen, genau eine vom Matcher akzeptiert
- Alle Musterlösungen akzeptiert, Vorzeichen und Einheiten geschützt
- Rechenwerte mit separaten Formelfunktionen nachgerechnet
- Niveau- und Aufgabentypfilter geprüft
- Keine Themen- oder Quellentitel oberhalb der Frage

622 Ergebnisse wurden mit separaten Formelfunktionen nachgerechnet. Alle 739 Zahlenaufgaben wurden auf gültige Werte, Akzeptanz der Musterlösung, Einheitenbehandlung, falsche Vorzeichen und eindeutig unterscheidbare Auswahlantworten geprüft. Die übrigen Musterwerte und Strukturaufgaben beruhen auf expliziten chemischen Regeln im Generator; eine unabhängige fachliche Einzelprüfung aller 1.500 Aufgaben durch eine Lehrkraft ist nicht erfolgt.

## Prüfung wiederkehrender Aufgabenmuster

Alle 2.000 vorherigen Datensätze wurden nach Aufgabenfamilien ausgewertet. Bei dieser ersten Kürzung wurden 1.208 Aufgaben zunächst inhaltlich übernommen, 792 entfernt und 292 Verständnis-/Auswertungsfragen ergänzt. Die anschließende Qualitätsprüfung ist unten separat dokumentiert. Jede Kategorie enthält 150 Aufgaben. Der detaillierte Vorher-Nachher-Vergleich steht in VARIANTENPRUEFUNG.json. Breite redaktionelle Rubriken wie „Proteine“ zählen nicht als eine einzige Rechenvorlage.

Die Ester-Alkohol-Zuordnung umfasst drei statt neun Aufgaben. Wiederholte Rechenvorlagen mit konstantem Ergebnis wurden auf höchstens eine Aufgabe reduziert. Sonstige beibehaltene Vorlagen enthalten höchstens 16 Varianten. Die Auswahl wurde auf verschiedene Aufgabenmuster am Rundenanfang, eindeutige IDs, Themenausgleich und leere/kleine Bestände geprüft.

Nanopartikel/Kohlenhydrate/Aminosäuren/Proteine bleiben mit 38/38/37/37 Aufgaben vertreten. Halbjahre und Q-Phase-Untertitel bleiben erhalten. Die Speicherversion ist unverändert; Runden mit entfernten IDs werden verworfen, Fortschritt zu behaltenen Fragen bleibt verfügbar.

## Anschließende Qualitätsprüfung

Der gesamte Bestand wurde erneut automatisiert auf Datenkonsistenz, Zahlenergebnisse, Antwortalternativen und ähnliche Fragetexte geprüft. Auffällige Formulierungen und Muster wurden redaktionell nachgeprüft. Dabei wurden 678 Datensätze angepasst, überwiegend durch verbesserte falsche Auswahlantworten: Bei 637 Rechenfragen entfallen negative Mengen/Anzahlen oder unpassende Prozent- und Rf-Werte als leicht ausscheidbare Antworten. Sinnvolle Vorzeichenfehler bei tatsächlich vorzeichenbehafteten Größen bleiben möglich.

Zwölf ähnliche Verständnisfragen wurden durch Anwendungsfragen ersetzt. Präzisierungen betreffen unter anderem den thermodynamischen Referenzzustand, den Systembezug beim endothermen Lösen, die Interpretation von Nanopartikelgrößen und Modellannahmen bei Lösungen. Alle numerischen Musterwerte bleiben unverändert. Neue Lernaufgaben erhalten neue IDs; zu weitergeführten Aufgaben bleibt der vorhandene Fortschritt erhalten.

Die ergänzenden Prüfungen bestätigen 150 Fragen je Thema, genau eine akzeptierte Auswahlantwort, die unterschiedlichen Aufgabenmuster zu Beginn einer Runde und den sicheren Umgang mit entfernten IDs. Dies ist eine automatische Gesamtprüfung mit gezielter redaktioneller Fachprüfung, keine unabhängige fachliche Einzelabnahme aller 1.500 Fragen. Details: [QUALITAETSPRUEFUNG.json](QUALITAETSPRUEFUNG.json).

## Funktionstests

- Alle Datensätze: IDs, normalisierte Fragen, Antworten, Quellen und genau eine richtige Auswahl
- Gemischte Runde verteilt 20 Fragen über alle 10 Kategorien
- Start direkt aus lokalem Ordner, keine externen Spiel-Anfragen
- Falsche Auswahl zeigt sofort Falsch, richtige Lösung und Wiederholungszähler
- Neuladen erhält laufende Frage, Bewertung und Fortschritt
- Richtige Antwort, Weiter und Rundenabschluss zählen korrekt
- Fehler dieser Runde wiederholen; richtige Wiederholung entfernt den Fehler
- Freitext per Enter sofort richtig bewertet
- Freitextfehler zeigt Lösung; manuelle Wertungskorrektur aktualisiert Statistik
- Weiß ich noch nicht deckt Lösung auf und merkt Frage zur Wiederholung
- Kategorie und Rundenlänge funktionieren
- Leerer Fehlerfilter gibt verständliche Rückmeldung
- Alle Fragen: vollständiger Bestand ohne Wiederholung in der Runde
- Beschädigte lokale Speicherung wird abgefangen
- Alle zehn Themen: vor der Antwort nur neutrale Überschrift, keine Lösung oder Erklärung sichtbar
- Niveau- und Rechenfilter wirken in der Oberfläche und bleiben nach Neuladen erhalten
- Zahleneingabe: Dezimalkomma akzeptiert; falsches Vorzeichen abgelehnt
- Mobile Breite 375 px: keine horizontale Überbreite; Antworten bedienbar
- Ohne localStorage spielbar, Speichereinschränkung wird angezeigt
- Direkt per index.html vom Dateisystem spielbar
- Lange Verständnisfrage bei 375 px: neutrale Überschrift, richtige Bewertung und Erklärung
- Halbjahreslabels und alle zugeordneten Themenfilter geprüft; neues Thema getrennt von Organik; Q-Phase bei 375 px
- Keine unbehandelten JavaScript-Fehler im Test

Zusätzlich: Chemie-spezifischer Zahlenabgleich, Unterscheidung von Co und CO sowie Ladungen, Niveau-/Typfilter und feste neutrale Überschrift. Der frühere Quellentitel erscheint nicht mehr vor der Frage. Desktop und 375-Pixel-Mobilansicht geprüft.

## Grenzen

Themenorientierung am KC 2022; kein Anspruch auf vollständige curriculare Abdeckung oder jahrgangsspezifische Abiturvorbereitung. Kurze Auswahl-/Rechenaufgaben prüfen keine vollständigen experimentellen, zeichnerischen oder argumentativen Leistungen. Manche Rechenmodelle (z. B. vorgegebene kinetische Gesetze) sind ergänzende Übungen. Textantworten werden nicht semantisch interpretiert. Rundungstoleranz entspricht einer halben Einheit der letzten geforderten Nachkommastelle. Andere Einheiten werden nicht konvertiert.

SHA-256 von questions.js: fa45bea36187becf6145f914478532a7628e214b8dcdc30b1224231285df0a86
