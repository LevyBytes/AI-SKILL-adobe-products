# printerNames

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array of Strings | R |

The set of printers on hand. Each entry is valid for the printerName property on the PrintParams object, and when the system has no printers installed you get an empty array back.

Example: Print out a listing of available printers:

```javascript
var l = app.printerNames.length
for ( var i = 0; i < l; i++)
    console.println("(" + (i+1) + ") " + app.printerNames[i]);
```
