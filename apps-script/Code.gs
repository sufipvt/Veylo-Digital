// Google Apps Script, bound to the "Veylo Leads" sheet.
// Setup: Extensions → Apps Script → paste this → Project Settings → Script properties:
//   SECRET = a long random string (same as SHEET_SECRET in Cloudflare)
//   NOTIFY = the Gmail address that should receive lead alerts
// Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone. Copy the URL into SHEET_URL.
const COLS = ['Timestamp', 'Name', 'Phone', 'Email', 'Type', 'Company', 'City', 'Services', 'Budget', 'Message', 'Source', 'Status'];

function doPost(e) {
  const p = PropertiesService.getScriptProperties();
  const d = JSON.parse(e.postData.contents);
  if (d.secret !== p.getProperty('SECRET')) return ContentService.createTextOutput('forbidden');

  const sheet = SpreadsheetApp.getActive().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(COLS);
  sheet.appendRow([new Date(), d.name, d.phone, d.email, d.type, d.company, d.city, d.services, d.budget || '', d.message, d.source, 'New']);

  MailApp.sendEmail({
    to: p.getProperty('NOTIFY'),
    subject: `New lead: ${d.name} (${d.type}, ${d.city || 'city not given'})`,
    body: `${d.name}\nPhone: ${d.phone}\nEmail: ${d.email || '-'}\nCompany: ${d.company || '-'}\nServices: ${d.services || '-'}\n\n${d.message || ''}\n\nSource: ${d.source}\nWhatsApp: https://wa.me/${String(d.phone).replace(/\D/g, '')}`,
  });
  return ContentService.createTextOutput('ok');
}
