# comb

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | F | Boolean | R/W |

Set this true and the field background renders as a row of boxes — one per character in the field's value — with each character of the content drawn inside its own box. How many boxes appear is taken from the charLimit property.

Only text fields are affected. The setter also raises if multiline, password, or fileSelect is set on the field as well. One side effect of setting this property is that doNotScroll gets set too.

Fields

text

Example: place a comb field at the top-left of a freshly made document.

```javascript
var myDoc = app.newDoc();                 // Create a blank doc
var Bbox = myDoc.getPageBox("Crop");      // Get crop box
var inch = 72;

// Add a text field at the top of the document
var f = myDoc.addField("Name.Last", "text", 0,
    [ inch, Bbox[1]-inch, 3*inch, Bbox[1]- inch - 14 ] );
// Add some attributes to this text field
f.strokeColor = color.black;
f.textColor = color.blue;
f.fillColor = ["RGB",1,0.66,0.75];

f.comb = true;                            // Declare this is a comb field
f.charLimit = 10;                         // Max number of characters
```
