# numPages

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | No | No | All | Integer | R |

The count of pages the document holds.

Example 1:

```javascript
console.println("There are " + this.numPages + " in this document");
```

Example 2: Remove the document's final page. Because numbering starts at 0, that last page sits at this.numPages - 1.

```javascript
this.deletePages({ nStart: this.numPages - 1 });
```
