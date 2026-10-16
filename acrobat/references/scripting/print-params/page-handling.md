# pageHandling

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Integer | R/W |

Accepts one of seven values drawn from the constants handling object. An illegal value is taken as shrink, which is also the default.

constants.handling Object

| Property | Reader | Description |
| --- | --- | --- |
| none |  | No scaling gets applied to the page. |
| fit |  | Pages grow or shrink so they fit the printer's paper. |
| shrink |  | Small pages print at their size, while oversized pages shrink down to fit the printer's paper. |
| tileAll | No | Every page prints according to the tiling settings. By raising the tileScale property above 1 you can blow a normal-sized page up into a poster. |
| tileLarge | No | Small or normal pages print at their original size, whereas large pages spread across several sheets. |
| nUp |  | (Version 7.0) Pages are rescaled so that each printer page carries several of them.<br><br>The properties tied to Multiple Pages Per Sheet printing are nUpAutoRotate, nUpNumPagesH, nUpNumPagesV, nUpPageBorder and nUpPageOrder. |
| booklet |  | (Version 8.0) Lays several pages on one sheet in whatever sequence reads correctly once folded. You set the parameters for booklet printing through the booklet object's properties. |

Example 1:

```javascript
var pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.shrink;
this.print(pp);
```

Example 2: Send this document to print with several pages on each sheet after configuring the parameters.

```javascript
pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.nUp;
pp.nUpPageOrders = pp.constants.nUpPageOrders.Horizontal;
pp.nUpNumPagesH = 2;
pp.nUpNumPagesV = 2;
pp.nUpPageBorder=true;
this.print(pp);
```

Example 3 (Version 8.0)

Print document as a booklet, taking all the default settings.

```javascript
var pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.booklet;
this.print(pp);
```
