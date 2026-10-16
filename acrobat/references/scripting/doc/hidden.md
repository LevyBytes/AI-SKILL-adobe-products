# hidden

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 7.0 | No | No | All | Boolean | R |

Evaluates to true when the window holding the document is not shown. A window can end up hidden because, say, batch processing is acting on it, or because it was deliberately launched without a visible frame. Both the openDataObject and app.openDoc methods let you open a document whose window stays hidden.

Example: Launch a document, then confirm whether its window is hidden.

```javascript
oDoc = app.openDoc({
    cPath:"/C/myDocs/myHidden.pdf",
    bHidden: true
});
console.println("It is " + oDoc.hidden + " that this document hidden.");
oDoc.closeDoc();
```
