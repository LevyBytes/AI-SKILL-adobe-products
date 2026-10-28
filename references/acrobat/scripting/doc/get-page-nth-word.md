# getPageNthWord

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | All |

Returns the page's n th word.

See also getPageNumWords and selectPageNthWord.

Note

Set the document security to block content extraction and this method raises an exception.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | (optional) A 0-based page index; left unset it falls back to 0, meaning the document's opening page. |
| nWord | (optional) A 0-based word index; absent a value it defaults to 0, namely the page's first word. |
| bStrip | (optional) Controls whether white space and punctuation are pulled off the word ahead of its return. Its default is true. |

Returns

That page's n th word.

Example: See spell.checkWord for an example.
