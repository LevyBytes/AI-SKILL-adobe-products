# DuplexType

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | All | Integer | R/W |

Chooses among simplex, duplex long-edge feed, and duplex short-edge feed for the print job's duplex mode. Under the Advanced tab of the Document Properties dialog box this surfaces as DuplexMode.

constants.duplexTypes Object

You reach the duplex choices via the constants.duplexType object, whose properties are tabulated below.

| Property | Description |
| --- | --- |
| Simplex | Prints on one side of the paper. |
| DuplexFlipLongEdge | Prints both faces of the sheet, with the paper turning over along its long edge. |
| DuplexFlipShortEdge | Prints both faces of the sheet, with the paper turning over along its short edge. |

Whenever DuplexFlipLongEdge or DuplexFlipShortEdge is in play, the chosen printer needs to support duplex printing.

Example: Switch the job to short-edge-feed duplex, then print it.

```javascript
var pp = this.getPrintParams();
pp.DuplexType = pp.constants.duplexTypes.DuplexFlipShortEdge;
this.print(pp);
```
