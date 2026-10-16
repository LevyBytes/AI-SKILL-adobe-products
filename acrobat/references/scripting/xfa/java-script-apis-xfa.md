# JavaScript APIs — XFA

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.02 | No | No | All |

Through the XFA object you reach the XFA appModel container. The JavaScript Developer Guide goes into more depth on this.

Both the XMLData.parse and XMLData.applyXPath methods hand back an XFA object.

Example: The code below works out whether the PDF holds Acrobat forms or instead came from LiveCycle Designer with XML forms. You can run it from the console or as a batch sequence; run as a batch sequence, it sorts every selected document into an XML form (dynamic or static) or an Acrobat form.

```javascript
// This script assumes you are using Acrobat 8.0.
console.println("Document name: " + this.documentFileName);
// The xfa object is undefined in an Acrobat form.
if ( typeof xfa == "object" ) {
    if ( this.dynamicXFAForm )
        console.println("  This is a dynamic XML form.");
    else
        console.println("  This is a static XML form.");
    if ( this.XFAForeground )
        console.println("  This document has imported artwork");
}
else console.println("  This is an Acrobat form.");
```
