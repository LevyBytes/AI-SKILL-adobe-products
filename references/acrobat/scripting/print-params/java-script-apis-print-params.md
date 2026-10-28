# JavaScript APIs - PrintParams

Here is an all-purpose object governing the print settings that apply to any document sent to print through JavaScript. Altering it leaves the user preferences untouched and makes no lasting modification to the document.

Within Acrobat 6.0, a PrintParams object is the argument the Doc print method expects. Call the Doc getPrintParams method to acquire one, then adjust the object it returns.

A good many PrintParams properties expect integer constants for their values, and you get at those through the constants property. As an example:

```javascript
// Get the printParams object of the default printer
var pp = this.getPrintParams();
// Set some properties
pp.interactive = pp.constants.interactionLevel.automatic;
// Print
this.print(pp);
```

Every one of the constants properties is an integer that is read-only.
