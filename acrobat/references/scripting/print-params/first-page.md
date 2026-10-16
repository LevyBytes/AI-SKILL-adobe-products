# firstPage

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Integer | R/W |

Which page of the document printing starts at. Counting is 0-based, so every document's opening page is 0 no matter what its page-number labels say. The default is 0, and any value beyond the document's range is taken as 0.

Consult lastPage as well.

Example:

```javascript
var pp = this.getPrintParams();
pp.firstPage = 0;
pp.lastPage = 9;
this.print(pp);
```
