# spansToXML

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Turns an array of Span objects into an XML(XFA) String of the kind documented in the PDF Reference.

Parameters

| Parameter | Description |
| --- | --- |
| An array of Span objects | The Span-object array that gets turned into an XML string. |

Returns

String

Example: Read the value out of a rich text field, recolor every bit of its text blue, turn it into an XML string, and print that to the console.

```javascript
var f = getField("Text1");
var spans = f.richValue;
for(var index = 0; index < spans.length; index++)
    spans[index].textColor = color.blue;
console.println(util.spansToXML(spans));
```
