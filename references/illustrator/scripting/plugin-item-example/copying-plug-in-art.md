# Copying plug-in art

```javascript
// Creates new plug-in art by copying an existing plug-in art item
if (app.documents.length > 0 && app.activeDocument.pluginItems.length > 0) {
    var doc = app.activeDocument;
    var pluginArt = doc.pluginItems[0];
    pluginArt.duplicate(pluginArt.parent, ElementPlacement.PLACEATBEGINNING);
}
```
