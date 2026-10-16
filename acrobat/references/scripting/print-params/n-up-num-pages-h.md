# nUpNumPagesH

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 7.0 | No | No | All | Integer | R/W |

How many pages to arrange across the horizontal axis under Multiple Pages Per Sheet printing. Although the default is 2, nUpNumPagesH defers to the print settings.

Setting pageHandling to nUp is what gives you Multiple Pages Per Sheet.

Example: Run this document through Multiple Pages Per Sheet output, configure the parameters, and print.

```javascript
pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.nUp;
pp.nUpPageOrders = pp.constants.nUpPageOrders.Vertical;
pp.nUpNumPagesH = 3;
pp.nUpNumPagesV = 3;
pp.nUpPageBorder=true;
pp.nUpAutoRotate=true;
this.print(pp);
```
