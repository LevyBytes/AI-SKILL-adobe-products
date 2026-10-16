# richValue

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | F | Array of Span objects | R/W |

This property holds both the text and the formatting of a rich text field. On any field type that isn't rich text, it comes back undefined. Its rich text content takes the form of an array of Span objects that carry the field's text and formatting.

Fields

rich text

Tied in here are richText, defaultStyle, event. richValue, event. richChange, event. richChangeEx, the Annotation object richContents property, and the Span object.

Example 1: Convert every bold run into red underlined text.

```javascript
var f = this.getField("Text1");
var spans = f.richValue;
for ( var i = 0; i < spans.length; i++ )
{
    if( spans[i].fontWeight >= 700 )
    {
        spans[i].textColor = color.red;
        spans[i].underline = true;
    }
}
f.richValue = spans;
```

Example

2

Build a text field, flag it for rich text formatting, and drop rich text into it.

```javascript
var myDoc = app.newDoc();                  // Create a blank doc
var Bbox = myDoc.getPageBox("Crop");       // Get crop box
var inch = 72;

// Add a text field at the top of the document
var f = myDoc.addField("Text1", "text", 0,
    [72, Bbox[1]-inch, Bbox[2]-inch, Bbox[1]-2*inch ] );
// Add some attributes to this text field
f.strokeColor = color.black;
f.richText = true;                         // Rich text
f.multiline = true;                        // Multiline

// Now build up an array of Span objects
var spans = new Array();
spans[0] = new Object();
spans[0].text = "Attention:r";
spans[0].textColor = color.blue;
spans[0].textSize = 18;

spans[1] = new Object();
spans[1].text = "Adobe Acrobat 6.0r";
spans[1].textColor = color.red;
spans[1].textSize = 20;
spans[1].alignment = "center";

spans[2] = new Object();
spans[2].text = "will soon be here!";
spans[2].textColor = color.green;
spans[2].fontStyle = "italic";
spans[2].underline = true;
spans[2].alignment = "right";

// Now give the rich field a rich value
f.richValue = spans;
```
