# Layers

Use `Layers` as the document-layer collection: it provides array-style access to the application's layer list for a document, and it also retains familiar ExtendScript methods such as `getByName`.

```javascript
// Iterate through all the top layers of frontmost document
app.activeDocument.layers.forEach((h) => console.log(h.name));
```
