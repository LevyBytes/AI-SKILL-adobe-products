# gotoNamedDest

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Jumps to a named destination living inside the PDF document. The PDF Reference covers named destinations and the means of creating them.

Parameters

| Parameter | Description |
| --- | --- |
| cName | What the destination inside a document is named. |

Example: Crack open a document, then jump to a named destination inside it. Here the document that openDoc pulls up is taken to be disclosed.

```javascript
// Open a new document

 var myNovelDoc = app.openDoc("/c/fiction/myNovel.pdf");
// Go to a destination in this new doc
myNovelDoc.gotoNamedDest("chapter5");
// Close the old document
this.closeDoc();
```

For a leaner way to pull off this same job, look at Example 6 (Acrobat 8.0) right after openDoc.
