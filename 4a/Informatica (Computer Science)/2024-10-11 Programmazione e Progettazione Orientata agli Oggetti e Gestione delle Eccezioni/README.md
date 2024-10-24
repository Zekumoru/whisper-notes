# Programmazione e Progettazione Orientata agli Oggetti e Gestione delle Eccezioni

## Indice

- [Prima Parte: Programmazione e Progettazione Orientata agli Oggetti](#prima-parte-programmazione-e-progettazione-orientata-agli-oggetti)
  - [Gerarchia ed Ereditarietà](#gerarchia-ed-ereditarietà)
  - [Polimorfismo](#polimorfismo)
  - [Classi Astratte e Interfacce](#classi-astratte-e-interfacce)
  - [Esempio: Figure Geometriche](#esempio-figure-geometriche)
  - [Importanza della Progettazione](#importanza-della-progettazione)
  - [Metodi di Studio e Applicazione](#metodi-di-studio-e-applicazione)
  - [Gestione delle Eccezioni](#gestione-delle-eccezioni)
  - [Conclusione](#conclusione)
- [Seconda Parte: Gestione delle Eccezioni in Programmazione](#seconda-parte-gestione-delle-eccezioni-in-programmazione)
  - [Introduzione alle Eccezioni](#introduzione-alle-eccezioni)
  - [Concetto di Eccezione](#concetto-di-eccezione)
  - [Esempio Pratico: Stampa di un Documento](#esempio-pratico-stampa-di-un-documento)
  - [Parole Chiave delle Eccezioni](#parole-chiave-delle-eccezioni)
  - [Flusso di Gestione delle Eccezioni](#flusso-di-gestione-delle-eccezioni)
  - [Propagazione delle Eccezioni](#propagazione-delle-eccezioni)
  - [Dettagli sull'Utilizzo di try, throw e catch](#dettagli-sullutilizzo-di-try-throw-e-catch)
  - [Interazione tra Sviluppatore e Utente della Classe/Funzione](#interazione-tra-sviluppatore-e-utente-della-classefunzione)
  - [Tipi di Eccezioni](#tipi-di-eccezioni)
  - [Importanza della Collaborazione e della Documentazione](#importanza-della-collaborazione-e-della-documentazione)
  - [Conclusione e Riflessioni Finali](#conclusione-e-riflessioni-finali)

## Prima Parte: Programmazione e Progettazione Orientata agli Oggetti

**Audio: <https://1drv.ms/u/c/5809fb3d0d283a6c/ERn5LZ3zWPdGjIAm6m500R8BQUAmssz8lgrVjVG4T6AK6g?e=m2wP4L>**

### Gerarchia ed Ereditarietà

**[00:15:00 - 00:18:14]**

- **Concetto di Gerarchia**
  - La gerarchia esprime il concetto di ereditarietà.
  - Le classi figlie ereditano attributi e metodi dalle classi padre.
  - Ogni linguaggio ha regole sintattiche specifiche su cosa è ereditabile.

### Polimorfismo

**[00:18:15 - 00:20:01]**

- **Definizione di Polimorfismo**
  - Un oggetto può assumere forme diverse all'interno di una gerarchia.
  - Richiede la presenza di una gerarchia di classi.
- **Implementazione**
  - In C++, si utilizza il concetto di metodi virtuali.
  - Non tutti i linguaggi richiedono gli stessi strumenti per implementare il polimorfismo.

### Classi Astratte e Interfacce

**[00:20:02 - 00:24:07]**

- **Classi Astratte**
  - Contengono metodi puri senza implementazione (funzioni virtuali pure).
  - Non possono essere istanziate direttamente.
  - Servono come base per classi derivate che implementano i metodi.
- **Interfacce**
  - In alcuni linguaggi, come Java, le interfacce sono classi con tutti i metodi puri.
  - Definiscono un contratto che le classi implementatrici devono rispettare.

### Esempio: Figure Geometriche

**[00:24:08 - 00:31:04]**

- **Classe Astratta "FiguraGeometrica"**
  - Metodi puri: `calcolaPerimetro()` e `calcolaArea()`.
  - Non è possibile calcolare area e perimetro senza specificare la forma.
- **Classi Derivate**
  - Esempi: `Triangolo`, `Quadrato`, `Cerchio`.
  - Implementano i metodi puri della classe astratta con formule specifiche.

### Importanza della Progettazione

**[00:31:05 - 00:33:03]**

- **Applicazione Corretta dei Concetti**
  - Utilizzare ereditarietà, polimorfismo e classi astratte per creare codice modulare.
  - Evitare una programmazione superficiale senza considerare l'estensibilità.
- **Vantaggi**
  - Facilità nell'aggiungere nuove funzionalità.
  - Codice più mantenibile e organizzato.

### Metodi di Studio e Applicazione

**[00:33:04 - 00:40:14]**

- **Utilizzo di ChatGPT**
  - Generare problemi pratici per applicare i concetti teorici.
  - Richiedere esempi di difficoltà crescente.
- **Approccio Collaborativo**
  - Lavorare in gruppo per confrontare soluzioni.
  - Sviluppare codice insieme per una migliore comprensione.

### Gestione delle Eccezioni

**[00:40:15 - 00:47:01]**

- **Importanza nelle Applicazioni Moderne**
  - Essenziale in linguaggi come Java.
  - Permette di separare la logica principale dalla gestione degli errori.
- **Benefici**
  - Il programmatore si concentra sul core dell'applicazione.
  - Migliora l'efficienza e la qualità del codice.
- **Analogia con CSS e HTML**
  - Così come i CSS separano lo stile dal contenuto in HTML, le eccezioni separano la logica dall'handling degli errori.

### Conclusione

**[00:47:02 - 00:54:42]**

- **Adottare un Approccio Professionale**
  - Pensare in termini di progettazione efficiente.
  - Anticipare possibili eccezioni e gestirle adeguatamente.
- **Importanza della Pratica Costante**
  - Applicare i concetti in situazioni reali.
  - Utilizzare strumenti e tecniche apprese per risolvere problemi concreti.

## Seconda Parte: Gestione delle Eccezioni in Programmazione

**Audio: <https://1drv.ms/u/c/5809fb3d0d283a6c/EZYZ-kvRbmFCpY91gqKrEZUBOd1-fr6uVthiMDXYSxR0gQ?e=ytfppT>**

### Introduzione alle Eccezioni

**[00:00:06 - 00:04:34]**

- **Perché esistono le Eccezioni?**
  - **Motivazione Storica**: Le eccezioni sono state introdotte per separare la gestione degli errori dalla logica principale del codice.
  - **Obiettivo**: Permettere ai programmatori di concentrarsi sul core dell'applicazione senza essere distratti dalla gestione dettagliata degli errori.

- **Domande Chiave**
  - Perché il concetto di eccezione è stato introdotto?
  - Qual è il problema che le eccezioni mirano a risolvere?

### Concetto di Eccezione

**[00:04:35 - 00:07:01]**

- **Definizione**
  - Un'eccezione rappresenta una situazione anomala o un errore che si verifica durante l'esecuzione di un programma.
  - Viene utilizzata per informare chi utilizza una classe o una funzione che potrebbe verificarsi un problema non gestito internamente.

- **Comunicazione tra Sviluppatore e Utente**
  - Lo sviluppatore avvisa l'utente delle potenziali eccezioni che possono essere lanciate.
  - È responsabilità dell'utente gestire queste eccezioni.

### Esempio Pratico: Stampa di un Documento

**[00:07:02 - 00:10:06]**

- **Possibili Eccezioni**
  - Stampante spenta.
  - Mancanza di carta.
  - Toner esaurito.

- **Gestione delle Eccezioni**
  - Lo sviluppatore della funzione di stampa lancia un'eccezione quando si verifica uno di questi problemi.
  - L'utente deve intercettare e gestire l'eccezione, decidendo come informare l'utente finale.

### Parole Chiave delle Eccezioni

**[00:10:07 - 00:12:45]**

- **try**
  - Utilizzato per racchiudere il codice che potrebbe generare un'eccezione.
  - Indica l'inizio di un blocco di codice da monitorare.

- **throw**
  - Utilizzato per lanciare un'eccezione quando si verifica un errore.
  - Può lanciare valori di vari tipi, come interi, stringhe o oggetti.

- **catch**
  - Utilizzato per intercettare e gestire l'eccezione lanciata.
  - Può esserci più di un catch per gestire diversi tipi di eccezioni.

### Flusso di Gestione delle Eccezioni

**[00:12:46 - 00:17:00]**

- **Lancio dell'Eccezione**
  - Quando si verifica un errore, la funzione lancia un'eccezione usando `throw`.

- **Interruzione dell'Esecuzione**
  - L'esecuzione del blocco `try` si interrompe nel punto in cui l'eccezione viene lanciata.
  - Il controllo passa al blocco `catch` corrispondente.

- **Intercettazione dell'Eccezione**
  - Se c'è un `catch` corrispondente, l'eccezione viene gestita.
  - Se non c'è, l'eccezione si propaga verso l'alto, cercando un `catch` in un contesto superiore.

### Propagazione delle Eccezioni

**[00:17:01 - 00:22:00]**

- **Come si Propagano le Eccezioni**
  - Se l'eccezione non viene intercettata nel contesto attuale, si propaga ai contesti esterni.
  - Se non viene mai intercettata, può causare la terminazione del programma.

- **Importanza dell'Intercettazione**
  - È fondamentale prevedere e gestire le eccezioni per evitare crash dell'applicazione.
  - In alcuni linguaggi, come Java, la mancata gestione delle eccezioni può causare errori di compilazione.

### Dettagli sull'Utilizzo di try, throw e catch

**[00:22:01 - 00:28:00]**

- **Blocco try**
  - Racchiude il codice che potrebbe lanciare un'eccezione.
  - È il punto di monitoraggio delle possibili anomalie.

- **Blocco catch**
  - Segue immediatamente il blocco `try`.
  - Specifica il tipo di eccezione da intercettare e come gestirla.

- **Esempi di Codice**
  - Illustrazione di come utilizzare più blocchi `catch` per gestire diverse eccezioni.
  - Discussione su come il flusso del programma cambia in presenza di eccezioni.

### Interazione tra Sviluppatore e Utente della Classe/Funzione

**[00:28:01 - 00:31:22]**

- **Responsabilità dello Sviluppatore**
  - Documentare le possibili eccezioni che una funzione o classe può lanciare.
  - Utilizzare `throw` per segnalare le anomalie senza gestirle internamente.

- **Responsabilità dell'Utente**
  - Utilizzare `try` e `catch` per gestire le eccezioni lanciate.
  - Decidere come reagire alle diverse eccezioni (ad esempio, mostrando messaggi all'utente finale).

### Tipi di Eccezioni

**[00:31:23 - 00:35:00]**

- **Eccezioni Predefinite**
  - Molti linguaggi offrono una gerarchia di eccezioni predefinite.
  - Esempi: `std::exception` in C++, che può essere estesa per creare eccezioni personalizzate.

- **Eccezioni Personalizzate**
  - Gli sviluppatori possono definire le proprie classi di eccezioni.
  - Questo permette di fornire informazioni più specifiche sull'errore.

### Importanza della Collaborazione e della Documentazione

**[00:35:01 - 00:37:00]**

- **Collaborazione tra Programmatori**
  - Quando più persone lavorano sullo stesso progetto, è essenziale comunicare chiaramente le eccezioni possibili.
  - La documentazione diventa cruciale per evitare malintesi.

- **Buone Pratiche**
  - Sempre gestire le eccezioni note.
  - Utilizzare nomi significativi per le eccezioni.
  - Fornire messaggi d'errore chiari.

### Conclusione e Riflessioni Finali

**[00:37:01 - 00:38:10]**

- **Approfondimento**
  - Si incoraggia a esplorare ulteriormente il mondo delle eccezioni.
  - Comprendere le eccezioni aiuta a scrivere codice più robusto e affidabile.

- **Importanza dell'Esperienza Pratica**
  - Leggere e sperimentare con codice reale aiuta a consolidare la comprensione.
  - Collaborare con altri sviluppatori offre nuove prospettive e sfide.
