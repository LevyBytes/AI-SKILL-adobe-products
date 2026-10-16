# getPrintParams

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Returns a PrintParams object that mirrors the default print settings. Consult the print method too — these days a PrintParams object is the argument it expects.

Returns

A PrintParams object.

Example: Get the PrintParams object of the default printer.

```javascript
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.automatic;
this.print(pp); // Print
```
