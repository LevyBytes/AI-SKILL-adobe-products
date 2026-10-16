# setFocus

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.05 | No | No | All |

Hands keyboard focus to this field. Doing so may flip the user to a different page or scroll the view toward a new spot in the document. The document holding the field is also raised to the front whenever it is not already there.

See also bringToFront.

Example: locate a particular open document and then place focus on the field you care about. Because the script relies on app.activeDocs, each document's disclosed property has to be true, or else the script must run inside console, batch or menu events.

```javascript
var d = app.activeDocs;
for (var i = 0; i < d.length; i++) {
    if (d[i].info.Title == "Response Document") {
        d[i].getField("name").value="Enter your name here: "
        // also brings the doc to front.
        d[i].getField("name").setFocus();
        break;
    }
}
```
