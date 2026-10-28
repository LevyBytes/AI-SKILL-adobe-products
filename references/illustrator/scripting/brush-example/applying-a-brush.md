# Applying a Brush

```javascript
// Duplicates and groups all items in the current selection,
// then applies the same brush to each item in the group

if (app.documents.length > 0) {
    var docSelection = app.activeDocument.selection;
    if (docSelection.length > 0) {
        var newGroup = app.activeDocument.groupItems.add();

        for (var i = 0; i < docSelection.length; i++) {
            var newItem = docSelection[i].duplicate();
            newItem.moveToBeginning(newGroup);
        }

        var brush = app.activeDocument.brushes[1];
        brush.applyTo(newGroup);
    }
}
```
