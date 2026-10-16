# XFAForeground

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | All | Boolean | R |

Comes back true for a document that is an XFA Foreground form, and false in every other case.

From version 8.0 on, a PDF file can be brought into LiveCycle Designer as artwork. Whatever graphical richness that PDF holds then serves as a backdrop onto which form fields get dropped within LiveCycle Designer. The XFAForeground property tells you whether the PDF came about this way: a true means it was imported into LiveCycle Designer as artwork and afterward saved there.

Example: This script checks whether the active document is an XFA Foreground form, that is, one produced by importing a PDF into LiveCycle Designer and saving it.

```javascript
if ( this.XFAForeground )
    console.println("This is an XFA Foreground form.");
```
