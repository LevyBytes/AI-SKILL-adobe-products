# pageSubset

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Integer | R/W |

Choose whether printing covers even pages, odd pages, or every page. You assign pageSubset by way of the constants subsets object. By default this is all.

constants.subsets Object

| Property | Description |
| --- | --- |
| all | Prints every page within the chosen page range. |
| even | Restricts output to even pages only. Here page labels carry no weight; the file is handled as though its pages ran 1 through n, with n being the page count. |
| odd | Restricts output to odd pages only. |

Example:

```javascript
var pp = this.getPrintParams();
pp.pageSubset = pp.constants.subsets.even;
this.print(pp);
```
