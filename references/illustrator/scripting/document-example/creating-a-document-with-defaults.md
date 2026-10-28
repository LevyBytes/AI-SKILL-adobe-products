# Creating a document with defaults

```javascript
// Creates a new document if none exists then sets fill and stroke defaults to true
var doc;
if (app.documents.length == 0) {
    doc = app.documents.add();
} else {
    doc = app.activeDocument;
}

doc.defaultFilled = true;
doc.defaultStroked = true;
```
