# Duplicating the Active Document

```javascript
// Duplicates any selected items from
// the active document into a new document.

var newItem;
var docSelected = app.activeDocument.selection;

if (docSelected.length > 0) {
    // Create a new document and move the selected items to it.
    var newDoc = app.documents.add();
    if (docSelected.length > 0) {
        for (var i = 0; i < docSelected.length; i++) {
        docSelected[i].selected = false;
        newItem = docSelected[i].duplicate(newDoc, ElementPlacement.PLACEATEND);
        }
    } else {
        docSelected.selected = false;
        newItem = docSelected.parent.duplicate(newDoc, ElementPlacement.PLACEATEND);
    }
} else {
    alert("Please select one or more art objects");
}
```
