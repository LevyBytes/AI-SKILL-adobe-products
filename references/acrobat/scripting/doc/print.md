# print

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | Yes | All |

Sends to the printer either all the document's pages or a chosen count of them.

From Acrobat 6.0 onward, printing can lean on the settings held in a PrintParams object in place of the other parameters. The permanent print settings stay untouched.

Note

(Acrobat 6.0) Printing to a file demands a safe path (see Safe path). An existing file will not be overwritten by the print method.

(Acrobat 7.0) Only batch, console, and menu events can drive non-interactive printing. You make printing non-interactive by setting bUI to false or by switching the interactive property to silent, like so:

```javascript
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.silent;
```

Step outside batch, console, and menu events and both bUI and interactive lose their effect — a print dialog box always comes up.

See also Privileged context.

Note

On a Windows platform, the file name has to end in either a .ps or a .prn extension (case insensitive). On top of that, the print method refuses to drop a file straight into the root directory, the windows directory, or the windows system directory.

Break any of the security restrictions above and an InvalidArgsError (see Error object) exception fires while print fails.

Parameters

| Parameter | Description |
| --- | --- |
| bUI | (optional) With true the default, a UI comes up so the user can supply printing details and OK the action. |
| nStart | (optional) A 0-based index marking where an inclusive page range begins. Leave both nStart and nEnd unspecified and every page in the document prints. Give only nStart and the range collapses to the single page nStart names. Use nStart and nEnd together and bUI has to be false. |
| nEnd | (optional) A 0-based index marking where an inclusive page range ends. Leave both nStart and nEnd unspecified and every page in the document prints. Give only nEnd and the range runs from 0 through nEnd. Use nStart and nEnd together and bUI has to be false. |
| bSilent | (optional) Set it true to keep the cancel dialog box hidden while the document prints. The default is false. |
| bShrinkToFit | (optional, Acrobat 5.0) Set it true and the page shrinks, where needed, to fit inside the printed page's imageable area. Set it false and it does not. The default is false. |
| bPrintAsImage | (optional, Acrobat 5.0) Set it true to print pages as an image. The default is false. |
| bReverse | (optional, Acrobat 5.0) Set it true to print from nEnd back to nStart. The default is false. |
| bAnnotations | (optional, Acrobat 5.0) With true the default, annotations get printed. |
| printParams | (optional, Acrobat 6.0) The PrintParams object holding the settings to print with. Pass this parameter and every other one is disregarded. |

Example 1: Send the page in view to the printer.

```javascript
this.print(false, this.pageNum, this.pageNum);
// Print a file silently
this.print({bUI: false, bSilent: true, bShrinkToFit: true});
```

Example 2 (Acrobat 6.0)

Print current document to a known printer.

```javascript
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.automatic;
pp.printerName = "hp officejet d series";
this.print(pp);
```

Note

Leave printerName as an empty string while fileName carries something, and the current document gets written to disk as a PostScript file.

Example 3 (Acrobat 6.0)

Write the document in play out to a PostScript file.

```javascript
var pp = this.getPrintParams();
pp.fileName = "/c/temp/myDoc.ps";
pp.printerName = "";
this.print(pp);
```
