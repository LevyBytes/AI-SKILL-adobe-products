# collection

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 9.0 | No | No | All | Collection object or a null object if there is no collection in this PDF. | R |

This property holds a collection object representing the collection inside the PDF. You adjust the collection's properties by way of that collection object.

Note

There is no way to convert a PDF file into a PDF collection, and a document's PDF-collection status cannot be stripped away.

To make a fresh collection, reach for app.newCollection.

```javascript
if (this.collection) {
   var collection = this.collection;
   // Do something with the collection...
}
```
