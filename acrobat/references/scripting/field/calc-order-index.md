# calcOrderIndex

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | Integer | R/W |

Alters the order in which the document's fields are calculated. As a computable text or combo box field joins a document, its name gets appended to the calculation order array — and that array dictates the sequence in which fields are calculated. The calcOrderIndex property behaves much like the Calculate tab of the Acrobat Form tool.

Fields

combobox, text

Example:

```javascript
var a = this.getField("newItem");
var b = this.getField("oldItem");
a.calcOrderIndex = b.calcOrderIndex + 1;
```

Here "newItem" was added to the document after "oldItem". By adjusting the calcOrderIndex property of "newItem", the script forces it to be calculated ahead of "oldItem".
