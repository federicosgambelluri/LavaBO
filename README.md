# 🧺 LavaBO – Gestione prenotazioni lavanderia studenti

LavaBO è una web app semplice e intuitiva per gestire la prenotazione delle lavatrici e dell’asciugatrice nello studentato, suddivisa per turni giornalieri.

---

## 🚀 Funzionalità principali

- ✅ Interfaccia settimanale con giorni e orari ben visibili
- ✅ Tre macchine gestite separatamente: **Lavatrice 1**, **Lavatrice 2**, **Asciugatrice**
- ✅ Prenotazioni a orario fisso: ogni **ora dalle 08:00 alle 23:00** + **ultimo turno alle 23:55**
- ✅ Nome utente in formato standard (`APP9`, `APP12`, ecc.) senza spazi
- ✅ Possibilità di **eliminare solo le proprie prenotazioni**
- ✅ Visualizzazione dinamica della **settimana corrente**
- ✅ Pulsante **"Esci"** per tornare al login
- ✅ Compatibile con **Google Sheets** e **Google Apps Script**

---

## 🗂️ Struttura del progetto

- `Index.html` – interfaccia utente e logica front-end
- `Code.gs` – script lato server per Google Apps Script (gestione prenotazioni)
- `Google Sheet` – foglio di calcolo collegato con 3 fogli: `Lavatrice1`, `Lavatrice2`, `Asciugatrice`

---

## 🛠️ Come funziona

1. L’utente accede inserendo il proprio nome (es. `APP9`, gli spazi vengono rimossi e tutto diventa maiuscolo)
2. Viene mostrata la settimana corrente (es. dal 08/04 al 14/04)
3. Ogni tabella rappresenta una macchina: si possono cliccare solo i turni liberi
4. Se si clicca su un turno già prenotato da **sé stessi**, appare la possibilità di eliminarlo

---

## ⏲️ Reset automatico settimanale

Ogni **lunedì**, uno script elimina le prenotazioni della settimana precedente e svuota i fogli, lasciandoli pronti per la nuova settimana.

---

## 🧩 Requisiti

- Un account Google (per gestirlo, non per utilizzarlo)
- Un Google Spreadsheet con i fogli:
  - `Lavatrice1`
  - `Lavatrice2`
  - `Asciugatrice`
- Accesso a Google Apps Script per:
  - Creare il file `Code.gs`
  - Caricare l’HTML in `Index.html`
  - Pubblicare la Web App come `Chiunque` + `Esegui come me`

---

## 📸 Screenshot

<img width="1703" alt="Screenshot 2025-04-08 alle 14 43 20" src="https://github.com/user-attachments/assets/76d6efb4-7127-4d6e-ae88-6aeef22de0e4" />

<img width="1704" alt="Screenshot 2025-04-08 alle 14 43 02" src="https://github.com/user-attachments/assets/5c819945-f165-40c3-a8b8-14d900406231" />


---

## 👩‍💻 Creato da

**Federico Sgambelluri & Dalia Valeria Barone** – 2025  
Con passione per la semplicità, la funzionalità e l’organizzazione 💖

---
