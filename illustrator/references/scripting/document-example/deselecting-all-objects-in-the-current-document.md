# Deselecting all objects in the current document

Note

Use activeDocument or documents[0 to refer to the foremost document.

```javascript
var docRef = activeDocument;
docRef.selection = null;
```
