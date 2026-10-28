# requiresFullSave

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 7.0 | No | No | All | Boolean | R |

Evaluates to true when the document still needs a full save, the case for ones that are temporary or freshly created. If not, it comes back false.

Example:

```javascript
var oDoc = app.newDoc();
console.println("It is " + oDoc.requiresFullSave
    + " that this document requires a full save.");
```
