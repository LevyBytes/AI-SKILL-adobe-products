# nUpPageOrder

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 7.0 | No | No | All | Integer | R/W |

With several pages per sheet, the nUpPageOrder property dictates the arrangement of those pages on the sheet. You assign its value from the constants nUpPageOrders object. The default is Horizontal, though nUpPageOrder defers to the print settings.

Setting pageHandling to nUp is what gives you Multiple Pages Per Sheet.

constants.nUpPageOrders Object

| Property | Description |
| --- | --- |
| Horizontal | Pages run left to right, then top to bottom. |
| HorizontalReversed | Pages run right to left, then top to bottom. |
| Vertical | Pages run top to bottom, then left to right. |

Example: Lay this document out several pages to a sheet, supply the parameters, and print.

```javascript
pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.nUp;
pp.nUpPageOrders = pp.constants.nUpPageOrders.Horizontal;
pp.nUpNumPagesH = 2;
pp.nUpNumPagesV = 2;
pp.nUpPageBorder=true;
this.print(pp);
```
