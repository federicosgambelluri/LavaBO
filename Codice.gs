const SHEET_NAMES = ["Lavatrice1", "Lavatrice2", "Asciugatrice"];

// Mostra la pagina HTML
function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index");
}

// Recupera prenotazioni per ogni foglio
function getPrenotazioniLavatrice1() {
  return getPrenotazioniFromSheet("Lavatrice1");
}
function getPrenotazioniLavatrice2() {
  return getPrenotazioniFromSheet("Lavatrice2");
}
function getPrenotazioniAsciugatrice() {
  return getPrenotazioniFromSheet("Asciugatrice");
}

// Funzione comune per leggere le prenotazioni
function getPrenotazioniFromSheet(sheetName) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  const data = sheet.getDataRange().getValues();
  return data.slice(1).map(row => ({
    giorno: row[0],
    orario: row[1],
    utente: row[2]
  }));
}

// Salva una nuova prenotazione nel foglio corretto
function postReservation(macchina, giorno, orario, utente) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(macchina);
  sheet.appendRow([giorno, orario, utente]);
}

function resetSettimanaLavanderia() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  SHEET_NAMES.forEach(sheetName => {
    const sheet = ss.getSheetByName(sheetName);
    if (sheet) {
      const lastRow = sheet.getLastRow();
      if (lastRow > 1) {
        sheet.deleteRows(2, lastRow - 1);
      }
    }
  });
}



function cancellaPrenotazione(macchina, giorno, orario, utente) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(macchina);
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === giorno && data[i][1] === orario && data[i][2] === utente) {
      sheet.deleteRow(i + 1);
      return;
    }
  }
}
