/* @Include JavaScript and CSS Files */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
/* @Process Form */
function processForm(formObject) {
  var url = "https://docs.google.com/spreadsheets/d/1rhvV6vyQSNv3uSllo4QrEEU5AnJKGPVj5OPh4r-t6kA/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  
  ws.appendRow([formObject.first_name,
                formObject.last_name,
                formObject.gender,
                formObject.dateOfBirth,
                formObject.email,
                formObject.phone]);
}