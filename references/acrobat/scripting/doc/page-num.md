# pageNum

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | No | No | All | Integer | R/W |

Reads or assigns which page of the document is current. Keep in mind that page values run from 0 when you set pageNum.

Example: Jump to the document's first page.

```javascript
this.pageNum = 0;
```

Move the document forward by one page.

```javascript
this.pageNum++;
```
