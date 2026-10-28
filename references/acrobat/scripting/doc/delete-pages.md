# deletePages

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Requires forms rights |

Removes pages from the document. When neither endpoint of the range is given, only the first page (page 0) goes away. Compare insertPages, extractPages, and replacePages.

Note

A document must always retain at least one page, so deleting every page is not possible.

(Acrobat 6.0): From release 6.0 forward, spawned pages can be removed by this method from inside Adobe Reader whenever the document carries enabled forms usage rights.

Parameters

| Parameter | Description |
| --- | --- |
| nStart | (optional) A zero-based index naming the opening page of the deletion range. It defaults to 0 — the document’s first page. |
| nEnd | (optional) The closing page of the deletion range. Leave nEnd out and removal touches only the page that nStart points to. |

Example: Remove the pages spanning index 1 to 3 (base 0), endpoints included.

```javascript
this.deletePages({nStart: 1, nEnd: 3});
```
