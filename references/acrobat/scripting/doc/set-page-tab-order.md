# setPageTabOrder

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | No | Not allowed in Reader: Only available in Acrobat products |

Defines how the form fields on a page tab. You can order tabbing by row, by column, or by structure.

Open a PDF 1.4 document in Acrobat 6.0 and field tabbing follows the same order it would under Acrobat 5.0. The reverse holds too: a PDF 1.5 document opened in Acrobat 5.0 tabs through fields just as it would in Acrobat 6.0.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | The 0-based index of the page number whose tabbing order is being set. |
| cOrder | Which order to use. Values are: rows columns structure |

Example: make every page tab through its fields by rows.

```javascript
for (var i = 0; i < this.numPages; i++)
    this.setPageTabOrder(i, "rows");
```
