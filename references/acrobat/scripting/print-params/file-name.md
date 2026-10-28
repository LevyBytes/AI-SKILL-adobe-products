# fileName

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | String | R/W |

A device-independent path naming a file that receives the output rather than the printer (Print to File). That path may be given relative to wherever the current document sits. Should the interaction level (refer to interactive) be full while printing to a file, it gets dropped to automatic.

Its default is an empty string, meaning no file name.

Note

Output written to a file comes out in a form the printer expects — Postscript or GDI commands, for instance.

Give printerName an empty string together with a fileName, and the current document gets written out as a PostScript file.

Example:

```javascript
var pp = this.getPrintParams();
pp.fileName = "/c/print/myDoc.prn";
this.print(pp);
```

Example 2: Save the current document as a PostScript file.

```javascript
var pp = this.getPrintParams();
pp.fileName = "/c/temp/myDoc.ps";
pp.printerName = "";
this.print(pp);
```
