# movePage

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader |

Shifts a page to another spot within the document.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | (optional) The 0-based index of whichever page gets moved. It defaults to 0. |
| nAfter | (optional) The 0-based index of the page that the named page gets moved after. Pass -1 to shift the page ahead of the document's first page. The default lands it at the document's last page. |

Example: Flip the document's pages into reverse order.

```javascript
for (i = this.numPages - 1; i >= 0; i--) this.movePage(i);
```
