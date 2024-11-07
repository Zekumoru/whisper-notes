# Implementazione Classe Frazione

Audio: <https://1drv.ms/u/c/5809fb3d0d283a6c/ERH1iGdstZZDoRf682L9QvEBGcUJ0Ewnv1DpY40z9x5GcA?e=RtDkUX>

## Indice

- [Introduzione all'Implementazione della Classe Frazione](#introduzione-allimplementazione-della-classe-frazione)
- [Definizione della Classe Frazione e Costruttori](#definizione-della-classe-frazione-e-costruttori)
- [Implementazione delle Operazioni Aritmetiche](#implementazione-delle-operazioni-aritmetiche)
- [Semplificazione delle Frazioni e Funzioni Ausiliarie](#semplificazione-delle-frazioni-e-funzioni-ausiliarie)
- [Gestione delle Eccezioni e Validazione dei Dati](#gestione-delle-eccezioni-e-validazione-dei-dati)
- [Best Practices e Tecniche di Debugging](#best-practices-e-tecniche-di-debugging)

## Introduzione all'Implementazione della Classe Frazione

**[00:00:00 - 00:18:07]**

- **Concetti Fondamentali delle Frazioni**
  - Revisione dei concetti matematici di frazione, numeratore e denominatore.
  - Importanza delle frazioni in matematica e nelle applicazioni pratiche.
  - Discussione sulla rappresentazione delle frazioni nei programmi informatici.

- **Obiettivi della Lezione**
  - Introduzione alla programmazione orientata agli oggetti con C++.
  - Pianificazione dell'implementazione di una classe `Frazione` che possa eseguire operazioni aritmetiche.
  - Preparazione per l'implementazione delle funzioni membro e dei costruttori.

## Definizione della Classe Frazione e Costruttori

**[00:18:08 - 00:33:00]**

- **Proprietà della Classe**
  - Dichiarazione delle variabili membro: numeratore e denominatore come interi.
  - Scelta della visibilità delle proprietà (`private`) per l'incapsulamento dei dati.
  - Importanza di assicurare che il denominatore non sia zero per evitare errori matematici.

- **Implementazione dei Costruttori**
  - **Costruttore di Default**
    - Inizializza il numeratore a 0 e il denominatore a 1.
    - Crea una frazione che rappresenta lo zero.
  - **Costruttore con Parametri**
    - Accetta uno o due parametri con valori di default.
    - Gestisce casi in cui l'utente fornisce solo il numeratore, impostando il denominatore a 1 di default.
    - Verifica che il denominatore non sia zero, lanciando eccezioni se necessario.

- **Uso dei Parametri di Default**
  - Discussione sull'uso dei parametri di default nelle dichiarazioni e non nelle definizioni.
  - Problemi comuni legati all'inizializzazione duplicata dei valori di default.

## Implementazione delle Operazioni Aritmetiche

**[00:33:01 - 00:54:40]**

- **Somma e Sottrazione di Frazioni**
  - Applicazione delle formule matematiche per la somma e la sottrazione.
  - Calcolo del denominatore comune attraverso il prodotto dei denominatori.
  - Adeguamento dei numeratori in base al nuovo denominatore.
  - Implementazione di metodi `somma()` e `sottrai()` che restituiscono nuove frazioni semplificate.

- **Moltiplicazione e Divisione di Frazioni**
  - Moltiplicazione diretta dei numeratori e dei denominatori per il metodo `moltiplica()`.
  - Implementazione della divisione come moltiplicazione per il reciproco nel metodo `dividi()`.
  - Gestione dei casi speciali, come la divisione per zero.

- **Overloading degli Operatori**
  - Introduzione all'overloading degli operatori per facilitare l'uso degli oggetti frazione.
  - Implementazione degli operatori `+`, `-`, `*`, `/` per operare direttamente sulle frazioni.

## Semplificazione delle Frazioni e Funzioni Ausiliarie

**[00:54:41 - 01:08:30]**

- **Calcolo del Massimo Comun Divisore (MCD)**
  - Implementazione dell'algoritmo di Euclide per trovare l'MCD.
  - Uso dell'MCD per semplificare le frazioni ai minimi termini.

- **Semplificazione Automatica vs Manuale**
  - Discussione sulla possibilità di semplificare automaticamente le frazioni dopo ogni operazione.
  - Pro e contro della semplificazione automatica rispetto a quella su richiesta dell'utente.

- **Implementazione della Semplificazione**
  - Creazione di un metodo `semplifica()` chiamato all'interno dei costruttori e dei metodi aritmetici.
  - Assicurarsi che ogni frazione sia sempre nella forma più semplice.

## Gestione delle Eccezioni e Validazione dei Dati

**[01:08:31 - 01:21:20]**

- **Creazione di Classi di Eccezione Personalizzate**
  - Definizione di una classe `DivisionePerZeroException` derivata da `std::exception`.
  - Overriding del metodo `what()` per fornire un messaggio di errore specifico.

- **Validazione nei Costruttori e Metodi**
  - Controllo dei valori dei parametri nei costruttori per evitare denominatori zero.
  - Lancio di eccezioni personalizzate quando si verificano condizioni di errore.
  - Gestione delle eccezioni nel codice chiamante per prevenire crash dell'applicazione.

## Best Practices e Tecniche di Debugging

**[01:21:21 - 01:28:49]**

- **Programmazione Incrementale e Test**
  - Importanza di testare ogni parte del codice man mano che viene sviluppata.
  - Scrivere piccoli blocchi di codice e verificarne immediatamente il funzionamento.
  - Utilizzo di un metodo `main` per creare istanze di prova e testare i costruttori e i metodi.

- **Visibilità e Incapsulamento**
  - Uso appropriato dei modificatori di accesso per proteggere le variabili membro.
  - Fornitura di metodi pubblici per l'accesso controllato ai dati privati.

- **Discussione su Problemi Comuni**
  - Errori frequenti come l'errata definizione di costruttori e metodi.
  - Importanza di seguire le regole di sintassi e semantica del linguaggio C++.
  - Suggerimenti per risolvere errori di compilazione e runtime.
