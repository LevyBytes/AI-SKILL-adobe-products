# superscript

| Type | Access |
| --- | --- |
| Boolean | R/W |

Controls superscript text. When true, the text renders superscript — shrunk in point size and lifted above the baseline. The default is false.

Example: Push rich text into a rich text field by combining several of these properties. The Field object richValue property covers further detail and examples.

```javascript
var f = this.getField("myRichField");

// Create an array to hold the Span objects
var spans = new Array();

// Each Span object is an object, so we must create one
spans[0] = new Object();
spans[0].alignment = "center";
spans[0].text = "The answer is x";

spans[1] = new Object();
spans[1].text = "2/3";
spans[1].superscript = true;

spans[2] = new Object();
spans[2].superscript = false;
spans[2].text = ".  ";

spans[3] = new Object();
spans[3].underline = true;
spans[3].text = "Did you get it right?";
spans[3].fontStyle = "italic";
spans[3].textColor = color.red;

// Now assign our array of Span objects to the field using

// field.richValue
f.richValue = spans;
```
