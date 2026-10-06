# Prüfbericht: Chemie Oberstufe Niedersachsen

Stand: 6. Oktober 2026. Genau **2.000 Aufgaben**, je 200 in zehn Themengebieten.

| Themengebiet | Anzahl |
|---|---:|
| Stoffaufbau | 200 |
| Stoffmengen & Lösungen | 200 |
| Organische Verbindungen | 200 |
| Organische Reaktionswege | 200 |
| Chemisches Gleichgewicht | 200 |
| Energetik | 200 |
| Reaktionsgeschwindigkeit | 200 |
| Säuren & Basen | 200 |
| Redox & Elektrochemie | 200 |
| Makromoleküle & Analytik | 200 |

Niveaus: E/Grundlagen 491, gA 958, eA 551. gA-Auswahl in der App schließt E ein.

485 Verständnis-/Strukturfragen; 1515 Rechenvarianten. Die Zahl bezeichnet Aufgaben einschließlich systematischer Varianten, keine 2.000 verschiedenen Fachkonzepte. Aufgabenfamilien: 236, wobei einzelne Verständnisfragen eigene Familien sind.

## Inhalts- und Datenprüfungen

- 2000 eindeutige IDs und Fragetexte
- 4 unterschiedliche Optionen, genau eine vom Matcher akzeptiert
- Alle Musterlösungen akzeptiert, Vorzeichen und Einheiten geschützt
- Rechenwerte mit separaten Formelfunktionen nachgerechnet
- Niveau- und Aufgabentypfilter geprüft
- Keine Themen- oder Quellentitel oberhalb der Frage

1219 Ergebnisse wurden mit separaten Formelfunktionen nachgerechnet. Alle 1515 Zahlenaufgaben wurden auf gültige Werte, Akzeptanz der Musterlösung, Einheitenbehandlung, falsche Vorzeichen und eindeutig unterscheidbare Auswahlantworten geprüft. Die übrigen Musterwerte und Strukturaufgaben beruhen auf expliziten chemischen Regeln im Generator; eine unabhängige fachliche Einzelprüfung aller 2.000 Aufgaben durch eine Lehrkraft ist nicht erfolgt.

## Organik-Überarbeitung

120 neue Verständnisfragen ersetzen 120 bisherige Varianten. Ein Vergleich gegen den vorherigen Bestand bestätigt 1.880 unveränderte Datensätze, darunter sämtliche 1.600 Aufgaben außerhalb der Organik. 40 neue Fragen betreffen Struktur und Reaktivität, 80 Reaktionsmechanismen. Die Zahl der Alkanol-Klassifikationsvarianten sinkt von 19 auf 3. Behaltene Vorlagenfamilien in „Organische Reaktionswege“ enthalten höchstens zehn Varianten. Zusätzlich geprüfte Erhaltung: 200 Fragen pro Kategorie, bisherige IDs der behaltenen Fragen und Speicherversion.

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
- Neue lange Mechanismusfrage bei 375 px: neutrale Überschrift, richtige Bewertung und Erklärung
- Keine unbehandelten JavaScript-Fehler im Test

Zusätzlich: Chemie-spezifischer Zahlenabgleich, Unterscheidung von Co und CO sowie Ladungen, Niveau-/Typfilter und feste neutrale Überschrift. Der frühere Quellentitel erscheint nicht mehr vor der Frage. Desktop und 375-Pixel-Mobilansicht geprüft.

## Grenzen

Themenorientierung am KC 2022; kein Anspruch auf vollständige curriculare Abdeckung oder jahrgangsspezifische Abiturvorbereitung. Kurze Auswahl-/Rechenaufgaben prüfen keine vollständigen experimentellen, zeichnerischen oder argumentativen Leistungen. Manche Rechenmodelle (z. B. vorgegebene kinetische Gesetze) sind ergänzende Übungen. Textantworten werden nicht semantisch interpretiert. Rundungstoleranz entspricht einer halben Einheit der letzten geforderten Nachkommastelle. Andere Einheiten werden nicht konvertiert.

SHA-256 von questions.js: 66aedf59069fc8c39c7588f29497b83483baa72666c46db2445bd8b584cd25c5
