# Graphic style application example

```javascript
// Duplicates each path item in the selection, places the duplicate into a new group,
// then applies a graphic style to the new groups items

if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var selected = doc.selection;
    var newGroup = doc.groupItems.add();
    newGroup.name = "NewGroup";
    newGroup.move(doc, ElementPlacement.PLACEATEND);

    var endIndex = selected.length;
    for (var i = 0; i < endIndex; i++) {
        if (selected[i].typename == "PathItem")
        selected[i].duplicate(newGroup, ElementPlacement.PLACEATEND);
    }

    for (i = 0; i < newGroup.pageItems.length; i++) {
        doc.graphicStyles[1].applyTo(newGroup.pageItems[i]);
    }
}
```
