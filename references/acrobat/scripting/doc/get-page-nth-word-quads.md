# getPageNthWordQuads

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | All |

Returns the quads list belonging to the page's n th word. Text markup, underline, strikeout, highlight and squiggly annotations can be built using the Annotation object's quads property. See also getPageNthWord, getPageNumWords, and selectPageNthWord.

Note

Set the document security to block content extraction and this method raises an exception.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | (optional) A 0-based page index; left unset it falls back to 0, meaning the document's opening page. |
| nWord | (optional) A 0-based word index; absent a value it defaults to 0, namely the page's first word. |

Returns

The quads list for the n th word on the page.

Example: Put an underline beneath the fifth word sitting on a document's second page.

```javascript
var annot = this.addAnnot({
    page: 1,
    type: "Underline",
    quads:  this.getPageNthWordQuads(1, 4),
    author: "A. C. Robat",
    contents: "Fifth word on second page"
});
```

See spell. checkWord for an additional example.
