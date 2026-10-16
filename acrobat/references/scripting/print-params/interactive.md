# interactive

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Integer | R/W |

Sets how much the user interacts with the print job. You assign this property's value from the constants interactionLevel object. full is the default.

Note

(Acrobat 7.0) Printing without interaction is permitted only during batch, console, and menu events. You make printing non-interactive either by passing bUI as false to the Doc print method or by switching the interactive property to silent, as in:

```javascript
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.silent;
```

Anywhere outside batch, console, and menu events, both bUI and interactive go unheeded, and a print dialog box is always shown.

Refer to Privileged context as well.

constants.interactionLevel Object

| Property | Description |
| --- | --- |
| automatic | Nothing prompts with a print dialog box. While the job runs, a progress monitor and cancel dialog box show up, then clear themselves once printing wraps up. |
| full | Shows the print dialog box, which lets the user adjust print settings and obliges them to click OK before going on. While the job runs, a progress monitor and cancel dialog box show up, then clear themselves once printing wraps up. |
| silent | Nothing prompts with a print dialog box. No progress or cancel dialog box appears either. Not even error messages are shown. |

Example:

```javascript
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.automatic;
pp.printerName = "Adobe PDF";
this.print(pp);
```
