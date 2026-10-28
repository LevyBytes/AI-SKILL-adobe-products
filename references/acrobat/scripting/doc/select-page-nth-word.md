# selectPageNthWord

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Switches the current page number and highlights the word you specify on that page.

See also getPageNthWord, getPageNthWordQuads, and getPageNumWords.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | (optional) The 0-based index of the page to act on. Defaults to 0, the document's first page. |
| nWord | (optional) The 0-based index of the word to fetch. Defaults to 0, the first word on the page. |
| bScroll | (optional) Controls whether a selected word that isn't currently visible gets scrolled into view. Defaults to true. |

Example: fetch a specific word and select it.

```javascript
// Get the 20th word on page 2 (page 1, 0-based)
var cWord = this.getPageNthWord(1, 20);
// Select that word (highlight) for the user to see, and change the page if

 // necessary.
this.selectPageNthWord(1, 20);
```
