# getPageNumWords

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Reports the page's total word count.

See also getPageNthWord, getPageNthWordQuads, and selectPageNthWord.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | (optional) A 0-based page index; left unset it falls back to 0, meaning the document's opening page. |

Returns

The number of words on the page.

Example: Tally up every word across a document

```javascript
var cnt=0;
for (var p = 0; p < this.numPages; p++)
    cnt += getPageNumWords(p);
console.println("There are " + cnt + " words in this doc.");
```

For one more example, look to spell. in checkWord.
