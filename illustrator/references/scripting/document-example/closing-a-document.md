# Closing a document

```javascript
// Closes the active document without saving changes
if ( app.documents.length > 0 ) {
    var aiDocument = app.activeDocument;
    aiDocument.close( SaveOptions.DONOTSAVECHANGES );
    aiDocument = null;
}
```
