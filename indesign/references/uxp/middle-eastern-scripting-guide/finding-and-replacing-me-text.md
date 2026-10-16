# Finding and replacing ME text

InDesign scripting can search for Middle Eastern text and replace it. The following sample finds and replaces words in Middle Eastern text. MENAFindAndReplaceText contains the complete version.

```js
const { app, NothingEnum } = require("indesign");
let myDocument = app.documents.add();
//Clear the find/change text preferences.
app.findTextPreferences = NothingEnum.nothing;
app.changeTextPreferences = NothingEnum.nothing;
//Search the document for the string "Adobe".
app.findTextPreferences.findWhat = "Ø£Ø¯ÙˆØ¨ÙŠ";
//Set the find options.
app.findChangeTextOptions.caseSensitive = false;
app.findChangeTextOptions.includeFootnotes = false;
app.findChangeTextOptions.includeHiddenLayers = false;
app.findChangeTextOptions.includeLockedLayersForFind = false;
app.findChangeTextOptions.includeLockedStoriesForFind = false;
app.findChangeTextOptions.includeMasterPages = false;
app.findChangeTextOptions.wholeWord = false;
var myFoundItems = myDocument.findText(); //Converting an InDesign script to InDesign Server
app.findTextPreferences = NothingEnum.nothing;
app.changeTextPreferences = NothingEnum.nothing;
//Replace the text in myString
for (let i = 0; i < myFoundItems.length; i++) {
  myFoundItems[i].contents = "Adobe";
}
```
