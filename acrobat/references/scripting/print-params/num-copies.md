# NumCopies

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | All | Integer | R/W |

Establishes how many copies this print job turns out.

Example: Configure the job for two-copy duplex output.

```javascript
var pp = this.getPrintParams();
pp.DuplexType = pp.constants.duplexTypes.DuplexFlipShortEdge;
pp.NumCopies = 2;
this.print(pp);
```
