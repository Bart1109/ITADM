const quizData = {
    scripting:
        [
            {
                question: "Eine Scriptsprache wird in ausführbaren Code übersetzt vom...",
                options: ["Compiler", "Interpreter", "Mikroprozessor"],
                answer: ["Interpreter"],
                
            },
            {
                question: "Javascript ist eine Programmiersprache der",
                options: ["1. Generation", "2. Generation", "3. Generation", "4. Generation", "5. Generation"],
                answer: ["3. Generation"],
                
            },
            {
                question: "Welche Spracheigenschaften bezüglich Javascript sind korrekt?",
                options: [
                    "Groß- und Kleinschreibung spielt keine Rolle",
                    "Ein Befehl wird mit einem Semikolon abgeschlossen",
                    "Bei Variablen-Deklaration können keine Basis-Datentypen vorgegeben werden",
                    "Mit Javascript können dynamische Webseiten programmiert werden",
                    "Javascript wird auf dem Web-Server übersetzt und ausgeführt",
                    "Javascript ist eine Compiler-Sprache"
                ],
                answer: [
                    "Ein Befehl wird mit einem Semikolon abgeschlossen",
                    "Bei Variablen-Deklaration können keine Basis-Datentypen vorgegeben werden",
                    "Mit Javascript können dynamische Webseiten programmiert werden"
                ],
                
            },
            {
                question: "Welchen Datentyp hat: var Name = 'Bill Gates';",
                options: ["String", "Number", "Boolean", "Array"],
                answer: ["String"],
                
            },
            {
                question: "Welchen Datentyp hat: var a = 7/3;",
                options: ["String", "Number", "Boolean", "Array"],
                answer: ["Number"],
                
            },
            {
                question: "Welchen Datentyp hat: var Antwort = a < b;",
                options: ["String", "Number", "Boolean", "Array"],
                answer: ["Boolean"],
                
            },
            {
                question: "Welchen Datentyp hat: var Farben=['rot','gelb','grün'];",
                options: ["String", "Number", "Boolean", "Array"],
                answer: ["Array"],
                
            },
            {
                question: "Was gibt die Schleife aus: for(i=1;i<=10;i++) { if ((i<5) && (i>2)) console.log(i+2); }",
                options: ["3,4", "4,5", "5,6", "Keine Ausgabe"],
                answer: ["5,6"],
                
            },
            {
                question: "Was ist keine Verzweigung?",
                options: ["while", "for", "if"],
                answer: ["while", "for"],
                
            },
            {
                question: "Mit welcher HTML-Anweisung kann ich Javascript-Code in HTML einbetten?",
                options: ["&lt;title&gt;", "&lt;function&gt;", "&lt;script&gt;", "&lt;head&gt;"],
                answer: ["<script>"],
                
            }
        ],
    grundlage:
        [
            { question: "Was sind analoge Daten Speichermedien? (leicht, 2 Punkte)", options: ["Schallplatten", "Festplatten", "Fotoabzüge", "USB-Sticks"], answer: ["Schallplatten", "Fotoabzüge"] },
            { question: "Welche Aussagen zur digitalen Datenübertragung sind richtig? (mittel, 3 Punkte)", options: ["Digitale Daten können Online und Offline übertragen werden", "Daten können nicht über Netzwerke (LANs) übertragen werden", "Datenübertragungen werden nur von Personen durchgeführt.", "Offline Datenübertragungen erfolgt immer mit Dateien", "Für Online Datenübertragungen ist immer eine Verbindung zwischen sendendem und empfangendem Computer nötig", "Digitalen Daten lassen sich nicht übertragen"], answer: ["Digitale Daten können Online und Offline übertragen werden", "Offline Datenübertragungen erfolgt immer mit Dateien", "Für Online Datenübertragungen ist immer eine Verbindung zwischen sendendem und empfangendem Computer nötig"] },
            { question: "Welche Aufgaben hat ein Betriebssystem? (mittel, 2 Punkte)", options: ["Intuitive Bedienbarkeit", "Verwaltung der internen und externen Hardwarekomponenten", "Bereitstellung von Social Media Netzwerken", "Steuerung der System- und Anwendungs-Programme", "Keine wichtigen"], answer: ["Verwaltung der internen und externen Hardwarekomponenten", "Steuerung der System- und Anwendungs-Programme"] },
            { question: "Welche Aussagen über Algorithmen sind richtig? (leicht, 2 Punkte)", options: ["Algorithmen können von Computern verarbeitet werden", "In der realen Arbeitswelt gibt es keine Algorithmen", "Algorithmen sind nur ein theoretisches Konstrukt der IT", "Algorithmen definieren die Arbeitsweise von Programmen", "Braucht kein Mensch"], answer: ["Algorithmen können von Computern verarbeitet werden", "Algorithmen definieren die Arbeitsweise von Programmen"] },
            { question: "Wie heißen die drei booleschen Grundoperatoren? (leicht, 3 Punkte)", options: ["OR", "XOR", "XAND", "NOT", "NOR", "AND"], answer: ["OR", "NOT", "AND"] },
            { question: "Welche Zahlen sind korrekt? (leicht, 2 Punkte)", options: ["Hexadezimal 0A2F", "Hexadezimal 123G", "Oktal 1827", "Binär 10101010", "Binär 01210011"], answer: ["Hexadezimal 0A2F", "Binär 10101010"] },
            { question: "Wie heißen die Betriebssystem Architekturmodelle? (mittel, 2 Punkte)", options: ["Zwiebelmodell", "Schichtenmodell", "Orangenmodell", "Schalenmodell", "Tortenmodell"], answer: ["Schichtenmodell", "Schalenmodell"] },
            { question: "Welche Hypervisor Architektur wird meistens für Servervirtualisierung verwendet? (leicht, 1 Punkt)", options: ["VLAN", "Hosted", "Bare Metal", "Keine"], answer: ["Bare Metal"] },
            { question: "Welche elektronischen Bauteile werden in modernen Computern verwendet? (mittel, 2 Punkte)", options: ["Röhren", "Relais", "Transistoren", "Mikroprozessoren"], answer: ["Transistoren", "Mikroprozessoren"] },
            { question: "Welche Aussagen über Bytes sind korrekt? (mittel, 2 Punkt)", options: ["Ein Byte hat 13 Bit", "Ein Byte hat 8 Bit", "Ein Kibibyte sind 1.000 Byte", "Ein Megabyte sind 1.000.000 Byte"], answer: ["Ein Byte hat 8 Bit", "Ein Megabyte sind 1.000.000 Byte"] }
        ],
    netzwerkadm:
        [{ question: "Welche Adressen können aktuell in IP-basierten Windows Netzwerken verwendet werden? (leicht, 2 Punkte)", options: ["IPv4 Adressen", "IP Adressen", "IPsec Adressen", "IPv6 Adressen", "Novel Netware Adressen"], answer: ["IPv4 Adressen", "IPv6 Adressen"] },
        {
            question: "Welche Eigenschaften haben die „privaten IP-Adressbereiche“ im Unterschied zum „öffentlichen IP-Adressbereich“? (mittel, 3 Punkte)",
            options: ["Adressen dieser Adressbereiche werden nicht in den öffentlichen Adressbereich geroutet.", "Sie können nicht in betrieblichen Netzwerken (LAN’s) eingesetzt werden.",
                "Sie werden nur für Netzwerke von Privatpersonen verwendet.",
                "Datenübertragungen mit privaten IP-Adressen müssen für die Übertragung im Internet umadressiert werden.",
                "Private IP-Adressbereiche können beliebig oft in unterschiedlichen Netzwerken genutzt werden.",
                "Es gibt keine Unterschiede."], answer: ["Adressen dieser Adressbereiche werden nicht in den öffentlichen Adressbereich geroutet.", "Datenübertragungen mit privaten IP-Adressen müssen für die Übertragung im Internet umadressiert werden.", "Private IP-Adressbereiche können beliebig oft in unterschiedlichen Netzwerken genutzt werden."
                ]
        },
        {
            question: "Welche IP-Adressbereiche sind privat? (mittel, 2 Punkte)",
            options: ["190.100.88.2.132/30", "10.0.0.0/8", "8.8.8.8/32", "192.168.178.0/24", "173.16.0.0/16"],
            answer: ["10.0.0.0/8", "192.168.178.0/24"]
        },
        {
            question: "In welcher Schicht des OSI-Referenzmodells ist die Switching-Funktionalität eines Ethernet Netzwerkes einzuordnen? (mittel, 1 Punkt)",
            options: ["Das OSI-Referenzmodells sieht diese Funktion nicht vor.", "Schicht 2 – Sicherungsschicht (Data Link Layer)", "Schicht 1 – Bitübertragungsschicht (Physical Layer)"],
            answer: ["Schicht 2 – Sicherungsschicht (Data Link Layer)"]
        },
        {
            question: "In welcher Schicht des ISO-OSI-Referenzmodells ist die Routing-Funktionalität eines IP Netzwerkes einzuordnen? (leicht, 1 Punkt)",
            options: ["Schicht 4 – Transportschicht (Transport Layer)", "Das OSI-Referenzmodells sieht diese Funktion nicht vor.", "Schicht 3 – Vermittlungsschicht (Network Layer)"],
            answer: ["Schicht 3 – Vermittlungsschicht (Network Layer)"]
        },
        {
            question: "Welche Aufgabe hat ein DNS Server? (leicht, 2 Punkte)",
            options: ["Die Auflösung von DNS-Namen in IP-Adressen.", "In betrieblichen Netzwerken gar keine.", "DNS-Server ermitteln die Standorte von beliebigen Internet-Servern.", "Die Auflösung von IP-Adressen in DNS-Namen.", "DNS-Server vergeben IP-Adressen."],
            answer: ["Die Auflösung von DNS-Namen in IP-Adressen.", "Die Auflösung von IP-Adressen in DNS-Namen."]
        },
        {
            question: "Wie heißen die konfigurierbaren Grundfunktionen eines DNS-Servers? (mittel, 3 Punkte)",
            options: ["DNS Forward lookup", "DNS Resolution", "DNS Forwarding", "DNS Encryption", "DNS Reverse lookup", "DNS Routing"],
            answer: ["DNS Forward lookup", "DNS Forwarding", "DNS Reverse lookup"]
        },
        {
            question: "Mit welcher IPv4 Adressierungsart können alle Computer eines IP-Adresssegments gleichzeitig angesprochen werden? (leicht, 1 Punkt)",
            options: ["Anycast", "Multicast", "Broadcast", "Unicast"],
            answer: ["Broadcast"]
        },
        {
            question: "Welche Aufgabe hat DHCP-Server? (mittel, 1 Punkt)",
            options: [
                "Ein DHCP-Server stellt, ihm kannte PC’s, ausschließlich eine IP-Adresse zur Verfügung.",
                "Der DHCP-Server ermittelt unkonfigurierte PC’s in seinem Netzsegment und konfiguriert diese automatisch.",
                "Der DHCP-Server liefert auf Anfrage eines DHCP-Clients eine vollständige IP-Konfiguration.",
                "Der DHCP-Server informiert DNS-Server über die von ihm vergebenen IP-Adressen."
            ],
            answer: ["Der DHCP-Server liefert auf Anfrage eines DHCP-Clients eine vollständige IP-Konfiguration."]
        },
        {
            question: "Welche drei Software-Komponenten gehören zu einem vollfunktionsfähigen „DHCP-System“? (mittel, 1 Punkt)",
            options: ["DHCP-Transmitter, DHCP-Receiver u. DHCP Parent.", "DHCP-Server, DHCP-Client u. DHCP-Relay Agent.", "DHCP-Server, Domain-Controller und DNS-Server"],
            answer: ["DHCP-Server, DHCP-Client u. DHCP-Relay Agent."]
        },
        {
            question: "Welche Aussagen über das Default Gateway sind richtig? (mittel, 2 Punkte)",
            options: ["Es ist völlig egal, ob ein Default Gateway eingestellt ist oder nicht.", "Ist immer eine Netzwerkfirewall.", "Bei Nichtangabe wird damit die Erreichbarkeit anderer Netzsegmente eingeschränkt.", "Dient der Weiterleitung von Datenübertragungen in andere Netze als die des eigenen Adressbereichs."],
            answer: ["Bei Nichtangabe wird damit die Erreichbarkeit anderer Netzsegmente eingeschränkt.", "Dient der Weiterleitung von Datenübertragungen in andere Netze als die des eigenen Adressbereichs."]
        }],
    datensicherheit:
        [{
            question: "Welche Informationen gelten als personenbezogene Daten?",
            options: ["Daten, die sich auf eine identifizierte oder identifizierbare Person beziehen", "Daten, die sich nur auf Unternehmen beziehen", "Anonymisierte Daten", "Öffentlich zugängliche Informationen"],
            answer: ["Daten, die sich auf eine identifizierte oder identifizierbare Person beziehen"]
        },

        {
            question: "Welche der folgenden Informationen ist kein Beispiel für personenbezogene Daten?",
            options: ["Name", "Telefonnummer", "E-Mail-Adresse", "Anzahl der Mitarbeiter in einem Unternehmen"],
            answer: ["Anzahl der Mitarbeiter in einem Unternehmen"]
        },

        {
            question: "Wie werden personenbezogene Daten geschützt?",
            options: ["Durch die Einhaltung von Datenschutzgesetzen", "Durch die Verwendung von Passwörtern", "Durch Verschlüsselung", "Durch Anonymisierung"],
            answer: ["Durch die Einhaltung von Datenschutzgesetzen"]
        },

        {
            question: "Welche der folgenden Informationen kann als 'sensible personenbezogene Daten' betrachtet werden?",
            options: ["Hobbys", "Lieblingsfarbe", "Religiöse Überzeugungen", "Lieblingsmusik"],
            answer: ["Religiöse Überzeugungen"]
        },

        {
            question: "Was ist der Zweck der Verschlüsselung von personenbezogenen Daten?",
            options: ["Schutz vor versehentlichem Löschen", "Schutz vor Cyber-Angriffen", "Schutz vor Datenverlust", "Schutz vor Veränderungen"],
            answer: ["Schutz vor Cyber-Angriffen"]
        },

        {
            question: "Was ist ein gutes Passwort?",
            options: ["Ein Name einer bekannten Person", "Eine einfache Zahlenreihe", "Eine Kombination aus Buchstaben, Zahlen und Sonderzeichen", "Ein einfaches Wort"],
            answer: ["Eine Kombination aus Buchstaben, Zahlen und Sonderzeichen"]
        },

        {
            question: "Was ist eine Firewall?",
            options: ["Ein physisches Sicherheitssystem", "Ein Programm zur Erstellung von Passwörtern", "Ein Schutzmechanismus vor unerwünschtem Datenverkehr", "Ein Werkzeug zur Wiederherstellung von Daten"],
            answer: ["Ein Schutzmechanismus vor unerwünschtem Datenverkehr"]
        },

        {
            question: "Was ist eine Datensicherung?",
            options: ["Ein Verfahren zur Vermeidung von Datenverlust", "Ein Prozess zur Entfernung von unerwünschten Daten", "Ein Schutzmechanismus vor unerwünschtem Datenverkehr", "Eine Methode zur Vermeidung von Datenlecks"],
            answer: ["Ein Verfahren zur Vermeidung von Datenverlust"]
        },

        {
            question: "Wie wird ein Drittdienstleister gemäß DSGVO bezeichnet?",
            options: ["Auftragsverarbeiter", "Datenverantwortlicher", "Datenschutzbeauftragter", "Datenempfänger"],
            answer: ["Auftragsverarbeiter"]
        },

        {
            question: "Welche Verpflichtung hat ein Datenverantwortlicher gegenüber einem Datenverarbeiter gemäß DSGVO?",
            options: ["Eine Datenschutz-Folgenabschätzung durchzuführen", "Einen schriftlichen Vertrag abzuschließen", "Eine Datenschutzverletzung zu melden", "Die Datenschutz-Grundverordnung einzuhalten"],
            answer: ["Einen schriftlichen Vertrag abzuschließen"]
        },

        {
            question: "Wofür haftet ein Datenverarbeiter gemäß DSGVO?",
            options: ["Für die Einhaltung der gesamten DSGVO", "Für die Einhaltung der im Vertrag festgelegten Verarbeitungsbedingungen", "Für die Einhaltung der von der betroffenen Person erteilten Einwilligung", "Für die Einhaltung der von der Aufsichtsbehörde festgelegten Anforderungen"],
            answer: ["Für die Einhaltung der im Vertrag festgelegten Verarbeitungsbedingungen"]
        },

        {
            question: "Welche Anforderung muss ein Datenverarbeiter gemäß DSGVO erfüllen, bevor er einen Unterauftragnehmer beauftragt?",
            options: ["Die Zustimmung des Datenverantwortlichen einholen", "Eine Datenschutz-Folgenabschätzung durchführen", "Die betroffenen Personen über den Unterauftragnehmer informieren", "Die Zustimmung der Aufsichtsbehörde einholen"],
            answer: ["Die Zustimmung des Datenverantwortlichen einholen"]
        },

        {
            question: "Was ist ein Verfahrensverzeichnis?",
            options: ["Eine Liste aller Mitarbeiter eines Unternehmens", "Eine Liste aller betrieblichen Prozesse, bei denen personenbezogene Daten verarbeitet werden", "Eine Liste aller Kunden eines Unternehmens", "Eine Liste aller Lieferanten eines Unternehmens"],
            answer: ["Eine Liste aller betrieblichen Prozesse, bei denen personenbezogene Daten verarbeitet werden"]
        },

        {
            question: "Wer ist in der Regel für die Erstellung des Verfahrensverzeichnisses verantwortlich?",
            options: ["Die Datenschutzbehörde", "Der externe Datenschutzbeauftragte", "Der Betriebsrat", "Der Verantwortliche im Unternehmen"],
            answer: ["Der Verantwortliche im Unternehmen"]
        },

        {
            question: "Welche Informationen müssen im Verfahrensverzeichnis enthalten sein?",
            options: ["Name und Anschrift aller Mitarbeiter im Unternehmen", "Verarbeitungszwecke, Kategorien betroffener Personen und Kategorien personenbezogener Daten", "Alle Verträge mit Lieferanten", "Datum und Uhrzeit jeder Verarbeitung von personenbezogenen Daten"],
            answer: ["Verarbeitungszwecke, Kategorien betroffener Personen und Kategorien personenbezogener Daten"]
        },

        {
            question: "Wie oft muss das Verfahrensverzeichnis aktualisiert werden?",
            options: ["Jährlich", "Alle 2 Jahre", "Alle 3 Jahre", "Bei Bedarf und bei Änderungen"],
            answer: ["Bei Bedarf und bei Änderungen"]
        },

        {
            question: "Was ist der Zweck von Double Opt-In?",
            options: ["Verkauf von personenbezogenen Daten", "Zustimmung einholen", "Werbung versenden", "Verträge abschließen"],
            answer: ["Zustimmung einholen"]
        },

        {
            question: "Muss der Empfänger einer E-Mail nach der Anmeldung bestätigen, dass er den Newsletter tatsächlich erhalten möchte?",
            options: ["Ja", "Nein", "Nur wenn er möchte", "Es ist optional"],
            answer: ["Ja"]
        },

        {
            question: "Was passiert, wenn der Empfänger die Anmeldung nicht bestätigt?",
            options: ["Der Empfänger erhält den Newsletter trotzdem.", "Die Anmeldung wird abgelehnt.", "Die Anmeldung wird automatisch bestätigt.", "Der Empfänger muss sich erneut anmelden."],
            answer: ["Die Anmeldung wird abgelehnt."]
        },

        {
            question: "Ist Double Opt-In ein gesetzliches Erfordernis nach der DSGVO?",
            options: ["Ja", "Nein", "Nur für bestimmte Branchen", "Nur in bestimmten Ländern"],
            answer: ["Ja"]
        },

        {
            question: "Wofür haftet der Datenschutzbeauftragte?",
            options: ["Der Datenschutzbeauftragte haftet für Fehler in der Beratung, wenn er seine Aufgaben grob fahrlässig oder vorsätzlich verletzt.", "Der Datenschutzbeauftragte haftet nicht persönlich für Verstöße, die durch das Unternehmen oder die Behörde begangen werden.", "Der Datenschutzbeauftragte haftet nicht für die Entscheidungen der Geschäftsführung"],
            answer: ["Der Datenschutzbeauftragte haftet für Fehler in der Beratung, wenn er seine Aufgaben grob fahrlässig oder vorsätzlich verletzt."]
        }],
    systemanalyse:
        [{ question: "Welche Hauptaufgabe hat ein Application Server?", options: ["Er stellt Speicherplatz für physische Server bereit.", "Er optimiert Schutz von Code und Daten durch serverseitige Logik.", "Er ermöglicht die horizontale Skalierung von Netzwerken.", "Er dient ausschließlich der Benutzerverwaltung."], answer: ["Er stellt Speicherplatz für physische Server bereit."] },
        { question: "Was ist das Hauptziel des Client-Managements?", options: ["Die Reduzierung der Netzwerklatenz.", "Die Optimierung der menschlichen Schnittstelle.", "Die zentrale Verwaltung und Optimierung der Client-Infrastruktur.", "Die Einführung neuer Netzwerkprotokolle."], answer: ["Die Optimierung der menschlichen Schnittstelle."] },
        { question: "Was beschreibt die Client-Server-Architektur am besten?", options: ["Sie ermöglicht die Skalierung von Hardware.", "Sie stellt sicher, dass Clients unabhängig vom Server arbeiten.", "Sie teilt Aufgaben zwischen Clients und Servern in einem Netzwerk auf.", "Sie ist ein Lizenzmodell für Softwareprodukte."], answer: ["Sie stellt sicher, dass Clients unabhängig vom Server arbeiten."] },
        { question: "Was bedeutet 'Infrastructure as a Service' (IaaS)?", options: ["Die Bereitstellung von Softwareentwicklungsumgebungen.", "Die Nutzung physischer Server vor Ort.", "Die bedarfsgerechte Bereitstellung von Ressourcen wie Speicher und Netzwerk.", "Die Implementierung von Cloud-Anwendungen auf Basis von PaaS."], answer: ["Die Nutzung physischer Server vor Ort."] },
        { question: "Was ist das Ziel des Konfigurationsmanagements?", options: ["Softwarelizenzen zu verwalten.", "IT-Systeme in einem definierten Zustand zu halten.", "Netzwerkgeräte ohne Benutzerinteraktion zu betreiben.", "Systeme ausschließlich vor Angriffen zu schützen."], answer: ["Softwarelizenzen zu verwalten."] },
        { question: "Wofür dient ein Lastenheft in einem Projekt?", options: ["Zur Definition von Softwarelizenzen.", "Als Antwort auf das Pflichtenheft.", "Zur Spezifikation der Anforderungen des Kunden.", "Zur Festlegung der Serverarchitektur."], answer: ["Als Antwort auf das Pflichtenheft."] },
        { question: "Wie unterscheidet sich MTBF von MTTF?", options: ["MTBF misst die Zeit bis zum ersten Ausfall, MTTF die Reparaturzeit.", "MTBF misst die durchschnittliche Zeit zwischen Ausfällen, MTTF die Zeit bis zum ersten Ausfall.", "MTBF beschreibt die Stabilität des Systems, MTTF den Energieverbrauch.", "MTBF ist ein Maß für Effizienz, MTTF für Benutzerfreundlichkeit."], answer: ["MTBF misst die Zeit bis zum ersten Ausfall, MTTF die Reparaturzeit."] },
        { question: "Was ist charakteristisch für Open-Source-Software?", options: ["Sie ist immer kostenlos.", "Der Quellcode ist öffentlich einsehbar und veränderbar.", "Sie wird ausschließlich von kommerziellen Unternehmen entwickelt.", "Sie ist nur für den privaten Gebrauch zugelassen."], answer: ["Sie ist immer kostenlos."] },
        { question: "Was beschreibt Platform as a Service (PaaS)?", options: ["Eine Plattform, die nur Infrastruktur bereitstellt.", "Eine Cloud-Plattform zur Bereitstellung und Entwicklung von Anwendungen.", "Ein Service zur Optimierung von Netzwerksicherheit.", "Eine zentrale Verwaltung von Client-Infrastrukturen."], answer: ["Eine Plattform, die nur Infrastruktur bereitstellt."] },
        { question: "Wofür steht die Abkürzung QoS (Quality of Service)?", options: ["Für die Verwaltung von Dienstleistungsverträgen.", "Für die Qualität und Zuverlässigkeit eines Dienstes gemäß Nutzeranforderungen.", "Für die technische Skalierung von Servern in der Cloud.", "Für die Verwaltung von Softwarelizenzen in einem Netzwerk."], answer: ["Für die Verwaltung von Dienstleistungsverträgen."] },
        { question: "Was ist der Hauptvorteil von Software as a Service (SaaS)?", options: ["Die direkte Verbindung zwischen Client und Hardware.", "Die Auslagerung der Wartung und Aktualisierung an den Anbieter.", "Die physische Lagerung der Daten beim Nutzer.", "Die vollständige Kontrolle über den Quellcode durch den Nutzer."], answer: ["Die direkte Verbindung zwischen Client und Hardware."] },
        { question: "Was ist eine virtuelle Maschine (VM)?", options: ["Ein physischer Server mit zusätzlichen Sicherheitsfunktionen.", "Ein Rechner, der mehrere virtuelle Server gleichzeitig betreiben kann.", "Eine Software, die wie ein physischer Server agiert, aber virtuell ist.", "Ein Gerät zur Lizenzierung von Cloud-Diensten."], answer: ["Ein Rechner, der mehrere virtuelle Server gleichzeitig betreiben kann."] }
        ],
    Linux: [
        {
            question: "Welches Programm wird nach dem BIOS während des System-Bootvorgangs ausgeführt?",
            options: ["Bootloader", "init-Programm", "Kernel"],
            answer: ["Bootloader"]
        },
        {
            question: "Was ist der Name der Konfigurationsdatei für den GNU GRUB Bootloader?",
            options: ["grub.cfg", "grubenv"],
            answer: ["grub.cfg"]
        },
        {
            question: "Mit welchem Befehl können Sie vom graphical.target zum multi-user.target wechseln?",
            options: ["systemctl isolate multi-user.target", "systemctl isolate graphical.target"],
            answer: ["systemctl isolate multi-user.target"]
        },
        {
            question: "Was ist der Zweck von Runlevel 0 in Linux?",
            options: ["Neustart", "Shutdown (Herunterfahren)", "Graphischer Modus (graphical.target)"],
            answer: ["Shutdown (Herunterfahren)"]
        },
        {
            question: "Mit welchem Befehl kann man die Linux-Maschine herunterfahren?",
            options: ["shutdown", "shutdown -r", "systemctl poweroff", "reboot"],
            answer: ["shutdown", "systemctl poweroff"]
        },
        {
            question: "Mit welchem Befehl können Sie die Linux-Maschine neu starten?",
            options: ["poweroff", "telinit 0", "reboot", "systemctl halt", "shutdown -r"],
            answer: ["reboot", "shutdown -r"]
        },
        {
            question: "Was passiert, wenn die Quelldatei eines symbolischen Links gelöscht wird?",
            options: ["Der symbolische Link bleibt funktionsfähig.", "Der symbolische Link wird als 'broken link' angezeigt.", "Der symbolische Link wird automatisch zu einem Hardlink."],
            answer: ["Der symbolische Link wird als 'broken link' angezeigt."]
        },
        {
            question: "Welcher Befehl kann versteckte Dateien und Ordner auflisten?",
            options: ["ls -l", "ls -la", "ls -lh"],
            answer: ["ls -la"]
        },
        {
            question: "Mit welchem Befehl können Sie eine Datei umbenennen?",
            options: ["cp", "rm", "mv"],
            answer: ["mv"]
        },
        {
            question: "Welcher Befehl wird verwendet, um ein Hardlink zu erstellen?",
            options: ["ls", "ln", "ln -s"],
            answer: ["ln"]
        },
        {
            question: "Welcher Befehl wird verwendet, um ein Softlink (symbolischer Link) zu erstellen?",
            options: ["ls", "ln", "ln -s"],
            answer: ["ln -s"]
        },
        {
            question: "Welcher Befehl wird verwendet, um Dateien zu löschen?",
            options: ["delete", "rm", "erase"],
            answer: ["rm"]
        },
        {
            question: "Welcher Befehl wird verwendet, um leere Verzeichnisse zu löschen?",
            options: ["rdir", "remove", "rmdir"],
            answer: ["rmdir"]
        },
        {
            question: "Welcher Befehl wird verwendet, um den Inhalt von Verzeichnissen aufzulisten?",
            options: ["mkdir", "ln", "ls"],
            answer: ["ls"]
        },
        {
            question: "Mit welchem Befehl können Sie Dateien/Ordner verschieben?",
            options: ["mv", "cp", "rm -rf"],
            answer: ["mv"]
        },
        {
            question: "Mit welchem Befehl können Sie Dateien/Ordner kopieren?",
            options: ["mv", "cp", "rm -rf"],
            answer: ["cp"]
        },
        {
            question: "Welcher Befehl wird verwendet, um Dateien/Ordner zu archivieren?",
            options: ["tar -cf", "tar -tvf", "tar -xvf"],
            answer: ["tar -cf"]
        },
        {
            question: "Welcher Befehl wird verwendet, um Archive zu extrahieren?",
            options: ["tar -cf", "tar -tvf", "tar -xvf"],
            answer: ["tar -xvf"]
        },
        {
            question: "Welcher Befehl wird verwendet, um Archive zu komprimieren?",
            options: ["gzip", "gunzip", "tar -cf"],
            answer: ["gzip"]
        },
        {
            question: "Welcher Befehl wird verwendet, um komprimierte Archive zu extrahieren?",
            options: ["gzip", "gunzip", "tar -cf"],
            answer: ["gunzip"]
        },
        {
            question: "Was bedeutet der Befehl chmod 775 datei?",
            options: ["User/Group/Others: rwx/rwx/rw-", "User/Group/Others: rwx/rwx/r-x", "User/Group/Others: rwx/rwx/r--"],
            answer: ["User/Group/Others: rwx/rwx/r-x"]
        },
        {
            question: "Mit welchem Befehl kann man einen Prozess beenden?",
            options: ["renice", "nice", "kill"],
            answer: ["kill"]
        },
        {
            question: "Welcher Befehl wird verwendet, um den 'Niceness'-Wert eines Prozesses zu ändern?",
            options: ["renice -10 -p 2398", "nice -10 2398", "kill 2398"],
            answer: ["renice -10 -p 2398"]
        },
        {
            question: "Mit dem Befehl jobs kann man:",
            options: ["Prozesse, die der angemeldete Benutzer gestartet hat, auflisten.", "Prozesse beenden.", "Den 'Niceness'-Wert eines Prozesses ändern."],
            answer: ["Prozesse, die der angemeldete Benutzer gestartet hat, auflisten."]
        },
        {
            question: "Mit welchem Befehl wird eine Umgebungsvariable bekannt gemacht?",
            options: ["export", "unset"],
            answer: ["export"]
        },
        {
            question: "Wie werden Umgebungsvariablen standardmäßig geschrieben?",
            options: ["Großgeschrieben", "Kleingeschrieben"],
            answer: ["Großgeschrieben"]
        },
        {
            question: "Was bedeutet !/bin/bash in einem Skript?",
            options: ["Shebang", "Hashbang", "Shehash"],
            answer: ["Shebang"]
        },
        {
            question: "In welchem Jahr begann die Entwicklung von UNIX?",
            options: ["1991", "1960", "1969"],
            answer: ["1969"]
        },
        {
            question: "Welche Optionen können mit dem yum-Befehl verwendet werden, um das System zu aktualisieren?",
            options: ["install", "update", "upgrade", "check-update"],
            answer: ["update", "upgrade"]
        },
        {
            question: "Mit diff können zwei Dateien verglichen werden. Auf welcher Basis erfolgt der Vergleich?",
            options: ["Byte für Byte", "Zeile für Zeile"],
            answer: ["Zeile für Zeile"]
        }
    ]

};