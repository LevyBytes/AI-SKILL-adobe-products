# printerName

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | String | R/W |

Holds the name of the printer you want output sent to. Support for this property is a Windows capability, and as of version 9.0 a Mac OS one as well.

Out of the box, printerName carries the default printer's name. Setting it to an empty string routes output to whichever printer Acrobat/Adobe Reader used most recently in this session, or else the System Default printer when none was. Should printerName be empty while fileName holds text, the open document gets written out as a PostScript file. Refer to example 2 further down.

See also app. printerNames.

Example 1: Set the printer, and print.

```javascript
var pp = this.getPrintParams();
pp.printerName = "hp officejet d series";
this.print(pp);
```

Example 2: Save the current document as a PostScript file.

```javascript
var pp = this.getPrintParams();
pp.fileName = "/c/temp/myDoc.ps";
pp.printerName = "";
this.print(pp);
```
