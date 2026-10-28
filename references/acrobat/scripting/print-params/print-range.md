# printRange

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 11.0 | No | No | All | Array | R/W |

Reach for the printRange property when you need several batches of pages printed, each spanning its own range. Supply the argument as an array of (nStart, nEnd) pairs, in which nStart and nEnd are 0-based page indices into the PDF.

Exceptions

ESErrorInvalidArgs is raised under these conditions:

the supplied parameters do not follow the required format

either startPage or endPage drops below 0.

either startPage or endPage reaches or exceeds totalPages within the PDF.

Example 1:

```javascript
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.full;
pp.printRange=[[1, 1], [3, 4]];
this.print(pp);
```
